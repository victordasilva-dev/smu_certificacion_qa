# B2C-22 APP - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-22 APP |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc (DEV) · cl.smu.unimarcapp.sfcc.qa |
| Dispositivo Android | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/Pendiente iOS/B2C-22 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 1 |
| Rechazado | 1 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 2 | TC-B2C22-APP-013, TC-B2C22-APP-019 |

## Detalle por caso de prueba

### TC-B2C22-APP-019 - El Floating Pill 'Ver carrito' se muestra cuando el carrito tiene productos

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-13 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: al menos 1 producto en el carrito

**Data utilizada**

- {APP_BUILD} = build de la app (placeholder, pendiente de environment)
- {SKU_VALID_001} = SKU de producto

**Pasos ejecutados**

1. Agregar al menos un producto al carrito.
2. Navegar por distintas pantallas con TapBar visible (Home, Categorias, PLP, PDP, Favoritos, Mi cuenta).
3. Verificar la presencia y el contenido del Floating Pill en cada una.

**Resultado esperado**

El Floating Pill 'Ver carrito' se muestra flotando sobre el TapBar en todas las pantallas con TapBar visible, con icono, texto 'Ver carrito' y badge con la cantidad total de items.

**Resultado obtenido**

El pill aparece en las pantallas con TapBar (incluida Mi cuenta) pero dice «1 unidades · Ir al carro», sin «Ver carrito» ni badge con la cantidad.

**Observación**

Como invitado la app ya no permite agregar al carro sin iniciar sesión; se verificó con la cuenta {COMPRADOR_USER}.

**Evidencia**

![Paso 1 — home](<B2C-22 APP Evidencias/B2C-1163-p01-home.png>)

![Paso 4 — mi cuenta](<B2C-22 APP Evidencias/B2C-1163-p04-mi-cuenta.png>)

---

### TC-B2C22-APP-013 - Tap en el buscador del TapBar abre la pantalla de busqueda con el campo activo

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |
| Spec | tests-app/B2C-22.spec.ts:216 |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: cualquier seccion

**Data utilizada**

- {APP_BUILD} = build de la app (placeholder, pendiente de environment)

**Pasos ejecutados**

1. Ubicarse en cualquier seccion del sitio.
2. Presionar sobre el buscador del TapBar.
3. Verificar la apertura de la pantalla de busqueda y el estado del campo.
4. Verificar el icono de la barra durante la busqueda/SRP.

**Resultado esperado**

Se abre la pantalla de busqueda con el campo de ingreso activo; la barra del buscador muestra el icono de lupa en estado activo mientras el usuario esta en busqueda o en la SRP.

**Resultado obtenido**

La pantalla de búsqueda se abre con el campo activo y la lupa del TapBar activa.

**Evidencia**

![Android · Paso 3 — pantalla de busqueda](<B2C-22 APP Evidencias/TC-B2C22-APP-013-android-p03-pantalla-de-busqueda.png>)

![Android · Paso 4 — lupa de la tapbar](<B2C-22 APP Evidencias/TC-B2C22-APP-013-android-p04-lupa-de-la-tapbar.png>)

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
  "suite": "B2C-22 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/Pendiente iOS/B2C-22 APP Test Cases.xlsx",
  "title": "B2C-22 APP - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "TC-B2C22-APP-013",
   "TC-B2C22-APP-019"
  ]
 },
 "results": [
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026)",
   "executed_at": "2026-11-13",
   "expected": "El Floating Pill 'Ver carrito' se muestra flotando sobre el TapBar en todas las pantallas con TapBar visible, con icono, texto 'Ver carrito' y badge con la cantidad total de items.",
   "form_factor": "app",
   "id": "TC-B2C22-APP-019",
   "name": "El Floating Pill 'Ver carrito' se muestra cuando el carrito tiene productos",
   "observation": "Como invitado la app ya no permite agregar al carro sin iniciar sesión; se verificó con la cuenta {COMPRADOR_USER}.",
   "observed": "El pill aparece en las pantallas con TapBar (incluida Mi cuenta) pero dice «1 unidades · Ir al carro», sin «Ver carrito» ni badge con la cantidad.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: al menos 1 producto en el carrito",
   "screenshots": [
    {
     "caption": "Paso 1 — home",
     "file": "B2C-1163-p01-home.png"
    },
    {
     "caption": "Paso 4 — mi cuenta",
     "file": "B2C-1163-p04-mi-cuenta.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Agregar al menos un producto al carrito.\n2. Navegar por distintas pantallas con TapBar visible (Home, Categorias, PLP, PDP, Favoritos, Mi cuenta).\n3. Verificar la presencia y el contenido del Floating Pill en cada una.",
   "test_data": "- {APP_BUILD} = build de la app (placeholder, pendiente de environment)\n- {SKU_VALID_001} = SKU de producto"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026)",
   "executed_at": "2026-11-13",
   "expected": "Se abre la pantalla de busqueda con el campo de ingreso activo; la barra del buscador muestra el icono de lupa en estado activo mientras el usuario esta en busqueda o en la SRP.",
   "form_factor": "app",
   "id": "TC-B2C22-APP-013",
   "name": "Tap en el buscador del TapBar abre la pantalla de busqueda con el campo activo",
   "observed": "La pantalla de búsqueda se abre con el campo activo y la lupa del TapBar activa.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: cualquier seccion",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — pantalla de busqueda",
     "file": "TC-B2C22-APP-013-android-p03-pantalla-de-busqueda.png"
    },
    {
     "caption": "Android · Paso 4 — lupa de la tapbar",
     "file": "TC-B2C22-APP-013-android-p04-lupa-de-la-tapbar.png"
    }
   ],
   "spec": "tests-app/B2C-22.spec.ts:216",
   "status": "Aprobado",
   "steps": "1. Ubicarse en cualquier seccion del sitio.\n2. Presionar sobre el buscador del TapBar.\n3. Verificar la apertura de la pantalla de busqueda y el estado del campo.\n4. Verificar el icono de la barra durante la busqueda/SRP.",
   "test_data": "- {APP_BUILD} = build de la app (placeholder, pendiente de environment)"
  }
 ]
}
-->
