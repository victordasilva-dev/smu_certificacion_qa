# B2C-29 APP - Home configurable desde Page Designer (Android) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-29 APP |
| Última actualización | 2026-10-16 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc v1.0.7 (DEV) |
| Dispositivo Android | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-29 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 12 |
| Aprobado | 3 |
| Fuera de alcance | 3 |
| Bloqueado | 2 |
| **Total** | **20** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-16 | 20 | TC-B2C29-APP-001, TC-B2C29-APP-002, TC-B2C29-APP-003, TC-B2C29-APP-004, TC-B2C29-APP-005, TC-B2C29-APP-006, TC-B2C29-APP-007, TC-B2C29-APP-008, TC-B2C29-APP-009, TC-B2C29-APP-010, TC-B2C29-APP-011, TC-B2C29-APP-012, TC-B2C29-APP-013, TC-B2C29-APP-014, TC-B2C29-APP-015, TC-B2C29-APP-016, TC-B2C29-APP-017, TC-B2C29-APP-018, TC-B2C29-APP-019, TC-B2C29-APP-020 |

## Detalle por caso de prueba

### TC-B2C29-APP-001 - Verificar que la Home carga sin iniciar sesión y muestra los componentes de Page Designer [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Duración | 52.0 s |
| Spec | tests-app/B2C-29.spec.ts:30 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin sesión iniciada

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con los componentes configurados en Page Designer.
3. El usuario hace scroll hasta el final de la Home.

**Resultado esperado**

La Home carga sin pedir login y muestra todos los componentes configurados (banners, carruseles, colecciones).

**Resultado obtenido**

Como invitado (datos borrados) la Home carga sin pedir login y, de arriba abajo, muestra: carrusel de banners, 'Los más vendidos', Módulo Bomba con cuenta regresiva, 'Categorías destacadas', 'Cada día, una ocasión', 'Frescura y calidad', 'Prende la parrilla', 'Chocolates Milka', 'Nuestras marcas', 'Especial Bebidas', 'Contrata la membresía' y Términos y condiciones. Sin data de qué está publicado en Page Designer, se verificó la carga completa, no la lista exacta.

**Observación**

Como invitado (datos borrados) la Home carga sin pedir login y, de arriba abajo, muestra: carrusel de banners, 'Los más vendidos', Módulo Bomba con cuenta regresiva, 'Categorías destacadas', 'Cada día, una ocasión', 'Frescura y calidad', 'Prende la parrilla', 'Chocolates Milka', 'Nuestras marcas', 'Especial Bebidas', 'Contrata la membresía' y Términos y condiciones. Sin data de qué está publicado en Page Designer, se verificó la carga completa, no la lista exacta. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — home sin sesion](<B2C-29 APP Evidencias/TC-B2C29-APP-001-android-p02-home-sin-sesion.png>)

![Android · Paso 3 — final de la home](<B2C-29 APP Evidencias/TC-B2C29-APP-001-android-p03-final-de-la-home.png>)

![Estado final del caso](<B2C-29 APP Evidencias/TC-B2C29-APP-001-android.png>)

---

### TC-B2C29-APP-002 - Verificar que los componentes de la Home tienen padding lateral y los fondos ocupan todo el ancho [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Duración | 54.0 s |
| Spec | tests-app/B2C-29.spec.ts:47 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin sesión iniciada

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con los componentes configurados en Page Designer.
3. El usuario recorre la Home y revisa los bordes de cada componente.

**Resultado esperado**

Los componentes muestran padding lateral respecto del borde de la pantalla y los componentes con color de fondo tienen el fondo de extremo a extremo.

**Resultado obtenido**

Ningún texto del contenido queda a menos de 16 px del borde izquierdo (las vitrinas arrancan en x≈42 de 1080) y el fondo gris del Módulo Bomba va de extremo a extremo; las tarjetas que asoman por la derecha son el scroll horizontal de los carruseles.

**Observación**

Ningún texto del contenido queda a menos de 16 px del borde izquierdo (las vitrinas arrancan en x≈42 de 1080) y el fondo gris del Módulo Bomba va de extremo a extremo; las tarjetas que asoman por la derecha son el scroll horizontal de los carruseles. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — inicio de la home](<B2C-29 APP Evidencias/TC-B2C29-APP-002-android-p02-inicio-de-la-home.png>)

![Android · Paso 3 — componentes con fondo de color](<B2C-29 APP Evidencias/TC-B2C29-APP-002-android-p03-componentes-con-fondo-de-color.png>)

![Estado final del caso](<B2C-29 APP Evidencias/TC-B2C29-APP-002-android.png>)

---

### TC-B2C29-APP-003 - Verificar que la Home muestra todos los componentes configurados sin límite de cantidad ni de largo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Fuera de alcance |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin sesión iniciada
- La Home tiene publicados en Page Designer más componentes que la configuración estándar (ej. 20 o más)

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con los componentes configurados en Page Designer.
3. El usuario hace scroll hasta el final de la Home y cuenta los componentes.

**Resultado esperado**

Se muestran todos los componentes publicados en Page Designer, sin cortes ni límite de largo vertical.

**Resultado obtenido**

No se ejecutó.

**Observación**

TC que requiere publicar más componentes que la configuración estándar (20 o más) en Page Designer (Business Manager): fuera del alcance de la automatización de la app; se necesita acceso a BM para saber qué componentes están publicados y compararlos con la Home. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-004 - Verificar que el contenido publicado en Page Designer se ve sin reiniciar la App [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Fuera de alcance |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin sesión iniciada

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con los componentes configurados en Page Designer.
3. El usuario anota el primer banner de la Home.
4. Negocio publica en Page Designer un cambio en ese banner.
5. El usuario vuelve al Home desde otra pantalla, sin cerrar ni reiniciar la App.
6. El sistema muestra la Home con el contenido publicado.

**Resultado esperado**

La Home muestra el banner actualizado sin que el usuario haya reiniciado la App.

**Resultado obtenido**

No se ejecutó.

**Observación**

TC que requiere que Negocio publique un cambio en un banner en Page Designer (Business Manager): fuera del alcance de la automatización de la app; se necesita acceso a BM para publicar el cambio durante la corrida. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-005 - Verificar que un componente con error no se muestra y el resto de la Home carga normal [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Fuera de alcance |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin sesión iniciada
- Componente_Error está publicado en la Home con un error (ej. imagen con nombre incorrecto)

**Data utilizada**

v1.0.7, Componente_Error

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con los componentes configurados en Page Designer.
3. El usuario recorre la Home completa.

**Resultado esperado**

Componente_Error no se muestra, el resto de los componentes carga con normalidad y la Home no presenta errores ni cortes.

**Resultado obtenido**

No se ejecutó.

**Observación**

TC que requiere tener {COMPONENTE_CON_ERROR} ('Componente_Error') publicado con un error en Page Designer (Business Manager): fuera del alcance de la automatización de la app; se necesita acceso a BM para confirmar que está publicado y con qué error (desde la app su ausencia no se distingue de que no esté publicado). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-006 - Verificar que un componente programado aparece en su fecha y hora de inicio [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin sesión iniciada
- Modulo Bomba está configurado en Page Designer con inicio de vigencia 2026-09-01 00:00:00

**Data utilizada**

v1.0.7, Modulo Bomba, 2026-09-01 00:00:00

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga la Home sin Modulo Bomba antes de 2026-09-01 00:00:00.
3. El usuario vuelve a acceder a la Home después de 2026-09-01 00:00:00.
4. El sistema muestra Modulo Bomba en la Home.

**Resultado esperado**

Modulo Bomba no se muestra antes de 2026-09-01 00:00:00 y sí se muestra desde esa fecha y hora.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: el inicio de vigencia de {COMPONENTE_PROGRAMADO} ('Modulo Bomba') es {FECHA_INICIO_VIGENCIA} = 2026-09-01 00:00, ya pasado: no se puede observar la Home antes y después del inicio. Hoy (2026-10-16) el Módulo Bomba sí se muestra, con la cuenta regresiva en 57 días. Acción: reprogramar en Page Designer un inicio cercano a la ejecución o declarar un componente con inicio futuro próximo. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración 2026-10-16: Módulo Bomba visible con la cuenta regresiva (57 días)](<B2C-29 APP Evidencias/p2.png>)

---

### TC-B2C29-APP-007 - Verificar que un componente programado deja de mostrarse al cumplirse su fecha de fin [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin sesión iniciada
- Modulo Bomba está configurado en Page Designer con fin de vigencia 2026-12-12 00:00:00

**Data utilizada**

v1.0.7, Modulo Bomba, 2026-12-12 00:00:00

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga la Home con Modulo Bomba antes de 2026-12-12 00:00:00.
3. El usuario vuelve a acceder a la Home después de 2026-12-12 00:00:00.
4. El sistema carga la Home sin Modulo Bomba.

**Resultado esperado**

Modulo Bomba se muestra hasta 2026-12-12 00:00:00 y deja de mostrarse después, sin dejar espacio vacío.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: el fin de vigencia de {COMPONENTE_PROGRAMADO} ('Modulo Bomba') es {FECHA_FIN_VIGENCIA} = 2026-12-12 00:00: no se puede observar que deje de mostrarse durante la corrida. Hoy (2026-10-16) se muestra, con la cuenta regresiva en 57 días (coherente con el 12-12). Acción: reprogramar un fin cercano a la ejecución o re-ejecutar después del 2026-12-12. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración 2026-10-16: Módulo Bomba visible con la cuenta regresiva (57 días)](<B2C-29 APP Evidencias/p2.png>)

---

### TC-B2C29-APP-008 - Verificar que un usuario del segmento configurado ve el componente segmentado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Bienvenida_Diamante está publicado con segmentación activa
- La cuenta vhchirinos+noaddress@avatar-global.com pertenece al segmento de Bienvenida_Diamante

**Data utilizada**

v1.0.7, Bienvenida_Diamante, contraseña de la cuenta, vhchirinos+noaddress@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App.
3. El usuario inicia sesión con la cuenta vhchirinos+noaddress@avatar-global.com.
4. El sistema autentica al usuario y muestra el Home de la App.

**Resultado esperado**

La Home muestra Bienvenida_Diamante.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: la cuenta declarada ({COMPRADOR_SEGMENTO_USER}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-009 - Verificar que un usuario fuera del segmento no ve el componente y no queda espacio reservado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Bienvenida_Diamante está publicado con segmentación activa
- La cuenta vhchirinos+segundo@avatar-global.com no pertenece al segmento de Bienvenida_Diamante

**Data utilizada**

v1.0.7, Bienvenida_Diamante, contraseña de la cuenta, vhchirinos+segundo@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App.
3. El usuario inicia sesión con la cuenta vhchirinos+segundo@avatar-global.com.
4. El sistema autentica al usuario y muestra el Home de la App.

**Resultado esperado**

La Home no muestra Bienvenida_Diamante y el componente siguiente aparece a continuación del anterior, sin espacio vacío.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: la cuenta declarada ({COMPRADOR_FUERA_SEGMENTO_USER}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-010 - Verificar que el carrusel My Usuals muestra los productos frecuentes del usuario [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta {COMPRADOR_CON_FRECUENTES_USER} tiene productos frecuentes registrados

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta {COMPRADOR_CON_FRECUENTES_USER}.
4. El sistema autentica al usuario y muestra la Home con el carrusel de productos frecuentes.

**Resultado esperado**

La Home muestra el carrusel My Usuals con los productos frecuentes de la cuenta y el CTA "Ver todo".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: la cuenta declarada ({COMPRADOR_FRECUENTES_USER}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. Además la precondición y los pasos nombran {COMPRADOR_CON_FRECUENTES_USER}, que no existe en el Excel de data (la fila declara {COMPRADOR_FRECUENTES_USER}). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-011 - Verificar que "Ver todo" del carrusel My Usuals abre la colección completa [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta {COMPRADOR_CON_FRECUENTES_USER} tiene productos frecuentes registrados

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta {COMPRADOR_CON_FRECUENTES_USER}.
4. El sistema muestra la Home con el carrusel My Usuals.
5. El usuario toca "Ver todo" en el carrusel My Usuals.
6. El sistema abre la colección completa de My Usuals.

**Resultado esperado**

Se muestra la colección completa de productos frecuentes de la cuenta.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: la cuenta declarada ({COMPRADOR_FRECUENTES_USER}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. Además la precondición y los pasos nombran {COMPRADOR_CON_FRECUENTES_USER}, que no existe en el Excel de data (la fila declara {COMPRADOR_FRECUENTES_USER}). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-012 - Verificar que "Agregar" en el carrusel My Usuals suma el producto al carro [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta {COMPRADOR_CON_FRECUENTES_USER} tiene productos frecuentes registrados
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta {COMPRADOR_CON_FRECUENTES_USER}.
4. El sistema muestra la Home con el carrusel My Usuals.
5. El usuario anota el contador del carro y toca "Agregar" en un producto del carrusel.
6. El sistema agrega el producto al carro y muestra el stepper en ese producto.

**Resultado esperado**

El contador del carro aumenta en 1 y el producto del carrusel muestra el stepper con 1 unidad.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: la cuenta declarada ({COMPRADOR_FRECUENTES_USER}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. Además la precondición y los pasos nombran {COMPRADOR_CON_FRECUENTES_USER}, que no existe en el Excel de data (la fila declara {COMPRADOR_FRECUENTES_USER}). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-013 - Verificar que un usuario logueado sin productos frecuentes no ve el carrusel My Usuals [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta vhchirinos+noaddress@avatar-global.com no tiene productos frecuentes registrados

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+noaddress@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+noaddress@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home.

**Resultado esperado**

La Home no muestra el carrusel My Usuals ni deja espacio vacío en su lugar.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: la cuenta declarada ({COMPRADOR_SIN_FRECUENTES_USER}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-014 - Verificar que un usuario invitado no ve el carrusel My Usuals [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Duración | 49.0 s |
| Spec | tests-app/B2C-29.spec.ts:71 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin sesión iniciada

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con los componentes configurados en Page Designer.
3. El usuario recorre la Home completa.

**Resultado esperado**

La Home no muestra el carrusel My Usuals ni deja espacio vacío en su lugar.

**Resultado obtenido**

Como invitado, recorrida la Home completa hasta Términos y condiciones, no aparece ningún carrusel de productos frecuentes (My Usuals: 'frecuentes'/'My Usuals'/'Lo que más compras'). El título del carrusel en la app no se pudo confirmar con sesión (login por correo deshabilitado en v1.0.7).

**Observación**

Como invitado, recorrida la Home completa hasta Términos y condiciones, no aparece ningún carrusel de productos frecuentes (My Usuals: 'frecuentes'/'My Usuals'/'Lo que más compras'). El título del carrusel en la app no se pudo confirmar con sesión (login por correo deshabilitado en v1.0.7). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — home como invitado](<B2C-29 APP Evidencias/TC-B2C29-APP-014-android-p02-home-como-invitado.png>)

![Android · Paso 3 — final de la home sin my usuals](<B2C-29 APP Evidencias/TC-B2C29-APP-014-android-p03-final-de-la-home-sin-my-usuals.png>)

![Estado final del caso](<B2C-29 APP Evidencias/TC-B2C29-APP-014-android.png>)

---

### TC-B2C29-APP-015 - Verificar que al seleccionar un banner con link configurado se redirige al destino definido en Page Designer [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- En Page Designer, {COMPONENTE_CON_LINK} está publicado en la Home con el link de redirección {URL_DESTINO_COMPONENTE}

**Data utilizada**

v1.0.7, iOS, {COMPONENTE_CON_LINK}, {URL_DESTINO_COMPONENTE}, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario ubica {COMPONENTE_CON_LINK} en la Home.
4. El usuario toca {COMPONENTE_CON_LINK}.

**Resultado esperado**

El sistema navega a {URL_DESTINO_COMPONENTE} (misma pestaña/pantalla) y la página de destino carga completa, sin errores.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: la cuenta declarada ({USER_AUTH_001}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. Además {COMPONENTE_CON_LINK} y {URL_DESTINO_COMPONENTE} no tienen fila en el Excel de data. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-016 - Verificar que un componente sin link configurado no redirige ni genera error al seleccionarlo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- En Page Designer, {COMPONENTE_SIN_LINK} está publicado en la Home sin link de redirección

**Data utilizada**

v1.0.7, iOS, {COMPONENTE_SIN_LINK}, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario toca {COMPONENTE_SIN_LINK}.
4. El usuario revisa la pantalla.

**Resultado esperado**

El usuario permanece en la Home: no hay navegación, no se abre una página en blanco ni de error y el resto de los componentes sigue visible y operativo.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: la cuenta declarada ({USER_AUTH_001}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. Además {COMPONENTE_SIN_LINK} no tiene fila en el Excel de data. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-017 - Verificar que un componente con link incorrecto lleva a la página de no encontrado del sitio sin romper la navegación [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- En Page Designer, {COMPONENTE_LINK_INVALIDO} está publicado en la Home con un link a una URL inexistente del sitio

**Data utilizada**

v1.0.7, iOS, {COMPONENTE_LINK_INVALIDO}, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario toca {COMPONENTE_LINK_INVALIDO}.
4. El usuario revisa la pantalla resultante.
5. El usuario vuelve a la Home.

**Resultado esperado**

Se muestra la página de "no encontrado" del sitio (con header y navegación disponibles), no una pantalla en blanco ni un error técnico; al volver, la Home carga con normalidad.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: la cuenta declarada ({USER_AUTH_001}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. Además {COMPONENTE_LINK_INVALIDO} no tiene fila en el Excel de data. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-018 - Verificar que mientras carga la Home se muestra el skeleton y luego se reemplaza por los componentes [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- {HERRAMIENTA_PROXY_APP} configurado para simular una conexión lenta (throttling)

**Data utilizada**

v1.0.7, iOS, {HERRAMIENTA_PROXY_APP}, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario observa la Home mientras carga.
3. El usuario espera a que termine la carga.

**Resultado esperado**

Mientras carga se muestran placeholders tipo skeleton (bloques grises) en lugar de los componentes; al terminar, cada skeleton se reemplaza por su componente real, sin pantallas en blanco ni mensajes de error.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: la cuenta declarada ({USER_AUTH_001}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. Además {HERRAMIENTA_PROXY_APP} está en TBD. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-019 - Verificar que un componente segmentado para usuarios logueados solo se muestra con sesión iniciada [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- En Page Designer, {COMPONENTE_SEGMENTO_LOGUEADO} está publicado en la Home con segmentación por estado de sesión (solo logueados)

**Data utilizada**

v1.0.7, iOS, {COMPONENTE_SEGMENTO_LOGUEADO}, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario revisa si se muestra {COMPONENTE_SEGMENTO_LOGUEADO}.
4. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com y vuelve a la Home.
5. El usuario revisa si se muestra {COMPONENTE_SEGMENTO_LOGUEADO}.
6. El usuario cierra sesión y vuelve a la Home.

**Resultado esperado**

Como invitado {COMPONENTE_SEGMENTO_LOGUEADO} no se muestra y no queda espacio reservado; con sesión iniciada sí se muestra; al cerrar sesión vuelve a ocultarse.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: la cuenta declarada ({USER_AUTH_001}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. Además {COMPONENTE_SEGMENTO_LOGUEADO} no tiene fila en el Excel de data. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-020 - Verificar que el pull to refresh de la Home recarga los componentes con el contenido publicado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com

**Data utilizada**

v1.0.7, iOS, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario anota el primer banner de la Home.
4. Negocio publica en Page Designer un cambio en ese banner.
5. El usuario, desde el inicio de la Home, desliza hacia abajo (pull to refresh) y suelta.
6. El usuario observa la recarga y revisa el primer banner.

**Resultado esperado**

Se muestra el indicador de recarga (y/o skeleton), la Home se recarga sin cerrar la App y el primer banner muestra el contenido publicado; el resto de los componentes carga con normalidad.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: la cuenta declarada ({USER_AUTH_001}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. Además el paso 4 requiere que Negocio publique un cambio en Page Designer. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk"
  },
  "environment": "App Unimarc v1.0.7 (DEV)",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-29 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-29 APP Test Cases.xlsx",
  "title": "B2C-29 APP - Home configurable desde Page Designer (Android) - Evidencias QA",
  "updated_at": "2026-10-16"
 },
 "history": {
  "2026-10-16": [
   "TC-B2C29-APP-001",
   "TC-B2C29-APP-002",
   "TC-B2C29-APP-003",
   "TC-B2C29-APP-004",
   "TC-B2C29-APP-005",
   "TC-B2C29-APP-006",
   "TC-B2C29-APP-007",
   "TC-B2C29-APP-008",
   "TC-B2C29-APP-009",
   "TC-B2C29-APP-010",
   "TC-B2C29-APP-011",
   "TC-B2C29-APP-012",
   "TC-B2C29-APP-013",
   "TC-B2C29-APP-014",
   "TC-B2C29-APP-015",
   "TC-B2C29-APP-016",
   "TC-B2C29-APP-017",
   "TC-B2C29-APP-018",
   "TC-B2C29-APP-019",
   "TC-B2C29-APP-020"
  ]
 },
 "results": [
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "duration_s": 52,
   "executed_at": "2026-10-16",
   "expected": "La Home carga sin pedir login y muestra todos los componentes configurados (banners, carruseles, colecciones).",
   "form_factor": "app",
   "id": "TC-B2C29-APP-001",
   "name": "Verificar que la Home carga sin iniciar sesión y muestra los componentes de Page Designer [App] [Guest]",
   "observation": "Como invitado (datos borrados) la Home carga sin pedir login y, de arriba abajo, muestra: carrusel de banners, 'Los más vendidos', Módulo Bomba con cuenta regresiva, 'Categorías destacadas', 'Cada día, una ocasión', 'Frescura y calidad', 'Prende la parrilla', 'Chocolates Milka', 'Nuestras marcas', 'Especial Bebidas', 'Contrata la membresía' y Términos y condiciones. Sin data de qué está publicado en Page Designer, se verificó la carga completa, no la lista exacta. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "Como invitado (datos borrados) la Home carga sin pedir login y, de arriba abajo, muestra: carrusel de banners, 'Los más vendidos', Módulo Bomba con cuenta regresiva, 'Categorías destacadas', 'Cada día, una ocasión', 'Frescura y calidad', 'Prende la parrilla', 'Chocolates Milka', 'Nuestras marcas', 'Especial Bebidas', 'Contrata la membresía' y Términos y condiciones. Sin data de qué está publicado en Page Designer, se verificó la carga completa, no la lista exacta.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin sesión iniciada",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home sin sesion",
     "file": "TC-B2C29-APP-001-android-p02-home-sin-sesion.png"
    },
    {
     "caption": "Android · Paso 3 — final de la home",
     "file": "TC-B2C29-APP-001-android-p03-final-de-la-home.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C29-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-29.spec.ts:30",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con los componentes configurados en Page Designer.\n3. El usuario hace scroll hasta el final de la Home.",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "duration_s": 54,
   "executed_at": "2026-10-16",
   "expected": "Los componentes muestran padding lateral respecto del borde de la pantalla y los componentes con color de fondo tienen el fondo de extremo a extremo.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-002",
   "name": "Verificar que los componentes de la Home tienen padding lateral y los fondos ocupan todo el ancho [App] [Guest]",
   "observation": "Ningún texto del contenido queda a menos de 16 px del borde izquierdo (las vitrinas arrancan en x≈42 de 1080) y el fondo gris del Módulo Bomba va de extremo a extremo; las tarjetas que asoman por la derecha son el scroll horizontal de los carruseles. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "Ningún texto del contenido queda a menos de 16 px del borde izquierdo (las vitrinas arrancan en x≈42 de 1080) y el fondo gris del Módulo Bomba va de extremo a extremo; las tarjetas que asoman por la derecha son el scroll horizontal de los carruseles.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin sesión iniciada",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — inicio de la home",
     "file": "TC-B2C29-APP-002-android-p02-inicio-de-la-home.png"
    },
    {
     "caption": "Android · Paso 3 — componentes con fondo de color",
     "file": "TC-B2C29-APP-002-android-p03-componentes-con-fondo-de-color.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C29-APP-002-android.png"
    }
   ],
   "spec": "tests-app/B2C-29.spec.ts:47",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con los componentes configurados en Page Designer.\n3. El usuario recorre la Home y revisa los bordes de cada componente.",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestran todos los componentes publicados en Page Designer, sin cortes ni límite de largo vertical.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-003",
   "name": "Verificar que la Home muestra todos los componentes configurados sin límite de cantidad ni de largo [App] [Guest]",
   "observation": "TC que requiere publicar más componentes que la configuración estándar (20 o más) en Page Designer (Business Manager): fuera del alcance de la automatización de la app; se necesita acceso a BM para saber qué componentes están publicados y compararlos con la Home. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin sesión iniciada\n- La Home tiene publicados en Page Designer más componentes que la configuración estándar (ej. 20 o más)",
   "status": "Fuera de alcance",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con los componentes configurados en Page Designer.\n3. El usuario hace scroll hasta el final de la Home y cuenta los componentes.",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "La Home muestra el banner actualizado sin que el usuario haya reiniciado la App.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-004",
   "name": "Verificar que el contenido publicado en Page Designer se ve sin reiniciar la App [App] [Guest]",
   "observation": "TC que requiere que Negocio publique un cambio en un banner en Page Designer (Business Manager): fuera del alcance de la automatización de la app; se necesita acceso a BM para publicar el cambio durante la corrida. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin sesión iniciada",
   "status": "Fuera de alcance",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con los componentes configurados en Page Designer.\n3. El usuario anota el primer banner de la Home.\n4. Negocio publica en Page Designer un cambio en ese banner.\n5. El usuario vuelve al Home desde otra pantalla, sin cerrar ni reiniciar la App.\n6. El sistema muestra la Home con el contenido publicado.",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Componente_Error no se muestra, el resto de los componentes carga con normalidad y la Home no presenta errores ni cortes.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-005",
   "name": "Verificar que un componente con error no se muestra y el resto de la Home carga normal [App] [Guest]",
   "observation": "TC que requiere tener {COMPONENTE_CON_ERROR} ('Componente_Error') publicado con un error en Page Designer (Business Manager): fuera del alcance de la automatización de la app; se necesita acceso a BM para confirmar que está publicado y con qué error (desde la app su ausencia no se distingue de que no esté publicado). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin sesión iniciada\n- Componente_Error está publicado en la Home con un error (ej. imagen con nombre incorrecto)",
   "status": "Fuera de alcance",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con los componentes configurados en Page Designer.\n3. El usuario recorre la Home completa.",
   "test_data": "v1.0.7, Componente_Error"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Modulo Bomba no se muestra antes de 2026-09-01 00:00:00 y sí se muestra desde esa fecha y hora.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-006",
   "name": "Verificar que un componente programado aparece en su fecha y hora de inicio [App] [Guest]",
   "observation": "Causa: el inicio de vigencia de {COMPONENTE_PROGRAMADO} ('Modulo Bomba') es {FECHA_INICIO_VIGENCIA} = 2026-09-01 00:00, ya pasado: no se puede observar la Home antes y después del inicio. Hoy (2026-10-16) el Módulo Bomba sí se muestra, con la cuenta regresiva en 57 días. Acción: reprogramar en Page Designer un inicio cercano a la ejecución o declarar un componente con inicio futuro próximo. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin sesión iniciada\n- Modulo Bomba está configurado en Page Designer con inicio de vigencia 2026-09-01 00:00:00",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-16: Módulo Bomba visible con la cuenta regresiva (57 días)",
     "file": "p2.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga la Home sin Modulo Bomba antes de 2026-09-01 00:00:00.\n3. El usuario vuelve a acceder a la Home después de 2026-09-01 00:00:00.\n4. El sistema muestra Modulo Bomba en la Home.",
   "test_data": "v1.0.7, Modulo Bomba, 2026-09-01 00:00:00"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Modulo Bomba se muestra hasta 2026-12-12 00:00:00 y deja de mostrarse después, sin dejar espacio vacío.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-007",
   "name": "Verificar que un componente programado deja de mostrarse al cumplirse su fecha de fin [App] [Guest]",
   "observation": "Causa: el fin de vigencia de {COMPONENTE_PROGRAMADO} ('Modulo Bomba') es {FECHA_FIN_VIGENCIA} = 2026-12-12 00:00: no se puede observar que deje de mostrarse durante la corrida. Hoy (2026-10-16) se muestra, con la cuenta regresiva en 57 días (coherente con el 12-12). Acción: reprogramar un fin cercano a la ejecución o re-ejecutar después del 2026-12-12. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin sesión iniciada\n- Modulo Bomba está configurado en Page Designer con fin de vigencia 2026-12-12 00:00:00",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-16: Módulo Bomba visible con la cuenta regresiva (57 días)",
     "file": "p2.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga la Home con Modulo Bomba antes de 2026-12-12 00:00:00.\n3. El usuario vuelve a acceder a la Home después de 2026-12-12 00:00:00.\n4. El sistema carga la Home sin Modulo Bomba.",
   "test_data": "v1.0.7, Modulo Bomba, 2026-12-12 00:00:00"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "La Home muestra Bienvenida_Diamante.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-008",
   "name": "Verificar que un usuario del segmento configurado ve el componente segmentado [App] [Logueado]",
   "observation": "Causa: la cuenta declarada ({COMPRADOR_SEGMENTO_USER}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Bienvenida_Diamante está publicado con segmentación activa\n- La cuenta vhchirinos+noaddress@avatar-global.com pertenece al segmento de Bienvenida_Diamante",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App.\n3. El usuario inicia sesión con la cuenta vhchirinos+noaddress@avatar-global.com.\n4. El sistema autentica al usuario y muestra el Home de la App.",
   "test_data": "v1.0.7, Bienvenida_Diamante, contraseña de la cuenta, vhchirinos+noaddress@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "La Home no muestra Bienvenida_Diamante y el componente siguiente aparece a continuación del anterior, sin espacio vacío.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-009",
   "name": "Verificar que un usuario fuera del segmento no ve el componente y no queda espacio reservado [App] [Logueado]",
   "observation": "Causa: la cuenta declarada ({COMPRADOR_FUERA_SEGMENTO_USER}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Bienvenida_Diamante está publicado con segmentación activa\n- La cuenta vhchirinos+segundo@avatar-global.com no pertenece al segmento de Bienvenida_Diamante",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App.\n3. El usuario inicia sesión con la cuenta vhchirinos+segundo@avatar-global.com.\n4. El sistema autentica al usuario y muestra el Home de la App.",
   "test_data": "v1.0.7, Bienvenida_Diamante, contraseña de la cuenta, vhchirinos+segundo@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "La Home muestra el carrusel My Usuals con los productos frecuentes de la cuenta y el CTA \"Ver todo\".",
   "form_factor": "app",
   "id": "TC-B2C29-APP-010",
   "name": "Verificar que el carrusel My Usuals muestra los productos frecuentes del usuario [App] [Logueado]",
   "observation": "Causa: la cuenta declarada ({COMPRADOR_FRECUENTES_USER}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. Además la precondición y los pasos nombran {COMPRADOR_CON_FRECUENTES_USER}, que no existe en el Excel de data (la fila declara {COMPRADOR_FRECUENTES_USER}). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta {COMPRADOR_CON_FRECUENTES_USER} tiene productos frecuentes registrados",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta {COMPRADOR_CON_FRECUENTES_USER}.\n4. El sistema autentica al usuario y muestra la Home con el carrusel de productos frecuentes.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra la colección completa de productos frecuentes de la cuenta.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-011",
   "name": "Verificar que \"Ver todo\" del carrusel My Usuals abre la colección completa [App] [Logueado]",
   "observation": "Causa: la cuenta declarada ({COMPRADOR_FRECUENTES_USER}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. Además la precondición y los pasos nombran {COMPRADOR_CON_FRECUENTES_USER}, que no existe en el Excel de data (la fila declara {COMPRADOR_FRECUENTES_USER}). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta {COMPRADOR_CON_FRECUENTES_USER} tiene productos frecuentes registrados",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta {COMPRADOR_CON_FRECUENTES_USER}.\n4. El sistema muestra la Home con el carrusel My Usuals.\n5. El usuario toca \"Ver todo\" en el carrusel My Usuals.\n6. El sistema abre la colección completa de My Usuals.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El contador del carro aumenta en 1 y el producto del carrusel muestra el stepper con 1 unidad.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-012",
   "name": "Verificar que \"Agregar\" en el carrusel My Usuals suma el producto al carro [App] [Logueado]",
   "observation": "Causa: la cuenta declarada ({COMPRADOR_FRECUENTES_USER}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. Además la precondición y los pasos nombran {COMPRADOR_CON_FRECUENTES_USER}, que no existe en el Excel de data (la fila declara {COMPRADOR_FRECUENTES_USER}). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta {COMPRADOR_CON_FRECUENTES_USER} tiene productos frecuentes registrados\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta {COMPRADOR_CON_FRECUENTES_USER}.\n4. El sistema muestra la Home con el carrusel My Usuals.\n5. El usuario anota el contador del carro y toca \"Agregar\" en un producto del carrusel.\n6. El sistema agrega el producto al carro y muestra el stepper en ese producto.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "La Home no muestra el carrusel My Usuals ni deja espacio vacío en su lugar.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-013",
   "name": "Verificar que un usuario logueado sin productos frecuentes no ve el carrusel My Usuals [App] [Logueado]",
   "observation": "Causa: la cuenta declarada ({COMPRADOR_SIN_FRECUENTES_USER}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta vhchirinos+noaddress@avatar-global.com no tiene productos frecuentes registrados",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+noaddress@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+noaddress@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "duration_s": 49,
   "executed_at": "2026-10-16",
   "expected": "La Home no muestra el carrusel My Usuals ni deja espacio vacío en su lugar.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-014",
   "name": "Verificar que un usuario invitado no ve el carrusel My Usuals [App] [Guest]",
   "observation": "Como invitado, recorrida la Home completa hasta Términos y condiciones, no aparece ningún carrusel de productos frecuentes (My Usuals: 'frecuentes'/'My Usuals'/'Lo que más compras'). El título del carrusel en la app no se pudo confirmar con sesión (login por correo deshabilitado en v1.0.7). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "Como invitado, recorrida la Home completa hasta Términos y condiciones, no aparece ningún carrusel de productos frecuentes (My Usuals: 'frecuentes'/'My Usuals'/'Lo que más compras'). El título del carrusel en la app no se pudo confirmar con sesión (login por correo deshabilitado en v1.0.7).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin sesión iniciada",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home como invitado",
     "file": "TC-B2C29-APP-014-android-p02-home-como-invitado.png"
    },
    {
     "caption": "Android · Paso 3 — final de la home sin my usuals",
     "file": "TC-B2C29-APP-014-android-p03-final-de-la-home-sin-my-usuals.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C29-APP-014-android.png"
    }
   ],
   "spec": "tests-app/B2C-29.spec.ts:71",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con los componentes configurados en Page Designer.\n3. El usuario recorre la Home completa.",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El sistema navega a {URL_DESTINO_COMPONENTE} (misma pestaña/pantalla) y la página de destino carga completa, sin errores.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-015",
   "name": "Verificar que al seleccionar un banner con link configurado se redirige al destino definido en Page Designer [App] [Logueado]",
   "observation": "Causa: la cuenta declarada ({USER_AUTH_001}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. Además {COMPONENTE_CON_LINK} y {URL_DESTINO_COMPONENTE} no tienen fila en el Excel de data. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- En Page Designer, {COMPONENTE_CON_LINK} está publicado en la Home con el link de redirección {URL_DESTINO_COMPONENTE}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario ubica {COMPONENTE_CON_LINK} en la Home.\n4. El usuario toca {COMPONENTE_CON_LINK}.",
   "test_data": "v1.0.7, iOS, {COMPONENTE_CON_LINK}, {URL_DESTINO_COMPONENTE}, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El usuario permanece en la Home: no hay navegación, no se abre una página en blanco ni de error y el resto de los componentes sigue visible y operativo.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-016",
   "name": "Verificar que un componente sin link configurado no redirige ni genera error al seleccionarlo [App] [Logueado]",
   "observation": "Causa: la cuenta declarada ({USER_AUTH_001}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. Además {COMPONENTE_SIN_LINK} no tiene fila en el Excel de data. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- En Page Designer, {COMPONENTE_SIN_LINK} está publicado en la Home sin link de redirección",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario toca {COMPONENTE_SIN_LINK}.\n4. El usuario revisa la pantalla.",
   "test_data": "v1.0.7, iOS, {COMPONENTE_SIN_LINK}, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra la página de \"no encontrado\" del sitio (con header y navegación disponibles), no una pantalla en blanco ni un error técnico; al volver, la Home carga con normalidad.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-017",
   "name": "Verificar que un componente con link incorrecto lleva a la página de no encontrado del sitio sin romper la navegación [App] [Logueado]",
   "observation": "Causa: la cuenta declarada ({USER_AUTH_001}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. Además {COMPONENTE_LINK_INVALIDO} no tiene fila en el Excel de data. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- En Page Designer, {COMPONENTE_LINK_INVALIDO} está publicado en la Home con un link a una URL inexistente del sitio",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario toca {COMPONENTE_LINK_INVALIDO}.\n4. El usuario revisa la pantalla resultante.\n5. El usuario vuelve a la Home.",
   "test_data": "v1.0.7, iOS, {COMPONENTE_LINK_INVALIDO}, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Mientras carga se muestran placeholders tipo skeleton (bloques grises) en lugar de los componentes; al terminar, cada skeleton se reemplaza por su componente real, sin pantallas en blanco ni mensajes de error.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-018",
   "name": "Verificar que mientras carga la Home se muestra el skeleton y luego se reemplaza por los componentes [App] [Logueado]",
   "observation": "Causa: la cuenta declarada ({USER_AUTH_001}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. Además {HERRAMIENTA_PROXY_APP} está en TBD. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- {HERRAMIENTA_PROXY_APP} configurado para simular una conexión lenta (throttling)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario observa la Home mientras carga.\n3. El usuario espera a que termine la carga.",
   "test_data": "v1.0.7, iOS, {HERRAMIENTA_PROXY_APP}, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Como invitado {COMPONENTE_SEGMENTO_LOGUEADO} no se muestra y no queda espacio reservado; con sesión iniciada sí se muestra; al cerrar sesión vuelve a ocultarse.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-019",
   "name": "Verificar que un componente segmentado para usuarios logueados solo se muestra con sesión iniciada [App] [Guest]",
   "observation": "Causa: la cuenta declarada ({USER_AUTH_001}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. Además {COMPONENTE_SEGMENTO_LOGUEADO} no tiene fila en el Excel de data. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- En Page Designer, {COMPONENTE_SEGMENTO_LOGUEADO} está publicado en la Home con segmentación por estado de sesión (solo logueados)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario revisa si se muestra {COMPONENTE_SEGMENTO_LOGUEADO}.\n4. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com y vuelve a la Home.\n5. El usuario revisa si se muestra {COMPONENTE_SEGMENTO_LOGUEADO}.\n6. El usuario cierra sesión y vuelve a la Home.",
   "test_data": "v1.0.7, iOS, {COMPONENTE_SEGMENTO_LOGUEADO}, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra el indicador de recarga (y/o skeleton), la Home se recarga sin cerrar la App y el primer banner muestra el contenido publicado; el resto de los componentes carga con normalidad.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-020",
   "name": "Verificar que el pull to refresh de la Home recarga los componentes con el contenido publicado [App] [Logueado]",
   "observation": "Causa: la cuenta declarada ({USER_AUTH_001}) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT o liberar un build con login por correo. Además el paso 4 requiere que Negocio publique un cambio en Page Designer. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario anota el primer banner de la Home.\n4. Negocio publica en Page Designer un cambio en ese banner.\n5. El usuario, desde el inicio de la Home, desliza hacia abajo (pull to refresh) y suelta.\n6. El usuario observa la recarga y revisa el primer banner.",
   "test_data": "v1.0.7, iOS, vhchirinos+comprador@avatar-global.com"
  }
 ]
}
-->
