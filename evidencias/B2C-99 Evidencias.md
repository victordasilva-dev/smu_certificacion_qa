# Confirmar dirección con PIN en mapa

| Campo | Valor |
|---|---|
| Suite | B2C-99 |
| Última actualización | 2026-10-26 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-99 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 42 |
| Rechazado | 20 |
| Bloqueado Data | 12 |
| **Total** | **74** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-26 | 74 | TC-B2C99-D-001, TC-B2C99-D-002, TC-B2C99-D-003, TC-B2C99-D-004, TC-B2C99-D-005, TC-B2C99-D-006, TC-B2C99-D-007, TC-B2C99-D-008, TC-B2C99-D-009, TC-B2C99-D-010, TC-B2C99-D-011, TC-B2C99-D-012, TC-B2C99-D-013, TC-B2C99-D-014, TC-B2C99-D-015, TC-B2C99-D-016, TC-B2C99-D-017, TC-B2C99-D-018, TC-B2C99-D-019, TC-B2C99-D-020, TC-B2C99-D-021, TC-B2C99-D-022, TC-B2C99-D-023, TC-B2C99-D-024, TC-B2C99-D-025, TC-B2C99-D-026, TC-B2C99-D-027, TC-B2C99-D-028, TC-B2C99-D-029, TC-B2C99-D-030, TC-B2C99-D-031, TC-B2C99-D-032, TC-B2C99-D-033, TC-B2C99-D-034, TC-B2C99-D-035, TC-B2C99-D-036, TC-B2C99-D-037, TC-B2C99-M-001, TC-B2C99-M-002, TC-B2C99-M-003, TC-B2C99-M-004, TC-B2C99-M-005, TC-B2C99-M-006, TC-B2C99-M-007, TC-B2C99-M-008, TC-B2C99-M-009, TC-B2C99-M-010, TC-B2C99-M-011, TC-B2C99-M-012, TC-B2C99-M-013, TC-B2C99-M-014, TC-B2C99-M-015, TC-B2C99-M-016, TC-B2C99-M-017, TC-B2C99-M-018, TC-B2C99-M-019, TC-B2C99-M-020, TC-B2C99-M-021, TC-B2C99-M-022, TC-B2C99-M-023, TC-B2C99-M-024, TC-B2C99-M-025, TC-B2C99-M-026, TC-B2C99-M-027, TC-B2C99-M-028, TC-B2C99-M-029, TC-B2C99-M-030, TC-B2C99-M-031, TC-B2C99-M-032, TC-B2C99-M-033, TC-B2C99-M-034, TC-B2C99-M-035, TC-B2C99-M-036, TC-B2C99-M-037 |

## Detalle por caso de prueba

### TC-B2C99-D-001 - Verificar que la pantalla Detalles de la dirección muestra todos sus elementos [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario revisa la pantalla.

**Resultado esperado**

Se muestran: botón atrás "<", título "Detalles de la dirección", mapa con el PIN posicionado sobre la dirección, la dirección ingresada con la opción "Editar", el campo "N° dpto, oficina, piso, etc (opcional)", el campo "Nombre de dirección (opcional)", 4 íconos de etiquetas de entrega, el área de texto "Instrucción para entrega (opcional)" y el botón "Agregar dirección".

**Resultado obtenido**

Esperado: la sugerencia de Google redirige a «Detalles de la dirección». Obtenido: abre «Agregar nueva dirección»; «Detalles» solo aparece tras «Continuar con detalles de la dirección». Bug: B2C-1332.

**Observación**

Esperado: la sugerencia de Google redirige a «Detalles de la dirección». Obtenido: abre «Agregar nueva dirección»; «Detalles» solo aparece tras «Continuar con detalles de la dirección». Bug: B2C-1332.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-001-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — pantalla a la que lleva la sugerencia agregar nueva direccio](<B2C-99 Evidencias/TC-B2C99-D-001-p06-pantalla-a-la-que-lleva-la-sugerencia-agregar-nueva-direccio.png>)

![Paso 7 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-001-p07-detalles-de-la-direccion.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-001.png>)

---

### TC-B2C99-D-002 - Verificar que los campos opcionales de Detalles de la dirección muestran sus placeholders [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario revisa los campos sin completar.

**Resultado esperado**

"N° dpto, oficina, piso, etc (opcional)" muestra el placeholder "Ej. Dpto 910" y "Nombre de dirección (opcional)" muestra "Ej. Mamá, Pololo, trabajo".

**Resultado obtenido**

Esperado: placeholders «Ej. Dpto 910» y «Ej. Mamá, Pololo, trabajo». Obtenido: «Ej: Dpto 910» y «Ej: Mamá, Pololo, trabajo». Bug: B2C-1334.

**Observación**

Esperado: placeholders «Ej. Dpto 910» y «Ej. Mamá, Pololo, trabajo». Obtenido: «Ej: Dpto 910» y «Ej: Mamá, Pololo, trabajo». Bug: B2C-1334.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-002-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-002-p06-detalles-de-la-direccion.png>)

![Paso 7 — campos opcionales sin completar](<B2C-99 Evidencias/TC-B2C99-D-002-p07-campos-opcionales-sin-completar.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-002.png>)

---

### TC-B2C99-D-003 - Verificar que la dirección se muestra con calle, número, comuna y región [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario revisa la dirección mostrada bajo el mapa.

**Resultado esperado**

La dirección se muestra como calle + número + comuna + región de {DIRECCION_DESPACHO_001} (ej. "Calle Uno 23, La Florida, Región Metropolitana").

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-003-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-003-p06-detalles-de-la-direccion.png>)

![Paso 7 — direccion bajo el mapa](<B2C-99 Evidencias/TC-B2C99-D-003-p07-direccion-bajo-el-mapa.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-003.png>)

---

### TC-B2C99-D-004 - Verificar que el campo N° dpto no acepta más de 50 caracteres [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {TEXTO_51_CARACTERES}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario escribe {TEXTO_51_CARACTERES} en "N° dpto, oficina, piso, etc (opcional)".

**Resultado esperado**

El campo queda con 50 caracteres como máximo; el carácter 51 no se ingresa (o se muestra la validación de largo).

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-004-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-004-p06-detalles-de-la-direccion.png>)

![Paso 7 — campo tras escribir 51 caracteres](<B2C-99 Evidencias/TC-B2C99-D-004-p07-campo-tras-escribir-51-caracteres.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-004.png>)

---

### TC-B2C99-D-005 - Verificar que el campo Nombre de dirección no acepta más de 20 caracteres [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {TEXTO_21_CARACTERES}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario escribe {TEXTO_21_CARACTERES} en "Nombre de dirección (opcional)".

**Resultado esperado**

El campo queda con 20 caracteres como máximo; el carácter 21 no se ingresa (o se muestra la validación de largo).

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-005-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-005-p06-detalles-de-la-direccion.png>)

![Paso 7 — campo tras escribir 21 caracteres](<B2C-99 Evidencias/TC-B2C99-D-005-p07-campo-tras-escribir-21-caracteres.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-005.png>)

---

### TC-B2C99-D-006 - Verificar que el campo Instrucción para entrega no acepta más de 300 caracteres [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {TEXTO_301_CARACTERES}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario escribe {TEXTO_301_CARACTERES} en "Instrucción para entrega (opcional)".

**Resultado esperado**

El área de texto queda con 300 caracteres como máximo; el carácter 301 no se ingresa (o se muestra la validación de largo).

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-006-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-006-p06-detalles-de-la-direccion.png>)

![Paso 7 — campo tras escribir 301 caracteres](<B2C-99 Evidencias/TC-B2C99-D-006-p07-campo-tras-escribir-301-caracteres.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-006.png>)

---

### TC-B2C99-D-007 - Verificar que al seleccionar una etiqueta de entrega el ícono se pinta de rojo [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en uno de los 4 íconos de etiqueta.

**Resultado esperado**

El ícono seleccionado se pinta de rojo; los otros 3 se mantienen sin seleccionar.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-007-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-007-p06-detalles-de-la-direccion.png>)

![Paso 7 — etiqueta casa seleccionada](<B2C-99 Evidencias/TC-B2C99-D-007-p07-etiqueta-casa-seleccionada.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-007.png>)

---

### TC-B2C99-D-008 - Verificar que al agregar la dirección como invitado se muestra un loader [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el botón "Agregar dirección".

**Resultado esperado**

Se muestra un loader mientras el sistema consulta cobertura, horarios y costos de envío.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-008-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-008-p06-detalles-de-la-direccion.png>)

![Paso 7 — tras agregar direccion con red lenta](<B2C-99 Evidencias/TC-B2C99-D-008-p07-tras-agregar-direccion-con-red-lenta.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-008.png>)

---

### TC-B2C99-D-009 - Verificar que una dirección con cobertura y horarios setea el método de entrega en el Store Locator [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- {DIRECCION_DESPACHO_001} tiene cobertura y horarios disponibles

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el botón "Agregar dirección".

**Resultado esperado**

Se cierra el modal y el Store Locator muestra el método de entrega Despacho con {DIRECCION_DESPACHO_001}, con ventana y costo según B2C-144.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-009-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-009-p06-detalles-de-la-direccion.png>)

![Paso 7 — store locator con la direccion](<B2C-99 Evidencias/TC-B2C99-D-009-p07-store-locator-con-la-direccion.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-009.png>)

---

### TC-B2C99-D-010 - Verificar que una dirección sin cobertura deriva al flujo sin cobertura [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_SIN_COBERTURA}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_COBERTURA} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el botón "Agregar dirección".

**Resultado esperado**

El sistema deriva al flujo de dirección sin cobertura (B2C-123) y no setea {DIRECCION_SIN_COBERTURA} en el Store Locator.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-010-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-010-p06-detalles-de-la-direccion.png>)

![Paso 7 — flujo sin cobertura](<B2C-99 Evidencias/TC-B2C99-D-010-p07-flujo-sin-cobertura.png>)

---

### TC-B2C99-D-011 - Verificar que una dirección con cobertura y sin horarios deriva al flujo sin horarios [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_SIN_SLA}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_SLA} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el botón "Agregar dirección".

**Resultado esperado**

El sistema deriva al flujo de dirección sin horarios disponibles (B2C-127).

**Resultado obtenido**

Causa: {DIRECCION_SIN_SLA} (Av Libertador Gral Bernardo O'Higgins 1072, Maipú) tiene cobertura y horarios en el ambiente (el Store Locator queda con «Desde: Lun 26/10…»); no es una dirección con cobertura y sin horarios. Acción: declarar una dirección con cobertura y sin horarios disponibles (B2C-127).

**Observación**

Causa: {DIRECCION_SIN_SLA} (Av Libertador Gral Bernardo O'Higgins 1072, Maipú) tiene cobertura y horarios en el ambiente (el Store Locator queda con «Desde: Lun 26/10…»); no es una dirección con cobertura y sin horarios. Acción: declarar una dirección con cobertura y sin horarios disponibles (B2C-127).

---

### TC-B2C99-D-012 - Verificar que con productos en el carro y cambio de tienda se muestra el modal No se te escapen [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La dirección activa es {DIRECCION_MISMA_TIENDA}
- El carro contiene {SKU_VALID_001} x 1

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_MISMA_TIENDA}
- {DIRECCION_OTRA_TIENDA}
- {SKU_VALID_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el botón "Agregar dirección".

**Resultado esperado**

Se muestra el modal "No se te escapen" (B2C-122) antes de setear la nueva dirección.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![TC B2C99 D 012 ppre direccion activa y carro con el sku](<B2C-99 Evidencias/TC-B2C99-D-012-ppre-direccion-activa-y-carro-con-el-sku.png>)

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-012-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-012-p06-detalles-de-la-direccion.png>)

![Paso 7 — modal de cambio de tienda](<B2C-99 Evidencias/TC-B2C99-D-012-p07-modal-de-cambio-de-tienda.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-012.png>)

---

### TC-B2C99-D-013 - Verificar que al agregar la dirección logueado se muestra un loader y se dispara el OTP [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {USER_AUTH_001} no tiene guardada la dirección usada en el caso
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el botón "Agregar dirección".

**Resultado esperado**

Se muestra un loader y luego el modal "Autenticación requerida" de B2C-125; llega el código OTP al correo de la cuenta.

**Resultado obtenido**

Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.

**Observación**

Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.

---

### TC-B2C99-D-014 - Verificar que al seleccionar el mapa se abre Agregar nueva dirección con todos sus elementos [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el mapa.
8. El usuario revisa la pantalla.

**Resultado esperado**

Se muestra "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección actual, la dirección actual bajo el mapa, el banner "Importante, entregaremos tu compra en la ubicación marcada…" y el botón "Continuar con detalles de la dirección".

**Resultado obtenido**

Esperado: seleccionar el mapa abre «Agregar nueva dirección». Obtenido: el clic en el mapa no abre nada; solo el PIN «Ajusta aquí» lo abre. Bug: B2C-1336.

**Observación**

Esperado: seleccionar el mapa abre «Agregar nueva dirección». Obtenido: el clic en el mapa no abre nada; solo el PIN «Ajusta aquí» lo abre. Bug: B2C-1336.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-014-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-014-p06-detalles-de-la-direccion.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-014.png>)

---

### TC-B2C99-D-015 - Verificar que al seleccionar el PIN Ajusta aquí se abre Agregar nueva dirección [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.

**Resultado esperado**

Se abre "Agregar nueva dirección" con el mapa centrado en la dirección actual y el PIN sobre ella.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-015-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-015-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-D-015-p08-agregar-nueva-direccion-con-el-pin.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-015.png>)

---

### TC-B2C99-D-016 - Verificar que al mover el PIN dentro del radio el texto de la dirección no cambia [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el mouse el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).
10. El usuario revisa la dirección bajo el mapa.

**Resultado esperado**

El PIN queda en la nueva posición, el texto de {DIRECCION_DESPACHO_001} bajo el mapa no cambia, no aparece alerta y "Continuar con detalles de la dirección" sigue habilitado.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-016-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-016-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-D-016-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 9 — pin movido dentro del radio](<B2C-99 Evidencias/TC-B2C99-D-016-p09-pin-movido-dentro-del-radio.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-016.png>)

---

### TC-B2C99-D-017 - Verificar que al mover el PIN fuera del radio se muestra el toast de alerta con Ajustar y X [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el mouse el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).

**Resultado esperado**

Se muestra el toast "La ubicación seleccionada se encuentra fuera del radio de la dirección actual. Por favor ajustarla." con la opción "Ajustar" y el botón X; el toast no se cierra solo.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-017-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-017-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-D-017-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 9 — toast de pin fuera del radio](<B2C-99 Evidencias/TC-B2C99-D-017-p09-toast-de-pin-fuera-del-radio.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-017.png>)

---

### TC-B2C99-D-018 - Verificar que con el PIN fuera del radio el botón Continuar queda deshabilitado [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el mouse el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).
10. El usuario intenta hacer clic en "Continuar con detalles de la dirección".

**Resultado esperado**

El botón "Continuar con detalles de la dirección" se muestra deshabilitado y el usuario sigue en "Agregar nueva dirección".

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-018-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-018-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-D-018-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 10 — tras intentar continuar](<B2C-99 Evidencias/TC-B2C99-D-018-p10-tras-intentar-continuar.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-018.png>)

---

### TC-B2C99-D-019 - Verificar que Ajustar devuelve el PIN a su posición original y habilita Continuar [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el mouse el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).
10. El usuario hace clic en "Ajustar" en el toast.

**Resultado esperado**

El PIN vuelve a su posición inicial sobre {DIRECCION_DESPACHO_001}, el toast se cierra y "Continuar con detalles de la dirección" queda habilitado.

**Resultado obtenido**

Esperado: «Ajustar» devuelve el PIN, habilita «Continuar» y cierra el toast. Obtenido: el PIN vuelve y «Continuar» se habilita, pero el toast sigue visible. Bug: B2C-1338.

**Observación**

Esperado: «Ajustar» devuelve el PIN, habilita «Continuar» y cierra el toast. Obtenido: el PIN vuelve y «Continuar» se habilita, pero el toast sigue visible. Bug: B2C-1338.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-019-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-019-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-D-019-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 10 — tras ajustar](<B2C-99 Evidencias/TC-B2C99-D-019-p10-tras-ajustar.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-019.png>)

---

### TC-B2C99-D-020 - Verificar que al cerrar el toast con la X el PIN sigue fuera del radio y no se puede continuar [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el mouse el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).
10. El usuario hace clic en la X del toast.

**Resultado esperado**

El toast se cierra, el PIN se mantiene fuera del radio y "Continuar con detalles de la dirección" sigue deshabilitado.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-020-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-020-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-D-020-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 10 — tras cerrar el toast con la x](<B2C-99 Evidencias/TC-B2C99-D-020-p10-tras-cerrar-el-toast-con-la-x.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-020.png>)

---

### TC-B2C99-D-021 - Verificar que tras cerrar el toast al volver el PIN dentro del radio se habilita Continuar [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el mouse el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).
10. El usuario hace clic en la X del toast.
11. El usuario arrastra con el mouse el PIN de vuelta dentro del círculo del radio permitido.

**Resultado esperado**

El botón "Continuar con detalles de la dirección" queda habilitado y no se vuelve a mostrar la alerta.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-021-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-021-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-D-021-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 11 — pin de vuelta dentro del radio](<B2C-99 Evidencias/TC-B2C99-D-021-p11-pin-de-vuelta-dentro-del-radio.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-021.png>)

---

### TC-B2C99-D-022 - Verificar que el toggle satelital cambia la vista del mapa y mantiene el PIN [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario hace clic en el toggle de vista satelital.

**Resultado esperado**

El mapa cambia a vista satelital y el PIN se mantiene en la misma posición.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-022-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-022-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-D-022-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 9 — vista satelital](<B2C-99 Evidencias/TC-B2C99-D-022-p09-vista-satelital.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-022.png>)

---

### TC-B2C99-D-023 - Verificar que el toggle vuelve a la vista normal y mantiene el PIN [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario hace clic en el toggle de vista satelital.
10. El usuario hace clic en nuevamente el toggle para volver a la vista normal.

**Resultado esperado**

El mapa vuelve a la vista normal y el PIN se mantiene en la misma posición.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-023-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-023-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-D-023-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 9 — vista satelital](<B2C-99 Evidencias/TC-B2C99-D-023-p09-vista-satelital.png>)

![Paso 10 — vista normal](<B2C-99 Evidencias/TC-B2C99-D-023-p10-vista-normal.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-023.png>)

---

### TC-B2C99-D-024 - Verificar que al continuar con el PIN ajustado se vuelve a Detalles con el PIN en su nueva posición [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el mouse el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).
10. El usuario hace clic en "Continuar con detalles de la dirección".

**Resultado esperado**

Se muestra un loader y luego "Detalles de la dirección" con el PIN en la nueva posición; el texto de {DIRECCION_DESPACHO_001} bajo el mapa no cambia.

**Resultado obtenido**

Esperado: loader al continuar con el PIN ajustado. Obtenido: se vuelve a «Detalles» sin ningún loader (ni spinner ni skeleton). Bug: B2C-1340.

**Observación**

Esperado: loader al continuar con el PIN ajustado. Obtenido: se vuelve a «Detalles» sin ningún loader (ni spinner ni skeleton). Bug: B2C-1340.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-024-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-024-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-D-024-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 9 — pin movido dentro del radio](<B2C-99 Evidencias/TC-B2C99-D-024-p09-pin-movido-dentro-del-radio.png>)

![Paso 10 — detalles con el pin en la nueva posicion](<B2C-99 Evidencias/TC-B2C99-D-024-p10-detalles-con-el-pin-en-la-nueva-posicion.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-024.png>)

---

### TC-B2C99-D-025 - Verificar que la cobertura se valida con las coordenadas del PIN ajustado y no con el texto [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- DevTools abierto en la pestaña Network

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {STORE_LOCATOR_API_ENDPOINT}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el mouse el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).
10. El usuario hace clic en "Continuar con detalles de la dirección".
11. El sistema vuelve a "Detalles de la dirección".
12. El usuario hace clic en el botón "Agregar dirección".
13. El usuario revisa la request {STORE_LOCATOR_API_ENDPOINT} en DevTools > Network.

**Resultado esperado**

La request de cobertura envía la latitud y longitud de la nueva posición del PIN (distintas de las de la dirección original) y no recalcula las coordenadas desde el texto.

**Resultado obtenido**

Causa: {STORE_LOCATOR_API_ENDPOINT} (…/smu-delivery/…/stores) no se llama al agregar la dirección; las coordenadas del PIN viajan en POST …/smu-delivery/…/apply. Acción: declarar en la planilla el endpoint que recibe las coordenadas (…/apply).

**Observación**

Causa: {STORE_LOCATOR_API_ENDPOINT} (…/smu-delivery/…/stores) no se llama al agregar la dirección; las coordenadas del PIN viajan en POST …/smu-delivery/…/apply. Acción: declarar en la planilla el endpoint que recibe las coordenadas (…/apply).

---

### TC-B2C99-D-026 - Verificar que un error al guardar el PIN redirige al buscador con el toast de error [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- DevTools abierto con bloqueo de la request {PIN_UBICACION_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {PIN_UBICACION_API_ENDPOINT}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el mouse el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).
10. El usuario hace clic en "Continuar con detalles de la dirección".

**Resultado esperado**

El sistema redirige al buscador de direcciones del Store Locator y muestra el toast "Ha ocurrido un error" con X para cerrarlo.

**Resultado obtenido**

Causa: {PIN_UBICACION_API_ENDPOINT} está vacío en el Excel de data. Acción: cargar el endpoint del guardado de la ubicación del PIN.

**Observación**

Causa: {PIN_UBICACION_API_ENDPOINT} está vacío en el Excel de data. Acción: cargar el endpoint del guardado de la ubicación del PIN.

---

### TC-B2C99-D-027 - Verificar que el botón atrás en Agregar nueva dirección vuelve sin aplicar cambios al PIN [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el mouse el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).
10. El usuario hace clic en el botón atrás "<".

**Resultado esperado**

El sistema vuelve a "Detalles de la dirección" con el PIN en su posición original y la dirección sin cambios.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-027-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-027-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-D-027-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 10 — detalles tras el boton atras](<B2C-99 Evidencias/TC-B2C99-D-027-p10-detalles-tras-el-boton-atras.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-027.png>)

---

### TC-B2C99-D-028 - Verificar que Editar abre el modal Dirección manual con los campos precargados [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en la opción "Editar" de la dirección.
8. El sistema muestra un loader y despliega el modal "Dirección manual" con los campos precargados.
9. El usuario revisa los campos del modal.

**Resultado esperado**

Se muestra un loader y el modal "Dirección manual" con Región, Comuna, Dirección y Numeración precargadas con los datos de {DIRECCION_DESPACHO_001}.

**Resultado obtenido**

Esperado: loader y «Dirección manual» precargada. Obtenido: se abre «Dirección manual» precargada (Metropolitana, La Florida, Calle Uno, 23) sin loader. Bug: B2C-1342.

**Observación**

Esperado: loader y «Dirección manual» precargada. Obtenido: se abre «Dirección manual» precargada (Metropolitana, La Florida, Calle Uno, 23) sin loader. Bug: B2C-1342.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-028-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-028-p06-detalles-de-la-direccion.png>)

![Paso 9 — direccion manual precargado](<B2C-99 Evidencias/TC-B2C99-D-028-p09-direccion-manual-precargado.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-028.png>)

---

### TC-B2C99-D-029 - Verificar que al editar la dirección se actualiza el texto y el PIN se reubica [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en la opción "Editar" de la dirección.
8. El sistema muestra un loader y despliega el modal "Dirección manual" con los campos precargados.
9. El usuario cambia la Numeración por otra válida de la misma calle (ej. 45).
10. El usuario hace clic en "Continuar con detalles de la dirección".

**Resultado esperado**

Se muestra un loader y se vuelve a "Detalles de la dirección" con la dirección actualizada bajo el mapa y el PIN ubicado en la nueva numeración.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-029-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-029-p06-detalles-de-la-direccion.png>)

![Paso 9 — numeracion cambiada a 45](<B2C-99 Evidencias/TC-B2C99-D-029-p09-numeracion-cambiada-a-45.png>)

![Paso 10 — detalles con la direccion editada](<B2C-99 Evidencias/TC-B2C99-D-029-p10-detalles-con-la-direccion-editada.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-029.png>)

---

### TC-B2C99-D-030 - Verificar que al editar la dirección se limpian los campos complementarios [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario completa "N° dpto" con "Dpto 910", "Nombre de dirección" con "Casa", selecciona una etiqueta y escribe una instrucción para entrega.
8. El usuario hace clic en la opción "Editar" de la dirección.
9. El sistema muestra un loader y despliega el modal "Dirección manual" con los campos precargados.
10. El usuario cambia la Numeración por otra válida de la misma calle (ej. 45).
11. El usuario hace clic en "Continuar con detalles de la dirección".

**Resultado esperado**

Al volver a "Detalles de la dirección", los campos N° dpto, Nombre de dirección e Instrucción para entrega están vacíos y ninguna etiqueta está seleccionada.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-030-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-030-p06-detalles-de-la-direccion.png>)

![Paso 7 — campos complementarios completados](<B2C-99 Evidencias/TC-B2C99-D-030-p07-campos-complementarios-completados.png>)

![Paso 11 — detalles tras editar la direccion](<B2C-99 Evidencias/TC-B2C99-D-030-p11-detalles-tras-editar-la-direccion.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-030.png>)

---

### TC-B2C99-D-031 - Verificar que sin nombre la dirección se guarda con calle y número truncados a 20 caracteres [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {USER_AUTH_001} no tiene guardada la dirección usada en el caso

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_003}
- {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_003} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el botón "Agregar dirección".
8. El usuario valida el código OTP recibido (B2C-125).
9. El usuario hace clic en el Store Locator y revisa sus direcciones guardadas.

**Resultado esperado**

La dirección queda guardada con el nombre "Av. San Josemaría Es..." (primeros 20 caracteres de calle + número de {DIRECCION_DESPACHO_003} y puntos suspensivos).

**Resultado obtenido**

Esperado: nombre «Av. San Josemaría Es...». Obtenido: «Avenida San Josemar…» (19 caracteres y «…»). La dirección creada se eliminó al terminar. Bug: B2C-1344.

**Observación**

Esperado: nombre «Av. San Josemaría Es...». Obtenido: «Avenida San Josemar…» (19 caracteres y «…»). La dirección creada se eliminó al terminar. Bug: B2C-1344.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-031-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-D-031-p06-detalles-de-la-direccion.png>)

![Paso 9 — direcciones guardadas de la cuenta](<B2C-99 Evidencias/TC-B2C99-D-031-p09-direcciones-guardadas-de-la-cuenta.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-031.png>)

---

### TC-B2C99-D-032 - Verificar que sin nombre una dirección corta se guarda con calle y número completos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {USER_AUTH_001} no tiene guardada la dirección usada en el caso

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el botón "Agregar dirección".
8. El usuario valida el código OTP recibido (B2C-125).
9. El usuario hace clic en el Store Locator y revisa sus direcciones guardadas.

**Resultado esperado**

La dirección queda guardada con el nombre "Calle Uno 23" (calle + número de {DIRECCION_DESPACHO_001}), sin puntos suspensivos.

**Resultado obtenido**

Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.

**Observación**

Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.

---

### TC-B2C99-D-033 - Verificar que sin etiqueta seleccionada la dirección se guarda con el ícono de ubicación [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {USER_AUTH_001} no tiene guardada la dirección usada en el caso

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario hace clic en el botón "Agregar dirección".
8. El usuario valida el código OTP recibido (B2C-125).
9. El usuario hace clic en el Store Locator y revisa sus direcciones guardadas.

**Resultado esperado**

La dirección guardada muestra el ícono de ubicación (pin) como etiqueta.

**Resultado obtenido**

Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.

**Observación**

Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.

---

### TC-B2C99-D-034 - Verificar que si Google Maps no carga se muestra el error del mapa y la dirección en lectura [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- DevTools abierto con bloqueo de las requests a maps.googleapis.com después de elegir la sugerencia (Network request blocking)

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" y el mapa no carga.
7. El usuario revisa la pantalla.

**Resultado esperado**

El área del mapa se muestra en gris con ícono de mapa y el mensaje "No pudimos cargar el mapa. Puedes continuar con la dirección ingresada o volver a buscarla."; la calle, número, comuna y región de {DIRECCION_DESPACHO_001} se muestran en modo lectura.

**Resultado obtenido**

Esperado: mensaje «No pudimos cargar el mapa…» con el mapa bloqueado. Obtenido: área del mapa en blanco, sin ícono ni mensaje. Bug: B2C-1346.

**Observación**

Esperado: mensaje «No pudimos cargar el mapa…» con el mapa bloqueado. Obtenido: área del mapa en blanco, sin ícono ni mensaje. Bug: B2C-1346.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-034-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 5 — agregar nueva direccion con el mapa sin cargar](<B2C-99 Evidencias/TC-B2C99-D-034-p05-agregar-nueva-direccion-con-el-mapa-sin-cargar.png>)

![Paso 6 — detalles de la direccion con el mapa sin cargar](<B2C-99 Evidencias/TC-B2C99-D-034-p06-detalles-de-la-direccion-con-el-mapa-sin-cargar.png>)

![Paso 7 — pantalla con el mapa sin cargar](<B2C-99 Evidencias/TC-B2C99-D-034-p07-pantalla-con-el-mapa-sin-cargar.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-034.png>)

---

### TC-B2C99-D-035 - Verificar que si Google Maps no carga el ajuste del PIN queda deshabilitado [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- DevTools abierto con bloqueo de las requests a maps.googleapis.com después de elegir la sugerencia (Network request blocking)

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" y el mapa no carga.
7. El usuario intenta hacer clic en el área del mapa.

**Resultado esperado**

No se abre "Agregar nueva dirección": el ajuste del PIN y los controles del mapa no están disponibles.

**Resultado obtenido**

Con el mapa bloqueado, tocar el área del mapa no abre «Agregar nueva dirección». Nota: en ese estado no se muestra el mensaje de error del mapa (bug B2C-1346/B2C-1347).

**Observación**

Con el mapa bloqueado, tocar el área del mapa no abre «Agregar nueva dirección». Nota: en ese estado no se muestra el mensaje de error del mapa (bug B2C-1346/B2C-1347).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-035-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 5 — agregar nueva direccion con el mapa sin cargar](<B2C-99 Evidencias/TC-B2C99-D-035-p05-agregar-nueva-direccion-con-el-mapa-sin-cargar.png>)

![Paso 6 — detalles de la direccion con el mapa sin cargar](<B2C-99 Evidencias/TC-B2C99-D-035-p06-detalles-de-la-direccion-con-el-mapa-sin-cargar.png>)

![Paso 7 — tras tocar el area del mapa](<B2C-99 Evidencias/TC-B2C99-D-035-p07-tras-tocar-el-area-del-mapa.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-035.png>)

---

### TC-B2C99-D-036 - Verificar que si Google Maps no carga Confirmar dirección continúa con las coordenadas geocodificadas [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- DevTools abierto con bloqueo de las requests a maps.googleapis.com después de elegir la sugerencia (Network request blocking)
- {DIRECCION_DESPACHO_001} tiene cobertura y horarios disponibles

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" y el mapa no carga.
7. El usuario hace clic en "Confirmar dirección".

**Resultado esperado**

El flujo continúa con las validaciones del CA2 y el Store Locator queda con {DIRECCION_DESPACHO_001} como dirección de despacho.

**Resultado obtenido**

Esperado: botón «Confirmar dirección» con el mapa sin cargar. Obtenido: solo «Ajusta aquí», «Editar» y «Agregar dirección». Bug: B2C-1348.

**Observación**

Esperado: botón «Confirmar dirección» con el mapa sin cargar. Obtenido: solo «Ajusta aquí», «Editar» y «Agregar dirección». Bug: B2C-1348.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-036-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 5 — agregar nueva direccion con el mapa sin cargar](<B2C-99 Evidencias/TC-B2C99-D-036-p05-agregar-nueva-direccion-con-el-mapa-sin-cargar.png>)

![Paso 6 — detalles de la direccion con el mapa sin cargar](<B2C-99 Evidencias/TC-B2C99-D-036-p06-detalles-de-la-direccion-con-el-mapa-sin-cargar.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-036.png>)

---

### TC-B2C99-D-037 - Verificar que si Google Maps no carga el botón atrás vuelve al buscador de direcciones [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- DevTools abierto con bloqueo de las requests a maps.googleapis.com después de elegir la sugerencia (Network request blocking)

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" y el mapa no carga.
7. El usuario hace clic en el botón atrás "<".

**Resultado esperado**

El sistema vuelve al buscador de direcciones del Store Locator (B2C-26) para reingresar la dirección.

**Resultado obtenido**

Esperado: el botón atrás vuelve al buscador del Store Locator. Obtenido: vuelve a «Agregar nueva dirección» (mapa en blanco). Bug: B2C-1350.

**Observación**

Esperado: el botón atrás vuelve al buscador del Store Locator. Obtenido: vuelve a «Agregar nueva dirección» (mapa en blanco). Bug: B2C-1350.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-D-037-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 5 — agregar nueva direccion con el mapa sin cargar](<B2C-99 Evidencias/TC-B2C99-D-037-p05-agregar-nueva-direccion-con-el-mapa-sin-cargar.png>)

![Paso 6 — detalles de la direccion con el mapa sin cargar](<B2C-99 Evidencias/TC-B2C99-D-037-p06-detalles-de-la-direccion-con-el-mapa-sin-cargar.png>)

![Paso 7 — tras el boton atras](<B2C-99 Evidencias/TC-B2C99-D-037-p07-tras-el-boton-atras.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-D-037.png>)

---

### TC-B2C99-M-001 - Verificar que la pantalla Detalles de la dirección muestra todos sus elementos [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario revisa la pantalla.

**Resultado esperado**

Se muestran: botón atrás "<", título "Detalles de la dirección", mapa con el PIN posicionado sobre la dirección, la dirección ingresada con la opción "Editar", el campo "N° dpto, oficina, piso, etc (opcional)", el campo "Nombre de dirección (opcional)", 4 íconos de etiquetas de entrega, el área de texto "Instrucción para entrega (opcional)" y el botón "Agregar dirección".

**Resultado obtenido**

Esperado: la sugerencia de Google redirige a «Detalles de la dirección». Obtenido: abre «Agregar nueva dirección»; «Detalles» solo aparece tras «Continuar con detalles de la dirección». Bug: B2C-1333.

**Observación**

Esperado: la sugerencia de Google redirige a «Detalles de la dirección». Obtenido: abre «Agregar nueva dirección»; «Detalles» solo aparece tras «Continuar con detalles de la dirección». Bug: B2C-1333.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-001-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — pantalla a la que lleva la sugerencia agregar nueva direccio](<B2C-99 Evidencias/TC-B2C99-M-001-p06-pantalla-a-la-que-lleva-la-sugerencia-agregar-nueva-direccio.png>)

![Paso 7 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-001-p07-detalles-de-la-direccion.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-001.png>)

---

### TC-B2C99-M-002 - Verificar que los campos opcionales de Detalles de la dirección muestran sus placeholders [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario revisa los campos sin completar.

**Resultado esperado**

"N° dpto, oficina, piso, etc (opcional)" muestra el placeholder "Ej. Dpto 910" y "Nombre de dirección (opcional)" muestra "Ej. Mamá, Pololo, trabajo".

**Resultado obtenido**

Esperado: placeholders «Ej. Dpto 910» y «Ej. Mamá, Pololo, trabajo». Obtenido: «Ej: Dpto 910» y «Ej: Mamá, Pololo, trabajo». Bug: B2C-1335.

**Observación**

Esperado: placeholders «Ej. Dpto 910» y «Ej. Mamá, Pololo, trabajo». Obtenido: «Ej: Dpto 910» y «Ej: Mamá, Pololo, trabajo». Bug: B2C-1335.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-002-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-002-p06-detalles-de-la-direccion.png>)

![Paso 7 — campos opcionales sin completar](<B2C-99 Evidencias/TC-B2C99-M-002-p07-campos-opcionales-sin-completar.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-002.png>)

---

### TC-B2C99-M-003 - Verificar que la dirección se muestra con calle, número, comuna y región [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario revisa la dirección mostrada bajo el mapa.

**Resultado esperado**

La dirección se muestra como calle + número + comuna + región de {DIRECCION_DESPACHO_001} (ej. "Calle Uno 23, La Florida, Región Metropolitana").

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-003-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-003-p06-detalles-de-la-direccion.png>)

![Paso 7 — direccion bajo el mapa](<B2C-99 Evidencias/TC-B2C99-M-003-p07-direccion-bajo-el-mapa.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-003.png>)

---

### TC-B2C99-M-004 - Verificar que el campo N° dpto no acepta más de 50 caracteres [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {TEXTO_51_CARACTERES}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario escribe {TEXTO_51_CARACTERES} en "N° dpto, oficina, piso, etc (opcional)".

**Resultado esperado**

El campo queda con 50 caracteres como máximo; el carácter 51 no se ingresa (o se muestra la validación de largo).

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-004-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-004-p06-detalles-de-la-direccion.png>)

![Paso 7 — campo tras escribir 51 caracteres](<B2C-99 Evidencias/TC-B2C99-M-004-p07-campo-tras-escribir-51-caracteres.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-004.png>)

---

### TC-B2C99-M-005 - Verificar que el campo Nombre de dirección no acepta más de 20 caracteres [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {TEXTO_21_CARACTERES}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario escribe {TEXTO_21_CARACTERES} en "Nombre de dirección (opcional)".

**Resultado esperado**

El campo queda con 20 caracteres como máximo; el carácter 21 no se ingresa (o se muestra la validación de largo).

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-005-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-005-p06-detalles-de-la-direccion.png>)

![Paso 7 — campo tras escribir 21 caracteres](<B2C-99 Evidencias/TC-B2C99-M-005-p07-campo-tras-escribir-21-caracteres.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-005.png>)

---

### TC-B2C99-M-006 - Verificar que el campo Instrucción para entrega no acepta más de 300 caracteres [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {TEXTO_301_CARACTERES}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario escribe {TEXTO_301_CARACTERES} en "Instrucción para entrega (opcional)".

**Resultado esperado**

El área de texto queda con 300 caracteres como máximo; el carácter 301 no se ingresa (o se muestra la validación de largo).

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-006-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-006-p06-detalles-de-la-direccion.png>)

![Paso 7 — campo tras escribir 301 caracteres](<B2C-99 Evidencias/TC-B2C99-M-006-p07-campo-tras-escribir-301-caracteres.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-006.png>)

---

### TC-B2C99-M-007 - Verificar que al seleccionar una etiqueta de entrega el ícono se pinta de rojo [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca uno de los 4 íconos de etiqueta.

**Resultado esperado**

El ícono seleccionado se pinta de rojo; los otros 3 se mantienen sin seleccionar.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-007-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-007-p06-detalles-de-la-direccion.png>)

![Paso 7 — etiqueta casa seleccionada](<B2C-99 Evidencias/TC-B2C99-M-007-p07-etiqueta-casa-seleccionada.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-007.png>)

---

### TC-B2C99-M-008 - Verificar que al agregar la dirección como invitado se muestra un loader [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el botón "Agregar dirección".

**Resultado esperado**

Se muestra un loader mientras el sistema consulta cobertura, horarios y costos de envío.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-008-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-008-p06-detalles-de-la-direccion.png>)

![Paso 7 — tras agregar direccion con red lenta](<B2C-99 Evidencias/TC-B2C99-M-008-p07-tras-agregar-direccion-con-red-lenta.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-008.png>)

---

### TC-B2C99-M-009 - Verificar que una dirección con cobertura y horarios setea el método de entrega en el Store Locator [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- {DIRECCION_DESPACHO_001} tiene cobertura y horarios disponibles

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el botón "Agregar dirección".

**Resultado esperado**

Se cierra el modal y el Store Locator muestra el método de entrega Despacho con {DIRECCION_DESPACHO_001}, con ventana y costo según B2C-144.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-009-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-009-p06-detalles-de-la-direccion.png>)

![Paso 7 — store locator con la direccion](<B2C-99 Evidencias/TC-B2C99-M-009-p07-store-locator-con-la-direccion.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-009.png>)

---

### TC-B2C99-M-010 - Verificar que una dirección sin cobertura deriva al flujo sin cobertura [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_SIN_COBERTURA}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_COBERTURA} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el botón "Agregar dirección".

**Resultado esperado**

El sistema deriva al flujo de dirección sin cobertura (B2C-123) y no setea {DIRECCION_SIN_COBERTURA} en el Store Locator.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-010-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-010-p06-detalles-de-la-direccion.png>)

![Paso 7 — flujo sin cobertura](<B2C-99 Evidencias/TC-B2C99-M-010-p07-flujo-sin-cobertura.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-010.png>)

---

### TC-B2C99-M-011 - Verificar que una dirección con cobertura y sin horarios deriva al flujo sin horarios [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_SIN_SLA}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_SLA} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el botón "Agregar dirección".

**Resultado esperado**

El sistema deriva al flujo de dirección sin horarios disponibles (B2C-127).

**Resultado obtenido**

Causa: {DIRECCION_SIN_SLA} (Av Libertador Gral Bernardo O'Higgins 1072, Maipú) tiene cobertura y horarios en el ambiente (el Store Locator queda con «Desde: Lun 26/10…»); no es una dirección con cobertura y sin horarios. Acción: declarar una dirección con cobertura y sin horarios disponibles (B2C-127).

**Observación**

Causa: {DIRECCION_SIN_SLA} (Av Libertador Gral Bernardo O'Higgins 1072, Maipú) tiene cobertura y horarios en el ambiente (el Store Locator queda con «Desde: Lun 26/10…»); no es una dirección con cobertura y sin horarios. Acción: declarar una dirección con cobertura y sin horarios disponibles (B2C-127).

---

### TC-B2C99-M-012 - Verificar que con productos en el carro y cambio de tienda se muestra el modal No se te escapen [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- La dirección activa es {DIRECCION_MISMA_TIENDA}
- El carro contiene {SKU_VALID_001} x 1

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_MISMA_TIENDA}
- {DIRECCION_OTRA_TIENDA}
- {SKU_VALID_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el botón "Agregar dirección".

**Resultado esperado**

Se muestra el modal "No se te escapen" (B2C-122) antes de setear la nueva dirección.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![TC B2C99 M 012 ppre direccion activa y carro con el sku](<B2C-99 Evidencias/TC-B2C99-M-012-ppre-direccion-activa-y-carro-con-el-sku.png>)

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-012-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-012-p06-detalles-de-la-direccion.png>)

![Paso 7 — modal de cambio de tienda](<B2C-99 Evidencias/TC-B2C99-M-012-p07-modal-de-cambio-de-tienda.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-012.png>)

---

### TC-B2C99-M-013 - Verificar que al agregar la dirección logueado se muestra un loader y se dispara el OTP [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {USER_AUTH_001} no tiene guardada la dirección usada en el caso
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el botón "Agregar dirección".

**Resultado esperado**

Se muestra un loader y luego el modal "Autenticación requerida" de B2C-125; llega el código OTP al correo de la cuenta.

**Resultado obtenido**

Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.

**Observación**

Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.

---

### TC-B2C99-M-014 - Verificar que al seleccionar el mapa se abre Agregar nueva dirección con todos sus elementos [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el mapa.
8. El usuario revisa la pantalla.

**Resultado esperado**

Se muestra "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección actual, la dirección actual bajo el mapa, el banner "Importante, entregaremos tu compra en la ubicación marcada…" y el botón "Continuar con detalles de la dirección".

**Resultado obtenido**

Esperado: seleccionar el mapa abre «Agregar nueva dirección». Obtenido: el clic en el mapa no abre nada; solo el PIN «Ajusta aquí» lo abre. Bug: B2C-1337.

**Observación**

Esperado: seleccionar el mapa abre «Agregar nueva dirección». Obtenido: el clic en el mapa no abre nada; solo el PIN «Ajusta aquí» lo abre. Bug: B2C-1337.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-014-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-014-p06-detalles-de-la-direccion.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-014.png>)

---

### TC-B2C99-M-015 - Verificar que al seleccionar el PIN Ajusta aquí se abre Agregar nueva dirección [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.

**Resultado esperado**

Se abre "Agregar nueva dirección" con el mapa centrado en la dirección actual y el PIN sobre ella.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-015-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-015-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-M-015-p08-agregar-nueva-direccion-con-el-pin.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-015.png>)

---

### TC-B2C99-M-016 - Verificar que al mover el PIN dentro del radio el texto de la dirección no cambia [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
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

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-016-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-016-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-M-016-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 9 — pin movido dentro del radio](<B2C-99 Evidencias/TC-B2C99-M-016-p09-pin-movido-dentro-del-radio.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-016.png>)

---

### TC-B2C99-M-017 - Verificar que al mover el PIN fuera del radio se muestra el toast de alerta con Ajustar y X [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el dedo el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).

**Resultado esperado**

Se muestra el toast "La ubicación seleccionada se encuentra fuera del radio de la dirección actual. Por favor ajustarla." con la opción "Ajustar" y el botón X; el toast no se cierra solo.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-017-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-017-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-M-017-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 9 — toast de pin fuera del radio](<B2C-99 Evidencias/TC-B2C99-M-017-p09-toast-de-pin-fuera-del-radio.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-017.png>)

---

### TC-B2C99-M-018 - Verificar que con el PIN fuera del radio el botón Continuar queda deshabilitado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
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

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-018-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-018-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-M-018-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 10 — tras intentar continuar](<B2C-99 Evidencias/TC-B2C99-M-018-p10-tras-intentar-continuar.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-018.png>)

---

### TC-B2C99-M-019 - Verificar que Ajustar devuelve el PIN a su posición original y habilita Continuar [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
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

Esperado: «Ajustar» devuelve el PIN, habilita «Continuar» y cierra el toast. Obtenido: el PIN vuelve y «Continuar» se habilita, pero el toast sigue visible. Bug: B2C-1339.

**Observación**

Esperado: «Ajustar» devuelve el PIN, habilita «Continuar» y cierra el toast. Obtenido: el PIN vuelve y «Continuar» se habilita, pero el toast sigue visible. Bug: B2C-1339.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-019-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-019-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-M-019-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 10 — tras ajustar](<B2C-99 Evidencias/TC-B2C99-M-019-p10-tras-ajustar.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-019.png>)

---

### TC-B2C99-M-020 - Verificar que al cerrar el toast con la X el PIN sigue fuera del radio y no se puede continuar [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
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

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-020-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-020-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-M-020-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 10 — tras cerrar el toast con la x](<B2C-99 Evidencias/TC-B2C99-M-020-p10-tras-cerrar-el-toast-con-la-x.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-020.png>)

---

### TC-B2C99-M-021 - Verificar que tras cerrar el toast al volver el PIN dentro del radio se habilita Continuar [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
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

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-021-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-021-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-M-021-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 11 — pin de vuelta dentro del radio](<B2C-99 Evidencias/TC-B2C99-M-021-p11-pin-de-vuelta-dentro-del-radio.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-021.png>)

---

### TC-B2C99-M-022 - Verificar que el toggle satelital cambia la vista del mapa y mantiene el PIN [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario toca el toggle de vista satelital.

**Resultado esperado**

El mapa cambia a vista satelital y el PIN se mantiene en la misma posición.

**Resultado obtenido**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-022-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-022-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-M-022-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 9 — vista satelital](<B2C-99 Evidencias/TC-B2C99-M-022-p09-vista-satelital.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-022.png>)

---

### TC-B2C99-M-023 - Verificar que el toggle vuelve a la vista normal y mantiene el PIN [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
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

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-023-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-023-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-M-023-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 9 — vista satelital](<B2C-99 Evidencias/TC-B2C99-M-023-p09-vista-satelital.png>)

![Paso 10 — vista normal](<B2C-99 Evidencias/TC-B2C99-M-023-p10-vista-normal.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-023.png>)

---

### TC-B2C99-M-024 - Verificar que al continuar con el PIN ajustado se vuelve a Detalles con el PIN en su nueva posición [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
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

Esperado: loader al continuar con el PIN ajustado. Obtenido: se vuelve a «Detalles» sin ningún loader (ni spinner ni skeleton). Bug: B2C-1341.

**Observación**

Esperado: loader al continuar con el PIN ajustado. Obtenido: se vuelve a «Detalles» sin ningún loader (ni spinner ni skeleton). Bug: B2C-1341.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-024-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-024-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-M-024-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 9 — pin movido dentro del radio](<B2C-99 Evidencias/TC-B2C99-M-024-p09-pin-movido-dentro-del-radio.png>)

![Paso 10 — detalles con el pin en la nueva posicion](<B2C-99 Evidencias/TC-B2C99-M-024-p10-detalles-con-el-pin-en-la-nueva-posicion.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-024.png>)

---

### TC-B2C99-M-025 - Verificar que la cobertura se valida con las coordenadas del PIN ajustado y no con el texto [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- DevTools abierto en la pestaña Network

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {STORE_LOCATOR_API_ENDPOINT}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el PIN etiquetado "Ajusta aquí".
8. El sistema muestra la pantalla "Agregar nueva dirección" con el mapa centrado y el PIN sobre la dirección.
9. El usuario arrastra con el dedo el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).
10. El usuario toca "Continuar con detalles de la dirección".
11. El sistema vuelve a "Detalles de la dirección".
12. El usuario toca el botón "Agregar dirección".
13. El usuario revisa la request {STORE_LOCATOR_API_ENDPOINT} en DevTools > Network.

**Resultado esperado**

La request de cobertura envía la latitud y longitud de la nueva posición del PIN (distintas de las de la dirección original) y no recalcula las coordenadas desde el texto.

**Resultado obtenido**

Causa: {STORE_LOCATOR_API_ENDPOINT} (…/smu-delivery/…/stores) no se llama al agregar la dirección; las coordenadas del PIN viajan en POST …/smu-delivery/…/apply. Acción: declarar en la planilla el endpoint que recibe las coordenadas (…/apply).

**Observación**

Causa: {STORE_LOCATOR_API_ENDPOINT} (…/smu-delivery/…/stores) no se llama al agregar la dirección; las coordenadas del PIN viajan en POST …/smu-delivery/…/apply. Acción: declarar en la planilla el endpoint que recibe las coordenadas (…/apply).

---

### TC-B2C99-M-026 - Verificar que un error al guardar el PIN redirige al buscador con el toast de error [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- DevTools abierto con bloqueo de la request {PIN_UBICACION_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {PIN_UBICACION_API_ENDPOINT}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
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

Causa: {PIN_UBICACION_API_ENDPOINT} está vacío en el Excel de data. Acción: cargar el endpoint del guardado de la ubicación del PIN.

**Observación**

Causa: {PIN_UBICACION_API_ENDPOINT} está vacío en el Excel de data. Acción: cargar el endpoint del guardado de la ubicación del PIN.

---

### TC-B2C99-M-027 - Verificar que el botón atrás en Agregar nueva dirección vuelve sin aplicar cambios al PIN [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {RADIO_PIN_METROS}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
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

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-027-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-027-p06-detalles-de-la-direccion.png>)

![Paso 8 — agregar nueva direccion con el pin](<B2C-99 Evidencias/TC-B2C99-M-027-p08-agregar-nueva-direccion-con-el-pin.png>)

![Paso 10 — detalles tras el boton atras](<B2C-99 Evidencias/TC-B2C99-M-027-p10-detalles-tras-el-boton-atras.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-027.png>)

---

### TC-B2C99-M-028 - Verificar que Editar abre el modal Dirección manual con los campos precargados [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca la opción "Editar" de la dirección.
8. El sistema muestra un loader y despliega el modal "Dirección manual" con los campos precargados.
9. El usuario revisa los campos del modal.

**Resultado esperado**

Se muestra un loader y el modal "Dirección manual" con Región, Comuna, Dirección y Numeración precargadas con los datos de {DIRECCION_DESPACHO_001}.

**Resultado obtenido**

Esperado: loader y «Dirección manual» precargada. Obtenido: se abre «Dirección manual» precargada (Metropolitana, La Florida, Calle Uno, 23) sin loader. Bug: B2C-1343.

**Observación**

Esperado: loader y «Dirección manual» precargada. Obtenido: se abre «Dirección manual» precargada (Metropolitana, La Florida, Calle Uno, 23) sin loader. Bug: B2C-1343.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-028-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-028-p06-detalles-de-la-direccion.png>)

![Paso 9 — direccion manual precargado](<B2C-99 Evidencias/TC-B2C99-M-028-p09-direccion-manual-precargado.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-028.png>)

---

### TC-B2C99-M-029 - Verificar que al editar la dirección se actualiza el texto y el PIN se reubica [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
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

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-029-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-029-p06-detalles-de-la-direccion.png>)

![Paso 9 — numeracion cambiada a 45](<B2C-99 Evidencias/TC-B2C99-M-029-p09-numeracion-cambiada-a-45.png>)

![Paso 10 — detalles con la direccion editada](<B2C-99 Evidencias/TC-B2C99-M-029-p10-detalles-con-la-direccion-editada.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-029.png>)

---

### TC-B2C99-M-030 - Verificar que al editar la dirección se limpian los campos complementarios [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
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

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Observación**

Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-030-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-030-p06-detalles-de-la-direccion.png>)

![Paso 7 — campos complementarios completados](<B2C-99 Evidencias/TC-B2C99-M-030-p07-campos-complementarios-completados.png>)

![Paso 11 — detalles tras editar la direccion](<B2C-99 Evidencias/TC-B2C99-M-030-p11-detalles-tras-editar-la-direccion.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-030.png>)

---

### TC-B2C99-M-031 - Verificar que sin nombre la dirección se guarda con calle y número truncados a 20 caracteres [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {USER_AUTH_001} no tiene guardada la dirección usada en el caso

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_003}
- {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_003} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el botón "Agregar dirección".
8. El usuario valida el código OTP recibido (B2C-125).
9. El usuario toca el Store Locator y revisa sus direcciones guardadas.

**Resultado esperado**

La dirección queda guardada con el nombre "Av. San Josemaría Es..." (primeros 20 caracteres de calle + número de {DIRECCION_DESPACHO_003} y puntos suspensivos).

**Resultado obtenido**

Esperado: nombre «Av. San Josemaría Es...». Obtenido: «Avenida San Josemar…» (19 caracteres y «…»). La dirección creada se eliminó al terminar. Bug: B2C-1345.

**Observación**

Esperado: nombre «Av. San Josemaría Es...». Obtenido: «Avenida San Josemar…» (19 caracteres y «…»). La dirección creada se eliminó al terminar. Bug: B2C-1345.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-031-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — detalles de la direccion](<B2C-99 Evidencias/TC-B2C99-M-031-p06-detalles-de-la-direccion.png>)

![Paso 9 — direcciones guardadas de la cuenta](<B2C-99 Evidencias/TC-B2C99-M-031-p09-direcciones-guardadas-de-la-cuenta.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-031.png>)

---

### TC-B2C99-M-032 - Verificar que sin nombre una dirección corta se guarda con calle y número completos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {USER_AUTH_001} no tiene guardada la dirección usada en el caso

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el botón "Agregar dirección".
8. El usuario valida el código OTP recibido (B2C-125).
9. El usuario toca el Store Locator y revisa sus direcciones guardadas.

**Resultado esperado**

La dirección queda guardada con el nombre "Calle Uno 23" (calle + número de {DIRECCION_DESPACHO_001}), sin puntos suspensivos.

**Resultado obtenido**

Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.

**Observación**

Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.

---

### TC-B2C99-M-033 - Verificar que sin etiqueta seleccionada la dirección se guarda con el ícono de ubicación [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {USER_AUTH_001} no tiene guardada la dirección usada en el caso

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}
- {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" con el mapa y el PIN posicionado sobre la dirección.
7. El usuario toca el botón "Agregar dirección".
8. El usuario valida el código OTP recibido (B2C-125).
9. El usuario toca el Store Locator y revisa sus direcciones guardadas.

**Resultado esperado**

La dirección guardada muestra el ícono de ubicación (pin) como etiqueta.

**Resultado obtenido**

Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.

**Observación**

Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.

---

### TC-B2C99-M-034 - Verificar que si Google Maps no carga se muestra el error del mapa y la dirección en lectura [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- DevTools abierto con bloqueo de las requests a maps.googleapis.com después de elegir la sugerencia (Network request blocking)

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" y el mapa no carga.
7. El usuario revisa la pantalla.

**Resultado esperado**

El área del mapa se muestra en gris con ícono de mapa y el mensaje "No pudimos cargar el mapa. Puedes continuar con la dirección ingresada o volver a buscarla."; la calle, número, comuna y región de {DIRECCION_DESPACHO_001} se muestran en modo lectura.

**Resultado obtenido**

Esperado: mensaje «No pudimos cargar el mapa…» con el mapa bloqueado. Obtenido: área del mapa en blanco, sin ícono ni mensaje. Bug: B2C-1347.

**Observación**

Esperado: mensaje «No pudimos cargar el mapa…» con el mapa bloqueado. Obtenido: área del mapa en blanco, sin ícono ni mensaje. Bug: B2C-1347.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-034-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 5 — agregar nueva direccion con el mapa sin cargar](<B2C-99 Evidencias/TC-B2C99-M-034-p05-agregar-nueva-direccion-con-el-mapa-sin-cargar.png>)

![Paso 6 — detalles de la direccion con el mapa sin cargar](<B2C-99 Evidencias/TC-B2C99-M-034-p06-detalles-de-la-direccion-con-el-mapa-sin-cargar.png>)

![Paso 7 — pantalla con el mapa sin cargar](<B2C-99 Evidencias/TC-B2C99-M-034-p07-pantalla-con-el-mapa-sin-cargar.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-034.png>)

---

### TC-B2C99-M-035 - Verificar que si Google Maps no carga el ajuste del PIN queda deshabilitado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- DevTools abierto con bloqueo de las requests a maps.googleapis.com después de elegir la sugerencia (Network request blocking)

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" y el mapa no carga.
7. El usuario intenta tocar el área del mapa.

**Resultado esperado**

No se abre "Agregar nueva dirección": el ajuste del PIN y los controles del mapa no están disponibles.

**Resultado obtenido**

Con el mapa bloqueado, tocar el área del mapa no abre «Agregar nueva dirección». Nota: en ese estado no se muestra el mensaje de error del mapa (bug B2C-1346/B2C-1347).

**Observación**

Con el mapa bloqueado, tocar el área del mapa no abre «Agregar nueva dirección». Nota: en ese estado no se muestra el mensaje de error del mapa (bug B2C-1346/B2C-1347).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-035-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 5 — agregar nueva direccion con el mapa sin cargar](<B2C-99 Evidencias/TC-B2C99-M-035-p05-agregar-nueva-direccion-con-el-mapa-sin-cargar.png>)

![Paso 6 — detalles de la direccion con el mapa sin cargar](<B2C-99 Evidencias/TC-B2C99-M-035-p06-detalles-de-la-direccion-con-el-mapa-sin-cargar.png>)

![Paso 7 — tras tocar el area del mapa](<B2C-99 Evidencias/TC-B2C99-M-035-p07-tras-tocar-el-area-del-mapa.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-035.png>)

---

### TC-B2C99-M-036 - Verificar que si Google Maps no carga Confirmar dirección continúa con las coordenadas geocodificadas [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- DevTools abierto con bloqueo de las requests a maps.googleapis.com después de elegir la sugerencia (Network request blocking)
- {DIRECCION_DESPACHO_001} tiene cobertura y horarios disponibles

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" y el mapa no carga.
7. El usuario toca "Confirmar dirección".

**Resultado esperado**

El flujo continúa con las validaciones del CA2 y el Store Locator queda con {DIRECCION_DESPACHO_001} como dirección de despacho.

**Resultado obtenido**

Esperado: botón «Confirmar dirección» con el mapa sin cargar. Obtenido: solo «Ajusta aquí», «Editar» y «Agregar dirección». Bug: B2C-1349.

**Observación**

Esperado: botón «Confirmar dirección» con el mapa sin cargar. Obtenido: solo «Ajusta aquí», «Editar» y «Agregar dirección». Bug: B2C-1349.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-036-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 5 — agregar nueva direccion con el mapa sin cargar](<B2C-99 Evidencias/TC-B2C99-M-036-p05-agregar-nueva-direccion-con-el-mapa-sin-cargar.png>)

![Paso 6 — detalles de la direccion con el mapa sin cargar](<B2C-99 Evidencias/TC-B2C99-M-036-p06-detalles-de-la-direccion-con-el-mapa-sin-cargar.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-036.png>)

---

### TC-B2C99-M-037 - Verificar que si Google Maps no carga el botón atrás vuelve al buscador de direcciones [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-99.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene dirección ni tienda seleccionada en el Store Locator
- DevTools abierto con bloqueo de las requests a maps.googleapis.com después de elegir la sugerencia (Network request blocking)

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.
6. El sistema redirige a "Detalles de la dirección" y el mapa no carga.
7. El usuario toca el botón atrás "<".

**Resultado esperado**

El sistema vuelve al buscador de direcciones del Store Locator (B2C-26) para reingresar la dirección.

**Resultado obtenido**

Esperado: el botón atrás vuelve al buscador del Store Locator. Obtenido: vuelve a «Agregar nueva dirección» (mapa en blanco). Bug: B2C-1351.

**Observación**

Esperado: el botón atrás vuelve al buscador del Store Locator. Obtenido: vuelve a «Agregar nueva dirección» (mapa en blanco). Bug: B2C-1351.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-99 Evidencias/TC-B2C99-M-037-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 5 — agregar nueva direccion con el mapa sin cargar](<B2C-99 Evidencias/TC-B2C99-M-037-p05-agregar-nueva-direccion-con-el-mapa-sin-cargar.png>)

![Paso 6 — detalles de la direccion con el mapa sin cargar](<B2C-99 Evidencias/TC-B2C99-M-037-p06-detalles-de-la-direccion-con-el-mapa-sin-cargar.png>)

![Paso 7 — tras el boton atras](<B2C-99 Evidencias/TC-B2C99-M-037-p07-tras-el-boton-atras.png>)

![Estado final](<B2C-99 Evidencias/TC-B2C99-M-037.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "chromium"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-99",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-99 Test Cases.xlsx",
  "title": "Confirmar dirección con PIN en mapa",
  "updated_at": "2026-10-26"
 },
 "history": {
  "2026-10-26": [
   "TC-B2C99-D-001",
   "TC-B2C99-D-002",
   "TC-B2C99-D-003",
   "TC-B2C99-D-004",
   "TC-B2C99-D-005",
   "TC-B2C99-D-006",
   "TC-B2C99-D-007",
   "TC-B2C99-D-008",
   "TC-B2C99-D-009",
   "TC-B2C99-D-010",
   "TC-B2C99-D-011",
   "TC-B2C99-D-012",
   "TC-B2C99-D-013",
   "TC-B2C99-D-014",
   "TC-B2C99-D-015",
   "TC-B2C99-D-016",
   "TC-B2C99-D-017",
   "TC-B2C99-D-018",
   "TC-B2C99-D-019",
   "TC-B2C99-D-020",
   "TC-B2C99-D-021",
   "TC-B2C99-D-022",
   "TC-B2C99-D-023",
   "TC-B2C99-D-024",
   "TC-B2C99-D-025",
   "TC-B2C99-D-026",
   "TC-B2C99-D-027",
   "TC-B2C99-D-028",
   "TC-B2C99-D-029",
   "TC-B2C99-D-030",
   "TC-B2C99-D-031",
   "TC-B2C99-D-032",
   "TC-B2C99-D-033",
   "TC-B2C99-D-034",
   "TC-B2C99-D-035",
   "TC-B2C99-D-036",
   "TC-B2C99-D-037",
   "TC-B2C99-M-001",
   "TC-B2C99-M-002",
   "TC-B2C99-M-003",
   "TC-B2C99-M-004",
   "TC-B2C99-M-005",
   "TC-B2C99-M-006",
   "TC-B2C99-M-007",
   "TC-B2C99-M-008",
   "TC-B2C99-M-009",
   "TC-B2C99-M-010",
   "TC-B2C99-M-011",
   "TC-B2C99-M-012",
   "TC-B2C99-M-013",
   "TC-B2C99-M-014",
   "TC-B2C99-M-015",
   "TC-B2C99-M-016",
   "TC-B2C99-M-017",
   "TC-B2C99-M-018",
   "TC-B2C99-M-019",
   "TC-B2C99-M-020",
   "TC-B2C99-M-021",
   "TC-B2C99-M-022",
   "TC-B2C99-M-023",
   "TC-B2C99-M-024",
   "TC-B2C99-M-025",
   "TC-B2C99-M-026",
   "TC-B2C99-M-027",
   "TC-B2C99-M-028",
   "TC-B2C99-M-029",
   "TC-B2C99-M-030",
   "TC-B2C99-M-031",
   "TC-B2C99-M-032",
   "TC-B2C99-M-033",
   "TC-B2C99-M-034",
   "TC-B2C99-M-035",
   "TC-B2C99-M-036",
   "TC-B2C99-M-037"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se muestran: botón atrás \"<\", título \"Detalles de la dirección\", mapa con el PIN posicionado sobre la dirección, la dirección ingresada con la opción \"Editar\", el campo \"N° dpto, oficina, piso, etc (opcional)\", el campo \"Nombre de dirección (opcional)\", 4 íconos de etiquetas de entrega, el área de texto \"Instrucción para entrega (opcional)\" y el botón \"Agregar dirección\".",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-001",
   "name": "Verificar que la pantalla Detalles de la dirección muestra todos sus elementos [Desktop] [Guest]",
   "observation": "Esperado: la sugerencia de Google redirige a «Detalles de la dirección». Obtenido: abre «Agregar nueva dirección»; «Detalles» solo aparece tras «Continuar con detalles de la dirección». Bug: B2C-1332.",
   "observed": "Esperado: la sugerencia de Google redirige a «Detalles de la dirección». Obtenido: abre «Agregar nueva dirección»; «Detalles» solo aparece tras «Continuar con detalles de la dirección». Bug: B2C-1332.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-001-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — pantalla a la que lleva la sugerencia agregar nueva direccio",
     "file": "TC-B2C99-D-001-p06-pantalla-a-la-que-lleva-la-sugerencia-agregar-nueva-direccio.png"
    },
    {
     "caption": "Paso 7 — detalles de la direccion",
     "file": "TC-B2C99-D-001-p07-detalles-de-la-direccion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-001.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario revisa la pantalla.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "\"N° dpto, oficina, piso, etc (opcional)\" muestra el placeholder \"Ej. Dpto 910\" y \"Nombre de dirección (opcional)\" muestra \"Ej. Mamá, Pololo, trabajo\".",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-002",
   "name": "Verificar que los campos opcionales de Detalles de la dirección muestran sus placeholders [Desktop] [Guest]",
   "observation": "Esperado: placeholders «Ej. Dpto 910» y «Ej. Mamá, Pololo, trabajo». Obtenido: «Ej: Dpto 910» y «Ej: Mamá, Pololo, trabajo». Bug: B2C-1334.",
   "observed": "Esperado: placeholders «Ej. Dpto 910» y «Ej. Mamá, Pololo, trabajo». Obtenido: «Ej: Dpto 910» y «Ej: Mamá, Pololo, trabajo». Bug: B2C-1334.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-002-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-002-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — campos opcionales sin completar",
     "file": "TC-B2C99-D-002-p07-campos-opcionales-sin-completar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-002.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario revisa los campos sin completar.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "La dirección se muestra como calle + número + comuna + región de {DIRECCION_DESPACHO_001} (ej. \"Calle Uno 23, La Florida, Región Metropolitana\").",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-003",
   "name": "Verificar que la dirección se muestra con calle, número, comuna y región [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-003-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-003-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — direccion bajo el mapa",
     "file": "TC-B2C99-D-003-p07-direccion-bajo-el-mapa.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-003.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario revisa la dirección mostrada bajo el mapa.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El campo queda con 50 caracteres como máximo; el carácter 51 no se ingresa (o se muestra la validación de largo).",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-004",
   "name": "Verificar que el campo N° dpto no acepta más de 50 caracteres [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-004-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-004-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — campo tras escribir 51 caracteres",
     "file": "TC-B2C99-D-004-p07-campo-tras-escribir-51-caracteres.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-004.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario escribe {TEXTO_51_CARACTERES} en \"N° dpto, oficina, piso, etc (opcional)\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {TEXTO_51_CARACTERES}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El campo queda con 20 caracteres como máximo; el carácter 21 no se ingresa (o se muestra la validación de largo).",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-005",
   "name": "Verificar que el campo Nombre de dirección no acepta más de 20 caracteres [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-005-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-005-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — campo tras escribir 21 caracteres",
     "file": "TC-B2C99-D-005-p07-campo-tras-escribir-21-caracteres.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-005.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario escribe {TEXTO_21_CARACTERES} en \"Nombre de dirección (opcional)\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {TEXTO_21_CARACTERES}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El área de texto queda con 300 caracteres como máximo; el carácter 301 no se ingresa (o se muestra la validación de largo).",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-006",
   "name": "Verificar que el campo Instrucción para entrega no acepta más de 300 caracteres [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-006-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-006-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — campo tras escribir 301 caracteres",
     "file": "TC-B2C99-D-006-p07-campo-tras-escribir-301-caracteres.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-006.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario escribe {TEXTO_301_CARACTERES} en \"Instrucción para entrega (opcional)\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {TEXTO_301_CARACTERES}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El ícono seleccionado se pinta de rojo; los otros 3 se mantienen sin seleccionar.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-007",
   "name": "Verificar que al seleccionar una etiqueta de entrega el ícono se pinta de rojo [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-007-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-007-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — etiqueta casa seleccionada",
     "file": "TC-B2C99-D-007-p07-etiqueta-casa-seleccionada.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-007.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en uno de los 4 íconos de etiqueta.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se muestra un loader mientras el sistema consulta cobertura, horarios y costos de envío.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-008",
   "name": "Verificar que al agregar la dirección como invitado se muestra un loader [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-008-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-008-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — tras agregar direccion con red lenta",
     "file": "TC-B2C99-D-008-p07-tras-agregar-direccion-con-red-lenta.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-008.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el botón \"Agregar dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se cierra el modal y el Store Locator muestra el método de entrega Despacho con {DIRECCION_DESPACHO_001}, con ventana y costo según B2C-144.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-009",
   "name": "Verificar que una dirección con cobertura y horarios setea el método de entrega en el Store Locator [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- {DIRECCION_DESPACHO_001} tiene cobertura y horarios disponibles",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-009-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-009-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — store locator con la direccion",
     "file": "TC-B2C99-D-009-p07-store-locator-con-la-direccion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-009.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el botón \"Agregar dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El sistema deriva al flujo de dirección sin cobertura (B2C-123) y no setea {DIRECCION_SIN_COBERTURA} en el Store Locator.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-010",
   "name": "Verificar que una dirección sin cobertura deriva al flujo sin cobertura [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-010-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-010-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — flujo sin cobertura",
     "file": "TC-B2C99-D-010-p07-flujo-sin-cobertura.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_COBERTURA} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el botón \"Agregar dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_SIN_COBERTURA}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El sistema deriva al flujo de dirección sin horarios disponibles (B2C-127).",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-011",
   "name": "Verificar que una dirección con cobertura y sin horarios deriva al flujo sin horarios [Desktop] [Guest]",
   "observation": "Causa: {DIRECCION_SIN_SLA} (Av Libertador Gral Bernardo O'Higgins 1072, Maipú) tiene cobertura y horarios en el ambiente (el Store Locator queda con «Desde: Lun 26/10…»); no es una dirección con cobertura y sin horarios. Acción: declarar una dirección con cobertura y sin horarios disponibles (B2C-127).",
   "observed": "Causa: {DIRECCION_SIN_SLA} (Av Libertador Gral Bernardo O'Higgins 1072, Maipú) tiene cobertura y horarios en el ambiente (el Store Locator queda con «Desde: Lun 26/10…»); no es una dirección con cobertura y sin horarios. Acción: declarar una dirección con cobertura y sin horarios disponibles (B2C-127).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "spec": "tests/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_SLA} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el botón \"Agregar dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_SIN_SLA}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se muestra el modal \"No se te escapen\" (B2C-122) antes de setear la nueva dirección.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-012",
   "name": "Verificar que con productos en el carro y cambio de tienda se muestra el modal No se te escapen [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La dirección activa es {DIRECCION_MISMA_TIENDA}\n- El carro contiene {SKU_VALID_001} x 1",
   "screenshots": [
    {
     "caption": "TC B2C99 D 012 ppre direccion activa y carro con el sku",
     "file": "TC-B2C99-D-012-ppre-direccion-activa-y-carro-con-el-sku.png"
    },
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-012-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-012-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — modal de cambio de tienda",
     "file": "TC-B2C99-D-012-p07-modal-de-cambio-de-tienda.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-012.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el botón \"Agregar dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_MISMA_TIENDA}\n- {DIRECCION_OTRA_TIENDA}\n- {SKU_VALID_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se muestra un loader y luego el modal \"Autenticación requerida\" de B2C-125; llega el código OTP al correo de la cuenta.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-013",
   "name": "Verificar que al agregar la dirección logueado se muestra un loader y se dispara el OTP [Desktop] [Logueado]",
   "observation": "Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.",
   "observed": "Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {USER_AUTH_001} no tiene guardada la dirección usada en el caso\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "spec": "tests/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el botón \"Agregar dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {USER_AUTH_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se muestra \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección actual, la dirección actual bajo el mapa, el banner \"Importante, entregaremos tu compra en la ubicación marcada…\" y el botón \"Continuar con detalles de la dirección\".",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-014",
   "name": "Verificar que al seleccionar el mapa se abre Agregar nueva dirección con todos sus elementos [Desktop] [Guest]",
   "observation": "Esperado: seleccionar el mapa abre «Agregar nueva dirección». Obtenido: el clic en el mapa no abre nada; solo el PIN «Ajusta aquí» lo abre. Bug: B2C-1336.",
   "observed": "Esperado: seleccionar el mapa abre «Agregar nueva dirección». Obtenido: el clic en el mapa no abre nada; solo el PIN «Ajusta aquí» lo abre. Bug: B2C-1336.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-014-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-014-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-014.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el mapa.\n8. El usuario revisa la pantalla.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se abre \"Agregar nueva dirección\" con el mapa centrado en la dirección actual y el PIN sobre ella.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-015",
   "name": "Verificar que al seleccionar el PIN Ajusta aquí se abre Agregar nueva dirección [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-015-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-015-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-D-015-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-015.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El PIN queda en la nueva posición, el texto de {DIRECCION_DESPACHO_001} bajo el mapa no cambia, no aparece alerta y \"Continuar con detalles de la dirección\" sigue habilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-016",
   "name": "Verificar que al mover el PIN dentro del radio el texto de la dirección no cambia [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-016-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-016-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-D-016-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 9 — pin movido dentro del radio",
     "file": "TC-B2C99-D-016-p09-pin-movido-dentro-del-radio.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-016.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el mouse el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).\n10. El usuario revisa la dirección bajo el mapa.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se muestra el toast \"La ubicación seleccionada se encuentra fuera del radio de la dirección actual. Por favor ajustarla.\" con la opción \"Ajustar\" y el botón X; el toast no se cierra solo.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-017",
   "name": "Verificar que al mover el PIN fuera del radio se muestra el toast de alerta con Ajustar y X [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-017-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-017-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-D-017-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 9 — toast de pin fuera del radio",
     "file": "TC-B2C99-D-017-p09-toast-de-pin-fuera-del-radio.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-017.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el mouse el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El botón \"Continuar con detalles de la dirección\" se muestra deshabilitado y el usuario sigue en \"Agregar nueva dirección\".",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-018",
   "name": "Verificar que con el PIN fuera del radio el botón Continuar queda deshabilitado [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-018-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-018-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-D-018-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 10 — tras intentar continuar",
     "file": "TC-B2C99-D-018-p10-tras-intentar-continuar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-018.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el mouse el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).\n10. El usuario intenta hacer clic en \"Continuar con detalles de la dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El PIN vuelve a su posición inicial sobre {DIRECCION_DESPACHO_001}, el toast se cierra y \"Continuar con detalles de la dirección\" queda habilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-019",
   "name": "Verificar que Ajustar devuelve el PIN a su posición original y habilita Continuar [Desktop] [Guest]",
   "observation": "Esperado: «Ajustar» devuelve el PIN, habilita «Continuar» y cierra el toast. Obtenido: el PIN vuelve y «Continuar» se habilita, pero el toast sigue visible. Bug: B2C-1338.",
   "observed": "Esperado: «Ajustar» devuelve el PIN, habilita «Continuar» y cierra el toast. Obtenido: el PIN vuelve y «Continuar» se habilita, pero el toast sigue visible. Bug: B2C-1338.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-019-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-019-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-D-019-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 10 — tras ajustar",
     "file": "TC-B2C99-D-019-p10-tras-ajustar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-019.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el mouse el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).\n10. El usuario hace clic en \"Ajustar\" en el toast.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El toast se cierra, el PIN se mantiene fuera del radio y \"Continuar con detalles de la dirección\" sigue deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-020",
   "name": "Verificar que al cerrar el toast con la X el PIN sigue fuera del radio y no se puede continuar [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-020-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-020-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-D-020-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 10 — tras cerrar el toast con la x",
     "file": "TC-B2C99-D-020-p10-tras-cerrar-el-toast-con-la-x.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-020.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el mouse el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).\n10. El usuario hace clic en la X del toast.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El botón \"Continuar con detalles de la dirección\" queda habilitado y no se vuelve a mostrar la alerta.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-021",
   "name": "Verificar que tras cerrar el toast al volver el PIN dentro del radio se habilita Continuar [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-021-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-021-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-D-021-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 11 — pin de vuelta dentro del radio",
     "file": "TC-B2C99-D-021-p11-pin-de-vuelta-dentro-del-radio.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-021.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el mouse el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).\n10. El usuario hace clic en la X del toast.\n11. El usuario arrastra con el mouse el PIN de vuelta dentro del círculo del radio permitido.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El mapa cambia a vista satelital y el PIN se mantiene en la misma posición.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-022",
   "name": "Verificar que el toggle satelital cambia la vista del mapa y mantiene el PIN [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-022-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-022-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-D-022-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 9 — vista satelital",
     "file": "TC-B2C99-D-022-p09-vista-satelital.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-022.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario hace clic en el toggle de vista satelital.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El mapa vuelve a la vista normal y el PIN se mantiene en la misma posición.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-023",
   "name": "Verificar que el toggle vuelve a la vista normal y mantiene el PIN [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-023-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-023-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-D-023-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 9 — vista satelital",
     "file": "TC-B2C99-D-023-p09-vista-satelital.png"
    },
    {
     "caption": "Paso 10 — vista normal",
     "file": "TC-B2C99-D-023-p10-vista-normal.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-023.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario hace clic en el toggle de vista satelital.\n10. El usuario hace clic en nuevamente el toggle para volver a la vista normal.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se muestra un loader y luego \"Detalles de la dirección\" con el PIN en la nueva posición; el texto de {DIRECCION_DESPACHO_001} bajo el mapa no cambia.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-024",
   "name": "Verificar que al continuar con el PIN ajustado se vuelve a Detalles con el PIN en su nueva posición [Desktop] [Guest]",
   "observation": "Esperado: loader al continuar con el PIN ajustado. Obtenido: se vuelve a «Detalles» sin ningún loader (ni spinner ni skeleton). Bug: B2C-1340.",
   "observed": "Esperado: loader al continuar con el PIN ajustado. Obtenido: se vuelve a «Detalles» sin ningún loader (ni spinner ni skeleton). Bug: B2C-1340.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-024-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-024-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-D-024-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 9 — pin movido dentro del radio",
     "file": "TC-B2C99-D-024-p09-pin-movido-dentro-del-radio.png"
    },
    {
     "caption": "Paso 10 — detalles con el pin en la nueva posicion",
     "file": "TC-B2C99-D-024-p10-detalles-con-el-pin-en-la-nueva-posicion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-024.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el mouse el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).\n10. El usuario hace clic en \"Continuar con detalles de la dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "La request de cobertura envía la latitud y longitud de la nueva posición del PIN (distintas de las de la dirección original) y no recalcula las coordenadas desde el texto.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-025",
   "name": "Verificar que la cobertura se valida con las coordenadas del PIN ajustado y no con el texto [Desktop] [Guest]",
   "observation": "Causa: {STORE_LOCATOR_API_ENDPOINT} (…/smu-delivery/…/stores) no se llama al agregar la dirección; las coordenadas del PIN viajan en POST …/smu-delivery/…/apply. Acción: declarar en la planilla el endpoint que recibe las coordenadas (…/apply).",
   "observed": "Causa: {STORE_LOCATOR_API_ENDPOINT} (…/smu-delivery/…/stores) no se llama al agregar la dirección; las coordenadas del PIN viajan en POST …/smu-delivery/…/apply. Acción: declarar en la planilla el endpoint que recibe las coordenadas (…/apply).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- DevTools abierto en la pestaña Network",
   "spec": "tests/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el mouse el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).\n10. El usuario hace clic en \"Continuar con detalles de la dirección\".\n11. El sistema vuelve a \"Detalles de la dirección\".\n12. El usuario hace clic en el botón \"Agregar dirección\".\n13. El usuario revisa la request {STORE_LOCATOR_API_ENDPOINT} en DevTools > Network.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {STORE_LOCATOR_API_ENDPOINT}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El sistema redirige al buscador de direcciones del Store Locator y muestra el toast \"Ha ocurrido un error\" con X para cerrarlo.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-026",
   "name": "Verificar que un error al guardar el PIN redirige al buscador con el toast de error [Desktop] [Guest]",
   "observation": "Causa: {PIN_UBICACION_API_ENDPOINT} está vacío en el Excel de data. Acción: cargar el endpoint del guardado de la ubicación del PIN.",
   "observed": "Causa: {PIN_UBICACION_API_ENDPOINT} está vacío en el Excel de data. Acción: cargar el endpoint del guardado de la ubicación del PIN.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- DevTools abierto con bloqueo de la request {PIN_UBICACION_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el mouse el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).\n10. El usuario hace clic en \"Continuar con detalles de la dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {PIN_UBICACION_API_ENDPOINT}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El sistema vuelve a \"Detalles de la dirección\" con el PIN en su posición original y la dirección sin cambios.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-027",
   "name": "Verificar que el botón atrás en Agregar nueva dirección vuelve sin aplicar cambios al PIN [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-027-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-027-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-D-027-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 10 — detalles tras el boton atras",
     "file": "TC-B2C99-D-027-p10-detalles-tras-el-boton-atras.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-027.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el mouse el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).\n10. El usuario hace clic en el botón atrás \"<\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se muestra un loader y el modal \"Dirección manual\" con Región, Comuna, Dirección y Numeración precargadas con los datos de {DIRECCION_DESPACHO_001}.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-028",
   "name": "Verificar que Editar abre el modal Dirección manual con los campos precargados [Desktop] [Guest]",
   "observation": "Esperado: loader y «Dirección manual» precargada. Obtenido: se abre «Dirección manual» precargada (Metropolitana, La Florida, Calle Uno, 23) sin loader. Bug: B2C-1342.",
   "observed": "Esperado: loader y «Dirección manual» precargada. Obtenido: se abre «Dirección manual» precargada (Metropolitana, La Florida, Calle Uno, 23) sin loader. Bug: B2C-1342.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-028-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-028-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 9 — direccion manual precargado",
     "file": "TC-B2C99-D-028-p09-direccion-manual-precargado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-028.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en la opción \"Editar\" de la dirección.\n8. El sistema muestra un loader y despliega el modal \"Dirección manual\" con los campos precargados.\n9. El usuario revisa los campos del modal.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se muestra un loader y se vuelve a \"Detalles de la dirección\" con la dirección actualizada bajo el mapa y el PIN ubicado en la nueva numeración.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-029",
   "name": "Verificar que al editar la dirección se actualiza el texto y el PIN se reubica [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-029-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-029-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 9 — numeracion cambiada a 45",
     "file": "TC-B2C99-D-029-p09-numeracion-cambiada-a-45.png"
    },
    {
     "caption": "Paso 10 — detalles con la direccion editada",
     "file": "TC-B2C99-D-029-p10-detalles-con-la-direccion-editada.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-029.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en la opción \"Editar\" de la dirección.\n8. El sistema muestra un loader y despliega el modal \"Dirección manual\" con los campos precargados.\n9. El usuario cambia la Numeración por otra válida de la misma calle (ej. 45).\n10. El usuario hace clic en \"Continuar con detalles de la dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Al volver a \"Detalles de la dirección\", los campos N° dpto, Nombre de dirección e Instrucción para entrega están vacíos y ninguna etiqueta está seleccionada.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-030",
   "name": "Verificar que al editar la dirección se limpian los campos complementarios [Desktop] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-030-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-030-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — campos complementarios completados",
     "file": "TC-B2C99-D-030-p07-campos-complementarios-completados.png"
    },
    {
     "caption": "Paso 11 — detalles tras editar la direccion",
     "file": "TC-B2C99-D-030-p11-detalles-tras-editar-la-direccion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-030.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario completa \"N° dpto\" con \"Dpto 910\", \"Nombre de dirección\" con \"Casa\", selecciona una etiqueta y escribe una instrucción para entrega.\n8. El usuario hace clic en la opción \"Editar\" de la dirección.\n9. El sistema muestra un loader y despliega el modal \"Dirección manual\" con los campos precargados.\n10. El usuario cambia la Numeración por otra válida de la misma calle (ej. 45).\n11. El usuario hace clic en \"Continuar con detalles de la dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "La dirección queda guardada con el nombre \"Av. San Josemaría Es...\" (primeros 20 caracteres de calle + número de {DIRECCION_DESPACHO_003} y puntos suspensivos).",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-031",
   "name": "Verificar que sin nombre la dirección se guarda con calle y número truncados a 20 caracteres [Desktop] [Logueado]",
   "observation": "Esperado: nombre «Av. San Josemaría Es...». Obtenido: «Avenida San Josemar…» (19 caracteres y «…»). La dirección creada se eliminó al terminar. Bug: B2C-1344.",
   "observed": "Esperado: nombre «Av. San Josemaría Es...». Obtenido: «Avenida San Josemar…» (19 caracteres y «…»). La dirección creada se eliminó al terminar. Bug: B2C-1344.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {USER_AUTH_001} no tiene guardada la dirección usada en el caso",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-031-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-D-031-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 9 — direcciones guardadas de la cuenta",
     "file": "TC-B2C99-D-031-p09-direcciones-guardadas-de-la-cuenta.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-031.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_003} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el botón \"Agregar dirección\".\n8. El usuario valida el código OTP recibido (B2C-125).\n9. El usuario hace clic en el Store Locator y revisa sus direcciones guardadas.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_003}\n- {USER_AUTH_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "La dirección queda guardada con el nombre \"Calle Uno 23\" (calle + número de {DIRECCION_DESPACHO_001}), sin puntos suspensivos.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-032",
   "name": "Verificar que sin nombre una dirección corta se guarda con calle y número completos [Desktop] [Logueado]",
   "observation": "Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.",
   "observed": "Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {USER_AUTH_001} no tiene guardada la dirección usada en el caso",
   "spec": "tests/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el botón \"Agregar dirección\".\n8. El usuario valida el código OTP recibido (B2C-125).\n9. El usuario hace clic en el Store Locator y revisa sus direcciones guardadas.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {USER_AUTH_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "La dirección guardada muestra el ícono de ubicación (pin) como etiqueta.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-033",
   "name": "Verificar que sin etiqueta seleccionada la dirección se guarda con el ícono de ubicación [Desktop] [Logueado]",
   "observation": "Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.",
   "observed": "Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {USER_AUTH_001} no tiene guardada la dirección usada en el caso",
   "spec": "tests/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario hace clic en el botón \"Agregar dirección\".\n8. El usuario valida el código OTP recibido (B2C-125).\n9. El usuario hace clic en el Store Locator y revisa sus direcciones guardadas.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {USER_AUTH_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El área del mapa se muestra en gris con ícono de mapa y el mensaje \"No pudimos cargar el mapa. Puedes continuar con la dirección ingresada o volver a buscarla.\"; la calle, número, comuna y región de {DIRECCION_DESPACHO_001} se muestran en modo lectura.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-034",
   "name": "Verificar que si Google Maps no carga se muestra el error del mapa y la dirección en lectura [Desktop] [Guest]",
   "observation": "Esperado: mensaje «No pudimos cargar el mapa…» con el mapa bloqueado. Obtenido: área del mapa en blanco, sin ícono ni mensaje. Bug: B2C-1346.",
   "observed": "Esperado: mensaje «No pudimos cargar el mapa…» con el mapa bloqueado. Obtenido: área del mapa en blanco, sin ícono ni mensaje. Bug: B2C-1346.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- DevTools abierto con bloqueo de las requests a maps.googleapis.com después de elegir la sugerencia (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-034-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 5 — agregar nueva direccion con el mapa sin cargar",
     "file": "TC-B2C99-D-034-p05-agregar-nueva-direccion-con-el-mapa-sin-cargar.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion con el mapa sin cargar",
     "file": "TC-B2C99-D-034-p06-detalles-de-la-direccion-con-el-mapa-sin-cargar.png"
    },
    {
     "caption": "Paso 7 — pantalla con el mapa sin cargar",
     "file": "TC-B2C99-D-034-p07-pantalla-con-el-mapa-sin-cargar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-034.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" y el mapa no carga.\n7. El usuario revisa la pantalla.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "No se abre \"Agregar nueva dirección\": el ajuste del PIN y los controles del mapa no están disponibles.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-035",
   "name": "Verificar que si Google Maps no carga el ajuste del PIN queda deshabilitado [Desktop] [Guest]",
   "observation": "Con el mapa bloqueado, tocar el área del mapa no abre «Agregar nueva dirección». Nota: en ese estado no se muestra el mensaje de error del mapa (bug B2C-1346/B2C-1347).",
   "observed": "Con el mapa bloqueado, tocar el área del mapa no abre «Agregar nueva dirección». Nota: en ese estado no se muestra el mensaje de error del mapa (bug B2C-1346/B2C-1347).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- DevTools abierto con bloqueo de las requests a maps.googleapis.com después de elegir la sugerencia (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-035-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 5 — agregar nueva direccion con el mapa sin cargar",
     "file": "TC-B2C99-D-035-p05-agregar-nueva-direccion-con-el-mapa-sin-cargar.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion con el mapa sin cargar",
     "file": "TC-B2C99-D-035-p06-detalles-de-la-direccion-con-el-mapa-sin-cargar.png"
    },
    {
     "caption": "Paso 7 — tras tocar el area del mapa",
     "file": "TC-B2C99-D-035-p07-tras-tocar-el-area-del-mapa.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-035.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" y el mapa no carga.\n7. El usuario intenta hacer clic en el área del mapa.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El flujo continúa con las validaciones del CA2 y el Store Locator queda con {DIRECCION_DESPACHO_001} como dirección de despacho.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-036",
   "name": "Verificar que si Google Maps no carga Confirmar dirección continúa con las coordenadas geocodificadas [Desktop] [Guest]",
   "observation": "Esperado: botón «Confirmar dirección» con el mapa sin cargar. Obtenido: solo «Ajusta aquí», «Editar» y «Agregar dirección». Bug: B2C-1348.",
   "observed": "Esperado: botón «Confirmar dirección» con el mapa sin cargar. Obtenido: solo «Ajusta aquí», «Editar» y «Agregar dirección». Bug: B2C-1348.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- DevTools abierto con bloqueo de las requests a maps.googleapis.com después de elegir la sugerencia (Network request blocking)\n- {DIRECCION_DESPACHO_001} tiene cobertura y horarios disponibles",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-036-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 5 — agregar nueva direccion con el mapa sin cargar",
     "file": "TC-B2C99-D-036-p05-agregar-nueva-direccion-con-el-mapa-sin-cargar.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion con el mapa sin cargar",
     "file": "TC-B2C99-D-036-p06-detalles-de-la-direccion-con-el-mapa-sin-cargar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-036.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" y el mapa no carga.\n7. El usuario hace clic en \"Confirmar dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El sistema vuelve al buscador de direcciones del Store Locator (B2C-26) para reingresar la dirección.",
   "form_factor": "desktop",
   "id": "TC-B2C99-D-037",
   "name": "Verificar que si Google Maps no carga el botón atrás vuelve al buscador de direcciones [Desktop] [Guest]",
   "observation": "Esperado: el botón atrás vuelve al buscador del Store Locator. Obtenido: vuelve a «Agregar nueva dirección» (mapa en blanco). Bug: B2C-1350.",
   "observed": "Esperado: el botón atrás vuelve al buscador del Store Locator. Obtenido: vuelve a «Agregar nueva dirección» (mapa en blanco). Bug: B2C-1350.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- DevTools abierto con bloqueo de las requests a maps.googleapis.com después de elegir la sugerencia (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-D-037-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 5 — agregar nueva direccion con el mapa sin cargar",
     "file": "TC-B2C99-D-037-p05-agregar-nueva-direccion-con-el-mapa-sin-cargar.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion con el mapa sin cargar",
     "file": "TC-B2C99-D-037-p06-detalles-de-la-direccion-con-el-mapa-sin-cargar.png"
    },
    {
     "caption": "Paso 7 — tras el boton atras",
     "file": "TC-B2C99-D-037-p07-tras-el-boton-atras.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-D-037.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" y el mapa no carga.\n7. El usuario hace clic en el botón atrás \"<\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se muestran: botón atrás \"<\", título \"Detalles de la dirección\", mapa con el PIN posicionado sobre la dirección, la dirección ingresada con la opción \"Editar\", el campo \"N° dpto, oficina, piso, etc (opcional)\", el campo \"Nombre de dirección (opcional)\", 4 íconos de etiquetas de entrega, el área de texto \"Instrucción para entrega (opcional)\" y el botón \"Agregar dirección\".",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-001",
   "name": "Verificar que la pantalla Detalles de la dirección muestra todos sus elementos [Mobile] [Guest]",
   "observation": "Esperado: la sugerencia de Google redirige a «Detalles de la dirección». Obtenido: abre «Agregar nueva dirección»; «Detalles» solo aparece tras «Continuar con detalles de la dirección». Bug: B2C-1333.",
   "observed": "Esperado: la sugerencia de Google redirige a «Detalles de la dirección». Obtenido: abre «Agregar nueva dirección»; «Detalles» solo aparece tras «Continuar con detalles de la dirección». Bug: B2C-1333.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-001-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — pantalla a la que lleva la sugerencia agregar nueva direccio",
     "file": "TC-B2C99-M-001-p06-pantalla-a-la-que-lleva-la-sugerencia-agregar-nueva-direccio.png"
    },
    {
     "caption": "Paso 7 — detalles de la direccion",
     "file": "TC-B2C99-M-001-p07-detalles-de-la-direccion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-001.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario revisa la pantalla.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "\"N° dpto, oficina, piso, etc (opcional)\" muestra el placeholder \"Ej. Dpto 910\" y \"Nombre de dirección (opcional)\" muestra \"Ej. Mamá, Pololo, trabajo\".",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-002",
   "name": "Verificar que los campos opcionales de Detalles de la dirección muestran sus placeholders [Mobile] [Guest]",
   "observation": "Esperado: placeholders «Ej. Dpto 910» y «Ej. Mamá, Pololo, trabajo». Obtenido: «Ej: Dpto 910» y «Ej: Mamá, Pololo, trabajo». Bug: B2C-1335.",
   "observed": "Esperado: placeholders «Ej. Dpto 910» y «Ej. Mamá, Pololo, trabajo». Obtenido: «Ej: Dpto 910» y «Ej: Mamá, Pololo, trabajo». Bug: B2C-1335.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-002-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-002-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — campos opcionales sin completar",
     "file": "TC-B2C99-M-002-p07-campos-opcionales-sin-completar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-002.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario revisa los campos sin completar.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "La dirección se muestra como calle + número + comuna + región de {DIRECCION_DESPACHO_001} (ej. \"Calle Uno 23, La Florida, Región Metropolitana\").",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-003",
   "name": "Verificar que la dirección se muestra con calle, número, comuna y región [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-003-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-003-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — direccion bajo el mapa",
     "file": "TC-B2C99-M-003-p07-direccion-bajo-el-mapa.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-003.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario revisa la dirección mostrada bajo el mapa.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El campo queda con 50 caracteres como máximo; el carácter 51 no se ingresa (o se muestra la validación de largo).",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-004",
   "name": "Verificar que el campo N° dpto no acepta más de 50 caracteres [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-004-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-004-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — campo tras escribir 51 caracteres",
     "file": "TC-B2C99-M-004-p07-campo-tras-escribir-51-caracteres.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-004.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario escribe {TEXTO_51_CARACTERES} en \"N° dpto, oficina, piso, etc (opcional)\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {TEXTO_51_CARACTERES}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El campo queda con 20 caracteres como máximo; el carácter 21 no se ingresa (o se muestra la validación de largo).",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-005",
   "name": "Verificar que el campo Nombre de dirección no acepta más de 20 caracteres [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-005-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-005-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — campo tras escribir 21 caracteres",
     "file": "TC-B2C99-M-005-p07-campo-tras-escribir-21-caracteres.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-005.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario escribe {TEXTO_21_CARACTERES} en \"Nombre de dirección (opcional)\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {TEXTO_21_CARACTERES}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El área de texto queda con 300 caracteres como máximo; el carácter 301 no se ingresa (o se muestra la validación de largo).",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-006",
   "name": "Verificar que el campo Instrucción para entrega no acepta más de 300 caracteres [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-006-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-006-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — campo tras escribir 301 caracteres",
     "file": "TC-B2C99-M-006-p07-campo-tras-escribir-301-caracteres.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-006.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario escribe {TEXTO_301_CARACTERES} en \"Instrucción para entrega (opcional)\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {TEXTO_301_CARACTERES}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El ícono seleccionado se pinta de rojo; los otros 3 se mantienen sin seleccionar.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-007",
   "name": "Verificar que al seleccionar una etiqueta de entrega el ícono se pinta de rojo [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-007-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-007-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — etiqueta casa seleccionada",
     "file": "TC-B2C99-M-007-p07-etiqueta-casa-seleccionada.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-007.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca uno de los 4 íconos de etiqueta.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se muestra un loader mientras el sistema consulta cobertura, horarios y costos de envío.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-008",
   "name": "Verificar que al agregar la dirección como invitado se muestra un loader [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-008-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-008-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — tras agregar direccion con red lenta",
     "file": "TC-B2C99-M-008-p07-tras-agregar-direccion-con-red-lenta.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-008.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el botón \"Agregar dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se cierra el modal y el Store Locator muestra el método de entrega Despacho con {DIRECCION_DESPACHO_001}, con ventana y costo según B2C-144.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-009",
   "name": "Verificar que una dirección con cobertura y horarios setea el método de entrega en el Store Locator [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- {DIRECCION_DESPACHO_001} tiene cobertura y horarios disponibles",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-009-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-009-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — store locator con la direccion",
     "file": "TC-B2C99-M-009-p07-store-locator-con-la-direccion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-009.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el botón \"Agregar dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El sistema deriva al flujo de dirección sin cobertura (B2C-123) y no setea {DIRECCION_SIN_COBERTURA} en el Store Locator.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-010",
   "name": "Verificar que una dirección sin cobertura deriva al flujo sin cobertura [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-010-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-010-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — flujo sin cobertura",
     "file": "TC-B2C99-M-010-p07-flujo-sin-cobertura.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-010.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_COBERTURA} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el botón \"Agregar dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_SIN_COBERTURA}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El sistema deriva al flujo de dirección sin horarios disponibles (B2C-127).",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-011",
   "name": "Verificar que una dirección con cobertura y sin horarios deriva al flujo sin horarios [Mobile] [Guest]",
   "observation": "Causa: {DIRECCION_SIN_SLA} (Av Libertador Gral Bernardo O'Higgins 1072, Maipú) tiene cobertura y horarios en el ambiente (el Store Locator queda con «Desde: Lun 26/10…»); no es una dirección con cobertura y sin horarios. Acción: declarar una dirección con cobertura y sin horarios disponibles (B2C-127).",
   "observed": "Causa: {DIRECCION_SIN_SLA} (Av Libertador Gral Bernardo O'Higgins 1072, Maipú) tiene cobertura y horarios en el ambiente (el Store Locator queda con «Desde: Lun 26/10…»); no es una dirección con cobertura y sin horarios. Acción: declarar una dirección con cobertura y sin horarios disponibles (B2C-127).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "spec": "tests/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_SLA} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el botón \"Agregar dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_SIN_SLA}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se muestra el modal \"No se te escapen\" (B2C-122) antes de setear la nueva dirección.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-012",
   "name": "Verificar que con productos en el carro y cambio de tienda se muestra el modal No se te escapen [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La dirección activa es {DIRECCION_MISMA_TIENDA}\n- El carro contiene {SKU_VALID_001} x 1",
   "screenshots": [
    {
     "caption": "TC B2C99 M 012 ppre direccion activa y carro con el sku",
     "file": "TC-B2C99-M-012-ppre-direccion-activa-y-carro-con-el-sku.png"
    },
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-012-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-012-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — modal de cambio de tienda",
     "file": "TC-B2C99-M-012-p07-modal-de-cambio-de-tienda.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-012.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el botón \"Agregar dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_MISMA_TIENDA}\n- {DIRECCION_OTRA_TIENDA}\n- {SKU_VALID_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se muestra un loader y luego el modal \"Autenticación requerida\" de B2C-125; llega el código OTP al correo de la cuenta.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-013",
   "name": "Verificar que al agregar la dirección logueado se muestra un loader y se dispara el OTP [Mobile] [Logueado]",
   "observation": "Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.",
   "observed": "Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {USER_AUTH_001} no tiene guardada la dirección usada en el caso\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "spec": "tests/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el botón \"Agregar dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {USER_AUTH_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se muestra \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección actual, la dirección actual bajo el mapa, el banner \"Importante, entregaremos tu compra en la ubicación marcada…\" y el botón \"Continuar con detalles de la dirección\".",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-014",
   "name": "Verificar que al seleccionar el mapa se abre Agregar nueva dirección con todos sus elementos [Mobile] [Guest]",
   "observation": "Esperado: seleccionar el mapa abre «Agregar nueva dirección». Obtenido: el clic en el mapa no abre nada; solo el PIN «Ajusta aquí» lo abre. Bug: B2C-1337.",
   "observed": "Esperado: seleccionar el mapa abre «Agregar nueva dirección». Obtenido: el clic en el mapa no abre nada; solo el PIN «Ajusta aquí» lo abre. Bug: B2C-1337.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-014-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-014-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-014.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el mapa.\n8. El usuario revisa la pantalla.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se abre \"Agregar nueva dirección\" con el mapa centrado en la dirección actual y el PIN sobre ella.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-015",
   "name": "Verificar que al seleccionar el PIN Ajusta aquí se abre Agregar nueva dirección [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-015-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-015-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-M-015-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-015.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El PIN queda en la nueva posición, el texto de {DIRECCION_DESPACHO_001} bajo el mapa no cambia, no aparece alerta y \"Continuar con detalles de la dirección\" sigue habilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-016",
   "name": "Verificar que al mover el PIN dentro del radio el texto de la dirección no cambia [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-016-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-016-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-M-016-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 9 — pin movido dentro del radio",
     "file": "TC-B2C99-M-016-p09-pin-movido-dentro-del-radio.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-016.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).\n10. El usuario revisa la dirección bajo el mapa.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se muestra el toast \"La ubicación seleccionada se encuentra fuera del radio de la dirección actual. Por favor ajustarla.\" con la opción \"Ajustar\" y el botón X; el toast no se cierra solo.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-017",
   "name": "Verificar que al mover el PIN fuera del radio se muestra el toast de alerta con Ajustar y X [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-017-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-017-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-M-017-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 9 — toast de pin fuera del radio",
     "file": "TC-B2C99-M-017-p09-toast-de-pin-fuera-del-radio.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-017.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El botón \"Continuar con detalles de la dirección\" se muestra deshabilitado y el usuario sigue en \"Agregar nueva dirección\".",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-018",
   "name": "Verificar que con el PIN fuera del radio el botón Continuar queda deshabilitado [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-018-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-018-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-M-018-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 10 — tras intentar continuar",
     "file": "TC-B2C99-M-018-p10-tras-intentar-continuar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-018.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).\n10. El usuario intenta tocar \"Continuar con detalles de la dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El PIN vuelve a su posición inicial sobre {DIRECCION_DESPACHO_001}, el toast se cierra y \"Continuar con detalles de la dirección\" queda habilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-019",
   "name": "Verificar que Ajustar devuelve el PIN a su posición original y habilita Continuar [Mobile] [Guest]",
   "observation": "Esperado: «Ajustar» devuelve el PIN, habilita «Continuar» y cierra el toast. Obtenido: el PIN vuelve y «Continuar» se habilita, pero el toast sigue visible. Bug: B2C-1339.",
   "observed": "Esperado: «Ajustar» devuelve el PIN, habilita «Continuar» y cierra el toast. Obtenido: el PIN vuelve y «Continuar» se habilita, pero el toast sigue visible. Bug: B2C-1339.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-019-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-019-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-M-019-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 10 — tras ajustar",
     "file": "TC-B2C99-M-019-p10-tras-ajustar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-019.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).\n10. El usuario toca \"Ajustar\" en el toast.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El toast se cierra, el PIN se mantiene fuera del radio y \"Continuar con detalles de la dirección\" sigue deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-020",
   "name": "Verificar que al cerrar el toast con la X el PIN sigue fuera del radio y no se puede continuar [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-020-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-020-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-M-020-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 10 — tras cerrar el toast con la x",
     "file": "TC-B2C99-M-020-p10-tras-cerrar-el-toast-con-la-x.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-020.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).\n10. El usuario toca la X del toast.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El botón \"Continuar con detalles de la dirección\" queda habilitado y no se vuelve a mostrar la alerta.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-021",
   "name": "Verificar que tras cerrar el toast al volver el PIN dentro del radio se habilita Continuar [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-021-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-021-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-M-021-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 11 — pin de vuelta dentro del radio",
     "file": "TC-B2C99-M-021-p11-pin-de-vuelta-dentro-del-radio.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-021.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición fuera del círculo que delimita el radio permitido (más de {RADIO_PIN_METROS} m).\n10. El usuario toca la X del toast.\n11. El usuario arrastra con el dedo el PIN de vuelta dentro del círculo del radio permitido.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El mapa cambia a vista satelital y el PIN se mantiene en la misma posición.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-022",
   "name": "Verificar que el toggle satelital cambia la vista del mapa y mantiene el PIN [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-022-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-022-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-M-022-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 9 — vista satelital",
     "file": "TC-B2C99-M-022-p09-vista-satelital.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-022.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario toca el toggle de vista satelital.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El mapa vuelve a la vista normal y el PIN se mantiene en la misma posición.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-023",
   "name": "Verificar que el toggle vuelve a la vista normal y mantiene el PIN [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-023-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-023-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-M-023-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 9 — vista satelital",
     "file": "TC-B2C99-M-023-p09-vista-satelital.png"
    },
    {
     "caption": "Paso 10 — vista normal",
     "file": "TC-B2C99-M-023-p10-vista-normal.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-023.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario toca el toggle de vista satelital.\n10. El usuario toca nuevamente el toggle para volver a la vista normal.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se muestra un loader y luego \"Detalles de la dirección\" con el PIN en la nueva posición; el texto de {DIRECCION_DESPACHO_001} bajo el mapa no cambia.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-024",
   "name": "Verificar que al continuar con el PIN ajustado se vuelve a Detalles con el PIN en su nueva posición [Mobile] [Guest]",
   "observation": "Esperado: loader al continuar con el PIN ajustado. Obtenido: se vuelve a «Detalles» sin ningún loader (ni spinner ni skeleton). Bug: B2C-1341.",
   "observed": "Esperado: loader al continuar con el PIN ajustado. Obtenido: se vuelve a «Detalles» sin ningún loader (ni spinner ni skeleton). Bug: B2C-1341.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-024-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-024-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-M-024-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 9 — pin movido dentro del radio",
     "file": "TC-B2C99-M-024-p09-pin-movido-dentro-del-radio.png"
    },
    {
     "caption": "Paso 10 — detalles con el pin en la nueva posicion",
     "file": "TC-B2C99-M-024-p10-detalles-con-el-pin-en-la-nueva-posicion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-024.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).\n10. El usuario toca \"Continuar con detalles de la dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "La request de cobertura envía la latitud y longitud de la nueva posición del PIN (distintas de las de la dirección original) y no recalcula las coordenadas desde el texto.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-025",
   "name": "Verificar que la cobertura se valida con las coordenadas del PIN ajustado y no con el texto [Mobile] [Guest]",
   "observation": "Causa: {STORE_LOCATOR_API_ENDPOINT} (…/smu-delivery/…/stores) no se llama al agregar la dirección; las coordenadas del PIN viajan en POST …/smu-delivery/…/apply. Acción: declarar en la planilla el endpoint que recibe las coordenadas (…/apply).",
   "observed": "Causa: {STORE_LOCATOR_API_ENDPOINT} (…/smu-delivery/…/stores) no se llama al agregar la dirección; las coordenadas del PIN viajan en POST …/smu-delivery/…/apply. Acción: declarar en la planilla el endpoint que recibe las coordenadas (…/apply).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- DevTools abierto en la pestaña Network",
   "spec": "tests/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).\n10. El usuario toca \"Continuar con detalles de la dirección\".\n11. El sistema vuelve a \"Detalles de la dirección\".\n12. El usuario toca el botón \"Agregar dirección\".\n13. El usuario revisa la request {STORE_LOCATOR_API_ENDPOINT} en DevTools > Network.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {STORE_LOCATOR_API_ENDPOINT}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El sistema redirige al buscador de direcciones del Store Locator y muestra el toast \"Ha ocurrido un error\" con X para cerrarlo.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-026",
   "name": "Verificar que un error al guardar el PIN redirige al buscador con el toast de error [Mobile] [Guest]",
   "observation": "Causa: {PIN_UBICACION_API_ENDPOINT} está vacío en el Excel de data. Acción: cargar el endpoint del guardado de la ubicación del PIN.",
   "observed": "Causa: {PIN_UBICACION_API_ENDPOINT} está vacío en el Excel de data. Acción: cargar el endpoint del guardado de la ubicación del PIN.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- DevTools abierto con bloqueo de la request {PIN_UBICACION_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).\n10. El usuario toca \"Continuar con detalles de la dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {PIN_UBICACION_API_ENDPOINT}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El sistema vuelve a \"Detalles de la dirección\" con el PIN en su posición original y la dirección sin cambios.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-027",
   "name": "Verificar que el botón atrás en Agregar nueva dirección vuelve sin aplicar cambios al PIN [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-027-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-027-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 8 — agregar nueva direccion con el pin",
     "file": "TC-B2C99-M-027-p08-agregar-nueva-direccion-con-el-pin.png"
    },
    {
     "caption": "Paso 10 — detalles tras el boton atras",
     "file": "TC-B2C99-M-027-p10-detalles-tras-el-boton-atras.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-027.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el PIN etiquetado \"Ajusta aquí\".\n8. El sistema muestra la pantalla \"Agregar nueva dirección\" con el mapa centrado y el PIN sobre la dirección.\n9. El usuario arrastra con el dedo el PIN a una posición dentro del círculo que delimita el radio permitido (menos de {RADIO_PIN_METROS} m).\n10. El usuario toca el botón atrás \"<\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {RADIO_PIN_METROS}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se muestra un loader y el modal \"Dirección manual\" con Región, Comuna, Dirección y Numeración precargadas con los datos de {DIRECCION_DESPACHO_001}.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-028",
   "name": "Verificar que Editar abre el modal Dirección manual con los campos precargados [Mobile] [Guest]",
   "observation": "Esperado: loader y «Dirección manual» precargada. Obtenido: se abre «Dirección manual» precargada (Metropolitana, La Florida, Calle Uno, 23) sin loader. Bug: B2C-1343.",
   "observed": "Esperado: loader y «Dirección manual» precargada. Obtenido: se abre «Dirección manual» precargada (Metropolitana, La Florida, Calle Uno, 23) sin loader. Bug: B2C-1343.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-028-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-028-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 9 — direccion manual precargado",
     "file": "TC-B2C99-M-028-p09-direccion-manual-precargado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-028.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca la opción \"Editar\" de la dirección.\n8. El sistema muestra un loader y despliega el modal \"Dirección manual\" con los campos precargados.\n9. El usuario revisa los campos del modal.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Se muestra un loader y se vuelve a \"Detalles de la dirección\" con la dirección actualizada bajo el mapa y el PIN ubicado en la nueva numeración.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-029",
   "name": "Verificar que al editar la dirección se actualiza el texto y el PIN se reubica [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-029-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-029-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 9 — numeracion cambiada a 45",
     "file": "TC-B2C99-M-029-p09-numeracion-cambiada-a-45.png"
    },
    {
     "caption": "Paso 10 — detalles con la direccion editada",
     "file": "TC-B2C99-M-029-p10-detalles-con-la-direccion-editada.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-029.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca la opción \"Editar\" de la dirección.\n8. El sistema muestra un loader y despliega el modal \"Dirección manual\" con los campos precargados.\n9. El usuario cambia la Numeración por otra válida de la misma calle (ej. 45).\n10. El usuario toca \"Continuar con detalles de la dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "Al volver a \"Detalles de la dirección\", los campos N° dpto, Nombre de dirección e Instrucción para entrega están vacíos y ninguna etiqueta está seleccionada.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-030",
   "name": "Verificar que al editar la dirección se limpian los campos complementarios [Mobile] [Guest]",
   "observation": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "observed": "Nota: la sugerencia de Google abre «Agregar nueva dirección»; se llegó a «Detalles de la dirección» con «Continuar con detalles de la dirección» (bug B2C-1332/B2C-1333).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-030-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-030-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 7 — campos complementarios completados",
     "file": "TC-B2C99-M-030-p07-campos-complementarios-completados.png"
    },
    {
     "caption": "Paso 11 — detalles tras editar la direccion",
     "file": "TC-B2C99-M-030-p11-detalles-tras-editar-la-direccion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-030.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario completa \"N° dpto\" con \"Dpto 910\", \"Nombre de dirección\" con \"Casa\", selecciona una etiqueta y escribe una instrucción para entrega.\n8. El usuario toca la opción \"Editar\" de la dirección.\n9. El sistema muestra un loader y despliega el modal \"Dirección manual\" con los campos precargados.\n10. El usuario cambia la Numeración por otra válida de la misma calle (ej. 45).\n11. El usuario toca \"Continuar con detalles de la dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "La dirección queda guardada con el nombre \"Av. San Josemaría Es...\" (primeros 20 caracteres de calle + número de {DIRECCION_DESPACHO_003} y puntos suspensivos).",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-031",
   "name": "Verificar que sin nombre la dirección se guarda con calle y número truncados a 20 caracteres [Mobile] [Logueado]",
   "observation": "Esperado: nombre «Av. San Josemaría Es...». Obtenido: «Avenida San Josemar…» (19 caracteres y «…»). La dirección creada se eliminó al terminar. Bug: B2C-1345.",
   "observed": "Esperado: nombre «Av. San Josemaría Es...». Obtenido: «Avenida San Josemar…» (19 caracteres y «…»). La dirección creada se eliminó al terminar. Bug: B2C-1345.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {USER_AUTH_001} no tiene guardada la dirección usada en el caso",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-031-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion",
     "file": "TC-B2C99-M-031-p06-detalles-de-la-direccion.png"
    },
    {
     "caption": "Paso 9 — direcciones guardadas de la cuenta",
     "file": "TC-B2C99-M-031-p09-direcciones-guardadas-de-la-cuenta.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-031.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_003} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el botón \"Agregar dirección\".\n8. El usuario valida el código OTP recibido (B2C-125).\n9. El usuario toca el Store Locator y revisa sus direcciones guardadas.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_003}\n- {USER_AUTH_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "La dirección queda guardada con el nombre \"Calle Uno 23\" (calle + número de {DIRECCION_DESPACHO_001}), sin puntos suspensivos.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-032",
   "name": "Verificar que sin nombre una dirección corta se guarda con calle y número completos [Mobile] [Logueado]",
   "observation": "Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.",
   "observed": "Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {USER_AUTH_001} no tiene guardada la dirección usada en el caso",
   "spec": "tests/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el botón \"Agregar dirección\".\n8. El usuario valida el código OTP recibido (B2C-125).\n9. El usuario toca el Store Locator y revisa sus direcciones guardadas.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {USER_AUTH_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "La dirección guardada muestra el ícono de ubicación (pin) como etiqueta.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-033",
   "name": "Verificar que sin etiqueta seleccionada la dirección se guarda con el ícono de ubicación [Mobile] [Logueado]",
   "observation": "Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.",
   "observed": "Causa: la cuenta {USER_AUTH_001} ya tiene guardada «Calle Uno 23, La Florida» (11 direcciones: «Casa» y 10 «Calle Uno 23»), y el caso exige que no la tenga. Acción: declarar una dirección que la cuenta no tenga guardada, o una cuenta sin ella.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {USER_AUTH_001} no tiene guardada la dirección usada en el caso",
   "spec": "tests/B2C-99.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" con el mapa y el PIN posicionado sobre la dirección.\n7. El usuario toca el botón \"Agregar dirección\".\n8. El usuario valida el código OTP recibido (B2C-125).\n9. El usuario toca el Store Locator y revisa sus direcciones guardadas.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}\n- {USER_AUTH_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El área del mapa se muestra en gris con ícono de mapa y el mensaje \"No pudimos cargar el mapa. Puedes continuar con la dirección ingresada o volver a buscarla.\"; la calle, número, comuna y región de {DIRECCION_DESPACHO_001} se muestran en modo lectura.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-034",
   "name": "Verificar que si Google Maps no carga se muestra el error del mapa y la dirección en lectura [Mobile] [Guest]",
   "observation": "Esperado: mensaje «No pudimos cargar el mapa…» con el mapa bloqueado. Obtenido: área del mapa en blanco, sin ícono ni mensaje. Bug: B2C-1347.",
   "observed": "Esperado: mensaje «No pudimos cargar el mapa…» con el mapa bloqueado. Obtenido: área del mapa en blanco, sin ícono ni mensaje. Bug: B2C-1347.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- DevTools abierto con bloqueo de las requests a maps.googleapis.com después de elegir la sugerencia (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-034-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 5 — agregar nueva direccion con el mapa sin cargar",
     "file": "TC-B2C99-M-034-p05-agregar-nueva-direccion-con-el-mapa-sin-cargar.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion con el mapa sin cargar",
     "file": "TC-B2C99-M-034-p06-detalles-de-la-direccion-con-el-mapa-sin-cargar.png"
    },
    {
     "caption": "Paso 7 — pantalla con el mapa sin cargar",
     "file": "TC-B2C99-M-034-p07-pantalla-con-el-mapa-sin-cargar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-034.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" y el mapa no carga.\n7. El usuario revisa la pantalla.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "No se abre \"Agregar nueva dirección\": el ajuste del PIN y los controles del mapa no están disponibles.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-035",
   "name": "Verificar que si Google Maps no carga el ajuste del PIN queda deshabilitado [Mobile] [Guest]",
   "observation": "Con el mapa bloqueado, tocar el área del mapa no abre «Agregar nueva dirección». Nota: en ese estado no se muestra el mensaje de error del mapa (bug B2C-1346/B2C-1347).",
   "observed": "Con el mapa bloqueado, tocar el área del mapa no abre «Agregar nueva dirección». Nota: en ese estado no se muestra el mensaje de error del mapa (bug B2C-1346/B2C-1347).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- DevTools abierto con bloqueo de las requests a maps.googleapis.com después de elegir la sugerencia (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-035-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 5 — agregar nueva direccion con el mapa sin cargar",
     "file": "TC-B2C99-M-035-p05-agregar-nueva-direccion-con-el-mapa-sin-cargar.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion con el mapa sin cargar",
     "file": "TC-B2C99-M-035-p06-detalles-de-la-direccion-con-el-mapa-sin-cargar.png"
    },
    {
     "caption": "Paso 7 — tras tocar el area del mapa",
     "file": "TC-B2C99-M-035-p07-tras-tocar-el-area-del-mapa.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-035.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" y el mapa no carga.\n7. El usuario intenta tocar el área del mapa.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El flujo continúa con las validaciones del CA2 y el Store Locator queda con {DIRECCION_DESPACHO_001} como dirección de despacho.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-036",
   "name": "Verificar que si Google Maps no carga Confirmar dirección continúa con las coordenadas geocodificadas [Mobile] [Guest]",
   "observation": "Esperado: botón «Confirmar dirección» con el mapa sin cargar. Obtenido: solo «Ajusta aquí», «Editar» y «Agregar dirección». Bug: B2C-1349.",
   "observed": "Esperado: botón «Confirmar dirección» con el mapa sin cargar. Obtenido: solo «Ajusta aquí», «Editar» y «Agregar dirección». Bug: B2C-1349.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- DevTools abierto con bloqueo de las requests a maps.googleapis.com después de elegir la sugerencia (Network request blocking)\n- {DIRECCION_DESPACHO_001} tiene cobertura y horarios disponibles",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-036-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 5 — agregar nueva direccion con el mapa sin cargar",
     "file": "TC-B2C99-M-036-p05-agregar-nueva-direccion-con-el-mapa-sin-cargar.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion con el mapa sin cargar",
     "file": "TC-B2C99-M-036-p06-detalles-de-la-direccion-con-el-mapa-sin-cargar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-036.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" y el mapa no carga.\n7. El usuario toca \"Confirmar dirección\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-26",
   "expected": "El sistema vuelve al buscador de direcciones del Store Locator (B2C-26) para reingresar la dirección.",
   "form_factor": "mobile",
   "id": "TC-B2C99-M-037",
   "name": "Verificar que si Google Maps no carga el botón atrás vuelve al buscador de direcciones [Mobile] [Guest]",
   "observation": "Esperado: el botón atrás vuelve al buscador del Store Locator. Obtenido: vuelve a «Agregar nueva dirección» (mapa en blanco). Bug: B2C-1351.",
   "observed": "Esperado: el botón atrás vuelve al buscador del Store Locator. Obtenido: vuelve a «Agregar nueva dirección» (mapa en blanco). Bug: B2C-1351.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene dirección ni tienda seleccionada en el Store Locator\n- DevTools abierto con bloqueo de las requests a maps.googleapis.com después de elegir la sugerencia (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C99-M-037-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 5 — agregar nueva direccion con el mapa sin cargar",
     "file": "TC-B2C99-M-037-p05-agregar-nueva-direccion-con-el-mapa-sin-cargar.png"
    },
    {
     "caption": "Paso 6 — detalles de la direccion con el mapa sin cargar",
     "file": "TC-B2C99-M-037-p06-detalles-de-la-direccion-con-el-mapa-sin-cargar.png"
    },
    {
     "caption": "Paso 7 — tras el boton atras",
     "file": "TC-B2C99-M-037-p07-tras-el-boton-atras.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C99-M-037.png"
    }
   ],
   "spec": "tests/B2C-99.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001} en el buscador y la selecciona de las sugerencias de Google.\n6. El sistema redirige a \"Detalles de la dirección\" y el mapa no carga.\n7. El usuario toca el botón atrás \"<\".",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "390x844"
  }
 ]
}
-->
