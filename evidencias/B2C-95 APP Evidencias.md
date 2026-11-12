# B2C-95 APP - Filtro Ofertas (Android) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-95 APP |
| Última actualización | 2026-11-11 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Dispositivo Android | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) · cl.smu.unimarcapp.sfcc.qa |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-95 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 3 |
| Rechazado | 2 |
| Bloqueado Data | 1 |
| **Total** | **6** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-11 | 6 | TC-B2C95-APP-001, TC-B2C95-APP-002, TC-B2C95-APP-003, TC-B2C95-APP-004, TC-B2C95-APP-005, TC-B2C95-APP-006 |

## Detalle por caso de prueba

### TC-B2C95-APP-001 - Verificar que el filtro Ofertas se muestra como primera tarjeta del panel con nombre, cantidad y toggle desactivado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 50.0 s |
| Spec | tests-app/B2C-95.spec.ts:120 |

**Precondiciones**

- User type: Logueado (vhchirinos+comprador@avatar-global.com / Avatar1234.)
- Viewport: App iOS/Android
- Ubicacion: PLP
- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos en oferta (isOnSale)

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {PLP_URL_PRECIO_OFERTA} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com / Avatar1234. y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.

**Resultado esperado**

La sección "Aplica tus filtros" muestra primero la tarjeta "Ofertas 😎" con la cantidad de productos en oferta (ej. "140 productos") y el toggle a la derecha, desactivado.

**Resultado obtenido**

En «Aplica tus filtros» la primera tarjeta es «Ofertas 🤩» con «7 productos» y el toggle a la derecha, desactivado; siguen Estilos de alimentación, Sellos de advertencia, Marcas, Precio y Tipo de envase.

**Observación**

La tarjeta se llama «Ofertas 🤩»; la HU y el TC escriben «Ofertas 😎» (la web muestra el mismo 🤩). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — plp vacuno con 12 productos](<B2C-95 APP Evidencias/TC-B2C95-APP-001-android-p02-plp-vacuno-con-12-productos.png>)

![Android · Paso 4 — panel de filtros abierto](<B2C-95 APP Evidencias/TC-B2C95-APP-001-android-p04-panel-de-filtros-abierto.png>)

![Android · Paso 5 — tarjeta ofertas con el toggle desactivado](<B2C-95 APP Evidencias/TC-B2C95-APP-001-android-p05-tarjeta-ofertas-con-el-toggle-desactivado.png>)

![Android · Estado final](<B2C-95 APP Evidencias/TC-B2C95-APP-001-android.png>)

---

### TC-B2C95-APP-002 - Verificar que activar el toggle Ofertas lo muestra activo y actualiza el conteo de "Mostrar productos" [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 68.0 s |
| Spec | tests-app/B2C-95.spec.ts:137 |

**Precondiciones**

- User type: Logueado (vhchirinos+comprador@avatar-global.com / Avatar1234.)
- Viewport: App iOS/Android
- Ubicacion: PLP
- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos en oferta (isOnSale)

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {PLP_URL_PRECIO_OFERTA} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com / Avatar1234. y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario activa el toggle "Ofertas".
6. El sistema muestra el toggle activo y actualiza el conteo del botón "Mostrar [N] productos".

**Resultado esperado**

El toggle "Ofertas" queda activo y el botón muestra "Mostrar [N] productos", donde N es la cantidad que indica la tarjeta Ofertas.

**Resultado obtenido**

Esperado: con el toggle Ofertas activo el botón muestra «Mostrar 7 productos» (la cantidad de la tarjeta Ofertas). Obtenido: el toggle queda activo y el chip «Ofertas» aparece en «Filtros aplicados», pero el botón sigue en «Mostrar 12 productos» (el total de la PLP) tras 20 s. tests-app/B2C-95.spec.ts:137. Bug: B2C-1483.

**Observación**

Esperado: con el toggle Ofertas activo el botón muestra «Mostrar 7 productos» (la cantidad de la tarjeta Ofertas). Obtenido: el toggle queda activo y el chip «Ofertas» aparece en «Filtros aplicados», pero el botón sigue en «Mostrar 12 productos» (el total de la PLP) tras 20 s. tests-app/B2C-95.spec.ts:137. Bug: B2C-1483.

**Evidencia**

![Android · Paso 2 — plp vacuno con 12 productos](<B2C-95 APP Evidencias/TC-B2C95-APP-002-android-p02-plp-vacuno-con-12-productos.png>)

![Android · Paso 4 — panel de filtros abierto](<B2C-95 APP Evidencias/TC-B2C95-APP-002-android-p04-panel-de-filtros-abierto.png>)

![Android · Paso 6 — toggle ofertas activado](<B2C-95 APP Evidencias/TC-B2C95-APP-002-android-p06-toggle-ofertas-activado.png>)

![Android · Estado final](<B2C-95 APP Evidencias/TC-B2C95-APP-002-android.png>)

---

### TC-B2C95-APP-003 - Verificar que "Mostrar productos" con Ofertas activo cierra el panel y lista solo productos en oferta [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 99.0 s |
| Spec | tests-app/B2C-95.spec.ts:152 |

**Precondiciones**

- User type: Logueado (vhchirinos+comprador@avatar-global.com / Avatar1234.)
- Viewport: App iOS/Android
- Ubicacion: PLP
- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos en oferta (isOnSale)

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {PLP_URL_PRECIO_OFERTA} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com / Avatar1234. y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario activa el toggle "Ofertas".
6. El sistema muestra el toggle activo y actualiza el conteo del botón "Mostrar [N] productos".
7. El usuario toca "Mostrar [N] productos".
8. El sistema cierra el panel y actualiza el listado.

**Resultado esperado**

El listado muestra solo productos con oferta vigente y el conteo del encabezado de la PLP es igual al N que mostraba el botón.

**Resultado obtenido**

Esperado: tras «Mostrar productos» con Ofertas activo, el listado muestra solo productos con oferta vigente y el encabezado el mismo N. Obtenido: el panel se cierra y el ícono de filtros marca 1, pero el encabezado sigue en «12 productos» y el listado incluye los 5 sin oferta (Abastero vacuno, etc.): el filtro no se aplica. tests-app/B2C-95.spec.ts:152. Bug: B2C-1484.

**Observación**

Esperado: tras «Mostrar productos» con Ofertas activo, el listado muestra solo productos con oferta vigente y el encabezado el mismo N. Obtenido: el panel se cierra y el ícono de filtros marca 1, pero el encabezado sigue en «12 productos» y el listado incluye los 5 sin oferta (Abastero vacuno, etc.): el filtro no se aplica. tests-app/B2C-95.spec.ts:152. Bug: B2C-1484.

**Evidencia**

![Android · Paso 2 — plp vacuno con 12 productos](<B2C-95 APP Evidencias/TC-B2C95-APP-003-android-p02-plp-vacuno-con-12-productos.png>)

![Android · Paso 4 — panel de filtros abierto](<B2C-95 APP Evidencias/TC-B2C95-APP-003-android-p04-panel-de-filtros-abierto.png>)

![Android · Paso 6 — toggle ofertas activado](<B2C-95 APP Evidencias/TC-B2C95-APP-003-android-p06-toggle-ofertas-activado.png>)

![Android · Paso 8 — listado tras mostrar 12 productos](<B2C-95 APP Evidencias/TC-B2C95-APP-003-android-p08-listado-tras-mostrar-12-productos.png>)

![Android · Estado final](<B2C-95 APP Evidencias/TC-B2C95-APP-003-android.png>)

---

### TC-B2C95-APP-004 - Verificar que desactivar Ofertas recalcula el conteo sobre los filtros restantes [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 141.0 s |
| Spec | tests-app/B2C-95.spec.ts:171 |

**Precondiciones**

- User type: Logueado (vhchirinos+comprador@avatar-global.com / Avatar1234.)
- Viewport: App iOS/Android
- Ubicacion: PLP
- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos en oferta (isOnSale)
- En la PLP hay al menos una marca con productos en oferta

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {PLP_URL_PRECIO_OFERTA} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com / Avatar1234. y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario activa el toggle "Ofertas".
6. El sistema muestra el toggle activo y actualiza el conteo del botón "Mostrar [N] productos".
7. El usuario expande "Marca" y selecciona una marca.
8. El sistema actualiza el conteo del botón.
9. El usuario desactiva el toggle "Ofertas".
10. El sistema muestra el toggle desactivado y recalcula el conteo del botón con solo la marca seleccionada.
11. El usuario toca "Mostrar [N] productos".
12. El sistema cierra el panel y actualiza el listado.

**Resultado esperado**

El listado muestra todos los productos de la marca seleccionada (en oferta y sin oferta) y el conteo del encabezado coincide con el del botón.

**Resultado obtenido**

Con Ofertas el botón no cambia (12, ver TC-B2C95-APP-002); con Ofertas + Fundo Rio Alegre: 4; al desactivar Ofertas el toggle vuelve a desactivado y el botón queda en 4 (solo la marca). Al confirmar, el listado muestra los 4 productos de Fundo Rio Alegre y el encabezado dice 4.

**Observación**

Fundo Rio Alegre tiene sus 4 productos en oferta, así que el recálculo al desactivar Ofertas no cambia el número (4 → 4). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — plp vacuno con 12 productos](<B2C-95 APP Evidencias/TC-B2C95-APP-004-android-p02-plp-vacuno-con-12-productos.png>)

![Android · Paso 4 — panel de filtros abierto](<B2C-95 APP Evidencias/TC-B2C95-APP-004-android-p04-panel-de-filtros-abierto.png>)

![Android · Paso 8 — ofertas y fundo rio alegre](<B2C-95 APP Evidencias/TC-B2C95-APP-004-android-p08-ofertas-y-fundo-rio-alegre.png>)

![Android · Paso 10 — solo fundo rio alegre](<B2C-95 APP Evidencias/TC-B2C95-APP-004-android-p10-solo-fundo-rio-alegre.png>)

![Android · Paso 12 — listado de fundo rio alegre](<B2C-95 APP Evidencias/TC-B2C95-APP-004-android-p12-listado-de-fundo-rio-alegre.png>)

![Android · Estado final](<B2C-95 APP Evidencias/TC-B2C95-APP-004-android.png>)

---

### TC-B2C95-APP-005 - Verificar que el filtro Ofertas no se muestra en una PLP sin productos en oferta [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado (vhchirinos+comprador@avatar-global.com / Avatar1234.)
- Viewport: App iOS/Android
- Ubicacion: PLP
- La PLP {PLP_URL_SIN_OFERTAS} no tiene productos en oferta

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {PLP_URL_SIN_OFERTAS} = TBD en el Excel de data
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com / Avatar1234. y navega a la PLP equivalente a {PLP_URL_SIN_OFERTAS}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.

**Resultado esperado**

El panel de filtros no muestra la tarjeta "Ofertas"; solo muestra los filtros con productos disponibles.

**Resultado obtenido**

Causa: {PLP_URL_SIN_OFERTAS} no tiene fila en el Excel de data. Acción: cargar la URL de una PLP sin productos en oferta (en Desktop, TC-B2C95-D-005 usó category/quesos-y-fiambres_fiambres-y-embutidos).

**Observación**

Causa: {PLP_URL_SIN_OFERTAS} no tiene fila en el Excel de data. Acción: cargar la URL de una PLP sin productos en oferta (en Desktop, TC-B2C95-D-005 usó category/quesos-y-fiambres_fiambres-y-embutidos).

---

### TC-B2C95-APP-006 - Verificar que Ofertas combinado con otro filtro muestra solo productos que cumplen ambos (AND) [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 79.0 s |
| Spec | tests-app/B2C-95.spec.ts:200 |

**Precondiciones**

- User type: Logueado (vhchirinos+comprador@avatar-global.com / Avatar1234.)
- Viewport: App iOS/Android
- Ubicacion: PLP
- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos en oferta (isOnSale)
- En la PLP hay al menos una marca con productos en oferta

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {PLP_URL_PRECIO_OFERTA} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com / Avatar1234. y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario activa el toggle "Ofertas".
6. El sistema muestra el toggle activo y actualiza el conteo del botón "Mostrar [N] productos".
7. El usuario expande "Marca" y selecciona una marca con productos en oferta.
8. El sistema actualiza el conteo del botón.
9. El usuario toca "Mostrar [N] productos".
10. El sistema cierra el panel y actualiza el listado.

**Resultado esperado**

El listado muestra solo productos que están en oferta y son de la marca seleccionada.

**Resultado obtenido**

Con Ofertas + Fundo Rio Alegre el botón dice «Mostrar 4 productos»; al confirmar, el encabezado dice 4 y los 4 productos del listado son de Fundo Rio Alegre y tienen oferta.

**Observación**

Los 4 productos de Fundo Rio Alegre están en oferta, así que el caso no distingue el AND de la marca sola. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — plp vacuno con 12 productos](<B2C-95 APP Evidencias/TC-B2C95-APP-006-android-p02-plp-vacuno-con-12-productos.png>)

![Android · Paso 4 — panel de filtros abierto](<B2C-95 APP Evidencias/TC-B2C95-APP-006-android-p04-panel-de-filtros-abierto.png>)

![Android · Paso 8 — ofertas y fundo rio alegre](<B2C-95 APP Evidencias/TC-B2C95-APP-006-android-p08-ofertas-y-fundo-rio-alegre.png>)

![Android · Paso 10 — listado con ofertas y fundo rio alegre](<B2C-95 APP Evidencias/TC-B2C95-APP-006-android-p10-listado-con-ofertas-y-fundo-rio-alegre.png>)

![Android · Estado final](<B2C-95 APP Evidencias/TC-B2C95-APP-006-android.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) · cl.smu.unimarcapp.sfcc.qa"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-95 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-95 APP Test Cases.xlsx",
  "title": "B2C-95 APP - Filtro Ofertas (Android) - Evidencias QA",
  "updated_at": "2026-11-11"
 },
 "history": {
  "2026-11-11": [
   "TC-B2C95-APP-001",
   "TC-B2C95-APP-002",
   "TC-B2C95-APP-003",
   "TC-B2C95-APP-004",
   "TC-B2C95-APP-005",
   "TC-B2C95-APP-006"
  ]
 },
 "results": [
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 50,
   "executed_at": "2026-11-11",
   "expected": "La sección \"Aplica tus filtros\" muestra primero la tarjeta \"Ofertas 😎\" con la cantidad de productos en oferta (ej. \"140 productos\") y el toggle a la derecha, desactivado.",
   "form_factor": "app",
   "id": "TC-B2C95-APP-001",
   "name": "Verificar que el filtro Ofertas se muestra como primera tarjeta del panel con nombre, cantidad y toggle desactivado [App] [Logueado]",
   "observation": "La tarjeta se llama «Ofertas 🤩»; la HU y el TC escriben «Ofertas 😎» (la web muestra el mismo 🤩). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.",
   "observed": "En «Aplica tus filtros» la primera tarjeta es «Ofertas 🤩» con «7 productos» y el toggle a la derecha, desactivado; siguen Estilos de alimentación, Sellos de advertencia, Marcas, Precio y Tipo de envase.",
   "platform": "Android",
   "preconditions": "- User type: Logueado (vhchirinos+comprador@avatar-global.com / Avatar1234.)\n- Viewport: App iOS/Android\n- Ubicacion: PLP\n- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos en oferta (isOnSale)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — plp vacuno con 12 productos",
     "file": "TC-B2C95-APP-001-android-p02-plp-vacuno-con-12-productos.png"
    },
    {
     "caption": "Android · Paso 4 — panel de filtros abierto",
     "file": "TC-B2C95-APP-001-android-p04-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Android · Paso 5 — tarjeta ofertas con el toggle desactivado",
     "file": "TC-B2C95-APP-001-android-p05-tarjeta-ofertas-con-el-toggle-desactivado.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C95-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-95.spec.ts:120",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com / Avatar1234. y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {PLP_URL_PRECIO_OFERTA} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 68,
   "executed_at": "2026-11-11",
   "expected": "El toggle \"Ofertas\" queda activo y el botón muestra \"Mostrar [N] productos\", donde N es la cantidad que indica la tarjeta Ofertas.",
   "form_factor": "app",
   "id": "TC-B2C95-APP-002",
   "name": "Verificar que activar el toggle Ofertas lo muestra activo y actualiza el conteo de \"Mostrar productos\" [App] [Logueado]",
   "observation": "Esperado: con el toggle Ofertas activo el botón muestra «Mostrar 7 productos» (la cantidad de la tarjeta Ofertas). Obtenido: el toggle queda activo y el chip «Ofertas» aparece en «Filtros aplicados», pero el botón sigue en «Mostrar 12 productos» (el total de la PLP) tras 20 s. tests-app/B2C-95.spec.ts:137. Bug: B2C-1483.",
   "observed": "Esperado: con el toggle Ofertas activo el botón muestra «Mostrar 7 productos» (la cantidad de la tarjeta Ofertas). Obtenido: el toggle queda activo y el chip «Ofertas» aparece en «Filtros aplicados», pero el botón sigue en «Mostrar 12 productos» (el total de la PLP) tras 20 s. tests-app/B2C-95.spec.ts:137. Bug: B2C-1483.",
   "platform": "Android",
   "preconditions": "- User type: Logueado (vhchirinos+comprador@avatar-global.com / Avatar1234.)\n- Viewport: App iOS/Android\n- Ubicacion: PLP\n- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos en oferta (isOnSale)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — plp vacuno con 12 productos",
     "file": "TC-B2C95-APP-002-android-p02-plp-vacuno-con-12-productos.png"
    },
    {
     "caption": "Android · Paso 4 — panel de filtros abierto",
     "file": "TC-B2C95-APP-002-android-p04-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Android · Paso 6 — toggle ofertas activado",
     "file": "TC-B2C95-APP-002-android-p06-toggle-ofertas-activado.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C95-APP-002-android.png"
    }
   ],
   "spec": "tests-app/B2C-95.spec.ts:137",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com / Avatar1234. y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario activa el toggle \"Ofertas\".\n6. El sistema muestra el toggle activo y actualiza el conteo del botón \"Mostrar [N] productos\".",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {PLP_URL_PRECIO_OFERTA} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 99,
   "executed_at": "2026-11-11",
   "expected": "El listado muestra solo productos con oferta vigente y el conteo del encabezado de la PLP es igual al N que mostraba el botón.",
   "form_factor": "app",
   "id": "TC-B2C95-APP-003",
   "name": "Verificar que \"Mostrar productos\" con Ofertas activo cierra el panel y lista solo productos en oferta [App] [Logueado]",
   "observation": "Esperado: tras «Mostrar productos» con Ofertas activo, el listado muestra solo productos con oferta vigente y el encabezado el mismo N. Obtenido: el panel se cierra y el ícono de filtros marca 1, pero el encabezado sigue en «12 productos» y el listado incluye los 5 sin oferta (Abastero vacuno, etc.): el filtro no se aplica. tests-app/B2C-95.spec.ts:152. Bug: B2C-1484.",
   "observed": "Esperado: tras «Mostrar productos» con Ofertas activo, el listado muestra solo productos con oferta vigente y el encabezado el mismo N. Obtenido: el panel se cierra y el ícono de filtros marca 1, pero el encabezado sigue en «12 productos» y el listado incluye los 5 sin oferta (Abastero vacuno, etc.): el filtro no se aplica. tests-app/B2C-95.spec.ts:152. Bug: B2C-1484.",
   "platform": "Android",
   "preconditions": "- User type: Logueado (vhchirinos+comprador@avatar-global.com / Avatar1234.)\n- Viewport: App iOS/Android\n- Ubicacion: PLP\n- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos en oferta (isOnSale)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — plp vacuno con 12 productos",
     "file": "TC-B2C95-APP-003-android-p02-plp-vacuno-con-12-productos.png"
    },
    {
     "caption": "Android · Paso 4 — panel de filtros abierto",
     "file": "TC-B2C95-APP-003-android-p04-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Android · Paso 6 — toggle ofertas activado",
     "file": "TC-B2C95-APP-003-android-p06-toggle-ofertas-activado.png"
    },
    {
     "caption": "Android · Paso 8 — listado tras mostrar 12 productos",
     "file": "TC-B2C95-APP-003-android-p08-listado-tras-mostrar-12-productos.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C95-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-95.spec.ts:152",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com / Avatar1234. y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario activa el toggle \"Ofertas\".\n6. El sistema muestra el toggle activo y actualiza el conteo del botón \"Mostrar [N] productos\".\n7. El usuario toca \"Mostrar [N] productos\".\n8. El sistema cierra el panel y actualiza el listado.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {PLP_URL_PRECIO_OFERTA} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 141,
   "executed_at": "2026-11-11",
   "expected": "El listado muestra todos los productos de la marca seleccionada (en oferta y sin oferta) y el conteo del encabezado coincide con el del botón.",
   "form_factor": "app",
   "id": "TC-B2C95-APP-004",
   "name": "Verificar que desactivar Ofertas recalcula el conteo sobre los filtros restantes [App] [Logueado]",
   "observation": "Fundo Rio Alegre tiene sus 4 productos en oferta, así que el recálculo al desactivar Ofertas no cambia el número (4 → 4). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.",
   "observed": "Con Ofertas el botón no cambia (12, ver TC-B2C95-APP-002); con Ofertas + Fundo Rio Alegre: 4; al desactivar Ofertas el toggle vuelve a desactivado y el botón queda en 4 (solo la marca). Al confirmar, el listado muestra los 4 productos de Fundo Rio Alegre y el encabezado dice 4.",
   "platform": "Android",
   "preconditions": "- User type: Logueado (vhchirinos+comprador@avatar-global.com / Avatar1234.)\n- Viewport: App iOS/Android\n- Ubicacion: PLP\n- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos en oferta (isOnSale)\n- En la PLP hay al menos una marca con productos en oferta",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — plp vacuno con 12 productos",
     "file": "TC-B2C95-APP-004-android-p02-plp-vacuno-con-12-productos.png"
    },
    {
     "caption": "Android · Paso 4 — panel de filtros abierto",
     "file": "TC-B2C95-APP-004-android-p04-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Android · Paso 8 — ofertas y fundo rio alegre",
     "file": "TC-B2C95-APP-004-android-p08-ofertas-y-fundo-rio-alegre.png"
    },
    {
     "caption": "Android · Paso 10 — solo fundo rio alegre",
     "file": "TC-B2C95-APP-004-android-p10-solo-fundo-rio-alegre.png"
    },
    {
     "caption": "Android · Paso 12 — listado de fundo rio alegre",
     "file": "TC-B2C95-APP-004-android-p12-listado-de-fundo-rio-alegre.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C95-APP-004-android.png"
    }
   ],
   "spec": "tests-app/B2C-95.spec.ts:171",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com / Avatar1234. y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario activa el toggle \"Ofertas\".\n6. El sistema muestra el toggle activo y actualiza el conteo del botón \"Mostrar [N] productos\".\n7. El usuario expande \"Marca\" y selecciona una marca.\n8. El sistema actualiza el conteo del botón.\n9. El usuario desactiva el toggle \"Ofertas\".\n10. El sistema muestra el toggle desactivado y recalcula el conteo del botón con solo la marca seleccionada.\n11. El usuario toca \"Mostrar [N] productos\".\n12. El sistema cierra el panel y actualiza el listado.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {PLP_URL_PRECIO_OFERTA} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "executed_at": "2026-11-11",
   "expected": "El panel de filtros no muestra la tarjeta \"Ofertas\"; solo muestra los filtros con productos disponibles.",
   "form_factor": "app",
   "id": "TC-B2C95-APP-005",
   "name": "Verificar que el filtro Ofertas no se muestra en una PLP sin productos en oferta [App] [Logueado]",
   "observation": "Causa: {PLP_URL_SIN_OFERTAS} no tiene fila en el Excel de data. Acción: cargar la URL de una PLP sin productos en oferta (en Desktop, TC-B2C95-D-005 usó category/quesos-y-fiambres_fiambres-y-embutidos).",
   "observed": "Causa: {PLP_URL_SIN_OFERTAS} no tiene fila en el Excel de data. Acción: cargar la URL de una PLP sin productos en oferta (en Desktop, TC-B2C95-D-005 usó category/quesos-y-fiambres_fiambres-y-embutidos).",
   "platform": "Android",
   "preconditions": "- User type: Logueado (vhchirinos+comprador@avatar-global.com / Avatar1234.)\n- Viewport: App iOS/Android\n- Ubicacion: PLP\n- La PLP {PLP_URL_SIN_OFERTAS} no tiene productos en oferta",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com / Avatar1234. y navega a la PLP equivalente a {PLP_URL_SIN_OFERTAS}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {PLP_URL_SIN_OFERTAS} = TBD en el Excel de data\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 79,
   "executed_at": "2026-11-11",
   "expected": "El listado muestra solo productos que están en oferta y son de la marca seleccionada.",
   "form_factor": "app",
   "id": "TC-B2C95-APP-006",
   "name": "Verificar que Ofertas combinado con otro filtro muestra solo productos que cumplen ambos (AND) [App] [Logueado]",
   "observation": "Los 4 productos de Fundo Rio Alegre están en oferta, así que el caso no distingue el AND de la marca sola. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.",
   "observed": "Con Ofertas + Fundo Rio Alegre el botón dice «Mostrar 4 productos»; al confirmar, el encabezado dice 4 y los 4 productos del listado son de Fundo Rio Alegre y tienen oferta.",
   "platform": "Android",
   "preconditions": "- User type: Logueado (vhchirinos+comprador@avatar-global.com / Avatar1234.)\n- Viewport: App iOS/Android\n- Ubicacion: PLP\n- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos en oferta (isOnSale)\n- En la PLP hay al menos una marca con productos en oferta",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — plp vacuno con 12 productos",
     "file": "TC-B2C95-APP-006-android-p02-plp-vacuno-con-12-productos.png"
    },
    {
     "caption": "Android · Paso 4 — panel de filtros abierto",
     "file": "TC-B2C95-APP-006-android-p04-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Android · Paso 8 — ofertas y fundo rio alegre",
     "file": "TC-B2C95-APP-006-android-p08-ofertas-y-fundo-rio-alegre.png"
    },
    {
     "caption": "Android · Paso 10 — listado con ofertas y fundo rio alegre",
     "file": "TC-B2C95-APP-006-android-p10-listado-con-ofertas-y-fundo-rio-alegre.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C95-APP-006-android.png"
    }
   ],
   "spec": "tests-app/B2C-95.spec.ts:200",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com / Avatar1234. y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario activa el toggle \"Ofertas\".\n6. El sistema muestra el toggle activo y actualiza el conteo del botón \"Mostrar [N] productos\".\n7. El usuario expande \"Marca\" y selecciona una marca con productos en oferta.\n8. El sistema actualiza el conteo del botón.\n9. El usuario toca \"Mostrar [N] productos\".\n10. El sistema cierra el panel y actualiza el listado.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {PLP_URL_PRECIO_OFERTA} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  }
 ]
}
-->
