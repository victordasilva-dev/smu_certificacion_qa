# Re-ejecución de casos con bug (B2C-62)

| Campo | Valor |
|---|---|
| Suite | B2C-62 |
| Última actualización | 2026-10-23 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Ejecutados/SP1/B2C-62 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 4 |
| Rechazado | 2 |
| **Total** | **6** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-23 | 2 | TC-B2C62-D-026, TC-B2C62-M-026 |
| 2026-10-19 | 4 | TC-B2C62-D-006, TC-B2C62-D-015, TC-B2C62-M-006, TC-B2C62-M-015 |

## Detalle por caso de prueba

### TC-B2C62-D-006 - Mostrar etiqueta %, precio promo y 'Antes' tachado (Desktop)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-62.spec.ts:162 |

**Precondiciones**

User type: Guest o Registrado.

Viewport Desktop 1280x900.

Producto con promoción de catálogo activa de tipo % de descuento (ej. 20% off).

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; SKU 000000000000688028-UN

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Desktop 1280x900.
2. Localizar el shelf de un producto con promo % de descuento activa.
3. Verificar que se muestra la etiqueta con el % de descuento (ej. "-20%").
4. Verificar que el precio promocional se muestra destacado como precio principal.
5. Verificar que el precio anterior se muestra tachado con la etiqueta "Antes".
6. Verificar que el PPUM se calcula sobre el precio promocional (no sobre el regular).

**Resultado esperado**

El shelf muestra: etiqueta % dcto, precio promo destacado, precio "Antes" tachado y PPUM calculado sobre el precio promocional. Todos los elementos son visibles simultáneamente.

**Resultado obtenido**

Causa: el SKU declarado 000000000000688028-UN (Canasto plush Easter Dkora, juguete) no tiene PPUM en ningún precio del shelf, así que el paso 6 (PPUM sobre el precio promocional) no se puede verificar. Los pasos 3 a 5 sí se cumplen: etiqueta 70%, precio promo $2.217 destacado, 'Antes: $7.390' tachado (más precio de socio $1.921). Acción: declarar en la planilla un SKU con promo de % de descuento que sea medible por kg/lt/un.

**Observación**

Causa: el SKU declarado 000000000000688028-UN (Canasto plush Easter Dkora, juguete) no tiene PPUM en ningún precio del shelf, así que el paso 6 (PPUM sobre el precio promocional) no se puede verificar. Los pasos 3 a 5 sí se cumplen: etiqueta 70%, precio promo $2.217 destacado, 'Antes: $7.390' tachado (más precio de socio $1.921). Acción: declarar en la planilla un SKU con promo de % de descuento que sea medible por kg/lt/un.

**Evidencia**

![Paso 2 — shelf con promo de de descuento](<B2C-62 Evidencias/TC-B2C62-D-006-p02-shelf-con-promo-de-de-descuento.png>)

---

### TC-B2C62-D-015 - Renderizar promo MdP % dcto como precio fijo (Desktop)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-62.spec.ts:251 |

**Precondiciones**

User type: Guest o Registrado.

Viewport Desktop 1280x900.

Producto con promo de medio de pago (MdP: Unipay o Banco Estado) de tipo % de descuento activa.

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; PLP carnes_vacuno; SKU 000000000000642688-UN

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Desktop 1280x900.
2. Localizar el shelf de un producto con promo MdP % dcto activa (Unipay o Banco Estado).
3. Verificar que el precio MdP se muestra como precio fijo en CLP (no como pill % de descuento).
4. Verificar que el precio mostrado es el precio efectivo post-descuento.
5. Verificar que el label identificador del MdP (Unipay / Banco Estado) es visible junto al precio.

**Resultado esperado**

La promo de MdP se renderiza como precio fijo en CLP (precio efectivo post-descuento). No se muestra como pill con el %. El label del MdP (Unipay / Banco Estado) es visible.

**Resultado obtenido**

Causa: el SKU declarado 000000000000642688-UN (Galleta Oreo clásica vainilla 108 g) no se muestra en el ambiente: su PDP carga solo el breadcrumb y el bloque de marketing, sin ficha ni precio, y no aparece en su categoría panaderia-y-pasteleria; tampoco está en la PLP declarada carnes_vacuno. No hay shelf con promo de medio de pago que verificar. Acción: cargar/activar el SKU con promo Unipay o Banco Estado en el ambiente, o declarar otro.

**Observación**

Causa: el SKU declarado 000000000000642688-UN (Galleta Oreo clásica vainilla 108 g) no se muestra en el ambiente: su PDP carga solo el breadcrumb y el bloque de marketing, sin ficha ni precio, y no aparece en su categoría panaderia-y-pasteleria; tampoco está en la PLP declarada carnes_vacuno. No hay shelf con promo de medio de pago que verificar. Acción: cargar/activar el SKU con promo Unipay o Banco Estado en el ambiente, o declarar otro.

**Evidencia**

![Paso 2 — pdp del sku sin producto](<B2C-62 Evidencias/TC-B2C62-D-015-p02-pdp-del-sku-sin-producto.png>)

---

### TC-B2C62-M-006 - Mostrar etiqueta %, precio promo y 'Antes' tachado (Mobile)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-62.spec.ts:162 |

**Precondiciones**

User type: Guest o Registrado.

Viewport Mobile 390x844.

Producto con promoción de catálogo de tipo % de descuento activa.

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; SKU 000000000000688028-UN

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Mobile 390x844.
2. Localizar el shelf de un producto con promo % de descuento.
3. Verificar la etiqueta con % dcto visible.
4. Verificar precio promo destacado como precio principal.
5. Verificar precio "Antes" tachado.
6. Verificar PPUM calculado sobre precio promo (no regular).

**Resultado esperado**

El shelf en Mobile muestra: etiqueta % dcto, precio promo destacado, "Antes" tachado y PPUM sobre precio promo.

**Resultado obtenido**

Causa: el SKU declarado 000000000000688028-UN (Canasto plush Easter Dkora, juguete) no tiene PPUM en ningún precio del shelf, así que el paso 6 (PPUM sobre el precio promocional) no se puede verificar. Los pasos 3 a 5 sí se cumplen: etiqueta 70%, precio promo $2.217 destacado, 'Antes: $7.390' tachado (más precio de socio $1.921). Acción: declarar en la planilla un SKU con promo de % de descuento que sea medible por kg/lt/un.

**Observación**

Causa: el SKU declarado 000000000000688028-UN (Canasto plush Easter Dkora, juguete) no tiene PPUM en ningún precio del shelf, así que el paso 6 (PPUM sobre el precio promocional) no se puede verificar. Los pasos 3 a 5 sí se cumplen: etiqueta 70%, precio promo $2.217 destacado, 'Antes: $7.390' tachado (más precio de socio $1.921). Acción: declarar en la planilla un SKU con promo de % de descuento que sea medible por kg/lt/un.

**Evidencia**

![Paso 2 — shelf con promo de de descuento](<B2C-62 Evidencias/TC-B2C62-M-006-p02-shelf-con-promo-de-de-descuento.png>)

---

### TC-B2C62-M-015 - Renderizar promo MdP % dcto como precio fijo (Mobile)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-62.spec.ts:251 |

**Precondiciones**

User type: Guest o Registrado.

Viewport Mobile 390x844.

Producto con promo MdP % dcto activa (Unipay o Banco Estado).

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; PLP carnes_vacuno; SKU 000000000000642688-UN

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Mobile 390x844.
2. Localizar el shelf con promo MdP % dcto activa.
3. Verificar que el precio MdP se muestra como precio fijo en CLP (no pill %).
4. Verificar que el precio es el efectivo post-descuento.
5. Verificar que el label del MdP es visible.

**Resultado esperado**

La promo de MdP se renderiza como precio fijo en Mobile. El precio es el efectivo post-descuento. Label del MdP visible.

**Resultado obtenido**

Causa: el SKU declarado 000000000000642688-UN (Galleta Oreo clásica vainilla 108 g) no se muestra en el ambiente: su PDP carga solo el breadcrumb y el bloque de marketing, sin ficha ni precio, y no aparece en su categoría panaderia-y-pasteleria; tampoco está en la PLP declarada carnes_vacuno. No hay shelf con promo de medio de pago que verificar. Acción: cargar/activar el SKU con promo Unipay o Banco Estado en el ambiente, o declarar otro.

**Observación**

Causa: el SKU declarado 000000000000642688-UN (Galleta Oreo clásica vainilla 108 g) no se muestra en el ambiente: su PDP carga solo el breadcrumb y el bloque de marketing, sin ficha ni precio, y no aparece en su categoría panaderia-y-pasteleria; tampoco está en la PLP declarada carnes_vacuno. No hay shelf con promo de medio de pago que verificar. Acción: cargar/activar el SKU con promo Unipay o Banco Estado en el ambiente, o declarar otro.

**Evidencia**

![Paso 2 — pdp del sku sin producto](<B2C-62 Evidencias/TC-B2C62-M-015-p02-pdp-del-sku-sin-producto.png>)

---

### TC-B2C62-D-026 - Precio compuesto NxM/NxPrecio como uno de los precios simultaneos (Desktop)

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-62.spec.ts |

**Precondiciones**

User type: Guest o Registrado.

Viewport Desktop 1280x900.

Producto con promo NxM o NxPrecio activa.

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {PLP_URL} = URL de categoría

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Desktop 1280x900.
2. Localizar el shelf de un producto con promo NxM o NxPrecio activa.
3. Verificar que se muestra el precio compuesto en formato 'NxM $X.XXX' o equivalente NxPrecio.
4. Verificar que se muestra el precio lista como referencia (tachado o gris) junto al precio compuesto.
5. Verificar que el total de precios visibles no supera 3.

**Resultado esperado**

El shelf muestra el precio compuesto NxM/NxPrecio como precio principal, junto al precio lista de referencia, respetando el maximo de 3 precios simultaneos definido en CA11.

**Resultado obtenido**

Obtenido: el precio destacado del bloque es «$7.690 c/u» en vez del compuesto «Lleva 2 por $12.490». Bug: B2C-771. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Observación**

Obtenido: el precio destacado del bloque es «$7.690 c/u» en vez del compuesto «Lleva 2 por $12.490». Bug: B2C-771. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Evidencia**

![Paso 2 — shelf con precio compuesto](<B2C-62 Evidencias/TC-B2C62-D-026-p02-shelf-con-precio-compuesto.png>)

![Paso 5 — jerarquia del bloque con precio compuesto](<B2C-62 Evidencias/TC-B2C62-D-026-p05-jerarquia-del-bloque-con-precio-compuesto.png>)

---

### TC-B2C62-M-026 - Precio compuesto NxM/NxPrecio como uno de los precios simultaneos (Mobile)

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-62.spec.ts |

**Precondiciones**

User type: Guest o Registrado.

Viewport Mobile 390x844.

Producto con promo NxM o NxPrecio activa.

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {PLP_URL} = URL de categoría

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Mobile 390x844.
2. Localizar el shelf de un producto con promo NxM o NxPrecio activa.
3. Verificar el precio compuesto y el precio lista de referencia.
4. Verificar que el total de precios visibles no supera 3.

**Resultado esperado**

El shelf en Mobile muestra el precio compuesto NxM/NxPrecio junto al precio lista de referencia, respetando el maximo de 3 precios simultaneos.

**Resultado obtenido**

Obtenido: el precio destacado del bloque es «$7.690 c/u» en vez del compuesto «Lleva 2 por $12.490». Bug: B2C-772. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Observación**

Obtenido: el precio destacado del bloque es «$7.690 c/u» en vez del compuesto «Lleva 2 por $12.490». Bug: B2C-772. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Evidencia**

![Paso 2 — shelf con precio compuesto](<B2C-62 Evidencias/TC-B2C62-M-026-p02-shelf-con-precio-compuesto.png>)

![Paso 5 — jerarquia del bloque con precio compuesto](<B2C-62 Evidencias/TC-B2C62-M-026-p05-jerarquia-del-bloque-con-precio-compuesto.png>)

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
  "suite": "B2C-62",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-62 Test Cases.xlsx",
  "title": "Re-ejecución de casos con bug (B2C-62)",
  "updated_at": "2026-10-23"
 },
 "history": {
  "2026-10-19": [
   "TC-B2C62-D-006",
   "TC-B2C62-D-015",
   "TC-B2C62-M-006",
   "TC-B2C62-M-015"
  ],
  "2026-10-23": [
   "TC-B2C62-D-026",
   "TC-B2C62-M-026"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "El shelf muestra: etiqueta % dcto, precio promo destacado, precio \"Antes\" tachado y PPUM calculado sobre el precio promocional. Todos los elementos son visibles simultáneamente.",
   "form_factor": "desktop",
   "id": "TC-B2C62-D-006",
   "name": "Mostrar etiqueta %, precio promo y 'Antes' tachado (Desktop)",
   "observation": "Causa: el SKU declarado 000000000000688028-UN (Canasto plush Easter Dkora, juguete) no tiene PPUM en ningún precio del shelf, así que el paso 6 (PPUM sobre el precio promocional) no se puede verificar. Los pasos 3 a 5 sí se cumplen: etiqueta 70%, precio promo $2.217 destacado, 'Antes: $7.390' tachado (más precio de socio $1.921). Acción: declarar en la planilla un SKU con promo de % de descuento que sea medible por kg/lt/un.",
   "observed": "Causa: el SKU declarado 000000000000688028-UN (Canasto plush Easter Dkora, juguete) no tiene PPUM en ningún precio del shelf, así que el paso 6 (PPUM sobre el precio promocional) no se puede verificar. Los pasos 3 a 5 sí se cumplen: etiqueta 70%, precio promo $2.217 destacado, 'Antes: $7.390' tachado (más precio de socio $1.921). Acción: declarar en la planilla un SKU con promo de % de descuento que sea medible por kg/lt/un.",
   "preconditions": "User type: Guest o Registrado.\nViewport Desktop 1280x900.\nProducto con promoción de catálogo activa de tipo % de descuento (ej. 20% off).",
   "screenshots": [
    {
     "caption": "Paso 2 — shelf con promo de de descuento",
     "file": "TC-B2C62-D-006-p02-shelf-con-promo-de-de-descuento.png"
    }
   ],
   "spec": "tests/B2C-62.spec.ts:162",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Desktop 1280x900.\n2. Localizar el shelf de un producto con promo % de descuento activa.\n3. Verificar que se muestra la etiqueta con el % de descuento (ej. \"-20%\").\n4. Verificar que el precio promocional se muestra destacado como precio principal.\n5. Verificar que el precio anterior se muestra tachado con la etiqueta \"Antes\".\n6. Verificar que el PPUM se calcula sobre el precio promocional (no sobre el regular).",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; SKU 000000000000688028-UN",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La promo de MdP se renderiza como precio fijo en CLP (precio efectivo post-descuento). No se muestra como pill con el %. El label del MdP (Unipay / Banco Estado) es visible.",
   "form_factor": "desktop",
   "id": "TC-B2C62-D-015",
   "name": "Renderizar promo MdP % dcto como precio fijo (Desktop)",
   "observation": "Causa: el SKU declarado 000000000000642688-UN (Galleta Oreo clásica vainilla 108 g) no se muestra en el ambiente: su PDP carga solo el breadcrumb y el bloque de marketing, sin ficha ni precio, y no aparece en su categoría panaderia-y-pasteleria; tampoco está en la PLP declarada carnes_vacuno. No hay shelf con promo de medio de pago que verificar. Acción: cargar/activar el SKU con promo Unipay o Banco Estado en el ambiente, o declarar otro.",
   "observed": "Causa: el SKU declarado 000000000000642688-UN (Galleta Oreo clásica vainilla 108 g) no se muestra en el ambiente: su PDP carga solo el breadcrumb y el bloque de marketing, sin ficha ni precio, y no aparece en su categoría panaderia-y-pasteleria; tampoco está en la PLP declarada carnes_vacuno. No hay shelf con promo de medio de pago que verificar. Acción: cargar/activar el SKU con promo Unipay o Banco Estado en el ambiente, o declarar otro.",
   "preconditions": "User type: Guest o Registrado.\nViewport Desktop 1280x900.\nProducto con promo de medio de pago (MdP: Unipay o Banco Estado) de tipo % de descuento activa.",
   "screenshots": [
    {
     "caption": "Paso 2 — pdp del sku sin producto",
     "file": "TC-B2C62-D-015-p02-pdp-del-sku-sin-producto.png"
    }
   ],
   "spec": "tests/B2C-62.spec.ts:251",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Desktop 1280x900.\n2. Localizar el shelf de un producto con promo MdP % dcto activa (Unipay o Banco Estado).\n3. Verificar que el precio MdP se muestra como precio fijo en CLP (no como pill % de descuento).\n4. Verificar que el precio mostrado es el precio efectivo post-descuento.\n5. Verificar que el label identificador del MdP (Unipay / Banco Estado) es visible junto al precio.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; PLP carnes_vacuno; SKU 000000000000642688-UN",
   "viewport": "1280x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "El shelf en Mobile muestra: etiqueta % dcto, precio promo destacado, \"Antes\" tachado y PPUM sobre precio promo.",
   "form_factor": "mobile",
   "id": "TC-B2C62-M-006",
   "name": "Mostrar etiqueta %, precio promo y 'Antes' tachado (Mobile)",
   "observation": "Causa: el SKU declarado 000000000000688028-UN (Canasto plush Easter Dkora, juguete) no tiene PPUM en ningún precio del shelf, así que el paso 6 (PPUM sobre el precio promocional) no se puede verificar. Los pasos 3 a 5 sí se cumplen: etiqueta 70%, precio promo $2.217 destacado, 'Antes: $7.390' tachado (más precio de socio $1.921). Acción: declarar en la planilla un SKU con promo de % de descuento que sea medible por kg/lt/un.",
   "observed": "Causa: el SKU declarado 000000000000688028-UN (Canasto plush Easter Dkora, juguete) no tiene PPUM en ningún precio del shelf, así que el paso 6 (PPUM sobre el precio promocional) no se puede verificar. Los pasos 3 a 5 sí se cumplen: etiqueta 70%, precio promo $2.217 destacado, 'Antes: $7.390' tachado (más precio de socio $1.921). Acción: declarar en la planilla un SKU con promo de % de descuento que sea medible por kg/lt/un.",
   "preconditions": "User type: Guest o Registrado.\nViewport Mobile 390x844.\nProducto con promoción de catálogo de tipo % de descuento activa.",
   "screenshots": [
    {
     "caption": "Paso 2 — shelf con promo de de descuento",
     "file": "TC-B2C62-M-006-p02-shelf-con-promo-de-de-descuento.png"
    }
   ],
   "spec": "tests/B2C-62.spec.ts:162",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Mobile 390x844.\n2. Localizar el shelf de un producto con promo % de descuento.\n3. Verificar la etiqueta con % dcto visible.\n4. Verificar precio promo destacado como precio principal.\n5. Verificar precio \"Antes\" tachado.\n6. Verificar PPUM calculado sobre precio promo (no regular).",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; SKU 000000000000688028-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "La promo de MdP se renderiza como precio fijo en Mobile. El precio es el efectivo post-descuento. Label del MdP visible.",
   "form_factor": "mobile",
   "id": "TC-B2C62-M-015",
   "name": "Renderizar promo MdP % dcto como precio fijo (Mobile)",
   "observation": "Causa: el SKU declarado 000000000000642688-UN (Galleta Oreo clásica vainilla 108 g) no se muestra en el ambiente: su PDP carga solo el breadcrumb y el bloque de marketing, sin ficha ni precio, y no aparece en su categoría panaderia-y-pasteleria; tampoco está en la PLP declarada carnes_vacuno. No hay shelf con promo de medio de pago que verificar. Acción: cargar/activar el SKU con promo Unipay o Banco Estado en el ambiente, o declarar otro.",
   "observed": "Causa: el SKU declarado 000000000000642688-UN (Galleta Oreo clásica vainilla 108 g) no se muestra en el ambiente: su PDP carga solo el breadcrumb y el bloque de marketing, sin ficha ni precio, y no aparece en su categoría panaderia-y-pasteleria; tampoco está en la PLP declarada carnes_vacuno. No hay shelf con promo de medio de pago que verificar. Acción: cargar/activar el SKU con promo Unipay o Banco Estado en el ambiente, o declarar otro.",
   "preconditions": "User type: Guest o Registrado.\nViewport Mobile 390x844.\nProducto con promo MdP % dcto activa (Unipay o Banco Estado).",
   "screenshots": [
    {
     "caption": "Paso 2 — pdp del sku sin producto",
     "file": "TC-B2C62-M-015-p02-pdp-del-sku-sin-producto.png"
    }
   ],
   "spec": "tests/B2C-62.spec.ts:251",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Mobile 390x844.\n2. Localizar el shelf con promo MdP % dcto activa.\n3. Verificar que el precio MdP se muestra como precio fijo en CLP (no pill %).\n4. Verificar que el precio es el efectivo post-descuento.\n5. Verificar que el label del MdP es visible.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; PLP carnes_vacuno; SKU 000000000000642688-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El shelf muestra el precio compuesto NxM/NxPrecio como precio principal, junto al precio lista de referencia, respetando el maximo de 3 precios simultaneos definido en CA11.",
   "form_factor": "desktop",
   "id": "TC-B2C62-D-026",
   "name": "Precio compuesto NxM/NxPrecio como uno de los precios simultaneos (Desktop)",
   "observation": "Obtenido: el precio destacado del bloque es «$7.690 c/u» en vez del compuesto «Lleva 2 por $12.490». Bug: B2C-771. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "observed": "Obtenido: el precio destacado del bloque es «$7.690 c/u» en vez del compuesto «Lleva 2 por $12.490». Bug: B2C-771. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "preconditions": "User type: Guest o Registrado.\nViewport Desktop 1280x900.\nProducto con promo NxM o NxPrecio activa.",
   "screenshots": [
    {
     "caption": "Paso 2 — shelf con precio compuesto",
     "file": "TC-B2C62-D-026-p02-shelf-con-precio-compuesto.png"
    },
    {
     "caption": "Paso 5 — jerarquia del bloque con precio compuesto",
     "file": "TC-B2C62-D-026-p05-jerarquia-del-bloque-con-precio-compuesto.png"
    }
   ],
   "spec": "tests/B2C-62.spec.ts",
   "status": "Rechazado",
   "steps": "1. Navegar a una PLP/SRP con viewport Desktop 1280x900.\n2. Localizar el shelf de un producto con promo NxM o NxPrecio activa.\n3. Verificar que se muestra el precio compuesto en formato 'NxM $X.XXX' o equivalente NxPrecio.\n4. Verificar que se muestra el precio lista como referencia (tachado o gris) junto al precio compuesto.\n5. Verificar que el total de precios visibles no supera 3.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {PLP_URL} = URL de categoría",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El shelf en Mobile muestra el precio compuesto NxM/NxPrecio junto al precio lista de referencia, respetando el maximo de 3 precios simultaneos.",
   "form_factor": "mobile",
   "id": "TC-B2C62-M-026",
   "name": "Precio compuesto NxM/NxPrecio como uno de los precios simultaneos (Mobile)",
   "observation": "Obtenido: el precio destacado del bloque es «$7.690 c/u» en vez del compuesto «Lleva 2 por $12.490». Bug: B2C-772. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "observed": "Obtenido: el precio destacado del bloque es «$7.690 c/u» en vez del compuesto «Lleva 2 por $12.490». Bug: B2C-772. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "preconditions": "User type: Guest o Registrado.\nViewport Mobile 390x844.\nProducto con promo NxM o NxPrecio activa.",
   "screenshots": [
    {
     "caption": "Paso 2 — shelf con precio compuesto",
     "file": "TC-B2C62-M-026-p02-shelf-con-precio-compuesto.png"
    },
    {
     "caption": "Paso 5 — jerarquia del bloque con precio compuesto",
     "file": "TC-B2C62-M-026-p05-jerarquia-del-bloque-con-precio-compuesto.png"
    }
   ],
   "spec": "tests/B2C-62.spec.ts",
   "status": "Rechazado",
   "steps": "1. Navegar a una PLP/SRP con viewport Mobile 390x844.\n2. Localizar el shelf de un producto con promo NxM o NxPrecio activa.\n3. Verificar el precio compuesto y el precio lista de referencia.\n4. Verificar que el total de precios visibles no supera 3.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {PLP_URL} = URL de categoría",
   "viewport": "390x844"
  }
 ]
}
-->
