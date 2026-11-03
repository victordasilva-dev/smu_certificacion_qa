# Tabs + Carrusel (T4) en la app (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-77 APP |
| Última actualización | 2026-10-21 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.7 (DEV) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-77 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 15 |
| **Total** | **15** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-21 | 15 | TC-B2C77-APP-001, TC-B2C77-APP-002, TC-B2C77-APP-003, TC-B2C77-APP-004, TC-B2C77-APP-005, TC-B2C77-APP-006, TC-B2C77-APP-007, TC-B2C77-APP-008, TC-B2C77-APP-009, TC-B2C77-APP-010, TC-B2C77-APP-011, TC-B2C77-APP-012, TC-B2C77-APP-013, TC-B2C77-APP-014, TC-B2C77-APP-015 |

## Detalle por caso de prueba

### TC-B2C77-APP-001 - Verificar que el fondo del componente ocupa todo el ancho y el contenido respeta el padding [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | — |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home
- El componente T4 está publicado en el Home

**Data utilizada**

{APP_BUILD} = v1.0.7

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).

**Resultado esperado**

El color de fondo llega de borde a borde y el título, las tabs y el carrusel respetan el mismo padding lateral que el Header.

**Resultado obtenido**

Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.

**Evidencia**

![explore77 0](<B2C-77 APP Evidencias/explore77-0.png>)

![explore77 2](<B2C-77 APP Evidencias/explore77-2.png>)

![explore77 3](<B2C-77 APP Evidencias/explore77-3.png>)

![explore77 5](<B2C-77 APP Evidencias/explore77-5.png>)

![explore77 b12](<B2C-77 APP Evidencias/explore77-b12.png>)

---

### TC-B2C77-APP-002 - Verificar que el componente muestra título, "Mostrar todo", tabs y 2 productos por slide [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | — |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home
- El componente T4 está publicado en el Home

**Data utilizada**

{APP_BUILD} = v1.0.7

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).

**Resultado esperado**

Se muestran el título en la posición configurada, "Mostrar todo", la fila de tabs con la primera activa y el carrusel de la tab activa con 2 productos visibles por slide.

**Resultado obtenido**

Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C77-APP-003 - Verificar que tocar otra tab cambia el carrusel a los productos de esa tab [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | — |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home
- El componente T4 está publicado en el Home

**Data utilizada**

{APP_BUILD} = v1.0.7

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).
3. El usuario toca la segunda tab.
4. El sistema marca esa tab como activa y cambia el carrusel.

**Resultado esperado**

La segunda tab queda activa y el carrusel muestra los productos de su colección.

**Resultado obtenido**

Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C77-APP-004 - Verificar que el carrusel de la tab activa se desliza horizontalmente [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | — |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home
- El componente T4 está publicado en el Home

**Data utilizada**

{APP_BUILD} = v1.0.7

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).
3. El usuario desliza el carrusel hacia la izquierda.
4. El sistema muestra los siguientes productos de la tab activa.

**Resultado esperado**

El carrusel se desplaza horizontalmente y muestra más productos de la tab activa.

**Resultado obtenido**

Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C77-APP-005 - Verificar que la fila de tabs se desliza horizontalmente cuando no caben [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | — |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home
- El componente T4 está publicado en el Home
- El componente tiene más tabs de las que caben en pantalla

**Data utilizada**

{APP_BUILD} = v1.0.7

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).
3. El usuario desliza la fila de tabs hacia la izquierda.
4. El sistema muestra las tabs que estaban fuera de pantalla.

**Resultado esperado**

La fila de tabs se desplaza y permite ver todas las tabs sin romper el layout.

**Resultado obtenido**

Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C77-APP-006 - Verificar que "Mostrar todo" lleva al destino configurado de la tab activa [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | — |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home
- El componente T4 está publicado en el Home

**Data utilizada**

{APP_BUILD} = v1.0.7

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).
3. El usuario toca "Mostrar todo".
4. El sistema abre el destino configurado para la tab activa.

**Resultado esperado**

Se abre la PLP/colección configurada para la tab activa.

**Resultado obtenido**

Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C77-APP-007 - Verificar que tocar la shelf de un producto abre su PDP [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | — |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home
- El componente T4 está publicado en el Home

**Data utilizada**

{APP_BUILD} = v1.0.7

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).
3. El usuario toca la imagen de un producto del carrusel.
4. El sistema abre la PDP de ese producto.

**Resultado esperado**

Se muestra la PDP del producto tocado.

**Resultado obtenido**

Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C77-APP-008 - Verificar que una tab cuya categoría no tiene productos se oculta [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | — |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home
- Una tab del T4 apunta a una categoría sin productos disponibles

**Data utilizada**

{APP_BUILD} = v1.0.7

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).

**Resultado esperado**

La tab sin productos no aparece y el resto de las tabs funciona con normalidad.

**Resultado obtenido**

Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C77-APP-009 - Verificar que si todas las tabs quedan sin productos el componente no se muestra [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | — |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home
- Todas las tabs del T4 apuntan a categorías sin productos

**Data utilizada**

{APP_BUILD} = v1.0.7

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).

**Resultado esperado**

El componente T4 no se muestra y no deja espacio vacío.

**Resultado obtenido**

Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C77-APP-010 - Verificar que con menos de 2 o más de 10 tabs el componente no se muestra [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | — |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home
- El T4 está configurado con 1 tab o con más de 10

**Data utilizada**

{APP_BUILD} = v1.0.7

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).

**Resultado esperado**

El componente T4 no se muestra y no deja espacio vacío.

**Resultado obtenido**

Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C77-APP-011 - Verificar que una tab con categoría inexistente u offline se oculta [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | — |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home
- Una tab del T4 apunta a una categoría offline o inexistente

**Data utilizada**

{APP_BUILD} = v1.0.7

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).

**Resultado esperado**

La tab con categoría inexistente u offline no aparece y el resto de las tabs funciona.

**Resultado obtenido**

Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C77-APP-012 - Verificar que una tab sin label se oculta [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | — |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home
- Una tab del T4 no tiene Label configurado

**Data utilizada**

{APP_BUILD} = v1.0.7

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).

**Resultado esperado**

La tab sin label no aparece y el resto de las tabs funciona.

**Resultado obtenido**

Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C77-APP-013 - Verificar que una imagen de producto con error muestra el estado de imagen no disponible [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | — |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home
- El componente T4 está publicado en el Home
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de la imagen de un producto del carrusel

**Data utilizada**

{APP_BUILD} = v1.0.7

{HERRAMIENTA_PROXY_APP} = None

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).

**Resultado esperado**

La shelf con la imagen rota muestra el estado de imagen no disponible y el resto del componente y de la página se muestran con normalidad.

**Resultado obtenido**

Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Además {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Además {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C77-APP-014 - Verificar que la tab inicial configurada aparece activa al cargar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | — |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home
- El T4 tiene configurada como tab inicial una distinta a la primera

**Data utilizada**

{APP_BUILD} = v1.0.7

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).

**Resultado esperado**

La tab configurada como inicial aparece activa y el carrusel muestra sus productos.

**Resultado obtenido**

Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C77-APP-015 - Verificar que el carrusel de la tab activa no supera el máximo de productos [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | — |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home
- El componente T4 está publicado en el Home

**Data utilizada**

{APP_BUILD} = v1.0.7

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).
3. El usuario desliza el carrusel hasta el final y cuenta los productos.

**Resultado esperado**

El carrusel muestra como máximo 12 productos (valor por defecto) aunque la colección tenga más.

**Resultado obtenido**

Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "Android": "Pixel 6 (emulador) · Android 14"
  },
  "environment": "App Unimarc v1.0.7 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-77 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-77 APP Test Cases.xlsx",
  "title": "Tabs + Carrusel (T4) en la app (Android)",
  "updated_at": "2026-10-21"
 },
 "history": {
  "2026-10-21": [
   "TC-B2C77-APP-001",
   "TC-B2C77-APP-002",
   "TC-B2C77-APP-003",
   "TC-B2C77-APP-004",
   "TC-B2C77-APP-005",
   "TC-B2C77-APP-006",
   "TC-B2C77-APP-007",
   "TC-B2C77-APP-008",
   "TC-B2C77-APP-009",
   "TC-B2C77-APP-010",
   "TC-B2C77-APP-011",
   "TC-B2C77-APP-012",
   "TC-B2C77-APP-013",
   "TC-B2C77-APP-014",
   "TC-B2C77-APP-015"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El color de fondo llega de borde a borde y el título, las tabs y el carrusel respetan el mismo padding lateral que el Header.",
   "form_factor": "app",
   "id": "TC-B2C77-APP-001",
   "name": "Verificar que el fondo del componente ocupa todo el ancho y el contenido respeta el padding [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home\n- El componente T4 está publicado en el Home",
   "screenshots": [
    {
     "caption": "explore77 0",
     "file": "explore77-0.png"
    },
    {
     "caption": "explore77 2",
     "file": "explore77-2.png"
    },
    {
     "caption": "explore77 3",
     "file": "explore77-3.png"
    },
    {
     "caption": "explore77 5",
     "file": "explore77-5.png"
    },
    {
     "caption": "explore77 b12",
     "file": "explore77-b12.png"
    }
   ],
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).",
   "test_data": "{APP_BUILD} = v1.0.7"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestran el título en la posición configurada, \"Mostrar todo\", la fila de tabs con la primera activa y el carrusel de la tab activa con 2 productos visibles por slide.",
   "form_factor": "app",
   "id": "TC-B2C77-APP-002",
   "name": "Verificar que el componente muestra título, \"Mostrar todo\", tabs y 2 productos por slide [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home\n- El componente T4 está publicado en el Home",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).",
   "test_data": "{APP_BUILD} = v1.0.7"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "La segunda tab queda activa y el carrusel muestra los productos de su colección.",
   "form_factor": "app",
   "id": "TC-B2C77-APP-003",
   "name": "Verificar que tocar otra tab cambia el carrusel a los productos de esa tab [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home\n- El componente T4 está publicado en el Home",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).\n3. El usuario toca la segunda tab.\n4. El sistema marca esa tab como activa y cambia el carrusel.",
   "test_data": "{APP_BUILD} = v1.0.7"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El carrusel se desplaza horizontalmente y muestra más productos de la tab activa.",
   "form_factor": "app",
   "id": "TC-B2C77-APP-004",
   "name": "Verificar que el carrusel de la tab activa se desliza horizontalmente [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home\n- El componente T4 está publicado en el Home",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).\n3. El usuario desliza el carrusel hacia la izquierda.\n4. El sistema muestra los siguientes productos de la tab activa.",
   "test_data": "{APP_BUILD} = v1.0.7"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "La fila de tabs se desplaza y permite ver todas las tabs sin romper el layout.",
   "form_factor": "app",
   "id": "TC-B2C77-APP-005",
   "name": "Verificar que la fila de tabs se desliza horizontalmente cuando no caben [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home\n- El componente T4 está publicado en el Home\n- El componente tiene más tabs de las que caben en pantalla",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).\n3. El usuario desliza la fila de tabs hacia la izquierda.\n4. El sistema muestra las tabs que estaban fuera de pantalla.",
   "test_data": "{APP_BUILD} = v1.0.7"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se abre la PLP/colección configurada para la tab activa.",
   "form_factor": "app",
   "id": "TC-B2C77-APP-006",
   "name": "Verificar que \"Mostrar todo\" lleva al destino configurado de la tab activa [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home\n- El componente T4 está publicado en el Home",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).\n3. El usuario toca \"Mostrar todo\".\n4. El sistema abre el destino configurado para la tab activa.",
   "test_data": "{APP_BUILD} = v1.0.7"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestra la PDP del producto tocado.",
   "form_factor": "app",
   "id": "TC-B2C77-APP-007",
   "name": "Verificar que tocar la shelf de un producto abre su PDP [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home\n- El componente T4 está publicado en el Home",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).\n3. El usuario toca la imagen de un producto del carrusel.\n4. El sistema abre la PDP de ese producto.",
   "test_data": "{APP_BUILD} = v1.0.7"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "La tab sin productos no aparece y el resto de las tabs funciona con normalidad.",
   "form_factor": "app",
   "id": "TC-B2C77-APP-008",
   "name": "Verificar que una tab cuya categoría no tiene productos se oculta [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home\n- Una tab del T4 apunta a una categoría sin productos disponibles",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).",
   "test_data": "{APP_BUILD} = v1.0.7"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El componente T4 no se muestra y no deja espacio vacío.",
   "form_factor": "app",
   "id": "TC-B2C77-APP-009",
   "name": "Verificar que si todas las tabs quedan sin productos el componente no se muestra [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home\n- Todas las tabs del T4 apuntan a categorías sin productos",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).",
   "test_data": "{APP_BUILD} = v1.0.7"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El componente T4 no se muestra y no deja espacio vacío.",
   "form_factor": "app",
   "id": "TC-B2C77-APP-010",
   "name": "Verificar que con menos de 2 o más de 10 tabs el componente no se muestra [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home\n- El T4 está configurado con 1 tab o con más de 10",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).",
   "test_data": "{APP_BUILD} = v1.0.7"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "La tab con categoría inexistente u offline no aparece y el resto de las tabs funciona.",
   "form_factor": "app",
   "id": "TC-B2C77-APP-011",
   "name": "Verificar que una tab con categoría inexistente u offline se oculta [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home\n- Una tab del T4 apunta a una categoría offline o inexistente",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).",
   "test_data": "{APP_BUILD} = v1.0.7"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "La tab sin label no aparece y el resto de las tabs funciona.",
   "form_factor": "app",
   "id": "TC-B2C77-APP-012",
   "name": "Verificar que una tab sin label se oculta [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home\n- Una tab del T4 no tiene Label configurado",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).",
   "test_data": "{APP_BUILD} = v1.0.7"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "La shelf con la imagen rota muestra el estado de imagen no disponible y el resto del componente y de la página se muestran con normalidad.",
   "form_factor": "app",
   "id": "TC-B2C77-APP-013",
   "name": "Verificar que una imagen de producto con error muestra el estado de imagen no disponible [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Además {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Además {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home\n- El componente T4 está publicado en el Home\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de la imagen de un producto del carrusel",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).",
   "test_data": "{APP_BUILD} = v1.0.7\n{HERRAMIENTA_PROXY_APP} = None"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "La tab configurada como inicial aparece activa y el carrusel muestra sus productos.",
   "form_factor": "app",
   "id": "TC-B2C77-APP-014",
   "name": "Verificar que la tab inicial configurada aparece activa al cargar [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. El caso además necesita configurar tabs en Page Designer. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home\n- El T4 tiene configurada como tab inicial una distinta a la primera",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).",
   "test_data": "{APP_BUILD} = v1.0.7"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El carrusel muestra como máximo 12 productos (valor por defecto) aunque la colección tenga más.",
   "form_factor": "app",
   "id": "TC-B2C77-APP-015",
   "name": "Verificar que el carrusel de la tab activa no supera el máximo de productos [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el componente Tabs + Carrusel (T4) no está publicado en el Home de DEV: se recorrió el Home completo de la app (22 desplazamientos) y solo hay banner, «Los más vendidos», «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas», «Productos Not Variedades» y «Contrata la membresía»; ninguno tiene pestañas. Acción: publicar el componente T4 en el Home (Page Designer) o indicar dónde está.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home\n- El componente T4 está publicado en el Home",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el componente Tabs + Carrusel (T4).\n3. El usuario desliza el carrusel hasta el final y cuenta los productos.",
   "test_data": "{APP_BUILD} = v1.0.7"
  }
 ]
}
-->
