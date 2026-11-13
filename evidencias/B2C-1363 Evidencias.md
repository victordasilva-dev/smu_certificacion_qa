# B2C-1363 - Re-test - La cuenta logueada ve 5 imágenes completas por pantalla en el carrusel de imágenes circulares en lugar de 3 como máximo (TC-B2C72-APP-012) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-1363 |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc (DEV) · cl.smu.unimarcapp.sfcc.qa |
| Dispositivo Android | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/Pendiente IOS/B2C-72 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 2 | B2C-1363, TC-B2C72-APP-012 |

## Detalle por caso de prueba

### B2C-1363 - [B2C-72] La cuenta logueada ve 5 imágenes completas por pantalla en el carrusel de imágenes circulares en lugar de 3 como máximo (TC-B2C72-APP-012)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |

**Pasos ejecutados**

1. Abrir la App Unimarc sin iniciar sesión y bajar el Home hasta el carrusel «Categorías destacadas»; recorrerlo completo: 7 elementos (Orgánico, Comida en casa, Panadería, Pastelería, Celebraciones, Higiene personal, Limpieza).
2. Iniciar sesión con correo y código OTP, volver al Home y bajar hasta el mismo carrusel.

**Resultado esperado**

Un slider de imágenes circulares con hasta 3 imágenes visibles por slide, igual para la cuenta logueada y para el invitado.

**Resultado obtenido**

Con la cuenta compradora logueada, el carrusel de imágenes circulares del Home muestra 3 imágenes completas por pantalla (Orgánico, Comida en casa, Panadería; tras deslizar, Pastelería, Celebraciones, Higiene personal). El título del componente hoy dice «Popular Categories».

**Evidencia**

![Paso 1 — logueado](<B2C-1363 Evidencias/B2C-1363-p01-logueado.png>)

![Paso 2 — deslizado](<B2C-1363 Evidencias/B2C-1363-p02-deslizado.png>)

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

![Paso 1 — logueado](<B2C-1363 Evidencias/B2C-1363-p01-logueado.png>)

![Paso 2 — deslizado](<B2C-1363 Evidencias/B2C-1363-p02-deslizado.png>)

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
  "suite": "B2C-1363",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/Pendiente IOS/B2C-72 APP Test Cases.xlsx",
  "title": "B2C-1363 - Re-test - La cuenta logueada ve 5 imágenes completas por pantalla en el carrusel de imágenes circulares en lugar de 3 como máximo (TC-B2C72-APP-012) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-1363",
   "TC-B2C72-APP-012"
  ]
 },
 "results": [
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026)",
   "executed_at": "2026-11-13",
   "expected": "Un slider de imágenes circulares con hasta 3 imágenes visibles por slide, igual para la cuenta logueada y para el invitado.",
   "form_factor": "app",
   "id": "B2C-1363",
   "name": "[B2C-72] La cuenta logueada ve 5 imágenes completas por pantalla en el carrusel de imágenes circulares en lugar de 3 como máximo (TC-B2C72-APP-012)",
   "observed": "Con la cuenta compradora logueada, el carrusel de imágenes circulares del Home muestra 3 imágenes completas por pantalla (Orgánico, Comida en casa, Panadería; tras deslizar, Pastelería, Celebraciones, Higiene personal). El título del componente hoy dice «Popular Categories».",
   "platform": "Android",
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
   "steps": "1. Abrir la App Unimarc sin iniciar sesión y bajar el Home hasta el carrusel «Categorías destacadas»; recorrerlo completo: 7 elementos (Orgánico, Comida en casa, Panadería, Pastelería, Celebraciones, Higiene personal, Limpieza).\n2. Iniciar sesión con correo y código OTP, volver al Home y bajar hasta el mismo carrusel."
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
  }
 ]
}
-->
