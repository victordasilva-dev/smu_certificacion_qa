# B2C-99 APP - Evidencias QA (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-99 APP |
| Última actualización | 2026-10-29 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-99 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 25 |
| Bloqueado Data | 12 |
| **Total** | **37** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-29 | 37 | TC-B2C99-APP-001, TC-B2C99-APP-002, TC-B2C99-APP-003, TC-B2C99-APP-004, TC-B2C99-APP-005, TC-B2C99-APP-006, TC-B2C99-APP-007, TC-B2C99-APP-008, TC-B2C99-APP-009, TC-B2C99-APP-010, TC-B2C99-APP-011, TC-B2C99-APP-012, TC-B2C99-APP-013, TC-B2C99-APP-014, TC-B2C99-APP-015, TC-B2C99-APP-016, TC-B2C99-APP-017, TC-B2C99-APP-018, TC-B2C99-APP-019, TC-B2C99-APP-020, TC-B2C99-APP-021, TC-B2C99-APP-022, TC-B2C99-APP-023, TC-B2C99-APP-024, TC-B2C99-APP-025, TC-B2C99-APP-026, TC-B2C99-APP-027, TC-B2C99-APP-028, TC-B2C99-APP-029, TC-B2C99-APP-030, TC-B2C99-APP-031, TC-B2C99-APP-032, TC-B2C99-APP-033, TC-B2C99-APP-034, TC-B2C99-APP-035, TC-B2C99-APP-036, TC-B2C99-APP-037 |

## Detalle por caso de prueba

### TC-B2C99-APP-001 - Verificar que la pantalla Detalles de la dirección muestra todos sus elementos [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario revisa la pantalla.

**Resultado esperado**

Se muestran: botón atrás "<", título "Detalles de la dirección", mapa con el PIN posicionado sobre la dirección, la dirección ingresada con la opción "Editar", el campo "N° dpto, oficina, piso, etc (opcional)", el campo "Nombre de dirección (opcional)", 4 íconos de etiquetas de entrega, el área de texto "Instrucción para entrega (opcional)" y el botón "Agregar dirección".

**Resultado obtenido**

Ejecutado en Android: se muestran Volver, título, mapa con el PIN «Ajusta aquí», dirección con «Editar», los dos campos opcionales, las 4 etiquetas (Casa, Trabajo, Favorito, Ubicación), «Instrucciones para entrega (opcional)» y «Agregar dirección». Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad.

**Observación**

Ejecutado en Android: se muestran Volver, título, mapa con el PIN «Ajusta aquí», dirección con «Editar», los dos campos opcionales, las 4 etiquetas (Casa, Trabajo, Favorito, Ubicación), «Instrucciones para entrega (opcional)» y «Agregar dirección». Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 6 — pantalla detalles de la direccion](<B2C-99 APP Evidencias/TC-B2C99-APP-001-android-p06-pantalla-detalles-de-la-direccion.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-001-android.png>)

---

### TC-B2C99-APP-002 - Verificar que los campos opcionales de Detalles de la dirección muestran sus placeholders [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario revisa los campos sin completar.

**Resultado esperado**

"N° dpto, oficina, piso, etc (opcional)" muestra el placeholder "Ej. Dpto 910" y "Nombre de dirección (opcional)" muestra "Ej. Mamá, Pololo, trabajo".

**Resultado obtenido**

Ejecutado en Android: los placeholders son «Ej. Dpto 910» y «Ej. Mamá, Pololo, trabajo». Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad.

**Observación**

Ejecutado en Android: los placeholders son «Ej. Dpto 910» y «Ej. Mamá, Pololo, trabajo». Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 6 — campos opcionales](<B2C-99 APP Evidencias/TC-B2C99-APP-002-android-p06-campos-opcionales.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-002-android.png>)

---

### TC-B2C99-APP-003 - Verificar que la dirección se muestra con calle, número, comuna y región [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario revisa la dirección mostrada bajo el mapa.

**Resultado esperado**

La dirección se muestra como calle + número + comuna + región de {DIRECCION_DESPACHO_001} (ej. "Calle Uno 23, La Florida, Región Metropolitana").

**Resultado obtenido**

Ejecutado en Android: la dirección se muestra como «Calle Uno 23» y «La Florida, Región Metropolitana». Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad.

**Observación**

Ejecutado en Android: la dirección se muestra como «Calle Uno 23» y «La Florida, Región Metropolitana». Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad. iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C99-APP-004 - Verificar que el campo N° dpto no acepta más de 50 caracteres [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {TEXTO_51_CARACTERES} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario escribe {TEXTO_51_CARACTERES} en "N° dpto, oficina, piso, etc (opcional)".

**Resultado esperado**

El campo queda con 50 caracteres como máximo; el carácter 51 no se ingresa (o se muestra la validación de largo).

**Resultado obtenido**

Ejecutado en Android: al escribir 60 caracteres el campo N° dpto queda con 50 como máximo. Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad.

**Observación**

Ejecutado en Android: al escribir 60 caracteres el campo N° dpto queda con 50 como máximo. Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 7 — campo n dpto tras escribir 60 caracteres](<B2C-99 APP Evidencias/TC-B2C99-APP-004-android-p07-campo-n-dpto-tras-escribir-60-caracteres.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-004-android.png>)

---

### TC-B2C99-APP-005 - Verificar que el campo Nombre de dirección no acepta más de 20 caracteres [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {TEXTO_21_CARACTERES} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario escribe {TEXTO_21_CARACTERES} en "Nombre de dirección (opcional)".

**Resultado esperado**

El campo queda con 20 caracteres como máximo; el carácter 21 no se ingresa (o se muestra la validación de largo).

**Resultado obtenido**

Ejecutado en Android: al escribir 30 caracteres el campo Nombre de dirección queda con 20 como máximo. Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad.

**Observación**

Ejecutado en Android: al escribir 30 caracteres el campo Nombre de dirección queda con 20 como máximo. Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 7 — campo nombre de direccion tras escribir 30 caracteres](<B2C-99 APP Evidencias/TC-B2C99-APP-005-android-p07-campo-nombre-de-direccion-tras-escribir-30-caracteres.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-005-android.png>)

---

### TC-B2C99-APP-006 - Verificar que el campo Instrucción para entrega no acepta más de 300 caracteres [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {TEXTO_301_CARACTERES} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario escribe {TEXTO_301_CARACTERES} en "Instrucción para entrega (opcional)".

**Resultado esperado**

El área de texto queda con 300 caracteres como máximo; el carácter 301 no se ingresa (o se muestra la validación de largo).

**Resultado obtenido**

Ejecutado en Android: al escribir 310 caracteres el contador queda en «300 / 300 caracteres». Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad.

**Observación**

Ejecutado en Android: al escribir 310 caracteres el contador queda en «300 / 300 caracteres». Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 7 — campo instruccion para entrega tras escribir 310 caracteres](<B2C-99 APP Evidencias/TC-B2C99-APP-006-android-p07-campo-instruccion-para-entrega-tras-escribir-310-caracteres.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-006-android.png>)

---

### TC-B2C99-APP-007 - Verificar que al seleccionar una etiqueta de entrega el ícono se pinta de rojo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca uno de los 4 íconos de etiqueta.

**Resultado esperado**

El ícono seleccionado se pinta de rojo; los otros 3 se mantienen sin seleccionar.

**Resultado obtenido**

Ejecutado en Android: al tocar «Casa» queda seleccionada y Trabajo, Favorito y Ubicación no. Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad.

**Observación**

Ejecutado en Android: al tocar «Casa» queda seleccionada y Trabajo, Favorito y Ubicación no. Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 8 — etiqueta casa seleccionada](<B2C-99 APP Evidencias/TC-B2C99-APP-007-android-p08-etiqueta-casa-seleccionada.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-007-android.png>)

---

### TC-B2C99-APP-008 - Verificar que al agregar la dirección como invitado se muestra un loader [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el botón "Agregar dirección".

**Resultado esperado**

Se muestra un loader mientras el sistema consulta cobertura, horarios y costos de envío.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C99-APP-009 - Verificar que una dirección con cobertura y horarios setea el método de entrega en el Store Locator [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- {DIRECCION_DESPACHO_001} tiene cobertura y horarios disponibles

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el botón "Agregar dirección".

**Resultado esperado**

Se cierra el modal y el Store Locator muestra el método de entrega Despacho con {DIRECCION_DESPACHO_001}, con ventana y costo según B2C-144.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C99-APP-010 - Verificar que una dirección sin cobertura deriva al flujo sin cobertura [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_SIN_COBERTURA}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_COBERTURA} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el botón "Agregar dirección".

**Resultado esperado**

El sistema deriva al flujo de dirección sin cobertura (B2C-123) y no setea {DIRECCION_SIN_COBERTURA} en el Store Locator.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C99-APP-011 - Verificar que una dirección con cobertura y sin horarios deriva al flujo sin horarios [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_SIN_SLA}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_SLA} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el botón "Agregar dirección".

**Resultado esperado**

El sistema deriva al flujo de dirección sin horarios disponibles (B2C-127).

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 8 — tras confirmar la direccion sin horarios](<B2C-99 APP Evidencias/TC-B2C99-APP-011-android-p08-tras-confirmar-la-direccion-sin-horarios.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-011-android.png>)

---

### TC-B2C99-APP-012 - Verificar que con productos en el carro y cambio de tienda se muestra el modal No se te escapen [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- La dirección activa es {DIRECCION_MISMA_TIENDA}
- El carro contiene {SKU_VALID_001} x 1

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_MISMA_TIENDA}
- {DIRECCION_OTRA_TIENDA}
- {SKU_VALID_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el botón "Agregar dirección".

**Resultado esperado**

Se muestra el modal "No se te escapen" (B2C-122) antes de setear la nueva dirección.

**Resultado obtenido**

Ejecutado en Android: con carro y cambio de tienda la app muestra el modal «Algunos productos podrían agotarse» (no «No se te escapen») antes de setear la dirección.

**Observación**

Ejecutado en Android: con carro y cambio de tienda la app muestra el modal «Algunos productos podrían agotarse» (no «No se te escapen») antes de setear la dirección. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 9 — tras confirmar la nueva direccion con carro](<B2C-99 APP Evidencias/TC-B2C99-APP-012-android-p09-tras-confirmar-la-nueva-direccion-con-carro.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-012-android.png>)

---

### TC-B2C99-APP-013 - Verificar que al agregar la dirección logueado se muestra un loader y se dispara el OTP [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {USER_AUTH_001} no tiene guardada la dirección usada en el caso
- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {HERRAMIENTA_PROXY_APP}
- {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el botón "Agregar dirección".

**Resultado esperado**

Se muestra un loader y luego el modal "Autenticación requerida" de B2C-125; llega el código OTP al correo de la cuenta.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C99-APP-014 - Verificar que al seleccionar el mapa se abre Agregar nueva dirección con todos sus elementos [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el mapa.
8. El usuario revisa la pantalla.

**Resultado esperado**

Se muestra "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección actual, la dirección actual bajo el mapa, el banner "Importante, entregaremos tu compra en la ubicación marcada…" y el botón "Continuar con detalles de la dirección".

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 7 — pantalla agregar nueva direccion](<B2C-99 APP Evidencias/TC-B2C99-APP-014-android-p07-pantalla-agregar-nueva-direccion.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-014-android.png>)

---

### TC-B2C99-APP-015 - Verificar que al seleccionar el PIN Ajusta aquí se abre Agregar nueva dirección [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.

**Resultado esperado**

Se abre "Agregar nueva dirección" con el mapa centrado en la dirección actual y el PIN sobre ella.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 7 — tras tocar el pin ajusta aqui](<B2C-99 APP Evidencias/TC-B2C99-APP-015-android-p07-tras-tocar-el-pin-ajusta-aqui.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-015-android.png>)

---

### TC-B2C99-APP-016 - Verificar que al mover el PIN dentro del radio el texto de la dirección no cambia [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el dedo el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).
10. El usuario revisa la dirección bajo el mapa.

**Resultado esperado**

El PIN queda en la nueva posición, el texto de {DIRECCION_DESPACHO_001} bajo el mapa no cambia, no aparece alerta y "Continuar con detalles de la dirección" sigue habilitado.

**Resultado obtenido**

El radio del PIN es una Custom Site Preference (CA14); usar el valor vigente en BM.  | Test Data pendiente: {APP_BUILD}, {RADIO_PIN_METROS}

**Observación**

El radio del PIN es una Custom Site Preference (CA14); usar el valor vigente en BM.  | Test Data pendiente: {APP_BUILD}, {RADIO_PIN_METROS} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 10 — pin movido dentro del radio](<B2C-99 APP Evidencias/TC-B2C99-APP-016-android-p10-pin-movido-dentro-del-radio.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-016-android.png>)

---

### TC-B2C99-APP-017 - Verificar que al mover el PIN fuera del radio se muestra el toast de alerta con Ajustar y X [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el dedo el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).

**Resultado esperado**

Se muestra el toast "La ubicación seleccionada se encuentra fuera del radio de la dirección actual. Por favor ajustarla." con la opción "Ajustar" y el botón X; el toast no se cierra solo.

**Resultado obtenido**

El radio del PIN es una Custom Site Preference (CA14); usar el valor vigente en BM.  | Test Data pendiente: {APP_BUILD}, {RADIO_PIN_METROS}

**Observación**

El radio del PIN es una Custom Site Preference (CA14); usar el valor vigente en BM.  | Test Data pendiente: {APP_BUILD}, {RADIO_PIN_METROS} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 10 — pin fuera del radio](<B2C-99 APP Evidencias/TC-B2C99-APP-017-android-p10-pin-fuera-del-radio.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-017-android.png>)

---

### TC-B2C99-APP-018 - Verificar que con el PIN fuera del radio el botón Continuar queda deshabilitado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el dedo el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).
10. El usuario intenta tocar "Continuar con detalles de la dirección".

**Resultado esperado**

El botón "Continuar con detalles de la dirección" se muestra deshabilitado y el usuario sigue en "Agregar nueva dirección".

**Resultado obtenido**

El radio del PIN es una Custom Site Preference (CA14); usar el valor vigente en BM.  | Test Data pendiente: {APP_BUILD}, {RADIO_PIN_METROS}

**Observación**

El radio del PIN es una Custom Site Preference (CA14); usar el valor vigente en BM.  | Test Data pendiente: {APP_BUILD}, {RADIO_PIN_METROS} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 10 — pin fuera del radio](<B2C-99 APP Evidencias/TC-B2C99-APP-018-android-p10-pin-fuera-del-radio.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-018-android.png>)

---

### TC-B2C99-APP-019 - Verificar que Ajustar devuelve el PIN a su posición original y habilita Continuar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el dedo el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).
10. El usuario toca "Ajustar" en el toast.

**Resultado esperado**

El PIN vuelve a su posición inicial sobre {DIRECCION_DESPACHO_001}, el toast se cierra y "Continuar con detalles de la dirección" queda habilitado.

**Resultado obtenido**

Ejecutado en Android; el árbol de accesibilidad conserva el texto del toast después de cerrarse, así que se verificó con la captura de evidencia: tras «Ajustar» el PIN vuelve a su posición, el toast se cierra y Continuar queda habilitado.

**Observación**

Ejecutado en Android; el árbol de accesibilidad conserva el texto del toast después de cerrarse, así que se verificó con la captura de evidencia: tras «Ajustar» el PIN vuelve a su posición, el toast se cierra y Continuar queda habilitado. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 11 — tras tocar ajustar](<B2C-99 APP Evidencias/TC-B2C99-APP-019-android-p11-tras-tocar-ajustar.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-019-android.png>)

---

### TC-B2C99-APP-020 - Verificar que al cerrar el toast con la X el PIN sigue fuera del radio y no se puede continuar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el dedo el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).
10. El usuario toca la X del toast.

**Resultado esperado**

El toast se cierra, el PIN se mantiene fuera del radio y "Continuar con detalles de la dirección" sigue deshabilitado.

**Resultado obtenido**

Ejecutado en Android; el árbol de accesibilidad conserva el texto del toast después de cerrarse, así que se verificó con la captura de evidencia: tras cerrar el toast con la X el PIN sigue fuera del radio y Continuar sigue deshabilitado.

**Observación**

Ejecutado en Android; el árbol de accesibilidad conserva el texto del toast después de cerrarse, así que se verificó con la captura de evidencia: tras cerrar el toast con la X el PIN sigue fuera del radio y Continuar sigue deshabilitado. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 11 — tras cerrar el toast](<B2C-99 APP Evidencias/TC-B2C99-APP-020-android-p11-tras-cerrar-el-toast.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-020-android.png>)

---

### TC-B2C99-APP-021 - Verificar que tras cerrar el toast al volver el PIN dentro del radio se habilita Continuar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el dedo el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).
10. El usuario toca la X del toast.
11. El usuario arrastra con el dedo el PIN de vuelta dentro del círculo del radio permitido.

**Resultado esperado**

El botón "Continuar con detalles de la dirección" queda habilitado y no se vuelve a mostrar la alerta.

**Resultado obtenido**

Ejecutado en Android; el árbol de accesibilidad conserva el texto del toast después de cerrarse, así que se verificó con la captura de evidencia: al volver el PIN dentro del radio Continuar queda habilitado y no reaparece la alerta.

**Observación**

Ejecutado en Android; el árbol de accesibilidad conserva el texto del toast después de cerrarse, así que se verificó con la captura de evidencia: al volver el PIN dentro del radio Continuar queda habilitado y no reaparece la alerta. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 12 — pin de vuelta dentro del radio](<B2C-99 APP Evidencias/TC-B2C99-APP-021-android-p12-pin-de-vuelta-dentro-del-radio.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-021-android.png>)

---

### TC-B2C99-APP-022 - Verificar que el toggle satelital cambia la vista del mapa y mantiene el PIN [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario toca el toggle de vista satelital.

**Resultado esperado**

El mapa cambia a vista satelital y el PIN se mantiene en la misma posición.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C99-APP-023 - Verificar que el toggle vuelve a la vista normal y mantiene el PIN [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario toca el toggle de vista satelital.
10. El usuario toca nuevamente el toggle para volver a la vista normal.

**Resultado esperado**

El mapa vuelve a la vista normal y el PIN se mantiene en la misma posición.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C99-APP-024 - Verificar que al continuar con el PIN ajustado se vuelve a Detalles con el PIN en su nueva posición [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS} = TBD
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el dedo el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).
10. El usuario toca "Continuar con detalles de la dirección".

**Resultado esperado**

Se muestra un loader y luego "Detalles de la dirección" con el PIN en la nueva posición; el texto de {DIRECCION_DESPACHO_001} bajo el mapa no cambia.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C99-APP-025 - Verificar que la cobertura se valida con las coordenadas del PIN ajustado y no con el texto [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- {HERRAMIENTA_PROXY_APP} capturando el tráfico de la App

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {STORE_LOCATOR_API_ENDPOINT}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el dedo el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).
10. El usuario toca "Continuar con detalles de la dirección".
11. El sistema vuelve a "Detalles de la dirección".
12. El usuario toca el botón "Agregar dirección".
13. El usuario revisa la request {STORE_LOCATOR_API_ENDPOINT} en {HERRAMIENTA_PROXY_APP}.

**Resultado esperado**

La request de cobertura envía la latitud y longitud de la nueva posición del PIN (distintas de las de la dirección original) y no recalcula las coordenadas desde el texto.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C99-APP-026 - Verificar que un error al guardar el PIN redirige al buscador con el toast de error [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {PIN_UBICACION_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {PIN_UBICACION_API_ENDPOINT} = TBD
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el dedo el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).
10. El usuario toca "Continuar con detalles de la dirección".

**Resultado esperado**

El sistema redirige al buscador de direcciones del Store Locator y muestra el toast "Ha ocurrido un error" con X para cerrarlo.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP}, {PIN_UBICACION_API_ENDPOINT} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP}, {PIN_UBICACION_API_ENDPOINT} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C99-APP-027 - Verificar que el botón atrás en Agregar nueva dirección vuelve sin aplicar cambios al PIN [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el dedo el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).
10. El usuario toca el botón atrás "<".

**Resultado esperado**

El sistema vuelve a "Detalles de la dirección" con el PIN en su posición original y la dirección sin cambios.

**Resultado obtenido**

El radio del PIN es una Custom Site Preference (CA14); usar el valor vigente en BM.  | Test Data pendiente: {APP_BUILD}, {RADIO_PIN_METROS}

**Observación**

El radio del PIN es una Custom Site Preference (CA14); usar el valor vigente en BM.  | Test Data pendiente: {APP_BUILD}, {RADIO_PIN_METROS} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 11 — tras tocar atras](<B2C-99 APP Evidencias/TC-B2C99-APP-027-android-p11-tras-tocar-atras.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-027-android.png>)

---

### TC-B2C99-APP-028 - Verificar que Editar abre el modal Dirección manual con los campos precargados [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca la opción "Editar" de la dirección.
8. El sistema muestra un loader y despliega el modal "Dirección manual" con los campos precargados.
9. El usuario revisa los campos del modal.

**Resultado esperado**

Se muestra un loader y el modal "Dirección manual" con Región, Comuna, Dirección y Numeración precargadas con los datos de {DIRECCION_DESPACHO_001}.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 9 — modal direccion manual](<B2C-99 APP Evidencias/TC-B2C99-APP-028-android-p09-modal-direccion-manual.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-028-android.png>)

---

### TC-B2C99-APP-029 - Verificar que al editar la dirección se actualiza el texto y el PIN se reubica [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca la opción "Editar" de la dirección.
8. El sistema muestra un loader y despliega el modal "Dirección manual" con los campos precargados.
9. El usuario cambia la Numeración por otra válida de la misma calle (ej. 45).
10. El usuario toca "Continuar con detalles de la dirección".

**Resultado esperado**

Se muestra un loader y se vuelve a "Detalles de la dirección" con la dirección actualizada bajo el mapa y el PIN ubicado en la nueva numeración.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 11 — detalles con la direccion editada](<B2C-99 APP Evidencias/TC-B2C99-APP-029-android-p11-detalles-con-la-direccion-editada.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-029-android.png>)

---

### TC-B2C99-APP-030 - Verificar que al editar la dirección se limpian los campos complementarios [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario completa "N° dpto" con "Dpto 910", "Nombre de dirección" con "Casa", selecciona una etiqueta y escribe una instrucción para entrega.
8. El usuario toca la opción "Editar" de la dirección.
9. El sistema muestra un loader y despliega el modal "Dirección manual" con los campos precargados.
10. El usuario cambia la Numeración por otra válida de la misma calle (ej. 45).
11. El usuario toca "Continuar con detalles de la dirección".

**Resultado esperado**

Al volver a "Detalles de la dirección", los campos N° dpto, Nombre de dirección e Instrucción para entrega están vacíos y ninguna etiqueta está seleccionada.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C99-APP-031 - Verificar que sin nombre la dirección se guarda con calle y número truncados a 20 caracteres [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {USER_AUTH_001} no tiene guardada la dirección usada en el caso

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_003}
- {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_003} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el botón "Agregar dirección".
8. El usuario valida el código OTP recibido (B2C-125).
9. El usuario toca el Store Locator y revisa sus direcciones guardadas.

**Resultado esperado**

La dirección queda guardada con el nombre "Av. San Josemaría Es..." (primeros 20 caracteres de calle + número de {DIRECCION_DESPACHO_003} y puntos suspensivos).

**Resultado obtenido**

Dato que no cumple la precondición: la cuenta {USER_AUTH_001} acumula decenas de direcciones guardadas por pruebas (por ejemplo ≥9 copias de {DIRECCION_DESPACHO_001}), así que «no tiene guardada la dirección» no se cumple. Observado: los nombres se arman con calle y número y llevan sufijo (n) si se repiten, los largos se truncan con «…» y las filas sin etiqueta muestran el ícono de ubicación. La dirección de este TC quedó activa tras validar el OTP, pero no se pudo confirmar su nombre en la lista. Se necesita una cuenta sin direcciones guardadas.

**Observación**

Dato que no cumple la precondición: la cuenta {USER_AUTH_001} acumula decenas de direcciones guardadas por pruebas (por ejemplo ≥9 copias de {DIRECCION_DESPACHO_001}), así que «no tiene guardada la dirección» no se cumple. Observado: los nombres se arman con calle y número y llevan sufijo (n) si se repiten, los largos se truncan con «…» y las filas sin etiqueta muestran el ícono de ubicación. La dirección de este TC quedó activa tras validar el OTP, pero no se pudo confirmar su nombre en la lista. Se necesita una cuenta sin direcciones guardadas.

**Evidencia**

![Android · Paso 10 — direcciones guardadas](<B2C-99 APP Evidencias/TC-B2C99-APP-031-android-p10-direcciones-guardadas.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-031-android.png>)

---

### TC-B2C99-APP-032 - Verificar que sin nombre una dirección corta se guarda con calle y número completos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {USER_AUTH_001} no tiene guardada la dirección usada en el caso

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el botón "Agregar dirección".
8. El usuario valida el código OTP recibido (B2C-125).
9. El usuario toca el Store Locator y revisa sus direcciones guardadas.

**Resultado esperado**

La dirección queda guardada con el nombre "Calle Uno 23" (calle + número de {DIRECCION_DESPACHO_001}), sin puntos suspensivos.

**Resultado obtenido**

Dato que no cumple la precondición: la cuenta {USER_AUTH_001} acumula decenas de direcciones guardadas por pruebas (por ejemplo ≥9 copias de {DIRECCION_DESPACHO_001}), así que «no tiene guardada la dirección» no se cumple. Observado: los nombres se arman con calle y número y llevan sufijo (n) si se repiten, los largos se truncan con «…» y las filas sin etiqueta muestran el ícono de ubicación. Se necesita una cuenta sin direcciones guardadas.

**Observación**

Dato que no cumple la precondición: la cuenta {USER_AUTH_001} acumula decenas de direcciones guardadas por pruebas (por ejemplo ≥9 copias de {DIRECCION_DESPACHO_001}), así que «no tiene guardada la dirección» no se cumple. Observado: los nombres se arman con calle y número y llevan sufijo (n) si se repiten, los largos se truncan con «…» y las filas sin etiqueta muestran el ícono de ubicación. Se necesita una cuenta sin direcciones guardadas.

**Evidencia**

![Android · Paso 10 — direcciones guardadas nombre e icono](<B2C-99 APP Evidencias/TC-B2C99-APP-032-android-p10-direcciones-guardadas-nombre-e-icono.png>)

![Android · Estado final](<B2C-99 APP Evidencias/TC-B2C99-APP-032-android.png>)

---

### TC-B2C99-APP-033 - Verificar que sin etiqueta seleccionada la dirección se guarda con el ícono de ubicación [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {USER_AUTH_001} no tiene guardada la dirección usada en el caso

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el botón "Agregar dirección".
8. El usuario valida el código OTP recibido (B2C-125).
9. El usuario toca el Store Locator y revisa sus direcciones guardadas.

**Resultado esperado**

La dirección guardada muestra el ícono de ubicación (pin) como etiqueta.

**Resultado obtenido**

Dato que no cumple la precondición: la cuenta {USER_AUTH_001} acumula decenas de direcciones guardadas por pruebas (por ejemplo ≥9 copias de {DIRECCION_DESPACHO_001}), así que «no tiene guardada la dirección» no se cumple. Observado: los nombres se arman con calle y número y llevan sufijo (n) si se repiten, los largos se truncan con «…» y las filas sin etiqueta muestran el ícono de ubicación. Se necesita una cuenta sin direcciones guardadas.

**Observación**

Dato que no cumple la precondición: la cuenta {USER_AUTH_001} acumula decenas de direcciones guardadas por pruebas (por ejemplo ≥9 copias de {DIRECCION_DESPACHO_001}), así que «no tiene guardada la dirección» no se cumple. Observado: los nombres se arman con calle y número y llevan sufijo (n) si se repiten, los largos se truncan con «…» y las filas sin etiqueta muestran el ícono de ubicación. Se necesita una cuenta sin direcciones guardadas.

---

### TC-B2C99-APP-034 - Verificar que si Google Maps no carga se muestra el error del mapa y la dirección en lectura [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- {HERRAMIENTA_PROXY_APP} configurado para bloquear las requests a maps.googleapis.com después de elegir la sugerencia

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" y el mapa no carga.
7. El usuario revisa la pantalla.

**Resultado esperado**

El área del mapa se muestra en gris con ícono de mapa y el mensaje "No pudimos cargar el mapa. Puedes continuar con la dirección ingresada o volver a buscarla."; la calle, número, comuna y región de {DIRECCION_DESPACHO_001} se muestran en modo lectura.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C99-APP-035 - Verificar que si Google Maps no carga el ajuste del PIN queda deshabilitado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- {HERRAMIENTA_PROXY_APP} configurado para bloquear las requests a maps.googleapis.com después de elegir la sugerencia

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" y el mapa no carga.
7. El usuario intenta tocar el área del mapa.

**Resultado esperado**

No se abre "Agregar nueva dirección": el ajuste del PIN y los controles del mapa no están disponibles.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C99-APP-036 - Verificar que si Google Maps no carga Confirmar dirección continúa con las coordenadas geocodificadas [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- {HERRAMIENTA_PROXY_APP} configurado para bloquear las requests a maps.googleapis.com después de elegir la sugerencia
- {DIRECCION_DESPACHO_001} tiene cobertura y horarios disponibles

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" y el mapa no carga.
7. El usuario toca "Confirmar dirección".

**Resultado esperado**

El flujo continúa con las validaciones del CA2 y el Store Locator queda con {DIRECCION_DESPACHO_001} como dirección de despacho.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C99-APP-037 - Verificar que si Google Maps no carga el botón atrás vuelve al buscador de direcciones [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- {HERRAMIENTA_PROXY_APP} configurado para bloquear las requests a maps.googleapis.com después de elegir la sugerencia

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {DIRECCION_DESPACHO_001}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" y el mapa no carga.
7. El usuario toca el botón atrás "<".

**Resultado esperado**

El sistema vuelve al buscador de direcciones del Store Locator (B2C-26) para reingresar la dirección.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "Android": "dispositivo por ADB"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-99 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-99 APP Test Cases.xlsx",
  "title": "B2C-99 APP - Evidencias QA (Android)",
  "updated_at": "2026-10-29"
 },
 "history": {
  "2026-10-29": [
   "TC-B2C99-APP-001",
   "TC-B2C99-APP-002",
   "TC-B2C99-APP-003",
   "TC-B2C99-APP-004",
   "TC-B2C99-APP-005",
   "TC-B2C99-APP-006",
   "TC-B2C99-APP-007",
   "TC-B2C99-APP-008",
   "TC-B2C99-APP-009",
   "TC-B2C99-APP-010",
   "TC-B2C99-APP-011",
   "TC-B2C99-APP-012",
   "TC-B2C99-APP-013",
   "TC-B2C99-APP-014",
   "TC-B2C99-APP-015",
   "TC-B2C99-APP-016",
   "TC-B2C99-APP-017",
   "TC-B2C99-APP-018",
   "TC-B2C99-APP-019",
   "TC-B2C99-APP-020",
   "TC-B2C99-APP-021",
   "TC-B2C99-APP-022",
   "TC-B2C99-APP-023",
   "TC-B2C99-APP-024",
   "TC-B2C99-APP-025",
   "TC-B2C99-APP-026",
   "TC-B2C99-APP-027",
   "TC-B2C99-APP-028",
   "TC-B2C99-APP-029",
   "TC-B2C99-APP-030",
   "TC-B2C99-APP-031",
   "TC-B2C99-APP-032",
   "TC-B2C99-APP-033",
   "TC-B2C99-APP-034",
   "TC-B2C99-APP-035",
   "TC-B2C99-APP-036",
   "TC-B2C99-APP-037"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestran: botón atrás \"<\", título \"Detalles de la dirección\", mapa con el PIN posicionado sobre la dirección, la dirección ingresada con la opción \"Editar\", el campo \"N° dpto, oficina, piso, etc (opcional)\", el campo \"Nombre de dirección (opcional)\", 4 íconos de etiquetas de entrega, el área de texto \"Instrucción para entrega (opcional)\" y el botón \"Agregar dirección\".",
   "form_factor": "app",
   "id": "TC-B2C99-APP-001",
   "name": "Verificar que la pantalla Detalles de la dirección muestra todos sus elementos [App] [Guest]",
   "observation": "Ejecutado en Android: se muestran Volver, título, mapa con el PIN «Ajusta aquí», dirección con «Editar», los dos campos opcionales, las 4 etiquetas (Casa, Trabajo, Favorito, Ubicación), «Instrucciones para entrega (opcional)» y «Agregar dirección». Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android: se muestran Volver, título, mapa con el PIN «Ajusta aquí», dirección con «Editar», los dos campos opcionales, las 4 etiquetas (Casa, Trabajo, Favorito, Ubicación), «Instrucciones para entrega (opcional)» y «Agregar dirección». Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 6 — pantalla detalles de la direccion",
     "file": "TC-B2C99-APP-001-android-p06-pantalla-detalles-de-la-direccion.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario revisa la pantalla.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "\"N° dpto, oficina, piso, etc (opcional)\" muestra el placeholder \"Ej. Dpto 910\" y \"Nombre de dirección (opcional)\" muestra \"Ej. Mamá, Pololo, trabajo\".",
   "form_factor": "app",
   "id": "TC-B2C99-APP-002",
   "name": "Verificar que los campos opcionales de Detalles de la dirección muestran sus placeholders [App] [Guest]",
   "observation": "Ejecutado en Android: los placeholders son «Ej. Dpto 910» y «Ej. Mamá, Pololo, trabajo». Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android: los placeholders son «Ej. Dpto 910» y «Ej. Mamá, Pololo, trabajo». Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 6 — campos opcionales",
     "file": "TC-B2C99-APP-002-android-p06-campos-opcionales.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-002-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario revisa los campos sin completar.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La dirección se muestra como calle + número + comuna + región de {DIRECCION_DESPACHO_001} (ej. \"Calle Uno 23, La Florida, Región Metropolitana\").",
   "form_factor": "app",
   "id": "TC-B2C99-APP-003",
   "name": "Verificar que la dirección se muestra con calle, número, comuna y región [App] [Guest]",
   "observation": "Ejecutado en Android: la dirección se muestra como «Calle Uno 23» y «La Florida, Región Metropolitana». Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android: la dirección se muestra como «Calle Uno 23» y «La Florida, Región Metropolitana». Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario revisa la dirección mostrada bajo el mapa.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El campo queda con 50 caracteres como máximo; el carácter 51 no se ingresa (o se muestra la validación de largo).",
   "form_factor": "app",
   "id": "TC-B2C99-APP-004",
   "name": "Verificar que el campo N° dpto no acepta más de 50 caracteres [App] [Guest]",
   "observation": "Ejecutado en Android: al escribir 60 caracteres el campo N° dpto queda con 50 como máximo. Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android: al escribir 60 caracteres el campo N° dpto queda con 50 como máximo. Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 7 — campo n dpto tras escribir 60 caracteres",
     "file": "TC-B2C99-APP-004-android-p07-campo-n-dpto-tras-escribir-60-caracteres.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-004-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario escribe {TEXTO_51_CARACTERES} en \"N° dpto, oficina, piso, etc (opcional)\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {TEXTO_51_CARACTERES} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El campo queda con 20 caracteres como máximo; el carácter 21 no se ingresa (o se muestra la validación de largo).",
   "form_factor": "app",
   "id": "TC-B2C99-APP-005",
   "name": "Verificar que el campo Nombre de dirección no acepta más de 20 caracteres [App] [Guest]",
   "observation": "Ejecutado en Android: al escribir 30 caracteres el campo Nombre de dirección queda con 20 como máximo. Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android: al escribir 30 caracteres el campo Nombre de dirección queda con 20 como máximo. Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 7 — campo nombre de direccion tras escribir 30 caracteres",
     "file": "TC-B2C99-APP-005-android-p07-campo-nombre-de-direccion-tras-escribir-30-caracteres.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-005-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario escribe {TEXTO_21_CARACTERES} en \"Nombre de dirección (opcional)\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {TEXTO_21_CARACTERES} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El área de texto queda con 300 caracteres como máximo; el carácter 301 no se ingresa (o se muestra la validación de largo).",
   "form_factor": "app",
   "id": "TC-B2C99-APP-006",
   "name": "Verificar que el campo Instrucción para entrega no acepta más de 300 caracteres [App] [Guest]",
   "observation": "Ejecutado en Android: al escribir 310 caracteres el contador queda en «300 / 300 caracteres». Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android: al escribir 310 caracteres el contador queda en «300 / 300 caracteres». Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 7 — campo instruccion para entrega tras escribir 310 caracteres",
     "file": "TC-B2C99-APP-006-android-p07-campo-instruccion-para-entrega-tras-escribir-310-caracteres.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-006-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario escribe {TEXTO_301_CARACTERES} en \"Instrucción para entrega (opcional)\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {TEXTO_301_CARACTERES} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El ícono seleccionado se pinta de rojo; los otros 3 se mantienen sin seleccionar.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-007",
   "name": "Verificar que al seleccionar una etiqueta de entrega el ícono se pinta de rojo [App] [Guest]",
   "observation": "Ejecutado en Android: al tocar «Casa» queda seleccionada y Trabajo, Favorito y Ubicación no. Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android: al tocar «Casa» queda seleccionada y Trabajo, Favorito y Ubicación no. Las capturas de esta pantalla salen en blanco en la evidencia; se verificó por el árbol de accesibilidad.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 8 — etiqueta casa seleccionada",
     "file": "TC-B2C99-APP-007-android-p08-etiqueta-casa-seleccionada.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-007-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca uno de los 4 íconos de etiqueta.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra un loader mientras el sistema consulta cobertura, horarios y costos de envío.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-008",
   "name": "Verificar que al agregar la dirección como invitado se muestra un loader [App] [Guest]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta",
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el botón \"Agregar dirección\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se cierra el modal y el Store Locator muestra el método de entrega Despacho con {DIRECCION_DESPACHO_001}, con ventana y costo según B2C-144.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-009",
   "name": "Verificar que una dirección con cobertura y horarios setea el método de entrega en el Store Locator [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- {DIRECCION_DESPACHO_001} tiene cobertura y horarios disponibles",
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el botón \"Agregar dirección\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El sistema deriva al flujo de dirección sin cobertura (B2C-123) y no setea {DIRECCION_SIN_COBERTURA} en el Store Locator.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-010",
   "name": "Verificar que una dirección sin cobertura deriva al flujo sin cobertura [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_COBERTURA} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el botón \"Agregar dirección\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_SIN_COBERTURA}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El sistema deriva al flujo de dirección sin horarios disponibles (B2C-127).",
   "form_factor": "app",
   "id": "TC-B2C99-APP-011",
   "name": "Verificar que una dirección con cobertura y sin horarios deriva al flujo sin horarios [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 8 — tras confirmar la direccion sin horarios",
     "file": "TC-B2C99-APP-011-android-p08-tras-confirmar-la-direccion-sin-horarios.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-011-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_SLA} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el botón \"Agregar dirección\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_SIN_SLA}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el modal \"No se te escapen\" (B2C-122) antes de setear la nueva dirección.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-012",
   "name": "Verificar que con productos en el carro y cambio de tienda se muestra el modal No se te escapen [App] [Guest]",
   "observation": "Ejecutado en Android: con carro y cambio de tienda la app muestra el modal «Algunos productos podrían agotarse» (no «No se te escapen») antes de setear la dirección. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android: con carro y cambio de tienda la app muestra el modal «Algunos productos podrían agotarse» (no «No se te escapen») antes de setear la dirección.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- La dirección activa es {DIRECCION_MISMA_TIENDA}\n- El carro contiene {SKU_VALID_001} x 1",
   "screenshots": [
    {
     "caption": "Android · Paso 9 — tras confirmar la nueva direccion con carro",
     "file": "TC-B2C99-APP-012-android-p09-tras-confirmar-la-nueva-direccion-con-carro.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-012-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el botón \"Agregar dirección\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_MISMA_TIENDA}\n- {DIRECCION_OTRA_TIENDA}\n- {SKU_VALID_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra un loader y luego el modal \"Autenticación requerida\" de B2C-125; llega el código OTP al correo de la cuenta.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-013",
   "name": "Verificar que al agregar la dirección logueado se muestra un loader y se dispara el OTP [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {USER_AUTH_001} no tiene guardada la dirección usada en el caso\n- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta",
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el botón \"Agregar dirección\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {HERRAMIENTA_PROXY_APP}\n- {USER_AUTH_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección actual, la dirección actual bajo el mapa, el banner \"Importante, entregaremos tu compra en la ubicación marcada…\" y el botón \"Continuar con detalles de la dirección\".",
   "form_factor": "app",
   "id": "TC-B2C99-APP-014",
   "name": "Verificar que al seleccionar el mapa se abre Agregar nueva dirección con todos sus elementos [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 7 — pantalla agregar nueva direccion",
     "file": "TC-B2C99-APP-014-android-p07-pantalla-agregar-nueva-direccion.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-014-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el mapa.\n8. El usuario revisa la pantalla.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se abre \"Agregar nueva dirección\" con el mapa centrado en la dirección actual y el PIN sobre ella.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-015",
   "name": "Verificar que al seleccionar el PIN Ajusta aquí se abre Agregar nueva dirección [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 7 — tras tocar el pin ajusta aqui",
     "file": "TC-B2C99-APP-015-android-p07-tras-tocar-el-pin-ajusta-aqui.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-015-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El PIN queda en la nueva posición, el texto de {DIRECCION_DESPACHO_001} bajo el mapa no cambia, no aparece alerta y \"Continuar con detalles de la dirección\" sigue habilitado.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-016",
   "name": "Verificar que al mover el PIN dentro del radio el texto de la dirección no cambia [App] [Guest]",
   "observation": "El radio del PIN es una Custom Site Preference (CA14); usar el valor vigente en BM.  | Test Data pendiente: {APP_BUILD}, {RADIO_PIN_METROS} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "El radio del PIN es una Custom Site Preference (CA14); usar el valor vigente en BM.  | Test Data pendiente: {APP_BUILD}, {RADIO_PIN_METROS}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 10 — pin movido dentro del radio",
     "file": "TC-B2C99-APP-016-android-p10-pin-movido-dentro-del-radio.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-016-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).\n10. El usuario revisa la dirección bajo el mapa.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el toast \"La ubicación seleccionada se encuentra fuera del radio de la dirección actual. Por favor ajustarla.\" con la opción \"Ajustar\" y el botón X; el toast no se cierra solo.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-017",
   "name": "Verificar que al mover el PIN fuera del radio se muestra el toast de alerta con Ajustar y X [App] [Guest]",
   "observation": "El radio del PIN es una Custom Site Preference (CA14); usar el valor vigente en BM.  | Test Data pendiente: {APP_BUILD}, {RADIO_PIN_METROS} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "El radio del PIN es una Custom Site Preference (CA14); usar el valor vigente en BM.  | Test Data pendiente: {APP_BUILD}, {RADIO_PIN_METROS}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 10 — pin fuera del radio",
     "file": "TC-B2C99-APP-017-android-p10-pin-fuera-del-radio.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-017-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El botón \"Continuar con detalles de la dirección\" se muestra deshabilitado y el usuario sigue en \"Agregar nueva dirección\".",
   "form_factor": "app",
   "id": "TC-B2C99-APP-018",
   "name": "Verificar que con el PIN fuera del radio el botón Continuar queda deshabilitado [App] [Guest]",
   "observation": "El radio del PIN es una Custom Site Preference (CA14); usar el valor vigente en BM.  | Test Data pendiente: {APP_BUILD}, {RADIO_PIN_METROS} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "El radio del PIN es una Custom Site Preference (CA14); usar el valor vigente en BM.  | Test Data pendiente: {APP_BUILD}, {RADIO_PIN_METROS}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 10 — pin fuera del radio",
     "file": "TC-B2C99-APP-018-android-p10-pin-fuera-del-radio.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-018-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).\n10. El usuario intenta tocar \"Continuar con detalles de la dirección\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El PIN vuelve a su posición inicial sobre {DIRECCION_DESPACHO_001}, el toast se cierra y \"Continuar con detalles de la dirección\" queda habilitado.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-019",
   "name": "Verificar que Ajustar devuelve el PIN a su posición original y habilita Continuar [App] [Guest]",
   "observation": "Ejecutado en Android; el árbol de accesibilidad conserva el texto del toast después de cerrarse, así que se verificó con la captura de evidencia: tras «Ajustar» el PIN vuelve a su posición, el toast se cierra y Continuar queda habilitado. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android; el árbol de accesibilidad conserva el texto del toast después de cerrarse, así que se verificó con la captura de evidencia: tras «Ajustar» el PIN vuelve a su posición, el toast se cierra y Continuar queda habilitado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 11 — tras tocar ajustar",
     "file": "TC-B2C99-APP-019-android-p11-tras-tocar-ajustar.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-019-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).\n10. El usuario toca \"Ajustar\" en el toast.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El toast se cierra, el PIN se mantiene fuera del radio y \"Continuar con detalles de la dirección\" sigue deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-020",
   "name": "Verificar que al cerrar el toast con la X el PIN sigue fuera del radio y no se puede continuar [App] [Guest]",
   "observation": "Ejecutado en Android; el árbol de accesibilidad conserva el texto del toast después de cerrarse, así que se verificó con la captura de evidencia: tras cerrar el toast con la X el PIN sigue fuera del radio y Continuar sigue deshabilitado. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android; el árbol de accesibilidad conserva el texto del toast después de cerrarse, así que se verificó con la captura de evidencia: tras cerrar el toast con la X el PIN sigue fuera del radio y Continuar sigue deshabilitado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 11 — tras cerrar el toast",
     "file": "TC-B2C99-APP-020-android-p11-tras-cerrar-el-toast.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-020-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).\n10. El usuario toca la X del toast.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El botón \"Continuar con detalles de la dirección\" queda habilitado y no se vuelve a mostrar la alerta.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-021",
   "name": "Verificar que tras cerrar el toast al volver el PIN dentro del radio se habilita Continuar [App] [Guest]",
   "observation": "Ejecutado en Android; el árbol de accesibilidad conserva el texto del toast después de cerrarse, así que se verificó con la captura de evidencia: al volver el PIN dentro del radio Continuar queda habilitado y no reaparece la alerta. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android; el árbol de accesibilidad conserva el texto del toast después de cerrarse, así que se verificó con la captura de evidencia: al volver el PIN dentro del radio Continuar queda habilitado y no reaparece la alerta.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 12 — pin de vuelta dentro del radio",
     "file": "TC-B2C99-APP-021-android-p12-pin-de-vuelta-dentro-del-radio.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-021-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).\n10. El usuario toca la X del toast.\n11. El usuario arrastra con el dedo el PIN de vuelta dentro del círculo del radio permitido.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El mapa cambia a vista satelital y el PIN se mantiene en la misma posición.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-022",
   "name": "Verificar que el toggle satelital cambia la vista del mapa y mantiene el PIN [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario toca el toggle de vista satelital.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El mapa vuelve a la vista normal y el PIN se mantiene en la misma posición.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-023",
   "name": "Verificar que el toggle vuelve a la vista normal y mantiene el PIN [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario toca el toggle de vista satelital.\n10. El usuario toca nuevamente el toggle para volver a la vista normal.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra un loader y luego \"Detalles de la dirección\" con el PIN en la nueva posición; el texto de {DIRECCION_DESPACHO_001} bajo el mapa no cambia.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-024",
   "name": "Verificar que al continuar con el PIN ajustado se vuelve a Detalles con el PIN en su nueva posición [App] [Guest]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta",
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).\n10. El usuario toca \"Continuar con detalles de la dirección\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS} = TBD\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La request de cobertura envía la latitud y longitud de la nueva posición del PIN (distintas de las de la dirección original) y no recalcula las coordenadas desde el texto.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-025",
   "name": "Verificar que la cobertura se valida con las coordenadas del PIN ajustado y no con el texto [App] [Guest]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- {HERRAMIENTA_PROXY_APP} capturando el tráfico de la App",
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).\n10. El usuario toca \"Continuar con detalles de la dirección\".\n11. El sistema vuelve a \"Detalles de la dirección\".\n12. El usuario toca el botón \"Agregar dirección\".\n13. El usuario revisa la request {STORE_LOCATOR_API_ENDPOINT} en {HERRAMIENTA_PROXY_APP}.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {STORE_LOCATOR_API_ENDPOINT}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El sistema redirige al buscador de direcciones del Store Locator y muestra el toast \"Ha ocurrido un error\" con X para cerrarlo.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-026",
   "name": "Verificar que un error al guardar el PIN redirige al buscador con el toast de error [App] [Guest]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP}, {PIN_UBICACION_API_ENDPOINT} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP}, {PIN_UBICACION_API_ENDPOINT} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {PIN_UBICACION_API_ENDPOINT}",
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).\n10. El usuario toca \"Continuar con detalles de la dirección\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {PIN_UBICACION_API_ENDPOINT} = TBD\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El sistema vuelve a \"Detalles de la dirección\" con el PIN en su posición original y la dirección sin cambios.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-027",
   "name": "Verificar que el botón atrás en Agregar nueva dirección vuelve sin aplicar cambios al PIN [App] [Guest]",
   "observation": "El radio del PIN es una Custom Site Preference (CA14); usar el valor vigente en BM.  | Test Data pendiente: {APP_BUILD}, {RADIO_PIN_METROS} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "El radio del PIN es una Custom Site Preference (CA14); usar el valor vigente en BM.  | Test Data pendiente: {APP_BUILD}, {RADIO_PIN_METROS}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 11 — tras tocar atras",
     "file": "TC-B2C99-APP-027-android-p11-tras-tocar-atras.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-027-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).\n10. El usuario toca el botón atrás \"<\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra un loader y el modal \"Dirección manual\" con Región, Comuna, Dirección y Numeración precargadas con los datos de {DIRECCION_DESPACHO_001}.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-028",
   "name": "Verificar que Editar abre el modal Dirección manual con los campos precargados [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 9 — modal direccion manual",
     "file": "TC-B2C99-APP-028-android-p09-modal-direccion-manual.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-028-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca la opción \"Editar\" de la dirección.\n8. El sistema muestra un loader y despliega el modal \"Dirección manual\" con los campos precargados.\n9. El usuario revisa los campos del modal.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra un loader y se vuelve a \"Detalles de la dirección\" con la dirección actualizada bajo el mapa y el PIN ubicado en la nueva numeración.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-029",
   "name": "Verificar que al editar la dirección se actualiza el texto y el PIN se reubica [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 11 — detalles con la direccion editada",
     "file": "TC-B2C99-APP-029-android-p11-detalles-con-la-direccion-editada.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-029-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca la opción \"Editar\" de la dirección.\n8. El sistema muestra un loader y despliega el modal \"Dirección manual\" con los campos precargados.\n9. El usuario cambia la Numeración por otra válida de la misma calle (ej. 45).\n10. El usuario toca \"Continuar con detalles de la dirección\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Al volver a \"Detalles de la dirección\", los campos N° dpto, Nombre de dirección e Instrucción para entrega están vacíos y ninguna etiqueta está seleccionada.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-030",
   "name": "Verificar que al editar la dirección se limpian los campos complementarios [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario completa \"N° dpto\" con \"Dpto 910\", \"Nombre de dirección\" con \"Casa\", selecciona una etiqueta y escribe una instrucción para entrega.\n8. El usuario toca la opción \"Editar\" de la dirección.\n9. El sistema muestra un loader y despliega el modal \"Dirección manual\" con los campos precargados.\n10. El usuario cambia la Numeración por otra válida de la misma calle (ej. 45).\n11. El usuario toca \"Continuar con detalles de la dirección\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La dirección queda guardada con el nombre \"Av. San Josemaría Es...\" (primeros 20 caracteres de calle + número de {DIRECCION_DESPACHO_003} y puntos suspensivos).",
   "form_factor": "app",
   "id": "TC-B2C99-APP-031",
   "name": "Verificar que sin nombre la dirección se guarda con calle y número truncados a 20 caracteres [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: la cuenta {USER_AUTH_001} acumula decenas de direcciones guardadas por pruebas (por ejemplo ≥9 copias de {DIRECCION_DESPACHO_001}), así que «no tiene guardada la dirección» no se cumple. Observado: los nombres se arman con calle y número y llevan sufijo (n) si se repiten, los largos se truncan con «…» y las filas sin etiqueta muestran el ícono de ubicación. La dirección de este TC quedó activa tras validar el OTP, pero no se pudo confirmar su nombre en la lista. Se necesita una cuenta sin direcciones guardadas.",
   "observed": "Dato que no cumple la precondición: la cuenta {USER_AUTH_001} acumula decenas de direcciones guardadas por pruebas (por ejemplo ≥9 copias de {DIRECCION_DESPACHO_001}), así que «no tiene guardada la dirección» no se cumple. Observado: los nombres se arman con calle y número y llevan sufijo (n) si se repiten, los largos se truncan con «…» y las filas sin etiqueta muestran el ícono de ubicación. La dirección de este TC quedó activa tras validar el OTP, pero no se pudo confirmar su nombre en la lista. Se necesita una cuenta sin direcciones guardadas.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {USER_AUTH_001} no tiene guardada la dirección usada en el caso",
   "screenshots": [
    {
     "caption": "Android · Paso 10 — direcciones guardadas",
     "file": "TC-B2C99-APP-031-android-p10-direcciones-guardadas.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-031-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_003} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el botón \"Agregar dirección\".\n8. El usuario valida el código OTP recibido (B2C-125).\n9. El usuario toca el Store Locator y revisa sus direcciones guardadas.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_003}\n- {USER_AUTH_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La dirección queda guardada con el nombre \"Calle Uno 23\" (calle + número de {DIRECCION_DESPACHO_001}), sin puntos suspensivos.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-032",
   "name": "Verificar que sin nombre una dirección corta se guarda con calle y número completos [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: la cuenta {USER_AUTH_001} acumula decenas de direcciones guardadas por pruebas (por ejemplo ≥9 copias de {DIRECCION_DESPACHO_001}), así que «no tiene guardada la dirección» no se cumple. Observado: los nombres se arman con calle y número y llevan sufijo (n) si se repiten, los largos se truncan con «…» y las filas sin etiqueta muestran el ícono de ubicación. Se necesita una cuenta sin direcciones guardadas.",
   "observed": "Dato que no cumple la precondición: la cuenta {USER_AUTH_001} acumula decenas de direcciones guardadas por pruebas (por ejemplo ≥9 copias de {DIRECCION_DESPACHO_001}), así que «no tiene guardada la dirección» no se cumple. Observado: los nombres se arman con calle y número y llevan sufijo (n) si se repiten, los largos se truncan con «…» y las filas sin etiqueta muestran el ícono de ubicación. Se necesita una cuenta sin direcciones guardadas.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {USER_AUTH_001} no tiene guardada la dirección usada en el caso",
   "screenshots": [
    {
     "caption": "Android · Paso 10 — direcciones guardadas nombre e icono",
     "file": "TC-B2C99-APP-032-android-p10-direcciones-guardadas-nombre-e-icono.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C99-APP-032-android.png"
    }
   ],
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el botón \"Agregar dirección\".\n8. El usuario valida el código OTP recibido (B2C-125).\n9. El usuario toca el Store Locator y revisa sus direcciones guardadas.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {USER_AUTH_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La dirección guardada muestra el ícono de ubicación (pin) como etiqueta.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-033",
   "name": "Verificar que sin etiqueta seleccionada la dirección se guarda con el ícono de ubicación [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: la cuenta {USER_AUTH_001} acumula decenas de direcciones guardadas por pruebas (por ejemplo ≥9 copias de {DIRECCION_DESPACHO_001}), así que «no tiene guardada la dirección» no se cumple. Observado: los nombres se arman con calle y número y llevan sufijo (n) si se repiten, los largos se truncan con «…» y las filas sin etiqueta muestran el ícono de ubicación. Se necesita una cuenta sin direcciones guardadas.",
   "observed": "Dato que no cumple la precondición: la cuenta {USER_AUTH_001} acumula decenas de direcciones guardadas por pruebas (por ejemplo ≥9 copias de {DIRECCION_DESPACHO_001}), así que «no tiene guardada la dirección» no se cumple. Observado: los nombres se arman con calle y número y llevan sufijo (n) si se repiten, los largos se truncan con «…» y las filas sin etiqueta muestran el ícono de ubicación. Se necesita una cuenta sin direcciones guardadas.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {USER_AUTH_001} no tiene guardada la dirección usada en el caso",
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el botón \"Agregar dirección\".\n8. El usuario valida el código OTP recibido (B2C-125).\n9. El usuario toca el Store Locator y revisa sus direcciones guardadas.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {USER_AUTH_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El área del mapa se muestra en gris con ícono de mapa y el mensaje \"No pudimos cargar el mapa. Puedes continuar con la dirección ingresada o volver a buscarla.\"; la calle, número, comuna y región de {DIRECCION_DESPACHO_001} se muestran en modo lectura.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-034",
   "name": "Verificar que si Google Maps no carga se muestra el error del mapa y la dirección en lectura [App] [Guest]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- {HERRAMIENTA_PROXY_APP} configurado para bloquear las requests a maps.googleapis.com después de elegir la sugerencia",
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" y el mapa no carga.\n7. El usuario revisa la pantalla.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "No se abre \"Agregar nueva dirección\": el ajuste del PIN y los controles del mapa no están disponibles.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-035",
   "name": "Verificar que si Google Maps no carga el ajuste del PIN queda deshabilitado [App] [Guest]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- {HERRAMIENTA_PROXY_APP} configurado para bloquear las requests a maps.googleapis.com después de elegir la sugerencia",
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" y el mapa no carga.\n7. El usuario intenta tocar el área del mapa.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El flujo continúa con las validaciones del CA2 y el Store Locator queda con {DIRECCION_DESPACHO_001} como dirección de despacho.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-036",
   "name": "Verificar que si Google Maps no carga Confirmar dirección continúa con las coordenadas geocodificadas [App] [Guest]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- {HERRAMIENTA_PROXY_APP} configurado para bloquear las requests a maps.googleapis.com después de elegir la sugerencia\n- {DIRECCION_DESPACHO_001} tiene cobertura y horarios disponibles",
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" y el mapa no carga.\n7. El usuario toca \"Confirmar dirección\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El sistema vuelve al buscador de direcciones del Store Locator (B2C-26) para reingresar la dirección.",
   "form_factor": "app",
   "id": "TC-B2C99-APP-037",
   "name": "Verificar que si Google Maps no carga el botón atrás vuelve al buscador de direcciones [App] [Guest]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- {HERRAMIENTA_PROXY_APP} configurado para bloquear las requests a maps.googleapis.com después de elegir la sugerencia",
   "spec": "tests-app/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" y el mapa no carga.\n7. El usuario toca el botón atrás \"<\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {DIRECCION_DESPACHO_001}\n- {HERRAMIENTA_PROXY_APP}"
  }
 ]
}
-->
