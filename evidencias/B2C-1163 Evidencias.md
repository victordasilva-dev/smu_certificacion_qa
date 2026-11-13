# B2C-1163 - Re-test - El Floating Pill no se muestra en Mi cuenta y no dice "Ver carrito" ni lleva badge (TC-B2C22-APP-019) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-1163 |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc (DEV) · cl.smu.unimarcapp.sfcc.qa |
| Dispositivo Android | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/Pendiente iOS/B2C-22 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Rechazado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 2 | B2C-1163, TC-B2C22-APP-019 |

## Detalle por caso de prueba

### B2C-1163 - [B2C-22] El Floating Pill no se muestra en Mi cuenta y no dice "Ver carrito" ni lleva badge (TC-B2C22-APP-019)

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-13 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |

**Pasos ejecutados**

1. Abrir la app sin sesión y, desde la vitrina 'Los más vendidos' del Home, tocar 'Agregar' en Albóndigas Super Pollo espaciales 300 g.
2. Recorrer Home, Categorías, una PLP, una PDP, Mis productos (Favoritos) y Mi cuenta, mirando el Floating Pill sobre la TapBar.

**Resultado esperado**

El Floating Pill 'Ver carrito' se muestra flotando sobre el TapBar en todas las pantallas con TapBar visible, con icono, texto 'Ver carrito' y badge con la cantidad total de items.

**Resultado obtenido**

Como invitado ya no se puede tener productos en el carro: al agregar la app pide método de entrega y luego iniciar sesión. Con la cuenta compradora y Albóndigas Super Pollo en el carro, el Floating Pill se muestra en Home, Categorías, Mis productos y ahora también en Mi cuenta, pero sigue diciendo «1 unidades · Ir al carro»: no muestra el texto «Ver carrito» ni un badge con la cantidad.

**Evidencia**

![Paso 1 — home](<B2C-1163 Evidencias/B2C-1163-p01-home.png>)

![Paso 3 — mis productos](<B2C-1163 Evidencias/B2C-1163-p03-mis-productos.png>)

![Paso 4 — mi cuenta](<B2C-1163 Evidencias/B2C-1163-p04-mi-cuenta.png>)

---

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

![Paso 1 — home](<B2C-1163 Evidencias/B2C-1163-p01-home.png>)

![Paso 4 — mi cuenta](<B2C-1163 Evidencias/B2C-1163-p04-mi-cuenta.png>)

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
  "suite": "B2C-1163",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/Pendiente iOS/B2C-22 APP Test Cases.xlsx",
  "title": "B2C-1163 - Re-test - El Floating Pill no se muestra en Mi cuenta y no dice \"Ver carrito\" ni lleva badge (TC-B2C22-APP-019) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-1163",
   "TC-B2C22-APP-019"
  ]
 },
 "results": [
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026)",
   "executed_at": "2026-11-13",
   "expected": "El Floating Pill 'Ver carrito' se muestra flotando sobre el TapBar en todas las pantallas con TapBar visible, con icono, texto 'Ver carrito' y badge con la cantidad total de items.",
   "form_factor": "app",
   "id": "B2C-1163",
   "name": "[B2C-22] El Floating Pill no se muestra en Mi cuenta y no dice \"Ver carrito\" ni lleva badge (TC-B2C22-APP-019)",
   "observed": "Como invitado ya no se puede tener productos en el carro: al agregar la app pide método de entrega y luego iniciar sesión. Con la cuenta compradora y Albóndigas Super Pollo en el carro, el Floating Pill se muestra en Home, Categorías, Mis productos y ahora también en Mi cuenta, pero sigue diciendo «1 unidades · Ir al carro»: no muestra el texto «Ver carrito» ni un badge con la cantidad.",
   "platform": "Android",
   "screenshots": [
    {
     "caption": "Paso 1 — home",
     "file": "B2C-1163-p01-home.png"
    },
    {
     "caption": "Paso 3 — mis productos",
     "file": "B2C-1163-p03-mis-productos.png"
    },
    {
     "caption": "Paso 4 — mi cuenta",
     "file": "B2C-1163-p04-mi-cuenta.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Abrir la app sin sesión y, desde la vitrina 'Los más vendidos' del Home, tocar 'Agregar' en Albóndigas Super Pollo espaciales 300 g.\n2. Recorrer Home, Categorías, una PLP, una PDP, Mis productos (Favoritos) y Mi cuenta, mirando el Floating Pill sobre la TapBar."
  },
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
  }
 ]
}
-->
