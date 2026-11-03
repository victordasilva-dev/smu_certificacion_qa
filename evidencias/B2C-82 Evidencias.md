# Re-ejecución de casos con bug (B2C-82)

| Campo | Valor |
|---|---|
| Suite | B2C-82 |
| Última actualización | 2026-10-23 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Ejecutados/SP1/B2C-82 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-23 | 2 | TC-B2C82-D-001, TC-B2C82-M-001 |

## Detalle por caso de prueba

### TC-B2C82-D-001 - Presentacion en Desktop: 5-6 banners con titulo debajo de cada imagen

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-23 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-82.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home o Landing con el componente configurado

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)

**Pasos ejecutados**

1. Navegar a la pagina con el componente en Desktop.
2. Visualizar el pretitulo, el texto, el enlace Mostrar todo y el slider.

**Resultado esperado**

Se muestran el pretitulo, el texto y el enlace Mostrar todo (alineado a la derecha); el slider muestra 5-6 items visibles, cada uno con su imagen y titulo debajo.

**Resultado obtenido**

Recomprobado en vivo el 2026-10-23: el Home trae un único slider de banners con título, el bloque «Cada día, una ocasión» (4 items), que es la variante T4 del Carrusel de Banners (HU B2C-79), no la T7. La variante T7 sigue sin publicarse en este ambiente; el caso queda Bloqueado hasta que exista. El bug B2C-781/782 se descartó porque la corrida anterior evaluó el componente equivocado.

**Observación**

Recomprobado en vivo el 2026-10-23: el Home trae un único slider de banners con título, el bloque «Cada día, una ocasión» (4 items), que es la variante T4 del Carrusel de Banners (HU B2C-79), no la T7. La variante T7 sigue sin publicarse en este ambiente; el caso queda Bloqueado hasta que exista. El bug B2C-781/782 se descartó porque la corrida anterior evaluó el componente equivocado.

**Evidencia**

![sondeo 82 desktop](<B2C-82 Evidencias/sondeo-82-desktop.png>)

---

### TC-B2C82-M-001 - Presentacion en Mobile: 2 banners + parcial con titulo debajo de cada imagen

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-23 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-82.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home o Landing con el componente configurado

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)

**Pasos ejecutados**

1. Navegar a la pagina con el componente en Mobile.
2. Visualizar el pretitulo, el texto y el slider.

**Resultado esperado**

Se muestran el pretitulo y el texto; el slider muestra 2 items visibles + parcial, cada uno con su imagen y titulo debajo.

**Resultado obtenido**

Recomprobado en vivo el 2026-10-23: el Home trae un único slider de banners con título, el bloque «Cada día, una ocasión» (4 items), que es la variante T4 del Carrusel de Banners (HU B2C-79), no la T7. La variante T7 sigue sin publicarse en este ambiente; el caso queda Bloqueado hasta que exista. El bug B2C-781/782 se descartó porque la corrida anterior evaluó el componente equivocado.

**Observación**

Recomprobado en vivo el 2026-10-23: el Home trae un único slider de banners con título, el bloque «Cada día, una ocasión» (4 items), que es la variante T4 del Carrusel de Banners (HU B2C-79), no la T7. La variante T7 sigue sin publicarse en este ambiente; el caso queda Bloqueado hasta que exista. El bug B2C-781/782 se descartó porque la corrida anterior evaluó el componente equivocado.

**Evidencia**

![sondeo 82 mobile](<B2C-82 Evidencias/sondeo-82-mobile.png>)

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
  "suite": "B2C-82",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-82 Test Cases.xlsx",
  "title": "Re-ejecución de casos con bug (B2C-82)",
  "updated_at": "2026-10-23"
 },
 "history": {
  "2026-10-23": [
   "TC-B2C82-D-001",
   "TC-B2C82-M-001"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "Se muestran el pretitulo, el texto y el enlace Mostrar todo (alineado a la derecha); el slider muestra 5-6 items visibles, cada uno con su imagen y titulo debajo.",
   "form_factor": "desktop",
   "id": "TC-B2C82-D-001",
   "name": "Presentacion en Desktop: 5-6 banners con titulo debajo de cada imagen",
   "observation": "Recomprobado en vivo el 2026-10-23: el Home trae un único slider de banners con título, el bloque «Cada día, una ocasión» (4 items), que es la variante T4 del Carrusel de Banners (HU B2C-79), no la T7. La variante T7 sigue sin publicarse en este ambiente; el caso queda Bloqueado hasta que exista. El bug B2C-781/782 se descartó porque la corrida anterior evaluó el componente equivocado.",
   "observed": "Recomprobado en vivo el 2026-10-23: el Home trae un único slider de banners con título, el bloque «Cada día, una ocasión» (4 items), que es la variante T4 del Carrusel de Banners (HU B2C-79), no la T7. La variante T7 sigue sin publicarse en este ambiente; el caso queda Bloqueado hasta que exista. El bug B2C-781/782 se descartó porque la corrida anterior evaluó el componente equivocado.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home o Landing con el componente configurado",
   "screenshots": [
    {
     "caption": "sondeo 82 desktop",
     "file": "sondeo-82-desktop.png"
    }
   ],
   "spec": "tests/B2C-82.spec.ts",
   "status": "Bloqueado",
   "steps": "1. Navegar a la pagina con el componente en Desktop.\n2. Visualizar el pretitulo, el texto, el enlace Mostrar todo y el slider.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "Se muestran el pretitulo y el texto; el slider muestra 2 items visibles + parcial, cada uno con su imagen y titulo debajo.",
   "form_factor": "mobile",
   "id": "TC-B2C82-M-001",
   "name": "Presentacion en Mobile: 2 banners + parcial con titulo debajo de cada imagen",
   "observation": "Recomprobado en vivo el 2026-10-23: el Home trae un único slider de banners con título, el bloque «Cada día, una ocasión» (4 items), que es la variante T4 del Carrusel de Banners (HU B2C-79), no la T7. La variante T7 sigue sin publicarse en este ambiente; el caso queda Bloqueado hasta que exista. El bug B2C-781/782 se descartó porque la corrida anterior evaluó el componente equivocado.",
   "observed": "Recomprobado en vivo el 2026-10-23: el Home trae un único slider de banners con título, el bloque «Cada día, una ocasión» (4 items), que es la variante T4 del Carrusel de Banners (HU B2C-79), no la T7. La variante T7 sigue sin publicarse en este ambiente; el caso queda Bloqueado hasta que exista. El bug B2C-781/782 se descartó porque la corrida anterior evaluó el componente equivocado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home o Landing con el componente configurado",
   "screenshots": [
    {
     "caption": "sondeo 82 mobile",
     "file": "sondeo-82-mobile.png"
    }
   ],
   "spec": "tests/B2C-82.spec.ts",
   "status": "Bloqueado",
   "steps": "1. Navegar a la pagina con el componente en Mobile.\n2. Visualizar el pretitulo, el texto y el slider.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)",
   "viewport": "390x844"
  }
 ]
}
-->
