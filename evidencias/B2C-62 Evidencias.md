# B2C-62 - Bloque de precios del shelf - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-62 |
| Última actualización | 2026-11-16 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-62 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 12 |
| Aprobado | 4 |
| Rechazado | 2 |
| **Total** | **18** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-16 | 16 | TC-B2C62-D-006, TC-B2C62-D-012, TC-B2C62-D-013, TC-B2C62-D-015, TC-B2C62-D-016, TC-B2C62-D-017, TC-B2C62-D-021, TC-B2C62-D-023, TC-B2C62-M-006, TC-B2C62-M-012, TC-B2C62-M-013, TC-B2C62-M-015, TC-B2C62-M-016, TC-B2C62-M-017, TC-B2C62-M-021, TC-B2C62-M-023 |
| 2026-10-23 | 2 | TC-B2C62-D-026, TC-B2C62-M-026 |
| 2026-10-19 | 4 | TC-B2C62-D-006, TC-B2C62-D-015, TC-B2C62-M-006, TC-B2C62-M-015 |

## Detalle por caso de prueba

### TC-B2C62-D-006 - Mostrar etiqueta %, precio promo y 'Antes' tachado (Desktop)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Guest o Registrado.

Viewport Desktop 1280x900.

Producto con promoción de catálogo activa de tipo % de descuento (ej. 20% off).

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PROM_PCT_DESCUENTO} = TBD

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

Shelf de {SKU_PROM_PCT_DESCUENTO} 000000000000062644-UN (Kiwi bolsa 1 Kg) en su categoría (Desktop 1280x900): etiqueta "10%", precio promo $2.601 destacado y "Antes: $2.890" tachado. El shelf no muestra PPUM.

**Observación**

Causa: {SKU_PROM_PCT_DESCUENTO} cambió a 000000000000062644-UN (Kiwi bolsa 1 Kg). Pasos 3 a 5 se cumplen (10%, $2.601 destacado, "Antes: $2.890" tachado), pero el formato es exactamente 1 kg y en DEV los productos de 1 unidad estándar no muestran PPUM (igual que "Salchicha San Jorge 20 un 1 Kg", mientras la de 250 g sí lo muestra): el paso 6 (PPUM sobre el precio promocional) no se puede verificar con este SKU. Acción: declarar un SKU con promo % cuyo formato no sea 1 kg/1 L/1 un (p. ej. 500 g).

**Evidencia**

![Paso 2 — shelf con promo de de descuento](<B2C-62 Evidencias/TC-B2C62-D-006-p02-shelf-con-promo-de-de-descuento.png>)

---

### TC-B2C62-D-015 - Renderizar promo MdP % dcto como precio fijo (Desktop)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-62.spec.ts:258 |

**Precondiciones**

User type: Guest o Registrado.

Viewport Desktop 1280x900.

Producto con promo de medio de pago (MdP: Unipay o Banco Estado) de tipo % de descuento activa.

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {PLP_URL} = URL de categoría
- {SKU_PRECIO_BE} = TBD

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Desktop 1280x900.
2. Localizar el shelf de un producto con promo MdP % dcto activa (Unipay o Banco Estado).
3. Verificar que el precio MdP se muestra como precio fijo en CLP (no como pill % de descuento).
4. Verificar que el precio mostrado es el precio efectivo post-descuento.
5. Verificar que el label identificador del MdP (Unipay / Banco Estado) es visible junto al precio.

**Resultado esperado**

La promo de MdP se renderiza como precio fijo en CLP (precio efectivo post-descuento). No se muestra como pill con el %. El label del MdP (Unipay / Banco Estado) es visible.

**Resultado obtenido**

Shelf de {SKU_PRECIO_BE} 000000000000674831-UN (Pan de molde Zeroglut multisemillas 450 g): precio "Banco Estado $4.990" como importe fijo en CLP con el label Banco Estado, sin pill de %, junto al precio regular $5.290.

**Observación**

El SKU no tiene breadcrumb en la PDP ni está en {PLP_URL} (carnes_vacuno): el shelf se ubicó en la SRP buscando su nombre (los pasos admiten "PLP/SRP"). Buscar por el código (674831) no devuelve resultados (SRP-014).

**Evidencia**

![Paso 2 — shelf con promo de medio de pago](<B2C-62 Evidencias/TC-B2C62-D-015-p02-shelf-con-promo-de-medio-de-pago.png>)

![Estado final](<B2C-62 Evidencias/TC-B2C62-D-015.png>)

---

### TC-B2C62-M-006 - Mostrar etiqueta %, precio promo y 'Antes' tachado (Mobile)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest o Registrado.

Viewport Mobile 390x844.

Producto con promoción de catálogo de tipo % de descuento activa.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PROM_PCT_DESCUENTO} = TBD

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

Shelf de {SKU_PROM_PCT_DESCUENTO} 000000000000062644-UN (Kiwi bolsa 1 Kg) en su categoría (Mobile 390x844): etiqueta "10%", precio promo $2.601 destacado y "Antes: $2.890" tachado. El shelf no muestra PPUM.

**Observación**

Causa: {SKU_PROM_PCT_DESCUENTO} cambió a 000000000000062644-UN (Kiwi bolsa 1 Kg). Pasos 3 a 5 se cumplen (10%, $2.601 destacado, "Antes: $2.890" tachado), pero el formato es exactamente 1 kg y en DEV los productos de 1 unidad estándar no muestran PPUM (igual que "Salchicha San Jorge 20 un 1 Kg", mientras la de 250 g sí lo muestra): el paso 6 (PPUM sobre el precio promocional) no se puede verificar con este SKU. Acción: declarar un SKU con promo % cuyo formato no sea 1 kg/1 L/1 un (p. ej. 500 g).

**Evidencia**

![Paso 2 — shelf con promo de de descuento](<B2C-62 Evidencias/TC-B2C62-M-006-p02-shelf-con-promo-de-de-descuento.png>)

---

### TC-B2C62-M-015 - Renderizar promo MdP % dcto como precio fijo (Mobile)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-62.spec.ts:258 |

**Precondiciones**

User type: Guest o Registrado.

Viewport Mobile 390x844.

Producto con promo MdP % dcto activa (Unipay o Banco Estado).

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {PLP_URL} = URL de categoría
- {SKU_PRECIO_BE} = TBD

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Mobile 390x844.
2. Localizar el shelf con promo MdP % dcto activa.
3. Verificar que el precio MdP se muestra como precio fijo en CLP (no pill %).
4. Verificar que el precio es el efectivo post-descuento.
5. Verificar que el label del MdP es visible.

**Resultado esperado**

La promo de MdP se renderiza como precio fijo en Mobile. El precio es el efectivo post-descuento. Label del MdP visible.

**Resultado obtenido**

Shelf de {SKU_PRECIO_BE} 000000000000674831-UN (Pan de molde Zeroglut multisemillas 450 g): precio "Banco Estado $4.990" como importe fijo en CLP con el label Banco Estado, sin pill de %, junto al precio regular $5.290.

**Observación**

El SKU no tiene breadcrumb en la PDP ni está en {PLP_URL} (carnes_vacuno): el shelf se ubicó en la SRP buscando su nombre (los pasos admiten "PLP/SRP"). Buscar por el código (674831) no devuelve resultados (SRP-014).

**Evidencia**

![Paso 2 — shelf con promo de medio de pago](<B2C-62 Evidencias/TC-B2C62-M-015-p02-shelf-con-promo-de-medio-de-pago.png>)

![Estado final](<B2C-62 Evidencias/TC-B2C62-M-015.png>)

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

### TC-B2C62-D-012 - Mostrar etiqueta y condicion en promo X% en X unidad (Desktop)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Guest o Registrado.

Viewport Desktop 1280x900.

Producto con promo de tipo "X% en X unidad" activa (ej. "50% dcto en 2da unidad", "70% en 3ra unidad").

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_XPCT_XUNIDAD} = TBD
- {SKU_PROM_XPCT_XUNIDAD} = TBD

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Desktop 1280x900.
2. Localizar el shelf de un producto con promo X% en X unidad activa.
3. Verificar que se muestra la etiqueta con la mecánica y su condición (ej. "50% dcto en 2da unidad").
4. Verificar que la condición vigente es correcta y coherente con la promo configurada en BM.

**Resultado esperado**

El shelf muestra la etiqueta con la mecánica y condición de la promo X% en X unidad. La condición corresponde a la configurada en BM.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {PLP_URL_XPCT_XUNIDAD} no tiene fila en el Excel de data. Acción: cargar la PLP con un producto con promo "X% en X unidad" activa ({SKU_PROM_XPCT_XUNIDAD} ya tiene valor: 000000000000670490-UN).

---

### TC-B2C62-D-013 - Mostrar precio unitario regular y PPUM en X% en X unidad (Desktop)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Guest o Registrado.

Viewport Desktop 1280x900.

Producto con promo X% en X unidad activa.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_XPCT_XUNIDAD} = TBD
- {SKU_PROM_XPCT_XUNIDAD} = TBD

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Desktop 1280x900.
2. Localizar el shelf de un producto con promo X% en X unidad.
3. Verificar que se muestra el precio unitario destacado correspondiente al precio regular vigente.
4. Verificar que el PPUM asociado al precio unitario es visible y correcto.

**Resultado esperado**

El shelf muestra el precio unitario regular (no el precio total con descuento) y el PPUM calculado sobre ese precio unitario.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {PLP_URL_XPCT_XUNIDAD} no tiene fila en el Excel de data. Acción: cargar la PLP con un producto con promo "X% en X unidad" activa ({SKU_PROM_XPCT_XUNIDAD} ya tiene valor: 000000000000670490-UN).

---

### TC-B2C62-D-016 - Convivencia con profundizacion: membresia sobre precio rebajado por catalogo (Desktop)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Registrado con membresía activa (ej. Club Unimarc Diamante).

Viewport Desktop 1280x900.

Producto con promo de catálogo activa (ej. 20% off) y promo de membresía activa simultáneamente. El motor aplica profundización.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_MEMBRESIA_USER} = 10.101.010-4
- {COMPRADOR_MEMBRESIA_PASSWORD} = Avatar123.
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {SKU_PROM_PCT_DESCUENTO} = TBD

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Desktop 1280x900 con usuario logueado con membresía activa.
2. Localizar el shelf de un producto con promo catálogo + membresía activas con profundización.
3. Calcular el precio esperado con profundización: precio_base × (1 - %_catálogo) × (1 - %_membresía).
4. Verificar que el precio de membresía mostrado coincide con el cálculo con profundización.
5. Verificar que el precio NO coincide con el cálculo sin profundización (precio_base × (1 - %_catálogo - %_membresía)).

**Resultado esperado**

El precio de membresía mostrado corresponde al precio ya rebajado por la promo de catálogo, aplicando profundización correcta. El valor difiere del cálculo sin profundización.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el cálculo de profundización exige el % de catálogo y el % de membresía configurados en BM, que la fila no declara, y {SKU_PRECIO_MIEMBRO} 000000000000616838-UN (Pan pita Castaño 300 g) no tiene promo de catálogo (precio de socio $1.644 y regular $1.890, sin "Antes"). Acción: declarar un SKU con promo de catálogo + membresía con profundización y los % de cada una.

---

### TC-B2C62-D-017 - Prioridad membresia sobre MdP y mejor descuento entre 2 MdP (Desktop)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-62.spec.ts:340 |

**Precondiciones**

User type: Registrado con membresía Y promo MdP activas simultáneamente.

Viewport Desktop 1280x900.

Producto con promo de membresía y promo de MdP activas, y dos promos de MdP simultáneas.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_MEMBRESIA_USER} = 10.101.010-4
- {COMPRADOR_MEMBRESIA_PASSWORD} = Avatar123.
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Desktop 1280x900 con usuario logueado con membresía activa y promo MdP disponible.
2. Localizar el shelf de un producto con membresía y MdP activos simultáneamente.
3. Verificar que el precio de membresía se muestra con mayor prioridad visual que el precio MdP (RF-08).
4. Si existen 2 promos MdP simultáneas (ej. Unipay y Banco Estado), verificar que se muestra el de mayor descuento.

**Resultado esperado**

Membresía tiene prioridad visual sobre MdP según RF-08. Entre 2 promos MdP simultáneas, se muestra la de mayor descuento.

**Resultado obtenido**

Con {COMPRADOR_MEMBRESIA_USER} (login por correo + código), el shelf de 000000000000616838-UN muestra el precio de membresía 💎 $1.644 y el regular $1.890; el precio Unipay ($1.739, c_unipayPrice) no se muestra: la membresía tiene prioridad sobre el MdP.

**Observación**

Causa: pasos 1 a 3 se cumplen, pero la precondición pide además dos promos de MdP simultáneas y {SKU_PRECIO_MIEMBRO} solo tiene Unipay (sin precio Banco Estado), así que el paso 4 (mayor descuento entre 2 MdP) no se puede verificar. Acción: declarar un SKU con membresía + Unipay + Banco Estado.

**Evidencia**

![Paso 2 — shelf con membresia y mdp](<B2C-62 Evidencias/TC-B2C62-D-017-p02-shelf-con-membresia-y-mdp.png>)

![Estado final](<B2C-62 Evidencias/TC-B2C62-D-017.png>)

---

### TC-B2C62-D-021 - Dos precios simultaneos: oferta + lista tachado (Desktop)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Guest o Registrado.

Viewport Desktop 1280x900.

Producto con promo de catálogo activa (precio oferta < precio lista).

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_PRECIO_OFERTA} = TBD
- {SKU_PRECIO_OFERTA} = TBD

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Desktop 1280x900.
2. Localizar el shelf de un producto con promo de catálogo activa.
3. Verificar que se muestran exactamente 2 precios: precio oferta en acento (precio principal) con etiqueta de % de descuento y precio lista tachado.
4. Verificar que NO hay un tercer precio visible (ausencia de membresía/MdP en este escenario).

**Resultado esperado**

El shelf muestra exactamente 2 precios: precio oferta (acento/principal) con etiqueta de % de descuento y precio lista (tachado/referencia). No se muestra un tercer precio.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRECIO_OFERTA} 000000000000178089-UN (Mermelada Watt's) sigue sin estar en {PLP_URL_PRECIO_OFERTA} (/category/carnes_vacuno), re-verificado el 2026-11-16, y además muestra precio de socio a un invitado (3 precios). Acción: declarar una PLP y un SKU con oferta de catálogo y sin precio de membresía ni MdP.

---

### TC-B2C62-D-023 - PriceDisplayPriority MEMBERSHIP_FIRST: membresia como 3er precio (Desktop)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-62.spec.ts:356 |

**Precondiciones**

User type: Registrado con membresía activa.

Viewport Desktop 1280x900.

Producto con precio membresía Y precio Unipay activos simultáneamente. PriceDisplayPriority = MEMBERSHIP_FIRST (default) en Site Preferences de BM.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_MEMBRESIA_USER} = 10.101.010-4
- {COMPRADOR_MEMBRESIA_PASSWORD} = Avatar123.
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN

**Pasos ejecutados**

1. Verificar que PriceDisplayPriority está configurado en MEMBERSHIP_FIRST en BM (Site Preferences).
2. Navegar a una PLP/SRP con viewport Desktop 1280x900 con usuario con membresía activa.
3. Localizar el shelf de un producto con precio membresía y Unipay activos simultáneamente.
4. Verificar que el tercer precio muestra el badge de membresía (no Unipay).
5. Verificar que Unipay no aparece como tercer precio en este escenario.

**Resultado esperado**

Con PriceDisplayPriority=MEMBERSHIP_FIRST (default), el tercer precio muestra membresía sobre Unipay. El badge de membresía es el tercer precio visible cuando ambos coexisten.

**Resultado obtenido**

Con {COMPRADOR_MEMBRESIA_USER} (login por correo + código), el shelf de 000000000000616838-UN (precio membresía c_diamantePrice $1.644 y Unipay c_unipayPrice $1.739) muestra el precio de membresía 💎 $1.644 con su badge y el regular $1.890; Unipay no aparece como precio.

**Observación**

Paso 1: en BM › Site Preferences › Site Custom Preferences no hay ninguna preferencia PriceDisplayPriority entre los 18 grupos SMU (no se pudo leer su valor); el comportamiento observado es el del default MEMBERSHIP_FIRST que describe el caso.

**Evidencia**

![Paso 1 — bm site custom preferences](<B2C-62 Evidencias/TC-B2C62-D-023-p01-bm-site-custom-preferences.png>)

![Paso 2 — shelf con membresia y unipay](<B2C-62 Evidencias/TC-B2C62-D-023-p02-shelf-con-membresia-y-unipay.png>)

![Estado final](<B2C-62 Evidencias/TC-B2C62-D-023.png>)

---

### TC-B2C62-M-012 - Mostrar etiqueta y condicion en promo X% en X unidad (Mobile)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest o Registrado.

Viewport Mobile 390x844.

Producto con promo X% en X unidad activa.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_XPCT_XUNIDAD} = TBD
- {SKU_PROM_XPCT_XUNIDAD} = TBD

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Mobile 390x844.
2. Localizar el shelf de un producto con promo X% en X unidad.
3. Verificar que se muestra la etiqueta con mecánica y condición (ej. "50% dcto en 2da unidad").
4. Verificar que la condición es coherente con la promo en BM.

**Resultado esperado**

El shelf en Mobile muestra la etiqueta con mecánica y condición de la promo X% en X unidad.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {PLP_URL_XPCT_XUNIDAD} no tiene fila en el Excel de data. Acción: cargar la PLP con un producto con promo "X% en X unidad" activa ({SKU_PROM_XPCT_XUNIDAD} ya tiene valor: 000000000000670490-UN).

---

### TC-B2C62-M-013 - Mostrar precio unitario regular y PPUM en X% en X unidad (Mobile)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest o Registrado.

Viewport Mobile 390x844.

Producto con promo X% en X unidad activa.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_XPCT_XUNIDAD} = TBD
- {SKU_PROM_XPCT_XUNIDAD} = TBD

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Mobile 390x844.
2. Localizar el shelf de un producto con promo X% en X unidad.
3. Verificar que se muestra el precio unitario regular.
4. Verificar que el PPUM asociado al precio unitario es visible y correcto.

**Resultado esperado**

El shelf en Mobile muestra el precio unitario regular y el PPUM calculado sobre ese precio.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {PLP_URL_XPCT_XUNIDAD} no tiene fila en el Excel de data. Acción: cargar la PLP con un producto con promo "X% en X unidad" activa ({SKU_PROM_XPCT_XUNIDAD} ya tiene valor: 000000000000670490-UN).

---

### TC-B2C62-M-016 - Convivencia con profundizacion: membresia sobre precio rebajado por catalogo (Mobile)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Registrado con membresía activa.

Viewport Mobile 390x844.

Producto con promo catálogo + membresía con profundización activas.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_MEMBRESIA_USER} = 10.101.010-4
- {COMPRADOR_MEMBRESIA_PASSWORD} = Avatar123.
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {SKU_PROM_PCT_DESCUENTO} = TBD

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Mobile 390x844 con usuario con membresía activa.
2. Localizar el shelf con promo catálogo + membresía con profundización.
3. Calcular precio esperado: precio_base × (1 - %_catálogo) × (1 - %_membresía).
4. Verificar que el precio de membresía coincide con el cálculo con profundización.

**Resultado esperado**

El precio de membresía en Mobile aplica profundización correctamente (calculado sobre precio ya rebajado por catálogo).

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el cálculo de profundización exige el % de catálogo y el % de membresía configurados en BM, que la fila no declara, y {SKU_PRECIO_MIEMBRO} 000000000000616838-UN (Pan pita Castaño 300 g) no tiene promo de catálogo (precio de socio $1.644 y regular $1.890, sin "Antes"). Acción: declarar un SKU con promo de catálogo + membresía con profundización y los % de cada una.

---

### TC-B2C62-M-017 - Prioridad membresia sobre MdP y mejor descuento entre 2 MdP (Mobile)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-62.spec.ts:340 |

**Precondiciones**

User type: Registrado con membresía y promo MdP activas.

Viewport Mobile 390x844.

Producto con membresía y MdP activos simultáneamente.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_MEMBRESIA_USER} = 10.101.010-4
- {COMPRADOR_MEMBRESIA_PASSWORD} = Avatar123.
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Mobile 390x844 con usuario con membresía activa y promo MdP.
2. Localizar el shelf con membresía y MdP activos simultáneamente.
3. Verificar prioridad: membresía visible con mayor jerarquía que MdP (RF-08).
4. Si hay 2 MdP, verificar que se muestra el de mayor descuento.

**Resultado esperado**

En Mobile, membresía tiene prioridad visual sobre MdP. Entre 2 MdP simultáneas se muestra la de mayor descuento.

**Resultado obtenido**

Con {COMPRADOR_MEMBRESIA_USER} (login por correo + código), el shelf de 000000000000616838-UN muestra el precio de membresía 💎 $1.644 y el regular $1.890; el precio Unipay ($1.739, c_unipayPrice) no se muestra: la membresía tiene prioridad sobre el MdP.

**Observación**

Causa: pasos 1 a 3 se cumplen, pero la precondición pide además dos promos de MdP simultáneas y {SKU_PRECIO_MIEMBRO} solo tiene Unipay (sin precio Banco Estado), así que el paso 4 (mayor descuento entre 2 MdP) no se puede verificar. Acción: declarar un SKU con membresía + Unipay + Banco Estado.

**Evidencia**

![Paso 2 — shelf con membresia y mdp](<B2C-62 Evidencias/TC-B2C62-M-017-p02-shelf-con-membresia-y-mdp.png>)

![Estado final](<B2C-62 Evidencias/TC-B2C62-M-017.png>)

---

### TC-B2C62-M-021 - Dos precios simultaneos: oferta + lista tachado (Mobile)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest o Registrado.

Viewport Mobile 390x844.

Producto con promo de catálogo activa.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_PRECIO_OFERTA} = TBD
- {SKU_PRECIO_OFERTA} = TBD

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Mobile 390x844.
2. Localizar el shelf de un producto con promo de catálogo.
3. Verificar que se muestran 2 precios: precio oferta en acento con etiqueta de % de descuento y precio lista tachado.
4. Verificar que no hay tercer precio en este escenario.

**Resultado esperado**

El shelf en Mobile muestra exactamente 2 precios: precio oferta (acento) con etiqueta de % de descuento y precio lista (tachado). No hay tercer precio.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRECIO_OFERTA} 000000000000178089-UN (Mermelada Watt's) sigue sin estar en {PLP_URL_PRECIO_OFERTA} (/category/carnes_vacuno), re-verificado el 2026-11-16, y además muestra precio de socio a un invitado (3 precios). Acción: declarar una PLP y un SKU con oferta de catálogo y sin precio de membresía ni MdP.

---

### TC-B2C62-M-023 - PriceDisplayPriority MEMBERSHIP_FIRST: membresia como 3er precio (Mobile)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-62.spec.ts:356 |

**Precondiciones**

User type: Registrado con membresía activa.

Viewport Mobile 390x844.

Producto con precio membresía y Unipay activos. PriceDisplayPriority = MEMBERSHIP_FIRST.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_MEMBRESIA_USER} = 10.101.010-4
- {COMPRADOR_MEMBRESIA_PASSWORD} = Avatar123.
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN

**Pasos ejecutados**

1. Verificar PriceDisplayPriority=MEMBERSHIP_FIRST en BM.
2. Navegar a una PLP/SRP con viewport Mobile 390x844 con usuario con membresía activa.
3. Localizar el shelf de un producto con membresía y Unipay activos.
4. Verificar que el tercer precio muestra el badge de membresía (no Unipay).

**Resultado esperado**

En Mobile con MEMBERSHIP_FIRST, el tercer precio es membresía. Unipay no aparece como tercer precio cuando coexisten.

**Resultado obtenido**

Con {COMPRADOR_MEMBRESIA_USER} (login por correo + código), el shelf de 000000000000616838-UN (precio membresía c_diamantePrice $1.644 y Unipay c_unipayPrice $1.739) muestra el precio de membresía 💎 $1.644 con su badge y el regular $1.890; Unipay no aparece como precio.

**Observación**

Paso 1: en BM › Site Preferences › Site Custom Preferences no hay ninguna preferencia PriceDisplayPriority entre los 18 grupos SMU (no se pudo leer su valor); el comportamiento observado es el del default MEMBERSHIP_FIRST que describe el caso.

**Evidencia**

![Paso 1 — bm site custom preferences](<B2C-62 Evidencias/TC-B2C62-M-023-p01-bm-site-custom-preferences.png>)

![Paso 2 — shelf con membresia y unipay](<B2C-62 Evidencias/TC-B2C62-M-023-p02-shelf-con-membresia-y-unipay.png>)

![Estado final](<B2C-62 Evidencias/TC-B2C62-M-023.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "webkit"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-62",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-62 Test Cases.xlsx",
  "title": "B2C-62 - Bloque de precios del shelf - Evidencias QA",
  "updated_at": "2026-11-16"
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
  ],
  "2026-11-16": [
   "TC-B2C62-D-006",
   "TC-B2C62-D-012",
   "TC-B2C62-D-013",
   "TC-B2C62-D-015",
   "TC-B2C62-D-016",
   "TC-B2C62-D-017",
   "TC-B2C62-D-021",
   "TC-B2C62-D-023",
   "TC-B2C62-M-006",
   "TC-B2C62-M-012",
   "TC-B2C62-M-013",
   "TC-B2C62-M-015",
   "TC-B2C62-M-016",
   "TC-B2C62-M-017",
   "TC-B2C62-M-021",
   "TC-B2C62-M-023"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El shelf muestra: etiqueta % dcto, precio promo destacado, precio \"Antes\" tachado y PPUM calculado sobre el precio promocional. Todos los elementos son visibles simultáneamente.",
   "form_factor": "desktop",
   "id": "TC-B2C62-D-006",
   "name": "Mostrar etiqueta %, precio promo y 'Antes' tachado (Desktop)",
   "observation": "Causa: {SKU_PROM_PCT_DESCUENTO} cambió a 000000000000062644-UN (Kiwi bolsa 1 Kg). Pasos 3 a 5 se cumplen (10%, $2.601 destacado, \"Antes: $2.890\" tachado), pero el formato es exactamente 1 kg y en DEV los productos de 1 unidad estándar no muestran PPUM (igual que \"Salchicha San Jorge 20 un 1 Kg\", mientras la de 250 g sí lo muestra): el paso 6 (PPUM sobre el precio promocional) no se puede verificar con este SKU. Acción: declarar un SKU con promo % cuyo formato no sea 1 kg/1 L/1 un (p. ej. 500 g).",
   "observed": "Shelf de {SKU_PROM_PCT_DESCUENTO} 000000000000062644-UN (Kiwi bolsa 1 Kg) en su categoría (Desktop 1280x900): etiqueta \"10%\", precio promo $2.601 destacado y \"Antes: $2.890\" tachado. El shelf no muestra PPUM.",
   "preconditions": "User type: Guest o Registrado.\nViewport Desktop 1280x900.\nProducto con promoción de catálogo activa de tipo % de descuento (ej. 20% off).",
   "screenshots": [
    {
     "caption": "Paso 2 — shelf con promo de de descuento",
     "file": "TC-B2C62-D-006-p02-shelf-con-promo-de-de-descuento.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Desktop 1280x900.\n2. Localizar el shelf de un producto con promo % de descuento activa.\n3. Verificar que se muestra la etiqueta con el % de descuento (ej. \"-20%\").\n4. Verificar que el precio promocional se muestra destacado como precio principal.\n5. Verificar que el precio anterior se muestra tachado con la etiqueta \"Antes\".\n6. Verificar que el PPUM se calcula sobre el precio promocional (no sobre el regular).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PROM_PCT_DESCUENTO} = TBD",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "La promo de MdP se renderiza como precio fijo en CLP (precio efectivo post-descuento). No se muestra como pill con el %. El label del MdP (Unipay / Banco Estado) es visible.",
   "form_factor": "desktop",
   "id": "TC-B2C62-D-015",
   "name": "Renderizar promo MdP % dcto como precio fijo (Desktop)",
   "observation": "El SKU no tiene breadcrumb en la PDP ni está en {PLP_URL} (carnes_vacuno): el shelf se ubicó en la SRP buscando su nombre (los pasos admiten \"PLP/SRP\"). Buscar por el código (674831) no devuelve resultados (SRP-014).",
   "observed": "Shelf de {SKU_PRECIO_BE} 000000000000674831-UN (Pan de molde Zeroglut multisemillas 450 g): precio \"Banco Estado $4.990\" como importe fijo en CLP con el label Banco Estado, sin pill de %, junto al precio regular $5.290.",
   "preconditions": "User type: Guest o Registrado.\nViewport Desktop 1280x900.\nProducto con promo de medio de pago (MdP: Unipay o Banco Estado) de tipo % de descuento activa.",
   "screenshots": [
    {
     "caption": "Paso 2 — shelf con promo de medio de pago",
     "file": "TC-B2C62-D-015-p02-shelf-con-promo-de-medio-de-pago.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C62-D-015.png"
    }
   ],
   "spec": "tests/B2C-62.spec.ts:258",
   "status": "Aprobado",
   "steps": "1. Navegar a una PLP/SRP con viewport Desktop 1280x900.\n2. Localizar el shelf de un producto con promo MdP % dcto activa (Unipay o Banco Estado).\n3. Verificar que el precio MdP se muestra como precio fijo en CLP (no como pill % de descuento).\n4. Verificar que el precio mostrado es el precio efectivo post-descuento.\n5. Verificar que el label identificador del MdP (Unipay / Banco Estado) es visible junto al precio.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {PLP_URL} = URL de categoría\n- {SKU_PRECIO_BE} = TBD",
   "viewport": "1280x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El shelf en Mobile muestra: etiqueta % dcto, precio promo destacado, \"Antes\" tachado y PPUM sobre precio promo.",
   "form_factor": "mobile",
   "id": "TC-B2C62-M-006",
   "name": "Mostrar etiqueta %, precio promo y 'Antes' tachado (Mobile)",
   "observation": "Causa: {SKU_PROM_PCT_DESCUENTO} cambió a 000000000000062644-UN (Kiwi bolsa 1 Kg). Pasos 3 a 5 se cumplen (10%, $2.601 destacado, \"Antes: $2.890\" tachado), pero el formato es exactamente 1 kg y en DEV los productos de 1 unidad estándar no muestran PPUM (igual que \"Salchicha San Jorge 20 un 1 Kg\", mientras la de 250 g sí lo muestra): el paso 6 (PPUM sobre el precio promocional) no se puede verificar con este SKU. Acción: declarar un SKU con promo % cuyo formato no sea 1 kg/1 L/1 un (p. ej. 500 g).",
   "observed": "Shelf de {SKU_PROM_PCT_DESCUENTO} 000000000000062644-UN (Kiwi bolsa 1 Kg) en su categoría (Mobile 390x844): etiqueta \"10%\", precio promo $2.601 destacado y \"Antes: $2.890\" tachado. El shelf no muestra PPUM.",
   "preconditions": "User type: Guest o Registrado.\nViewport Mobile 390x844.\nProducto con promoción de catálogo de tipo % de descuento activa.",
   "screenshots": [
    {
     "caption": "Paso 2 — shelf con promo de de descuento",
     "file": "TC-B2C62-M-006-p02-shelf-con-promo-de-de-descuento.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Mobile 390x844.\n2. Localizar el shelf de un producto con promo % de descuento.\n3. Verificar la etiqueta con % dcto visible.\n4. Verificar precio promo destacado como precio principal.\n5. Verificar precio \"Antes\" tachado.\n6. Verificar PPUM calculado sobre precio promo (no regular).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PROM_PCT_DESCUENTO} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "La promo de MdP se renderiza como precio fijo en Mobile. El precio es el efectivo post-descuento. Label del MdP visible.",
   "form_factor": "mobile",
   "id": "TC-B2C62-M-015",
   "name": "Renderizar promo MdP % dcto como precio fijo (Mobile)",
   "observation": "El SKU no tiene breadcrumb en la PDP ni está en {PLP_URL} (carnes_vacuno): el shelf se ubicó en la SRP buscando su nombre (los pasos admiten \"PLP/SRP\"). Buscar por el código (674831) no devuelve resultados (SRP-014).",
   "observed": "Shelf de {SKU_PRECIO_BE} 000000000000674831-UN (Pan de molde Zeroglut multisemillas 450 g): precio \"Banco Estado $4.990\" como importe fijo en CLP con el label Banco Estado, sin pill de %, junto al precio regular $5.290.",
   "preconditions": "User type: Guest o Registrado.\nViewport Mobile 390x844.\nProducto con promo MdP % dcto activa (Unipay o Banco Estado).",
   "screenshots": [
    {
     "caption": "Paso 2 — shelf con promo de medio de pago",
     "file": "TC-B2C62-M-015-p02-shelf-con-promo-de-medio-de-pago.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C62-M-015.png"
    }
   ],
   "spec": "tests/B2C-62.spec.ts:258",
   "status": "Aprobado",
   "steps": "1. Navegar a una PLP/SRP con viewport Mobile 390x844.\n2. Localizar el shelf con promo MdP % dcto activa.\n3. Verificar que el precio MdP se muestra como precio fijo en CLP (no pill %).\n4. Verificar que el precio es el efectivo post-descuento.\n5. Verificar que el label del MdP es visible.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {PLP_URL} = URL de categoría\n- {SKU_PRECIO_BE} = TBD",
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
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El shelf muestra la etiqueta con la mecánica y condición de la promo X% en X unidad. La condición corresponde a la configurada en BM.",
   "form_factor": "desktop",
   "id": "TC-B2C62-D-012",
   "name": "Mostrar etiqueta y condicion en promo X% en X unidad (Desktop)",
   "observation": "Causa: {PLP_URL_XPCT_XUNIDAD} no tiene fila en el Excel de data. Acción: cargar la PLP con un producto con promo \"X% en X unidad\" activa ({SKU_PROM_XPCT_XUNIDAD} ya tiene valor: 000000000000670490-UN).",
   "observed": "No ejecutado.",
   "preconditions": "User type: Guest o Registrado.\nViewport Desktop 1280x900.\nProducto con promo de tipo \"X% en X unidad\" activa (ej. \"50% dcto en 2da unidad\", \"70% en 3ra unidad\").",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Desktop 1280x900.\n2. Localizar el shelf de un producto con promo X% en X unidad activa.\n3. Verificar que se muestra la etiqueta con la mecánica y su condición (ej. \"50% dcto en 2da unidad\").\n4. Verificar que la condición vigente es correcta y coherente con la promo configurada en BM.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_XPCT_XUNIDAD} = TBD\n- {SKU_PROM_XPCT_XUNIDAD} = TBD",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El shelf muestra el precio unitario regular (no el precio total con descuento) y el PPUM calculado sobre ese precio unitario.",
   "form_factor": "desktop",
   "id": "TC-B2C62-D-013",
   "name": "Mostrar precio unitario regular y PPUM en X% en X unidad (Desktop)",
   "observation": "Causa: {PLP_URL_XPCT_XUNIDAD} no tiene fila en el Excel de data. Acción: cargar la PLP con un producto con promo \"X% en X unidad\" activa ({SKU_PROM_XPCT_XUNIDAD} ya tiene valor: 000000000000670490-UN).",
   "observed": "No ejecutado.",
   "preconditions": "User type: Guest o Registrado.\nViewport Desktop 1280x900.\nProducto con promo X% en X unidad activa.",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Desktop 1280x900.\n2. Localizar el shelf de un producto con promo X% en X unidad.\n3. Verificar que se muestra el precio unitario destacado correspondiente al precio regular vigente.\n4. Verificar que el PPUM asociado al precio unitario es visible y correcto.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_XPCT_XUNIDAD} = TBD\n- {SKU_PROM_XPCT_XUNIDAD} = TBD",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El precio de membresía mostrado corresponde al precio ya rebajado por la promo de catálogo, aplicando profundización correcta. El valor difiere del cálculo sin profundización.",
   "form_factor": "desktop",
   "id": "TC-B2C62-D-016",
   "name": "Convivencia con profundizacion: membresia sobre precio rebajado por catalogo (Desktop)",
   "observation": "Causa: el cálculo de profundización exige el % de catálogo y el % de membresía configurados en BM, que la fila no declara, y {SKU_PRECIO_MIEMBRO} 000000000000616838-UN (Pan pita Castaño 300 g) no tiene promo de catálogo (precio de socio $1.644 y regular $1.890, sin \"Antes\"). Acción: declarar un SKU con promo de catálogo + membresía con profundización y los % de cada una.",
   "observed": "No ejecutado.",
   "preconditions": "User type: Registrado con membresía activa (ej. Club Unimarc Diamante).\nViewport Desktop 1280x900.\nProducto con promo de catálogo activa (ej. 20% off) y promo de membresía activa simultáneamente. El motor aplica profundización.",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Desktop 1280x900 con usuario logueado con membresía activa.\n2. Localizar el shelf de un producto con promo catálogo + membresía activas con profundización.\n3. Calcular el precio esperado con profundización: precio_base × (1 - %_catálogo) × (1 - %_membresía).\n4. Verificar que el precio de membresía mostrado coincide con el cálculo con profundización.\n5. Verificar que el precio NO coincide con el cálculo sin profundización (precio_base × (1 - %_catálogo - %_membresía)).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_MEMBRESIA_USER} = 10.101.010-4\n- {COMPRADOR_MEMBRESIA_PASSWORD} = Avatar123.\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {SKU_PROM_PCT_DESCUENTO} = TBD",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "Membresía tiene prioridad visual sobre MdP según RF-08. Entre 2 promos MdP simultáneas, se muestra la de mayor descuento.",
   "form_factor": "desktop",
   "id": "TC-B2C62-D-017",
   "name": "Prioridad membresia sobre MdP y mejor descuento entre 2 MdP (Desktop)",
   "observation": "Causa: pasos 1 a 3 se cumplen, pero la precondición pide además dos promos de MdP simultáneas y {SKU_PRECIO_MIEMBRO} solo tiene Unipay (sin precio Banco Estado), así que el paso 4 (mayor descuento entre 2 MdP) no se puede verificar. Acción: declarar un SKU con membresía + Unipay + Banco Estado.",
   "observed": "Con {COMPRADOR_MEMBRESIA_USER} (login por correo + código), el shelf de 000000000000616838-UN muestra el precio de membresía 💎 $1.644 y el regular $1.890; el precio Unipay ($1.739, c_unipayPrice) no se muestra: la membresía tiene prioridad sobre el MdP.",
   "preconditions": "User type: Registrado con membresía Y promo MdP activas simultáneamente.\nViewport Desktop 1280x900.\nProducto con promo de membresía y promo de MdP activas, y dos promos de MdP simultáneas.",
   "screenshots": [
    {
     "caption": "Paso 2 — shelf con membresia y mdp",
     "file": "TC-B2C62-D-017-p02-shelf-con-membresia-y-mdp.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C62-D-017.png"
    }
   ],
   "spec": "tests/B2C-62.spec.ts:340",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Desktop 1280x900 con usuario logueado con membresía activa y promo MdP disponible.\n2. Localizar el shelf de un producto con membresía y MdP activos simultáneamente.\n3. Verificar que el precio de membresía se muestra con mayor prioridad visual que el precio MdP (RF-08).\n4. Si existen 2 promos MdP simultáneas (ej. Unipay y Banco Estado), verificar que se muestra el de mayor descuento.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_MEMBRESIA_USER} = 10.101.010-4\n- {COMPRADOR_MEMBRESIA_PASSWORD} = Avatar123.\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El shelf muestra exactamente 2 precios: precio oferta (acento/principal) con etiqueta de % de descuento y precio lista (tachado/referencia). No se muestra un tercer precio.",
   "form_factor": "desktop",
   "id": "TC-B2C62-D-021",
   "name": "Dos precios simultaneos: oferta + lista tachado (Desktop)",
   "observation": "Causa: {SKU_PRECIO_OFERTA} 000000000000178089-UN (Mermelada Watt's) sigue sin estar en {PLP_URL_PRECIO_OFERTA} (/category/carnes_vacuno), re-verificado el 2026-11-16, y además muestra precio de socio a un invitado (3 precios). Acción: declarar una PLP y un SKU con oferta de catálogo y sin precio de membresía ni MdP.",
   "observed": "No ejecutado.",
   "preconditions": "User type: Guest o Registrado.\nViewport Desktop 1280x900.\nProducto con promo de catálogo activa (precio oferta < precio lista).",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Desktop 1280x900.\n2. Localizar el shelf de un producto con promo de catálogo activa.\n3. Verificar que se muestran exactamente 2 precios: precio oferta en acento (precio principal) con etiqueta de % de descuento y precio lista tachado.\n4. Verificar que NO hay un tercer precio visible (ausencia de membresía/MdP en este escenario).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_PRECIO_OFERTA} = TBD\n- {SKU_PRECIO_OFERTA} = TBD",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "Con PriceDisplayPriority=MEMBERSHIP_FIRST (default), el tercer precio muestra membresía sobre Unipay. El badge de membresía es el tercer precio visible cuando ambos coexisten.",
   "form_factor": "desktop",
   "id": "TC-B2C62-D-023",
   "name": "PriceDisplayPriority MEMBERSHIP_FIRST: membresia como 3er precio (Desktop)",
   "observation": "Paso 1: en BM › Site Preferences › Site Custom Preferences no hay ninguna preferencia PriceDisplayPriority entre los 18 grupos SMU (no se pudo leer su valor); el comportamiento observado es el del default MEMBERSHIP_FIRST que describe el caso.",
   "observed": "Con {COMPRADOR_MEMBRESIA_USER} (login por correo + código), el shelf de 000000000000616838-UN (precio membresía c_diamantePrice $1.644 y Unipay c_unipayPrice $1.739) muestra el precio de membresía 💎 $1.644 con su badge y el regular $1.890; Unipay no aparece como precio.",
   "preconditions": "User type: Registrado con membresía activa.\nViewport Desktop 1280x900.\nProducto con precio membresía Y precio Unipay activos simultáneamente. PriceDisplayPriority = MEMBERSHIP_FIRST (default) en Site Preferences de BM.",
   "screenshots": [
    {
     "caption": "Paso 1 — bm site custom preferences",
     "file": "TC-B2C62-D-023-p01-bm-site-custom-preferences.png"
    },
    {
     "caption": "Paso 2 — shelf con membresia y unipay",
     "file": "TC-B2C62-D-023-p02-shelf-con-membresia-y-unipay.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C62-D-023.png"
    }
   ],
   "spec": "tests/B2C-62.spec.ts:356",
   "status": "Aprobado",
   "steps": "1. Verificar que PriceDisplayPriority está configurado en MEMBERSHIP_FIRST en BM (Site Preferences).\n2. Navegar a una PLP/SRP con viewport Desktop 1280x900 con usuario con membresía activa.\n3. Localizar el shelf de un producto con precio membresía y Unipay activos simultáneamente.\n4. Verificar que el tercer precio muestra el badge de membresía (no Unipay).\n5. Verificar que Unipay no aparece como tercer precio en este escenario.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_MEMBRESIA_USER} = 10.101.010-4\n- {COMPRADOR_MEMBRESIA_PASSWORD} = Avatar123.\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN",
   "viewport": "1280x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El shelf en Mobile muestra la etiqueta con mecánica y condición de la promo X% en X unidad.",
   "form_factor": "mobile",
   "id": "TC-B2C62-M-012",
   "name": "Mostrar etiqueta y condicion en promo X% en X unidad (Mobile)",
   "observation": "Causa: {PLP_URL_XPCT_XUNIDAD} no tiene fila en el Excel de data. Acción: cargar la PLP con un producto con promo \"X% en X unidad\" activa ({SKU_PROM_XPCT_XUNIDAD} ya tiene valor: 000000000000670490-UN).",
   "observed": "No ejecutado.",
   "preconditions": "User type: Guest o Registrado.\nViewport Mobile 390x844.\nProducto con promo X% en X unidad activa.",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Mobile 390x844.\n2. Localizar el shelf de un producto con promo X% en X unidad.\n3. Verificar que se muestra la etiqueta con mecánica y condición (ej. \"50% dcto en 2da unidad\").\n4. Verificar que la condición es coherente con la promo en BM.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_XPCT_XUNIDAD} = TBD\n- {SKU_PROM_XPCT_XUNIDAD} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El shelf en Mobile muestra el precio unitario regular y el PPUM calculado sobre ese precio.",
   "form_factor": "mobile",
   "id": "TC-B2C62-M-013",
   "name": "Mostrar precio unitario regular y PPUM en X% en X unidad (Mobile)",
   "observation": "Causa: {PLP_URL_XPCT_XUNIDAD} no tiene fila en el Excel de data. Acción: cargar la PLP con un producto con promo \"X% en X unidad\" activa ({SKU_PROM_XPCT_XUNIDAD} ya tiene valor: 000000000000670490-UN).",
   "observed": "No ejecutado.",
   "preconditions": "User type: Guest o Registrado.\nViewport Mobile 390x844.\nProducto con promo X% en X unidad activa.",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Mobile 390x844.\n2. Localizar el shelf de un producto con promo X% en X unidad.\n3. Verificar que se muestra el precio unitario regular.\n4. Verificar que el PPUM asociado al precio unitario es visible y correcto.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_XPCT_XUNIDAD} = TBD\n- {SKU_PROM_XPCT_XUNIDAD} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El precio de membresía en Mobile aplica profundización correctamente (calculado sobre precio ya rebajado por catálogo).",
   "form_factor": "mobile",
   "id": "TC-B2C62-M-016",
   "name": "Convivencia con profundizacion: membresia sobre precio rebajado por catalogo (Mobile)",
   "observation": "Causa: el cálculo de profundización exige el % de catálogo y el % de membresía configurados en BM, que la fila no declara, y {SKU_PRECIO_MIEMBRO} 000000000000616838-UN (Pan pita Castaño 300 g) no tiene promo de catálogo (precio de socio $1.644 y regular $1.890, sin \"Antes\"). Acción: declarar un SKU con promo de catálogo + membresía con profundización y los % de cada una.",
   "observed": "No ejecutado.",
   "preconditions": "User type: Registrado con membresía activa.\nViewport Mobile 390x844.\nProducto con promo catálogo + membresía con profundización activas.",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Mobile 390x844 con usuario con membresía activa.\n2. Localizar el shelf con promo catálogo + membresía con profundización.\n3. Calcular precio esperado: precio_base × (1 - %_catálogo) × (1 - %_membresía).\n4. Verificar que el precio de membresía coincide con el cálculo con profundización.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_MEMBRESIA_USER} = 10.101.010-4\n- {COMPRADOR_MEMBRESIA_PASSWORD} = Avatar123.\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {SKU_PROM_PCT_DESCUENTO} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "En Mobile, membresía tiene prioridad visual sobre MdP. Entre 2 MdP simultáneas se muestra la de mayor descuento.",
   "form_factor": "mobile",
   "id": "TC-B2C62-M-017",
   "name": "Prioridad membresia sobre MdP y mejor descuento entre 2 MdP (Mobile)",
   "observation": "Causa: pasos 1 a 3 se cumplen, pero la precondición pide además dos promos de MdP simultáneas y {SKU_PRECIO_MIEMBRO} solo tiene Unipay (sin precio Banco Estado), así que el paso 4 (mayor descuento entre 2 MdP) no se puede verificar. Acción: declarar un SKU con membresía + Unipay + Banco Estado.",
   "observed": "Con {COMPRADOR_MEMBRESIA_USER} (login por correo + código), el shelf de 000000000000616838-UN muestra el precio de membresía 💎 $1.644 y el regular $1.890; el precio Unipay ($1.739, c_unipayPrice) no se muestra: la membresía tiene prioridad sobre el MdP.",
   "preconditions": "User type: Registrado con membresía y promo MdP activas.\nViewport Mobile 390x844.\nProducto con membresía y MdP activos simultáneamente.",
   "screenshots": [
    {
     "caption": "Paso 2 — shelf con membresia y mdp",
     "file": "TC-B2C62-M-017-p02-shelf-con-membresia-y-mdp.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C62-M-017.png"
    }
   ],
   "spec": "tests/B2C-62.spec.ts:340",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Mobile 390x844 con usuario con membresía activa y promo MdP.\n2. Localizar el shelf con membresía y MdP activos simultáneamente.\n3. Verificar prioridad: membresía visible con mayor jerarquía que MdP (RF-08).\n4. Si hay 2 MdP, verificar que se muestra el de mayor descuento.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_MEMBRESIA_USER} = 10.101.010-4\n- {COMPRADOR_MEMBRESIA_PASSWORD} = Avatar123.\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El shelf en Mobile muestra exactamente 2 precios: precio oferta (acento) con etiqueta de % de descuento y precio lista (tachado). No hay tercer precio.",
   "form_factor": "mobile",
   "id": "TC-B2C62-M-021",
   "name": "Dos precios simultaneos: oferta + lista tachado (Mobile)",
   "observation": "Causa: {SKU_PRECIO_OFERTA} 000000000000178089-UN (Mermelada Watt's) sigue sin estar en {PLP_URL_PRECIO_OFERTA} (/category/carnes_vacuno), re-verificado el 2026-11-16, y además muestra precio de socio a un invitado (3 precios). Acción: declarar una PLP y un SKU con oferta de catálogo y sin precio de membresía ni MdP.",
   "observed": "No ejecutado.",
   "preconditions": "User type: Guest o Registrado.\nViewport Mobile 390x844.\nProducto con promo de catálogo activa.",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Mobile 390x844.\n2. Localizar el shelf de un producto con promo de catálogo.\n3. Verificar que se muestran 2 precios: precio oferta en acento con etiqueta de % de descuento y precio lista tachado.\n4. Verificar que no hay tercer precio en este escenario.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_PRECIO_OFERTA} = TBD\n- {SKU_PRECIO_OFERTA} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "En Mobile con MEMBERSHIP_FIRST, el tercer precio es membresía. Unipay no aparece como tercer precio cuando coexisten.",
   "form_factor": "mobile",
   "id": "TC-B2C62-M-023",
   "name": "PriceDisplayPriority MEMBERSHIP_FIRST: membresia como 3er precio (Mobile)",
   "observation": "Paso 1: en BM › Site Preferences › Site Custom Preferences no hay ninguna preferencia PriceDisplayPriority entre los 18 grupos SMU (no se pudo leer su valor); el comportamiento observado es el del default MEMBERSHIP_FIRST que describe el caso.",
   "observed": "Con {COMPRADOR_MEMBRESIA_USER} (login por correo + código), el shelf de 000000000000616838-UN (precio membresía c_diamantePrice $1.644 y Unipay c_unipayPrice $1.739) muestra el precio de membresía 💎 $1.644 con su badge y el regular $1.890; Unipay no aparece como precio.",
   "preconditions": "User type: Registrado con membresía activa.\nViewport Mobile 390x844.\nProducto con precio membresía y Unipay activos. PriceDisplayPriority = MEMBERSHIP_FIRST.",
   "screenshots": [
    {
     "caption": "Paso 1 — bm site custom preferences",
     "file": "TC-B2C62-M-023-p01-bm-site-custom-preferences.png"
    },
    {
     "caption": "Paso 2 — shelf con membresia y unipay",
     "file": "TC-B2C62-M-023-p02-shelf-con-membresia-y-unipay.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C62-M-023.png"
    }
   ],
   "spec": "tests/B2C-62.spec.ts:356",
   "status": "Aprobado",
   "steps": "1. Verificar PriceDisplayPriority=MEMBERSHIP_FIRST en BM.\n2. Navegar a una PLP/SRP con viewport Mobile 390x844 con usuario con membresía activa.\n3. Localizar el shelf de un producto con membresía y Unipay activos.\n4. Verificar que el tercer precio muestra el badge de membresía (no Unipay).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_MEMBRESIA_USER} = 10.101.010-4\n- {COMPRADOR_MEMBRESIA_PASSWORD} = Avatar123.\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN",
   "viewport": "390x844"
  }
 ]
}
-->
