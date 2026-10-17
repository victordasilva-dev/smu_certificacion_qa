# B2C-40 APP - Modal de productos similares (Android) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-40 APP |
| Última actualización | 2026-10-16 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc v1.0.7 (DEV) |
| Dispositivo Android | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-40 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 17 |
| **Total** | **17** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-16 | 17 | TC-40-APP-001, TC-40-APP-002, TC-40-APP-003, TC-40-APP-004, TC-40-APP-005, TC-40-APP-006, TC-40-APP-007, TC-40-APP-008, TC-40-APP-009, TC-40-APP-010, TC-40-APP-011, TC-40-APP-012, TC-40-APP-013, TC-40-APP-014, TC-40-APP-015, TC-40-APP-016, TC-40-APP-017 |

## Detalle por caso de prueba

### TC-40-APP-001 - Verificar que "Ver similares" en un shelf de navegación abre el modal de productos similares [App] [Guest]

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
- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock
- 000000000000628239-UN aparece en la PLP de https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Data utilizada**

v1.0.7, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno, 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
3. El sistema carga la PLP con 000000000000628239-UN marcado sin stock y el botón "Ver similares" en su shelf.
4. El usuario toca "Ver similares".
5. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.

**Resultado esperado**

Se abre el modal "Productos similares" para 000000000000628239-UN.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. (La PLP de {PLP_URL} es carnes_vacuno; el SKU es de Quesos y Fiambres.) La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)](<B2C-40 APP Evidencias/c-sku-similares.png>)

---

### TC-40-APP-002 - Verificar que "Ver similares" en la PDP de un producto sin stock abre el modal [App] [Guest]

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
- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock

**Data utilizada**

v1.0.7, 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000000628239-UN y abre su PDP.
3. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
4. El usuario toca "Ver similares".
5. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.

**Resultado esperado**

Se abre el modal "Productos similares" para 000000000000628239-UN.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)](<B2C-40 APP Evidencias/c-sku-similares.png>)

---

### TC-40-APP-003 - Verificar que "Reemplazar" en un producto no disponible del carro abre el modal de similares [App] [Logueado]

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
- El carro contiene 000000000000628239-UN, sin stock en la tienda activa (sección de productos no disponibles)

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario toca el ícono del carro.
3. El sistema carga el carrito con 000000000000628239-UN en la sección de productos no disponibles.
4. El usuario toca "Reemplazar" en 000000000000628239-UN.
5. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.

**Resultado esperado**

Se abre el modal "Productos similares" para 000000000000628239-UN.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)](<B2C-40 APP Evidencias/c-sku-similares.png>)

---

### TC-40-APP-004 - Verificar que el modal de similares se muestra como bottom sheet deslizable desde abajo [App] [Guest]

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
- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock

**Data utilizada**

v1.0.7, 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000000628239-UN y abre su PDP.
3. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
4. El usuario toca "Ver similares".
5. El sistema despliega el modal desde la parte inferior de la pantalla como bottom sheet sobre la PDP.

**Resultado esperado**

El modal aparece como bottom sheet que sube desde la parte inferior, sobre la PDP.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)](<B2C-40 APP Evidencias/c-sku-similares.png>)

---

### TC-40-APP-005 - Verificar que el modal muestra título, X, producto original, similares y "Reemplazar productos" [App] [Guest]

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
- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock

**Data utilizada**

v1.0.7, 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000000628239-UN y abre su PDP.
3. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
4. El usuario toca "Ver similares".
5. El sistema muestra el título "Productos similares", el botón cerrar (X), la miniatura y el nombre de 000000000000628239-UN, la lista de similares en shelf simplificada (imagen, marca | nombre, precios, "Agregar") y el botón "Reemplazar productos" fijo abajo.

**Resultado esperado**

El modal muestra todos los elementos del CA3 y "Reemplazar productos" permanece fijo en la parte inferior al hacer scroll en la lista.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)](<B2C-40 APP Evidencias/c-sku-similares.png>)

---

### TC-40-APP-006 - Verificar que el modal muestra un skeleton mientras carga los productos similares [App] [Guest]

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
- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock
- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta

**Data utilizada**

v1.0.7, {HERRAMIENTA_PROXY_APP}, 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000000628239-UN y abre su PDP.
3. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
4. El usuario toca "Ver similares".
5. El sistema abre el modal con un skeleton de carga y, al recibir la respuesta, lo reemplaza por la lista de similares.

**Resultado esperado**

Mientras se obtienen los similares el modal muestra el skeleton de carga.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. Además {HERRAMIENTA_PROXY_APP} está en TBD. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)](<B2C-40 APP Evidencias/c-sku-similares.png>)

---

### TC-40-APP-007 - Verificar que el modal lista solo similares con stock para el método de entrega activo [App] [Guest]

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
- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock
- Hay un método de entrega activo

**Data utilizada**

v1.0.7, 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000000628239-UN y abre su PDP.
3. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
4. El usuario toca "Ver similares".
5. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.
6. El usuario revisa todos los productos de la lista.

**Resultado esperado**

Todos los similares tienen el botón "Agregar" habilitado y precio vigente; no aparece ningún producto sin stock.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)](<B2C-40 APP Evidencias/c-sku-similares.png>)

---

### TC-40-APP-008 - Verificar que sin productos similares se muestra el estado vacío con NAV015 [App] [Guest]

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
- 000000000000675191-UN no tiene stock y Einstein no retorna similares para él

**Data utilizada**

v1.0.7, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP con el botón "Ver similares".
4. El usuario toca "Ver similares".
5. El sistema muestra en el modal la imagen, el mensaje "¡Ups! Lo sentimos. El producto que buscamos no tiene otros similares", "Error NAV015" y el botón "Entendido".
6. El usuario toca "Entendido".
7. El sistema cierra el modal.

**Resultado esperado**

Se muestra el estado vacío con "Error NAV015" y "Entendido" cierra el modal.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_SIN_SIMILARES} = 000000000000675191-UN (Albóndigas Super Pollo 300 g) tiene stock: en la app (2026-10-16, invitado) aparece con 'Agregar', no 'Ver similares'; en la web su PDP además muestra 'Productos similares'. Acción: declarar un SKU sin stock para el que Einstein no devuelva similares. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_SIN_SIMILARES} con 'Agregar' (con stock)](<B2C-40 APP Evidencias/d-sku-sin-similares.png>)

---

### TC-40-APP-009 - Verificar que un error de Einstein muestra el estado de error con NAV016 [App] [Guest]

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
- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request a Einstein Recommendations

**Data utilizada**

v1.0.7, {HERRAMIENTA_PROXY_APP}, 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000000628239-UN y abre su PDP.
3. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
4. El usuario toca "Ver similares".
5. El sistema muestra en el modal la imagen, el mensaje de error, "Error NAV016" y el botón "Entendido".
6. El usuario toca "Entendido".
7. El sistema cierra el modal.

**Resultado esperado**

Se muestra el estado de error con "Error NAV016" y "Entendido" cierra el modal.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. Además {HERRAMIENTA_PROXY_APP} está en TBD. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)](<B2C-40 APP Evidencias/c-sku-similares.png>)

---

### TC-40-APP-010 - Verificar que "Agregar" en un similar muestra "En carro X un." dentro del modal [App] [Guest]

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
- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock

**Data utilizada**

v1.0.7, 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000000628239-UN y abre su PDP.
3. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
4. El usuario toca "Ver similares".
5. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.
6. El usuario toca "Agregar" en el primer producto similar.
7. El sistema muestra en ese producto el bloque "En carro 1 un." con los controles +/−, dentro del bottom sheet.
8. El usuario toca "+" en ese producto.
9. El sistema actualiza el bloque a "En carro 2 un.".

**Resultado esperado**

El producto muestra "En carro 2 un." con controles +/− y el usuario puede seguir revisando los demás similares.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)](<B2C-40 APP Evidencias/c-sku-similares.png>)

---

### TC-40-APP-011 - Verificar que los similares elegidos no se agregan al carro hasta tocar "Reemplazar productos" [App] [Guest]

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
- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock

**Data utilizada**

v1.0.7, 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario anota el contador del ícono del carro.
3. El usuario busca 000000000000628239-UN y abre su PDP.
4. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
5. El usuario toca "Ver similares".
6. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.
7. El usuario toca "Agregar" en el primer producto similar.
8. El sistema muestra en ese producto el bloque "En carro 1 un." con los controles +/−, dentro del bottom sheet.

**Resultado esperado**

El contador del ícono del carro sigue igual al anotado mientras no se toca "Reemplazar productos".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)](<B2C-40 APP Evidencias/c-sku-similares.png>)

---

### TC-40-APP-012 - Verificar que "Reemplazar productos" desde la PDP agrega los similares al carro y cierra el modal [App] [Logueado]

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
- Ubicacion: PDP
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario anota el contador del ícono del carro.
3. El usuario busca 000000000000628239-UN y abre su PDP.
4. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
5. El usuario toca "Ver similares".
6. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.
7. El usuario toca "Agregar" en el primer producto similar.
8. El sistema muestra en ese producto el bloque "En carro 1 un." con los controles +/−, dentro del bottom sheet.
9. El usuario toca "Reemplazar productos".
10. El sistema agrega el producto al carro y cierra el modal.

**Resultado esperado**

El modal se cierra, el contador del carro aumenta en 1 respecto del anotado y el similar aparece en el carro.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)](<B2C-40 APP Evidencias/c-sku-similares.png>)

---

### TC-40-APP-013 - Verificar que reemplazar desde el carro mueve el similar a disponibles y quita el original [App] [Logueado]

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
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000628239-UN x 1, sin stock en la tienda activa (sección de productos no disponibles)

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario toca el ícono del carro.
3. El sistema carga el carrito con 000000000000628239-UN en no disponibles (Faltantes: 1 un).
4. El usuario anota el Subtotal.
5. El usuario toca "Reemplazar" en 000000000000628239-UN.
6. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.
7. El usuario toca "Agregar" en el primer producto similar.
8. El sistema muestra en ese producto el bloque "En carro 1 un." con los controles +/−, dentro del bottom sheet.
9. El usuario toca "Reemplazar productos".
10. El sistema cierra el modal, agrega el similar a la sección de disponibles, elimina 000000000000628239-UN de no disponibles y recalcula los totales.

**Resultado esperado**

El similar aparece en disponibles, 000000000000628239-UN ya no está en no disponibles y el Subtotal aumenta en el precio del similar.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)](<B2C-40 APP Evidencias/c-sku-similares.png>)

---

### TC-40-APP-014 - Verificar que un reemplazo parcial deja el original con la cantidad no cubierta [App] [Logueado]

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
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000628239-UN x 2, sin stock en la tienda activa

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000628239-UN, 2

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario toca el ícono del carro.
3. El sistema carga el carrito con 000000000000628239-UN en no disponibles (Faltantes: 2 un).
4. El usuario toca "Reemplazar" en 000000000000628239-UN.
5. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.
6. El usuario toca "Agregar" en el primer producto similar.
7. El sistema muestra en ese producto el bloque "En carro 1 un." con los controles +/−, dentro del bottom sheet.
8. El usuario toca "Reemplazar productos".
9. El sistema cierra el modal, agrega 1 unidad del similar a disponibles y recalcula los totales.

**Resultado esperado**

El similar aparece en disponibles con 1 un. y 000000000000628239-UN sigue en no disponibles con "Faltantes: 1 un".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)](<B2C-40 APP Evidencias/c-sku-similares.png>)

---

### TC-40-APP-015 - Verificar que cerrar el modal con la X descarta la selección y deja el carro sin cambios [App] [Guest]

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
- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock

**Data utilizada**

v1.0.7, 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario anota el contador del ícono del carro.
3. El usuario busca 000000000000628239-UN y abre su PDP.
4. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
5. El usuario toca "Ver similares".
6. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.
7. El usuario toca "Agregar" en el primer producto similar.
8. El sistema muestra en ese producto el bloque "En carro 1 un." con los controles +/−, dentro del bottom sheet.
9. El usuario toca la X del modal.
10. El sistema cierra el modal y muestra la PDP de 000000000000628239-UN.

**Resultado esperado**

El usuario vuelve a la PDP y el contador del carro sigue igual al anotado.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)](<B2C-40 APP Evidencias/c-sku-similares.png>)

---

### TC-40-APP-016 - Verificar que tocar fuera del modal descarta la selección y deja el carro sin cambios [App] [Guest]

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
- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock

**Data utilizada**

v1.0.7, 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario anota el contador del ícono del carro.
3. El usuario busca 000000000000628239-UN y abre su PDP.
4. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
5. El usuario toca "Ver similares".
6. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.
7. El usuario toca "Agregar" en el primer producto similar.
8. El sistema muestra en ese producto el bloque "En carro 1 un." con los controles +/−, dentro del bottom sheet.
9. El usuario toca fuera del área del bottom sheet.
10. El sistema cierra el modal y muestra la PDP de 000000000000628239-UN.

**Resultado esperado**

El usuario vuelve a la PDP y el contador del carro sigue igual al anotado.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)](<B2C-40 APP Evidencias/c-sku-similares.png>)

---

### TC-40-APP-017 - Verificar que deslizar el bottom sheet hacia abajo descarta la selección y deja el carro sin cambios [App] [Guest]

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
- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock

**Data utilizada**

v1.0.7, 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario anota el contador del ícono del carro.
3. El usuario busca 000000000000628239-UN y abre su PDP.
4. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
5. El usuario toca "Ver similares".
6. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.
7. El usuario toca "Agregar" en el primer producto similar.
8. El sistema muestra en ese producto el bloque "En carro 1 un." con los controles +/−, dentro del bottom sheet.
9. El usuario desliza el bottom sheet hacia abajo.
10. El sistema cierra el modal y muestra la PDP de 000000000000628239-UN.

**Resultado esperado**

El usuario vuelve a la PDP y el contador del carro sigue igual al anotado.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)](<B2C-40 APP Evidencias/c-sku-similares.png>)

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
  "suite": "B2C-40 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-40 APP Test Cases.xlsx",
  "title": "B2C-40 APP - Modal de productos similares (Android) - Evidencias QA",
  "updated_at": "2026-10-16"
 },
 "history": {
  "2026-10-16": [
   "TC-40-APP-001",
   "TC-40-APP-002",
   "TC-40-APP-003",
   "TC-40-APP-004",
   "TC-40-APP-005",
   "TC-40-APP-006",
   "TC-40-APP-007",
   "TC-40-APP-008",
   "TC-40-APP-009",
   "TC-40-APP-010",
   "TC-40-APP-011",
   "TC-40-APP-012",
   "TC-40-APP-013",
   "TC-40-APP-014",
   "TC-40-APP-015",
   "TC-40-APP-016",
   "TC-40-APP-017"
  ]
 },
 "results": [
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se abre el modal \"Productos similares\" para 000000000000628239-UN.",
   "form_factor": "app",
   "id": "TC-40-APP-001",
   "name": "Verificar que \"Ver similares\" en un shelf de navegación abre el modal de productos similares [App] [Guest]",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. (La PLP de {PLP_URL} es carnes_vacuno; el SKU es de Quesos y Fiambres.) La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock\n- 000000000000628239-UN aparece en la PLP de https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)",
     "file": "c-sku-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n3. El sistema carga la PLP con 000000000000628239-UN marcado sin stock y el botón \"Ver similares\" en su shelf.\n4. El usuario toca \"Ver similares\".\n5. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.",
   "test_data": "v1.0.7, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno, 000000000000628239-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se abre el modal \"Productos similares\" para 000000000000628239-UN.",
   "form_factor": "app",
   "id": "TC-40-APP-002",
   "name": "Verificar que \"Ver similares\" en la PDP de un producto sin stock abre el modal [App] [Guest]",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)",
     "file": "c-sku-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000000628239-UN y abre su PDP.\n3. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n4. El usuario toca \"Ver similares\".\n5. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.",
   "test_data": "v1.0.7, 000000000000628239-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se abre el modal \"Productos similares\" para 000000000000628239-UN.",
   "form_factor": "app",
   "id": "TC-40-APP-003",
   "name": "Verificar que \"Reemplazar\" en un producto no disponible del carro abre el modal de similares [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000628239-UN, sin stock en la tienda activa (sección de productos no disponibles)",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)",
     "file": "c-sku-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario toca el ícono del carro.\n3. El sistema carga el carrito con 000000000000628239-UN en la sección de productos no disponibles.\n4. El usuario toca \"Reemplazar\" en 000000000000628239-UN.\n5. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000628239-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El modal aparece como bottom sheet que sube desde la parte inferior, sobre la PDP.",
   "form_factor": "app",
   "id": "TC-40-APP-004",
   "name": "Verificar que el modal de similares se muestra como bottom sheet deslizable desde abajo [App] [Guest]",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)",
     "file": "c-sku-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000000628239-UN y abre su PDP.\n3. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n4. El usuario toca \"Ver similares\".\n5. El sistema despliega el modal desde la parte inferior de la pantalla como bottom sheet sobre la PDP.",
   "test_data": "v1.0.7, 000000000000628239-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El modal muestra todos los elementos del CA3 y \"Reemplazar productos\" permanece fijo en la parte inferior al hacer scroll en la lista.",
   "form_factor": "app",
   "id": "TC-40-APP-005",
   "name": "Verificar que el modal muestra título, X, producto original, similares y \"Reemplazar productos\" [App] [Guest]",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)",
     "file": "c-sku-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000000628239-UN y abre su PDP.\n3. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n4. El usuario toca \"Ver similares\".\n5. El sistema muestra el título \"Productos similares\", el botón cerrar (X), la miniatura y el nombre de 000000000000628239-UN, la lista de similares en shelf simplificada (imagen, marca | nombre, precios, \"Agregar\") y el botón \"Reemplazar productos\" fijo abajo.",
   "test_data": "v1.0.7, 000000000000628239-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Mientras se obtienen los similares el modal muestra el skeleton de carga.",
   "form_factor": "app",
   "id": "TC-40-APP-006",
   "name": "Verificar que el modal muestra un skeleton mientras carga los productos similares [App] [Guest]",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. Además {HERRAMIENTA_PROXY_APP} está en TBD. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock\n- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)",
     "file": "c-sku-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000000628239-UN y abre su PDP.\n3. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n4. El usuario toca \"Ver similares\".\n5. El sistema abre el modal con un skeleton de carga y, al recibir la respuesta, lo reemplaza por la lista de similares.",
   "test_data": "v1.0.7, {HERRAMIENTA_PROXY_APP}, 000000000000628239-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Todos los similares tienen el botón \"Agregar\" habilitado y precio vigente; no aparece ningún producto sin stock.",
   "form_factor": "app",
   "id": "TC-40-APP-007",
   "name": "Verificar que el modal lista solo similares con stock para el método de entrega activo [App] [Guest]",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock\n- Hay un método de entrega activo",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)",
     "file": "c-sku-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000000628239-UN y abre su PDP.\n3. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n4. El usuario toca \"Ver similares\".\n5. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.\n6. El usuario revisa todos los productos de la lista.",
   "test_data": "v1.0.7, 000000000000628239-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra el estado vacío con \"Error NAV015\" y \"Entendido\" cierra el modal.",
   "form_factor": "app",
   "id": "TC-40-APP-008",
   "name": "Verificar que sin productos similares se muestra el estado vacío con NAV015 [App] [Guest]",
   "observation": "Causa: {SKU_SIN_SIMILARES} = 000000000000675191-UN (Albóndigas Super Pollo 300 g) tiene stock: en la app (2026-10-16, invitado) aparece con 'Agregar', no 'Ver similares'; en la web su PDP además muestra 'Productos similares'. Acción: declarar un SKU sin stock para el que Einstein no devuelva similares. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- 000000000000675191-UN no tiene stock y Einstein no retorna similares para él",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_SIN_SIMILARES} con 'Agregar' (con stock)",
     "file": "d-sku-sin-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP con el botón \"Ver similares\".\n4. El usuario toca \"Ver similares\".\n5. El sistema muestra en el modal la imagen, el mensaje \"¡Ups! Lo sentimos. El producto que buscamos no tiene otros similares\", \"Error NAV015\" y el botón \"Entendido\".\n6. El usuario toca \"Entendido\".\n7. El sistema cierra el modal.",
   "test_data": "v1.0.7, 000000000000675191-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra el estado de error con \"Error NAV016\" y \"Entendido\" cierra el modal.",
   "form_factor": "app",
   "id": "TC-40-APP-009",
   "name": "Verificar que un error de Einstein muestra el estado de error con NAV016 [App] [Guest]",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. Además {HERRAMIENTA_PROXY_APP} está en TBD. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request a Einstein Recommendations",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)",
     "file": "c-sku-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000000628239-UN y abre su PDP.\n3. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n4. El usuario toca \"Ver similares\".\n5. El sistema muestra en el modal la imagen, el mensaje de error, \"Error NAV016\" y el botón \"Entendido\".\n6. El usuario toca \"Entendido\".\n7. El sistema cierra el modal.",
   "test_data": "v1.0.7, {HERRAMIENTA_PROXY_APP}, 000000000000628239-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El producto muestra \"En carro 2 un.\" con controles +/− y el usuario puede seguir revisando los demás similares.",
   "form_factor": "app",
   "id": "TC-40-APP-010",
   "name": "Verificar que \"Agregar\" en un similar muestra \"En carro X un.\" dentro del modal [App] [Guest]",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)",
     "file": "c-sku-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000000628239-UN y abre su PDP.\n3. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n4. El usuario toca \"Ver similares\".\n5. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.\n6. El usuario toca \"Agregar\" en el primer producto similar.\n7. El sistema muestra en ese producto el bloque \"En carro 1 un.\" con los controles +/−, dentro del bottom sheet.\n8. El usuario toca \"+\" en ese producto.\n9. El sistema actualiza el bloque a \"En carro 2 un.\".",
   "test_data": "v1.0.7, 000000000000628239-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El contador del ícono del carro sigue igual al anotado mientras no se toca \"Reemplazar productos\".",
   "form_factor": "app",
   "id": "TC-40-APP-011",
   "name": "Verificar que los similares elegidos no se agregan al carro hasta tocar \"Reemplazar productos\" [App] [Guest]",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)",
     "file": "c-sku-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario anota el contador del ícono del carro.\n3. El usuario busca 000000000000628239-UN y abre su PDP.\n4. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n5. El usuario toca \"Ver similares\".\n6. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.\n7. El usuario toca \"Agregar\" en el primer producto similar.\n8. El sistema muestra en ese producto el bloque \"En carro 1 un.\" con los controles +/−, dentro del bottom sheet.",
   "test_data": "v1.0.7, 000000000000628239-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El modal se cierra, el contador del carro aumenta en 1 respecto del anotado y el similar aparece en el carro.",
   "form_factor": "app",
   "id": "TC-40-APP-012",
   "name": "Verificar que \"Reemplazar productos\" desde la PDP agrega los similares al carro y cierra el modal [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)",
     "file": "c-sku-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario anota el contador del ícono del carro.\n3. El usuario busca 000000000000628239-UN y abre su PDP.\n4. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n5. El usuario toca \"Ver similares\".\n6. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.\n7. El usuario toca \"Agregar\" en el primer producto similar.\n8. El sistema muestra en ese producto el bloque \"En carro 1 un.\" con los controles +/−, dentro del bottom sheet.\n9. El usuario toca \"Reemplazar productos\".\n10. El sistema agrega el producto al carro y cierra el modal.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000628239-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El similar aparece en disponibles, 000000000000628239-UN ya no está en no disponibles y el Subtotal aumenta en el precio del similar.",
   "form_factor": "app",
   "id": "TC-40-APP-013",
   "name": "Verificar que reemplazar desde el carro mueve el similar a disponibles y quita el original [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000628239-UN x 1, sin stock en la tienda activa (sección de productos no disponibles)",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)",
     "file": "c-sku-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario toca el ícono del carro.\n3. El sistema carga el carrito con 000000000000628239-UN en no disponibles (Faltantes: 1 un).\n4. El usuario anota el Subtotal.\n5. El usuario toca \"Reemplazar\" en 000000000000628239-UN.\n6. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.\n7. El usuario toca \"Agregar\" en el primer producto similar.\n8. El sistema muestra en ese producto el bloque \"En carro 1 un.\" con los controles +/−, dentro del bottom sheet.\n9. El usuario toca \"Reemplazar productos\".\n10. El sistema cierra el modal, agrega el similar a la sección de disponibles, elimina 000000000000628239-UN de no disponibles y recalcula los totales.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000628239-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El similar aparece en disponibles con 1 un. y 000000000000628239-UN sigue en no disponibles con \"Faltantes: 1 un\".",
   "form_factor": "app",
   "id": "TC-40-APP-014",
   "name": "Verificar que un reemplazo parcial deja el original con la cantidad no cubierta [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000628239-UN x 2, sin stock en la tienda activa",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)",
     "file": "c-sku-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario toca el ícono del carro.\n3. El sistema carga el carrito con 000000000000628239-UN en no disponibles (Faltantes: 2 un).\n4. El usuario toca \"Reemplazar\" en 000000000000628239-UN.\n5. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.\n6. El usuario toca \"Agregar\" en el primer producto similar.\n7. El sistema muestra en ese producto el bloque \"En carro 1 un.\" con los controles +/−, dentro del bottom sheet.\n8. El usuario toca \"Reemplazar productos\".\n9. El sistema cierra el modal, agrega 1 unidad del similar a disponibles y recalcula los totales.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000628239-UN, 2"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El usuario vuelve a la PDP y el contador del carro sigue igual al anotado.",
   "form_factor": "app",
   "id": "TC-40-APP-015",
   "name": "Verificar que cerrar el modal con la X descarta la selección y deja el carro sin cambios [App] [Guest]",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)",
     "file": "c-sku-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario anota el contador del ícono del carro.\n3. El usuario busca 000000000000628239-UN y abre su PDP.\n4. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n5. El usuario toca \"Ver similares\".\n6. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.\n7. El usuario toca \"Agregar\" en el primer producto similar.\n8. El sistema muestra en ese producto el bloque \"En carro 1 un.\" con los controles +/−, dentro del bottom sheet.\n9. El usuario toca la X del modal.\n10. El sistema cierra el modal y muestra la PDP de 000000000000628239-UN.",
   "test_data": "v1.0.7, 000000000000628239-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El usuario vuelve a la PDP y el contador del carro sigue igual al anotado.",
   "form_factor": "app",
   "id": "TC-40-APP-016",
   "name": "Verificar que tocar fuera del modal descarta la selección y deja el carro sin cambios [App] [Guest]",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)",
     "file": "c-sku-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario anota el contador del ícono del carro.\n3. El usuario busca 000000000000628239-UN y abre su PDP.\n4. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n5. El usuario toca \"Ver similares\".\n6. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.\n7. El usuario toca \"Agregar\" en el primer producto similar.\n8. El sistema muestra en ese producto el bloque \"En carro 1 un.\" con los controles +/−, dentro del bottom sheet.\n9. El usuario toca fuera del área del bottom sheet.\n10. El sistema cierra el modal y muestra la PDP de 000000000000628239-UN.",
   "test_data": "v1.0.7, 000000000000628239-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El usuario vuelve a la PDP y el contador del carro sigue igual al anotado.",
   "form_factor": "app",
   "id": "TC-40-APP-017",
   "name": "Verificar que deslizar el bottom sheet hacia abajo descarta la selección y deja el carro sin cambios [App] [Guest]",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000628239-UN (Salchicha sureña San Jorge 1 Kg) tiene stock: en la app (2026-10-16, invitado) la búsqueda del SKU lo muestra con 'Agregar', no 'Ver similares' (igual que en la web desde el 2026-09-28). Acción: declarar un SKU sin stock (para el método de entrega del caso) que tenga similares con stock. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- 000000000000628239-UN no tiene stock para el método de entrega activo y tiene productos similares con stock",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_PRODS_SIMILARES} con 'Agregar' (con stock)",
     "file": "c-sku-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario anota el contador del ícono del carro.\n3. El usuario busca 000000000000628239-UN y abre su PDP.\n4. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n5. El usuario toca \"Ver similares\".\n6. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.\n7. El usuario toca \"Agregar\" en el primer producto similar.\n8. El sistema muestra en ese producto el bloque \"En carro 1 un.\" con los controles +/−, dentro del bottom sheet.\n9. El usuario desliza el bottom sheet hacia abajo.\n10. El sistema cierra el modal y muestra la PDP de 000000000000628239-UN.",
   "test_data": "v1.0.7, 000000000000628239-UN"
  }
 ]
}
-->
