# B2C-122 APP - Modal de productos que podrían agotarse - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-122 APP |
| Última actualización | 2026-10-14 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc v1.0.7 (com.smuapp.unimarc) contra DEV |
| Dispositivo Android | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-122 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 7 |
| Aprobado | 6 |
| **Total** | **13** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-14 | 13 | TC-B2C122-APP-001, TC-B2C122-APP-002, TC-B2C122-APP-003, TC-B2C122-APP-004, TC-B2C122-APP-005, TC-B2C122-APP-006, TC-B2C122-APP-007, TC-B2C122-APP-008, TC-B2C122-APP-009, TC-B2C122-APP-010, TC-B2C122-APP-011, TC-B2C122-APP-012, TC-B2C122-APP-013 |

## Detalle por caso de prueba

### TC-B2C122-APP-001 - Verificar que al cambiar a una dirección de otra tienda abastecedora con carro aparece el modal [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Duración | 52.2 s |
| Spec | tests-app/B2C-122.spec.ts:133 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".

**Resultado esperado**

Se muestra el modal "Algunos productos podrían agotarse" con el texto "Al cambiar la dirección o tipo de despacho, puede que algunos productos no se encuentren en esta ubicación o tienda. ¿Deseas continuar?", los botones "Sí, continuar" y "No, gracias" y el ícono X.

**Resultado obtenido**

Al confirmar Avenida Las Condes 14791, Lo Barnechea (sugerencia de Google para A. Las Conder 14791, Lo Barnechea='A. Las Conder 14791, Lo Barnechea') con el carro cargado se abre 'Algunos productos podrían agotarse' con el texto esperado, 'Sí, continuar', 'No, gracias' y la X.

**Observación**

Al confirmar Avenida Las Condes 14791, Lo Barnechea (sugerencia de Google para A. Las Conder 14791, Lo Barnechea='A. Las Conder 14791, Lo Barnechea') con el carro cargado se abre 'Algunos productos podrían agotarse' con el texto esperado, 'Sí, continuar', 'No, gracias' y la X. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 2 — home con direccion y carro](<B2C-122 APP Evidencias/TC-B2C122-APP-001-android-p02-home-con-direccion-y-carro.png>)

![Android · Paso 5 — detalles de la nueva direccion](<B2C-122 APP Evidencias/TC-B2C122-APP-001-android-p05-detalles-de-la-nueva-direccion.png>)

![Android · Paso 6 — modal algunos productos podrian agotarse](<B2C-122 APP Evidencias/TC-B2C122-APP-001-android-p06-modal-algunos-productos-podrian-agotarse.png>)

![Estado final del caso](<B2C-122 APP Evidencias/TC-B2C122-APP-001-android.png>)

---

### TC-B2C122-APP-002 - Verificar que si la nueva dirección usa la misma tienda abastecedora el cambio se aplica sin modal [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN
- Gral. José Artigas 3250, Ñuñoa es atendida por la misma tienda abastecedora que Calle Uno 23, La Florida

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, Gral. José Artigas 3250, Ñuñoa, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección Gral. José Artigas 3250, Ñuñoa, la selecciona de las sugerencias y toca "Confirmar dirección".

**Resultado esperado**

No se muestra el modal y el Store Locator queda con Gral. José Artigas 3250, Ñuñoa.

**Observación**

Causa: con {DIRECCION_MISMA_TIENDA} (Gral. José Artigas 3250, Ñuñoa) la app igual muestra 'Algunos productos podrían agotarse', y desde la app no se puede comprobar que la atienda la misma tienda abastecedora que {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida). Acción: confirmar o reemplazar {DIRECCION_MISMA_TIENDA} por una dirección verificada de la misma tienda abastecedora. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 2 — home con direccion y carro](<B2C-122 APP Evidencias/TC-B2C122-APP-002-android-p02-home-con-direccion-y-carro.png>)

![Android · Paso 5 — detalles de la direccion de la misma tienda](<B2C-122 APP Evidencias/TC-B2C122-APP-002-android-p05-detalles-de-la-direccion-de-la-misma-tienda.png>)

![Android · Paso 5 — modal de agotarse inesperado](<B2C-122 APP Evidencias/TC-B2C122-APP-002-android-p05-modal-de-agotarse-inesperado.png>)

![Modal que aparece con la dirección de la "misma tienda"](<B2C-122 APP Evidencias/TC-B2C122-APP-002-android.png>)

---

### TC-B2C122-APP-003 - Verificar que No, gracias cierra el modal sin aplicar el cambio [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Duración | 60.7 s |
| Spec | tests-app/B2C-122.spec.ts:162 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "No, gracias".

**Resultado esperado**

El modal se cierra, la dirección activa sigue siendo Calle Uno 23, La Florida y el carro mantiene 000000000000675191-UN.

**Resultado obtenido**

'No, gracias' cierra el modal; al volver al Home el navbar sigue en Calle Uno 23 y el Floating Cart en 1 unidad.

**Observación**

'No, gracias' cierra el modal; al volver al Home el navbar sigue en Calle Uno 23 y el Floating Cart en 1 unidad. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 2 — home con direccion y carro](<B2C-122 APP Evidencias/TC-B2C122-APP-003-android-p02-home-con-direccion-y-carro.png>)

![Android · Paso 5 — detalles de la nueva direccion](<B2C-122 APP Evidencias/TC-B2C122-APP-003-android-p05-detalles-de-la-nueva-direccion.png>)

![Android · Paso 6 — modal algunos productos podrian agotarse](<B2C-122 APP Evidencias/TC-B2C122-APP-003-android-p06-modal-algunos-productos-podrian-agotarse.png>)

![Android · Paso 7 — tras no gracias](<B2C-122 APP Evidencias/TC-B2C122-APP-003-android-p07-tras-no-gracias.png>)

![Estado final del caso](<B2C-122 APP Evidencias/TC-B2C122-APP-003-android.png>)

---

### TC-B2C122-APP-004 - Verificar que la X del modal cierra sin aplicar el cambio [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Duración | 59.7 s |
| Spec | tests-app/B2C-122.spec.ts:162 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca la X del modal.

**Resultado esperado**

El modal se cierra, la dirección activa sigue siendo Calle Uno 23, La Florida y el carro no cambia.

**Resultado obtenido**

La X cierra el modal; al volver al Home el navbar sigue en Calle Uno 23 y el Floating Cart en 1 unidad.

**Observación**

La X cierra el modal; al volver al Home el navbar sigue en Calle Uno 23 y el Floating Cart en 1 unidad. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 2 — home con direccion y carro](<B2C-122 APP Evidencias/TC-B2C122-APP-004-android-p02-home-con-direccion-y-carro.png>)

![Android · Paso 5 — detalles de la nueva direccion](<B2C-122 APP Evidencias/TC-B2C122-APP-004-android-p05-detalles-de-la-nueva-direccion.png>)

![Android · Paso 6 — modal algunos productos podrian agotarse](<B2C-122 APP Evidencias/TC-B2C122-APP-004-android-p06-modal-algunos-productos-podrian-agotarse.png>)

![Android · Paso 7 — tras x](<B2C-122 APP Evidencias/TC-B2C122-APP-004-android-p07-tras-x.png>)

![Estado final del caso](<B2C-122 APP Evidencias/TC-B2C122-APP-004-android.png>)

---

### TC-B2C122-APP-005 - Verificar que Sí, continuar reemplaza el botón por un spinner mientras procesa [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN
- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {HERRAMIENTA_PROXY_APP}, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".

**Resultado esperado**

El botón "Sí, continuar" se reemplaza por un spinner de carga mientras se procesa el cambio.

**Observación**

Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: cargar la herramienta de proxy para simular red lenta. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C122-APP-006 - Verificar que un error al procesar muestra el toast y el modal sigue abierto para reintentar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {SETEO_ENTREGA_API_ENDPOINT}

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {HERRAMIENTA_PROXY_APP}, {SETEO_ENTREGA_API_ENDPOINT}, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".

**Resultado esperado**

Se muestra el toast "Lo sentimos, no pudimos procesar tu solicitud. Inténtalo nuevamente." con X; el modal sigue abierto con "Sí, continuar" y "No, gracias" disponibles.

**Observación**

Causa: {HERRAMIENTA_PROXY_APP} y {SETEO_ENTREGA_API_ENDPOINT} están en TBD en el Excel de data. Acción: cargar el proxy y el endpoint a forzar con error. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C122-APP-007 - Verificar que si todo está disponible y hay horarios el cambio se aplica y se mantiene la página [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Duración | 57.4 s |
| Spec | tests-app/B2C-122.spec.ts:177 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN
- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- A. Las Conder 14791, Lo Barnechea tiene SLAs disponibles

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".

**Resultado esperado**

El modal se cierra, el Store Locator del header muestra A. Las Conder 14791, Lo Barnechea y el usuario permanece en la página desde donde abrió el modal.

**Resultado obtenido**

Tras 'Sí, continuar' el modal se cierra y el navbar muestra Avenida Las Condes 14791 en el Home. Como invitado se abre antes el prompt 'Iniciar sesión o registrarse' (TC-009), que se cerró.

**Observación**

Tras 'Sí, continuar' el modal se cierra y el navbar muestra Avenida Las Condes 14791 en el Home. Como invitado se abre antes el prompt 'Iniciar sesión o registrarse' (TC-009), que se cerró. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 2 — home con direccion y carro](<B2C-122 APP Evidencias/TC-B2C122-APP-007-android-p02-home-con-direccion-y-carro.png>)

![Android · Paso 5 — detalles de la nueva direccion](<B2C-122 APP Evidencias/TC-B2C122-APP-007-android-p05-detalles-de-la-nueva-direccion.png>)

![Android · Paso 6 — modal algunos productos podrian agotarse](<B2C-122 APP Evidencias/TC-B2C122-APP-007-android-p06-modal-algunos-productos-podrian-agotarse.png>)

![Android · Paso 7 — prompt de inicio de sesion](<B2C-122 APP Evidencias/TC-B2C122-APP-007-android-p07-prompt-de-inicio-de-sesion.png>)

![Estado final del caso](<B2C-122 APP Evidencias/TC-B2C122-APP-007-android.png>)

---

### TC-B2C122-APP-008 - Verificar que si hay productos no disponibles en la nueva tienda se activa ese flujo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN
- El carro también contiene {SKU_STOCK_SOLO_TIENDA_A}, sin stock en la tienda de A. Las Conder 14791, Lo Barnechea

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".

**Resultado esperado**

Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.

**Observación**

Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU sin stock en la tienda de {DIRECCION_OTRA_TIENDA}. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C122-APP-009 - Verificar que tras el cambio el invitado ve el prompt de login y puede seguir como invitado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Duración | 59.6 s |
| Spec | tests-app/B2C-122.spec.ts:195 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".
8. El sistema muestra el prompt de inicio de sesión.
9. El usuario cierra el prompt sin iniciar sesión.

**Resultado esperado**

Se muestra el prompt de inicio de sesión y, al cerrarlo, el usuario sigue como invitado con A. Las Conder 14791, Lo Barnechea seteada.

**Resultado obtenido**

Tras 'Sí, continuar' aparece 'Iniciar sesión o registrarse'; al cerrarlo el navbar muestra Avenida Las Condes 14791 y Mi cuenta sigue ofreciendo 'Iniciar sesión' (invitado).

**Observación**

Tras 'Sí, continuar' aparece 'Iniciar sesión o registrarse'; al cerrarlo el navbar muestra Avenida Las Condes 14791 y Mi cuenta sigue ofreciendo 'Iniciar sesión' (invitado). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 2 — home con direccion y carro](<B2C-122 APP Evidencias/TC-B2C122-APP-009-android-p02-home-con-direccion-y-carro.png>)

![Android · Paso 5 — detalles de la nueva direccion](<B2C-122 APP Evidencias/TC-B2C122-APP-009-android-p05-detalles-de-la-nueva-direccion.png>)

![Android · Paso 6 — modal algunos productos podrian agotarse](<B2C-122 APP Evidencias/TC-B2C122-APP-009-android-p06-modal-algunos-productos-podrian-agotarse.png>)

![Android · Paso 8 — prompt de inicio de sesion](<B2C-122 APP Evidencias/TC-B2C122-APP-009-android-p08-prompt-de-inicio-de-sesion.png>)

![Estado final del caso](<B2C-122 APP Evidencias/TC-B2C122-APP-009-android.png>)

---

### TC-B2C122-APP-010 - Verificar que un invitado que inicia sesión desde el prompt pasa al flujo invitado a logueado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".
8. El sistema muestra el prompt de inicio de sesión.
9. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.

**Resultado esperado**

Se activa la transición invitado → logueado (B2C-124): se solicita OTP para confirmar la dirección heredada.

**Observación**

Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C122-APP-011 - Verificar que el modal también aparece al cambiar la tienda de retiro con carro [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN
- La tienda abastecedora de Unimarc Las Condes es distinta a la activa
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

v1.0.7, iOS, 000000000000675191-UN, Unimarc Las Condes, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El usuario toca la pestaña "Retiro en tienda".
5. El usuario selecciona la tienda Unimarc Las Condes y toca "Confirmar tienda".
6. El sistema muestra el modal "Autenticación requerida" y envía el código OTP al correo.
7. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

Se muestra el modal "Algunos productos podrían agotarse" antes de aplicar el cambio de tienda de retiro.

**Observación**

Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C122-APP-012 - Verificar que tras cerrar el modal con «No, gracias» o X el cliente regresa al Store Locator sin cambios [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Duración | 80.8 s |
| Spec | tests-app/B2C-122.spec.ts:212 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "No, gracias".
8. Verificar que el modal "Algunos productos podrían agotarse" se cierra.
9. Verificar que el Store Locator permanece abierto (el usuario sigue en la pantalla de selección de dirección).
10. Verificar que la dirección activa en el navbar sigue siendo Calle Uno 23, La Florida.
11. Repetir pasos 6–10 usando el ícono X en lugar de "No, gracias".

**Resultado esperado**

Al cerrar con «No, gracias» o X: el modal "No se te escapen" se cierra, el Store Locator permanece abierto en el estado previo (pantalla anterior), la dirección activa en el navbar sigue siendo Calle Uno 23, La Florida y el carro mantiene 000000000000675191-UN sin modificaciones.

**Resultado obtenido**

Con 'No, gracias' y con la X el modal se cierra y queda abierta 'Detalles de la dirección' (pantalla anterior del Store Locator); el navbar sigue en Calle Uno 23 y el carro en 1 unidad. El modal se titula 'Algunos productos podrían agotarse', no 'No se te escapen' como dice el esperado.

**Observación**

Con 'No, gracias' y con la X el modal se cierra y queda abierta 'Detalles de la dirección' (pantalla anterior del Store Locator); el navbar sigue en Calle Uno 23 y el carro en 1 unidad. El modal se titula 'Algunos productos podrían agotarse', no 'No se te escapen' como dice el esperado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 2 — home con direccion y carro](<B2C-122 APP Evidencias/TC-B2C122-APP-012-android-p02-home-con-direccion-y-carro.png>)

![Android · Paso 5 — detalles de la nueva direccion](<B2C-122 APP Evidencias/TC-B2C122-APP-012-android-p05-detalles-de-la-nueva-direccion.png>)

![Android · Paso 6 — modal algunos productos podrian agotarse](<B2C-122 APP Evidencias/TC-B2C122-APP-012-android-p06-modal-algunos-productos-podrian-agotarse.png>)

![Android · Paso 7 — store locator tras no gracias](<B2C-122 APP Evidencias/TC-B2C122-APP-012-android-p07-store-locator-tras-no-gracias.png>)

![Android · Paso 11 — store locator tras x](<B2C-122 APP Evidencias/TC-B2C122-APP-012-android-p11-store-locator-tras-x.png>)

![Estado final del caso](<B2C-122 APP Evidencias/TC-B2C122-APP-012-android.png>)

---

### TC-B2C122-APP-013 - Verificar que «No, gracias» tras un error cierra el modal sin aplicar el cambio [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {SETEO_ENTREGA_API_ENDPOINT}

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {HERRAMIENTA_PROXY_APP}, {SETEO_ENTREGA_API_ENDPOINT}, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".
8. El sistema muestra el toast de error y restaura los botones del modal.
9. El usuario toca "No, gracias".
10. Verificar que el modal "No se te escapen" se cierra.
11. Verificar que la dirección activa en el navbar sigue siendo Calle Uno 23, La Florida.
12. Verificar que el carro mantiene 000000000000675191-UN sin modificaciones.
13. Verificar que no se aplica ningún cambio de tienda abastecedora.

**Resultado esperado**

El modal se cierra. La dirección activa sigue siendo Calle Uno 23, La Florida. El carro mantiene 000000000000675191-UN intacto. El cliente regresa a la pantalla anterior sin ningún cambio de dirección aplicado.

**Observación**

Causa: {HERRAMIENTA_PROXY_APP} y {SETEO_ENTREGA_API_ENDPOINT} están en TBD en el Excel de data. Acción: cargar el proxy y el endpoint a forzar con error. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)"
  },
  "environment": "App Unimarc v1.0.7 (com.smuapp.unimarc) contra DEV",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-122 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-122 APP Test Cases.xlsx",
  "title": "B2C-122 APP - Modal de productos que podrían agotarse - Evidencias QA",
  "updated_at": "2026-10-14"
 },
 "history": {
  "2026-10-14": [
   "TC-B2C122-APP-001",
   "TC-B2C122-APP-002",
   "TC-B2C122-APP-003",
   "TC-B2C122-APP-004",
   "TC-B2C122-APP-005",
   "TC-B2C122-APP-006",
   "TC-B2C122-APP-007",
   "TC-B2C122-APP-008",
   "TC-B2C122-APP-009",
   "TC-B2C122-APP-010",
   "TC-B2C122-APP-011",
   "TC-B2C122-APP-012",
   "TC-B2C122-APP-013"
  ]
 },
 "results": [
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "duration_s": 52.2,
   "executed_at": "2026-10-14",
   "expected": "Se muestra el modal \"Algunos productos podrían agotarse\" con el texto \"Al cambiar la dirección o tipo de despacho, puede que algunos productos no se encuentren en esta ubicación o tienda. ¿Deseas continuar?\", los botones \"Sí, continuar\" y \"No, gracias\" y el ícono X.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-001",
   "name": "Verificar que al cambiar a una dirección de otra tienda abastecedora con carro aparece el modal [App] [Guest]",
   "observation": "Al confirmar Avenida Las Condes 14791, Lo Barnechea (sugerencia de Google para A. Las Conder 14791, Lo Barnechea='A. Las Conder 14791, Lo Barnechea') con el carro cargado se abre 'Algunos productos podrían agotarse' con el texto esperado, 'Sí, continuar', 'No, gracias' y la X. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Al confirmar Avenida Las Condes 14791, Lo Barnechea (sugerencia de Google para A. Las Conder 14791, Lo Barnechea='A. Las Conder 14791, Lo Barnechea') con el carro cargado se abre 'Algunos productos podrían agotarse' con el texto esperado, 'Sí, continuar', 'No, gracias' y la X.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con direccion y carro",
     "file": "TC-B2C122-APP-001-android-p02-home-con-direccion-y-carro.png"
    },
    {
     "caption": "Android · Paso 5 — detalles de la nueva direccion",
     "file": "TC-B2C122-APP-001-android-p05-detalles-de-la-nueva-direccion.png"
    },
    {
     "caption": "Android · Paso 6 — modal algunos productos podrian agotarse",
     "file": "TC-B2C122-APP-001-android-p06-modal-algunos-productos-podrian-agotarse.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C122-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-122.spec.ts:133",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 000000000000675191-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "No se muestra el modal y el Store Locator queda con Gral. José Artigas 3250, Ñuñoa.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-002",
   "name": "Verificar que si la nueva dirección usa la misma tienda abastecedora el cambio se aplica sin modal [App] [Guest]",
   "observation": "Causa: con {DIRECCION_MISMA_TIENDA} (Gral. José Artigas 3250, Ñuñoa) la app igual muestra 'Algunos productos podrían agotarse', y desde la app no se puede comprobar que la atienda la misma tienda abastecedora que {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida). Acción: confirmar o reemplazar {DIRECCION_MISMA_TIENDA} por una dirección verificada de la misma tienda abastecedora. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN\n- Gral. José Artigas 3250, Ñuñoa es atendida por la misma tienda abastecedora que Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con direccion y carro",
     "file": "TC-B2C122-APP-002-android-p02-home-con-direccion-y-carro.png"
    },
    {
     "caption": "Android · Paso 5 — detalles de la direccion de la misma tienda",
     "file": "TC-B2C122-APP-002-android-p05-detalles-de-la-direccion-de-la-misma-tienda.png"
    },
    {
     "caption": "Android · Paso 5 — modal de agotarse inesperado",
     "file": "TC-B2C122-APP-002-android-p05-modal-de-agotarse-inesperado.png"
    },
    {
     "caption": "Modal que aparece con la dirección de la \"misma tienda\"",
     "file": "TC-B2C122-APP-002-android.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección Gral. José Artigas 3250, Ñuñoa, la selecciona de las sugerencias y toca \"Confirmar dirección\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, Gral. José Artigas 3250, Ñuñoa, 000000000000675191-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "duration_s": 60.7,
   "executed_at": "2026-10-14",
   "expected": "El modal se cierra, la dirección activa sigue siendo Calle Uno 23, La Florida y el carro mantiene 000000000000675191-UN.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-003",
   "name": "Verificar que No, gracias cierra el modal sin aplicar el cambio [App] [Guest]",
   "observation": "'No, gracias' cierra el modal; al volver al Home el navbar sigue en Calle Uno 23 y el Floating Cart en 1 unidad. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "'No, gracias' cierra el modal; al volver al Home el navbar sigue en Calle Uno 23 y el Floating Cart en 1 unidad.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con direccion y carro",
     "file": "TC-B2C122-APP-003-android-p02-home-con-direccion-y-carro.png"
    },
    {
     "caption": "Android · Paso 5 — detalles de la nueva direccion",
     "file": "TC-B2C122-APP-003-android-p05-detalles-de-la-nueva-direccion.png"
    },
    {
     "caption": "Android · Paso 6 — modal algunos productos podrian agotarse",
     "file": "TC-B2C122-APP-003-android-p06-modal-algunos-productos-podrian-agotarse.png"
    },
    {
     "caption": "Android · Paso 7 — tras no gracias",
     "file": "TC-B2C122-APP-003-android-p07-tras-no-gracias.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C122-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-122.spec.ts:162",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"No, gracias\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 000000000000675191-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "duration_s": 59.7,
   "executed_at": "2026-10-14",
   "expected": "El modal se cierra, la dirección activa sigue siendo Calle Uno 23, La Florida y el carro no cambia.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-004",
   "name": "Verificar que la X del modal cierra sin aplicar el cambio [App] [Guest]",
   "observation": "La X cierra el modal; al volver al Home el navbar sigue en Calle Uno 23 y el Floating Cart en 1 unidad. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "La X cierra el modal; al volver al Home el navbar sigue en Calle Uno 23 y el Floating Cart en 1 unidad.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con direccion y carro",
     "file": "TC-B2C122-APP-004-android-p02-home-con-direccion-y-carro.png"
    },
    {
     "caption": "Android · Paso 5 — detalles de la nueva direccion",
     "file": "TC-B2C122-APP-004-android-p05-detalles-de-la-nueva-direccion.png"
    },
    {
     "caption": "Android · Paso 6 — modal algunos productos podrian agotarse",
     "file": "TC-B2C122-APP-004-android-p06-modal-algunos-productos-podrian-agotarse.png"
    },
    {
     "caption": "Android · Paso 7 — tras x",
     "file": "TC-B2C122-APP-004-android-p07-tras-x.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C122-APP-004-android.png"
    }
   ],
   "spec": "tests-app/B2C-122.spec.ts:162",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca la X del modal.",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 000000000000675191-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "El botón \"Sí, continuar\" se reemplaza por un spinner de carga mientras se procesa el cambio.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-005",
   "name": "Verificar que Sí, continuar reemplaza el botón por un spinner mientras procesa [App] [Guest]",
   "observation": "Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: cargar la herramienta de proxy para simular red lenta. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN\n- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {HERRAMIENTA_PROXY_APP}, 000000000000675191-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se muestra el toast \"Lo sentimos, no pudimos procesar tu solicitud. Inténtalo nuevamente.\" con X; el modal sigue abierto con \"Sí, continuar\" y \"No, gracias\" disponibles.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-006",
   "name": "Verificar que un error al procesar muestra el toast y el modal sigue abierto para reintentar [App] [Guest]",
   "observation": "Causa: {HERRAMIENTA_PROXY_APP} y {SETEO_ENTREGA_API_ENDPOINT} están en TBD en el Excel de data. Acción: cargar el proxy y el endpoint a forzar con error. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {SETEO_ENTREGA_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {HERRAMIENTA_PROXY_APP}, {SETEO_ENTREGA_API_ENDPOINT}, 000000000000675191-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "duration_s": 57.4,
   "executed_at": "2026-10-14",
   "expected": "El modal se cierra, el Store Locator del header muestra A. Las Conder 14791, Lo Barnechea y el usuario permanece en la página desde donde abrió el modal.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-007",
   "name": "Verificar que si todo está disponible y hay horarios el cambio se aplica y se mantiene la página [App] [Guest]",
   "observation": "Tras 'Sí, continuar' el modal se cierra y el navbar muestra Avenida Las Condes 14791 en el Home. Como invitado se abre antes el prompt 'Iniciar sesión o registrarse' (TC-009), que se cerró. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Tras 'Sí, continuar' el modal se cierra y el navbar muestra Avenida Las Condes 14791 en el Home. Como invitado se abre antes el prompt 'Iniciar sesión o registrarse' (TC-009), que se cerró.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN\n- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- A. Las Conder 14791, Lo Barnechea tiene SLAs disponibles",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con direccion y carro",
     "file": "TC-B2C122-APP-007-android-p02-home-con-direccion-y-carro.png"
    },
    {
     "caption": "Android · Paso 5 — detalles de la nueva direccion",
     "file": "TC-B2C122-APP-007-android-p05-detalles-de-la-nueva-direccion.png"
    },
    {
     "caption": "Android · Paso 6 — modal algunos productos podrian agotarse",
     "file": "TC-B2C122-APP-007-android-p06-modal-algunos-productos-podrian-agotarse.png"
    },
    {
     "caption": "Android · Paso 7 — prompt de inicio de sesion",
     "file": "TC-B2C122-APP-007-android-p07-prompt-de-inicio-de-sesion.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C122-APP-007-android.png"
    }
   ],
   "spec": "tests-app/B2C-122.spec.ts:177",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 000000000000675191-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-008",
   "name": "Verificar que si hay productos no disponibles en la nueva tienda se activa ese flujo [App] [Guest]",
   "observation": "Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU sin stock en la tienda de {DIRECCION_OTRA_TIENDA}. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN\n- El carro también contiene {SKU_STOCK_SOLO_TIENDA_A}, sin stock en la tienda de A. Las Conder 14791, Lo Barnechea",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "duration_s": 59.6,
   "executed_at": "2026-10-14",
   "expected": "Se muestra el prompt de inicio de sesión y, al cerrarlo, el usuario sigue como invitado con A. Las Conder 14791, Lo Barnechea seteada.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-009",
   "name": "Verificar que tras el cambio el invitado ve el prompt de login y puede seguir como invitado [App] [Guest]",
   "observation": "Tras 'Sí, continuar' aparece 'Iniciar sesión o registrarse'; al cerrarlo el navbar muestra Avenida Las Condes 14791 y Mi cuenta sigue ofreciendo 'Iniciar sesión' (invitado). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Tras 'Sí, continuar' aparece 'Iniciar sesión o registrarse'; al cerrarlo el navbar muestra Avenida Las Condes 14791 y Mi cuenta sigue ofreciendo 'Iniciar sesión' (invitado).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con direccion y carro",
     "file": "TC-B2C122-APP-009-android-p02-home-con-direccion-y-carro.png"
    },
    {
     "caption": "Android · Paso 5 — detalles de la nueva direccion",
     "file": "TC-B2C122-APP-009-android-p05-detalles-de-la-nueva-direccion.png"
    },
    {
     "caption": "Android · Paso 6 — modal algunos productos podrian agotarse",
     "file": "TC-B2C122-APP-009-android-p06-modal-algunos-productos-podrian-agotarse.png"
    },
    {
     "caption": "Android · Paso 8 — prompt de inicio de sesion",
     "file": "TC-B2C122-APP-009-android-p08-prompt-de-inicio-de-sesion.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C122-APP-009-android.png"
    }
   ],
   "spec": "tests-app/B2C-122.spec.ts:195",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".\n8. El sistema muestra el prompt de inicio de sesión.\n9. El usuario cierra el prompt sin iniciar sesión.",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 000000000000675191-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se activa la transición invitado → logueado (B2C-124): se solicita OTP para confirmar la dirección heredada.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-010",
   "name": "Verificar que un invitado que inicia sesión desde el prompt pasa al flujo invitado a logueado [App] [Guest]",
   "observation": "Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".\n8. El sistema muestra el prompt de inicio de sesión.\n9. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se muestra el modal \"Algunos productos podrían agotarse\" antes de aplicar el cambio de tienda de retiro.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-011",
   "name": "Verificar que el modal también aparece al cambiar la tienda de retiro con carro [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN\n- La tienda abastecedora de Unimarc Las Condes es distinta a la activa\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El usuario toca la pestaña \"Retiro en tienda\".\n5. El usuario selecciona la tienda Unimarc Las Condes y toca \"Confirmar tienda\".\n6. El sistema muestra el modal \"Autenticación requerida\" y envía el código OTP al correo.\n7. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "v1.0.7, iOS, 000000000000675191-UN, Unimarc Las Condes, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "duration_s": 80.8,
   "executed_at": "2026-10-14",
   "expected": "Al cerrar con «No, gracias» o X: el modal \"No se te escapen\" se cierra, el Store Locator permanece abierto en el estado previo (pantalla anterior), la dirección activa en el navbar sigue siendo Calle Uno 23, La Florida y el carro mantiene 000000000000675191-UN sin modificaciones.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-012",
   "name": "Verificar que tras cerrar el modal con «No, gracias» o X el cliente regresa al Store Locator sin cambios [App] [Guest]",
   "observation": "Con 'No, gracias' y con la X el modal se cierra y queda abierta 'Detalles de la dirección' (pantalla anterior del Store Locator); el navbar sigue en Calle Uno 23 y el carro en 1 unidad. El modal se titula 'Algunos productos podrían agotarse', no 'No se te escapen' como dice el esperado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Con 'No, gracias' y con la X el modal se cierra y queda abierta 'Detalles de la dirección' (pantalla anterior del Store Locator); el navbar sigue en Calle Uno 23 y el carro en 1 unidad. El modal se titula 'Algunos productos podrían agotarse', no 'No se te escapen' como dice el esperado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con direccion y carro",
     "file": "TC-B2C122-APP-012-android-p02-home-con-direccion-y-carro.png"
    },
    {
     "caption": "Android · Paso 5 — detalles de la nueva direccion",
     "file": "TC-B2C122-APP-012-android-p05-detalles-de-la-nueva-direccion.png"
    },
    {
     "caption": "Android · Paso 6 — modal algunos productos podrian agotarse",
     "file": "TC-B2C122-APP-012-android-p06-modal-algunos-productos-podrian-agotarse.png"
    },
    {
     "caption": "Android · Paso 7 — store locator tras no gracias",
     "file": "TC-B2C122-APP-012-android-p07-store-locator-tras-no-gracias.png"
    },
    {
     "caption": "Android · Paso 11 — store locator tras x",
     "file": "TC-B2C122-APP-012-android-p11-store-locator-tras-x.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C122-APP-012-android.png"
    }
   ],
   "spec": "tests-app/B2C-122.spec.ts:212",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"No, gracias\".\n8. Verificar que el modal \"Algunos productos podrían agotarse\" se cierra.\n9. Verificar que el Store Locator permanece abierto (el usuario sigue en la pantalla de selección de dirección).\n10. Verificar que la dirección activa en el navbar sigue siendo Calle Uno 23, La Florida.\n11. Repetir pasos 6–10 usando el ícono X en lugar de \"No, gracias\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 000000000000675191-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "El modal se cierra. La dirección activa sigue siendo Calle Uno 23, La Florida. El carro mantiene 000000000000675191-UN intacto. El cliente regresa a la pantalla anterior sin ningún cambio de dirección aplicado.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-013",
   "name": "Verificar que «No, gracias» tras un error cierra el modal sin aplicar el cambio [App] [Guest]",
   "observation": "Causa: {HERRAMIENTA_PROXY_APP} y {SETEO_ENTREGA_API_ENDPOINT} están en TBD en el Excel de data. Acción: cargar el proxy y el endpoint a forzar con error. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {SETEO_ENTREGA_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".\n8. El sistema muestra el toast de error y restaura los botones del modal.\n9. El usuario toca \"No, gracias\".\n10. Verificar que el modal \"No se te escapen\" se cierra.\n11. Verificar que la dirección activa en el navbar sigue siendo Calle Uno 23, La Florida.\n12. Verificar que el carro mantiene 000000000000675191-UN sin modificaciones.\n13. Verificar que no se aplica ningún cambio de tienda abastecedora.",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {HERRAMIENTA_PROXY_APP}, {SETEO_ENTREGA_API_ENDPOINT}, 000000000000675191-UN"
  }
 ]
}
-->
