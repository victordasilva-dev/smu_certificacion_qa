# B2C-50 APP - Te faltan N para la promo en el carro (Android) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-50 APP |
| Última actualización | 2026-10-16 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc v1.0.7 (DEV) |
| Dispositivo Android | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-50 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 10 |
| Aprobado | 2 |
| **Total** | **12** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-16 | 12 | TC-B2C50-APP-001, TC-B2C50-APP-002, TC-B2C50-APP-003, TC-B2C50-APP-004, TC-B2C50-APP-005, TC-B2C50-APP-006, TC-B2C50-APP-007, TC-B2C50-APP-008, TC-B2C50-APP-009, TC-B2C50-APP-010, TC-B2C50-APP-011, TC-B2C50-APP-012 |

## Detalle por caso de prueba

### TC-B2C50-APP-001 - Verificar que un producto con promo Combina incompleta muestra Te faltan N con CTA en el carro [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

v1.0.7, iOS, 3, 000000000000666200-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario revisa el shelf de 000000000000666200-UN.

**Resultado esperado**

El shelf muestra "Te faltan N para la promo >" con N = 3 − 1 y el CTA "›".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_COMBINA_PROMO} = 000000000000666200-UN (carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades: en el carro de la app dice 'Te faltan 1 para la promo' con 1 un. y el modal '1 / 2 productos'), pero {CANTIDAD_PROMO_COMBINA} vale 3, así que el N esperado no corresponde. Acción: corregir {CANTIDAD_PROMO_COMBINA} a 2 o declarar un SKU con promo Combina de 3 unidades. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')](<B2C-50 APP Evidencias/e-carro.png>)

---

### TC-B2C50-APP-002 - Verificar que un logueado ve el mensaje Te faltan N de la promo Combina en el carro [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

v1.0.7, iOS, 3, 000000000000666200-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario revisa el shelf de 000000000000666200-UN.

**Resultado esperado**

El shelf muestra "Te faltan N para la promo >" con el CTA "›".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT. Además {SKU_COMBINA_PROMO} = 000000000000666200-UN (carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades: en el carro de la app dice 'Te faltan 1 para la promo' con 1 un. y el modal '1 / 2 productos'), pero {CANTIDAD_PROMO_COMBINA} vale 3, así que el N esperado no corresponde. Acción: corregir {CANTIDAD_PROMO_COMBINA} a 2 o declarar un SKU con promo Combina de 3 unidades. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')](<B2C-50 APP Evidencias/e-carro.png>)

---

### TC-B2C50-APP-003 - Verificar que el CTA de la promo Combina abre el modal Combina la promo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Duración | 55.0 s |
| Spec | tests-app/B2C-50.spec.ts:58 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

v1.0.7, iOS, 3, 000000000000666200-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el CTA "›" del mensaje en el shelf de 000000000000666200-UN.

**Resultado esperado**

Se abre el modal Combina la promo (B2C-74) con los productos combinables de la promo.

**Resultado obtenido**

Invitado con {SKU_COMBINA_PROMO} × 1 (agregado desde la búsqueda): el carro muestra 'Te faltan 1 para la promo' con el CTA 'Ver productos combinables' y al tocarlo se abre la hoja 'Combina la promo' con '1 / 2 productos', el producto del carro 'En carro 1 un.' y la otra variante combinable (Carne molida tártaro Fundo Río Alegre) con 'Agregar'. La hoja trae al pie 'Volver al inicio'.

**Observación**

Invitado con {SKU_COMBINA_PROMO} × 1 (agregado desde la búsqueda): el carro muestra 'Te faltan 1 para la promo' con el CTA 'Ver productos combinables' y al tocarlo se abre la hoja 'Combina la promo' con '1 / 2 productos', el producto del carro 'En carro 1 un.' y la otra variante combinable (Carne molida tártaro Fundo Río Alegre) con 'Agregar'. La hoja trae al pie 'Volver al inicio'. Primera pasada fallida por el script (contó las tarjetas antes de que se pintaran); re-ejecutado: pasó al primer intento. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Android · Paso 0 — producto de la promo agregado al carro](<B2C-50 APP Evidencias/TC-B2C50-APP-003-android-p00-producto-de-la-promo-agregado-al-carro.png>)

![Android · Paso 2 — carro con el mensaje de promo](<B2C-50 APP Evidencias/TC-B2C50-APP-003-android-p02-carro-con-el-mensaje-de-promo.png>)

![Android · Paso 3 — modal combina la promo con los combinables](<B2C-50 APP Evidencias/TC-B2C50-APP-003-android-p03-modal-combina-la-promo-con-los-combinables.png>)

![Estado final del caso](<B2C-50 APP Evidencias/TC-B2C50-APP-003-android.png>)

---

### TC-B2C50-APP-004 - Verificar que un producto con promo de tipo "Completa la promo", incompleta, muestra Te faltan N sin CTA en el carro [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

v1.0.7, iOS, 000000000641229001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario revisa el shelf de 000000000641229001-UN.

**Resultado esperado**

El shelf muestra "Te faltan 2 para la promo" sin CTA "›".

Es solo un mensaje y no abre un modal

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_COMPLETA_PROMO_3X2} = 000000000641229001-UN (Lay's Stax original 134 g) tiene en DEV una promo de tipo Combina, no 'Completa' del mismo SKU: en la búsqueda muestra 'Combina la promo' y en el carro 'Te faltan 2 para la promo. Ver productos combinables' (con CTA). Acción: declarar un SKU con promo Completa 3x2 del mismo SKU. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')](<B2C-50 APP Evidencias/e-carro.png>)

---

### TC-B2C50-APP-005 - Verificar que al sumar una unidad el contador Te faltan N baja en 1 sin recargar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

v1.0.7, iOS, 000000000641229001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control + de 000000000641229001-UN.

**Resultado esperado**

La cantidad pasa a 2 y el mensaje cambia de inmediato a "Te faltan 1 para la promo" sin recargar la página.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_COMPLETA_PROMO_3X2} = 000000000641229001-UN (Lay's Stax original 134 g) tiene en DEV una promo de tipo Combina, no 'Completa' del mismo SKU: en la búsqueda muestra 'Combina la promo' y en el carro 'Te faltan 2 para la promo. Ver productos combinables' (con CTA). Acción: declarar un SKU con promo Completa 3x2 del mismo SKU. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')](<B2C-50 APP Evidencias/e-carro.png>)

---

### TC-B2C50-APP-006 - Verificar que al completar la promo el mensaje cambia a Llevas la promo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

v1.0.7, iOS, 000000000641229001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control + de 000000000641229001-UN hasta llegar a 3 unidades.

**Resultado esperado**

El mensaje "Te faltan N" desaparece y el shelf muestra "Llevas la promo ✓".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_COMPLETA_PROMO_3X2} = 000000000641229001-UN (Lay's Stax original 134 g) tiene en DEV una promo de tipo Combina, no 'Completa' del mismo SKU: en la búsqueda muestra 'Combina la promo' y en el carro 'Te faltan 2 para la promo. Ver productos combinables' (con CTA). Acción: declarar un SKU con promo Completa 3x2 del mismo SKU. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')](<B2C-50 APP Evidencias/e-carro.png>)

---

### TC-B2C50-APP-007 - Verificar que al completar la promo el precio unitario se recalcula con el descuento [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

v1.0.7, iOS, 000000000641229001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control + de 000000000641229001-UN hasta llegar a 3 unidades.
4. El usuario revisa el precio del ítem.

**Resultado esperado**

El precio unitario de 000000000641229001-UN se recalcula con el descuento de la promo 3x2 aplicado a las 3 unidades.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_COMPLETA_PROMO_3X2} = 000000000641229001-UN (Lay's Stax original 134 g) tiene en DEV una promo de tipo Combina, no 'Completa' del mismo SKU: en la búsqueda muestra 'Combina la promo' y en el carro 'Te faltan 2 para la promo. Ver productos combinables' (con CTA). Acción: declarar un SKU con promo Completa 3x2 del mismo SKU. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')](<B2C-50 APP Evidencias/e-carro.png>)

---

### TC-B2C50-APP-008 - Verificar que al completar la promo Combina desaparece el CTA de Combina [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

v1.0.7, iOS, 3, 000000000000666200-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control + de 000000000000666200-UN hasta llegar a 3 unidades.

**Resultado esperado**

El shelf muestra "Llevas la promo ✓" y ya no muestra el mensaje "Te faltan N" ni el CTA "›".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_COMBINA_PROMO} = 000000000000666200-UN (carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades: en el carro de la app dice 'Te faltan 1 para la promo' con 1 un. y el modal '1 / 2 productos'), pero {CANTIDAD_PROMO_COMBINA} vale 3, así que el N esperado no corresponde. Acción: corregir {CANTIDAD_PROMO_COMBINA} a 2 o declarar un SKU con promo Combina de 3 unidades. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')](<B2C-50 APP Evidencias/e-carro.png>)

---

### TC-B2C50-APP-009 - Verificar que al superar el umbral de la promo de tipo "Completa la promo" el contador inicia un nuevo ciclo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

v1.0.7, iOS, 000000000641229001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control + de 000000000641229001-UN hasta llegar a 4 unidades.

**Resultado esperado**

Con 4 unidades el shelf muestra "Te faltan 2 para la promo" (siguiente umbral = 6).

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_COMPLETA_PROMO_3X2} = 000000000641229001-UN (Lay's Stax original 134 g) tiene en DEV una promo de tipo Combina, no 'Completa' del mismo SKU: en la búsqueda muestra 'Combina la promo' y en el carro 'Te faltan 2 para la promo. Ver productos combinables' (con CTA). Acción: declarar un SKU con promo Completa 3x2 del mismo SKU. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')](<B2C-50 APP Evidencias/e-carro.png>)

---

### TC-B2C50-APP-010 - Verificar que al superar el umbral de la promo de tipo "Combina la promo" el contador inicia un nuevo ciclo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

v1.0.7, iOS, 3, 000000000000666200-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control + de 000000000000666200-UN hasta llegar a 3 + 1 unidades.

**Resultado esperado**

El shelf vuelve a mostrar "Te faltan N para la promo >" con N = (2 × 3) − cantidad actual.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_COMBINA_PROMO} = 000000000000666200-UN (carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades: en el carro de la app dice 'Te faltan 1 para la promo' con 1 un. y el modal '1 / 2 productos'), pero {CANTIDAD_PROMO_COMBINA} vale 3, así que el N esperado no corresponde. Acción: corregir {CANTIDAD_PROMO_COMBINA} a 2 o declarar un SKU con promo Combina de 3 unidades. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')](<B2C-50 APP Evidencias/e-carro.png>)

---

### TC-B2C50-APP-011 - Verificar que agregar desde el modal Combina la promo actualiza el mensaje del carro [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Duración | 59.0 s |
| Spec | tests-app/B2C-50.spec.ts:71 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

v1.0.7, iOS, 3, 000000000000666200-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el CTA "›" del shelf de 000000000000666200-UN.
4. El sistema abre el modal Combina la promo.
5. El usuario toca "Agregar" en otro producto combinable del modal y cierra el modal.

**Resultado esperado**

Sin recargar la página, el mensaje del shelf baja en 1 el N (o pasa a "Llevas la promo ✓" si se completó).

**Resultado obtenido**

Con {SKU_COMBINA_PROMO} × 1 ('Te faltan 1 para la promo'), 'Agregar' en la otra variante del modal lo lleva a '2 / 2 productos'; al cerrar con ✕ el ítem del carro muestra 'Llevas la promo' sin recargar.

**Observación**

Con {SKU_COMBINA_PROMO} × 1 ('Te faltan 1 para la promo'), 'Agregar' en la otra variante del modal lo lleva a '2 / 2 productos'; al cerrar con ✕ el ítem del carro muestra 'Llevas la promo' sin recargar. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Android · Paso 0 — producto de la promo agregado al carro](<B2C-50 APP Evidencias/TC-B2C50-APP-011-android-p00-producto-de-la-promo-agregado-al-carro.png>)

![Android · Paso 2 — carro con el mensaje de promo](<B2C-50 APP Evidencias/TC-B2C50-APP-011-android-p02-carro-con-el-mensaje-de-promo.png>)

![Android · Paso 4 — modal combina la promo](<B2C-50 APP Evidencias/TC-B2C50-APP-011-android-p04-modal-combina-la-promo.png>)

![Android · Paso 5 — otro combinable agregado en el modal](<B2C-50 APP Evidencias/TC-B2C50-APP-011-android-p05-otro-combinable-agregado-en-el-modal.png>)

![Android · Paso 6 — carro con el mensaje actualizado](<B2C-50 APP Evidencias/TC-B2C50-APP-011-android-p06-carro-con-el-mensaje-actualizado.png>)

![Estado final del caso](<B2C-50 APP Evidencias/TC-B2C50-APP-011-android.png>)

---

### TC-B2C50-APP-012 - Verificar que al eliminar los productos de la promo el mensaje desaparece [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades
- El carro también contiene 000000000000675191-UN (sin promo)

**Data utilizada**

v1.0.7, iOS, 000000000641229001-UN, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario elimina 000000000641229001-UN del carro con el ícono de eliminar.

**Resultado esperado**

El mensaje "Te faltan N para la promo" desaparece junto con el producto y 000000000000675191-UN no muestra mensaje de promo.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_COMPLETA_PROMO_3X2} = 000000000641229001-UN (Lay's Stax original 134 g) tiene en DEV una promo de tipo Combina, no 'Completa' del mismo SKU: en la búsqueda muestra 'Combina la promo' y en el carro 'Te faltan 2 para la promo. Ver productos combinables' (con CTA). Acción: declarar un SKU con promo Completa 3x2 del mismo SKU. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')](<B2C-50 APP Evidencias/e-carro.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk"
  },
  "environment": "App Unimarc v1.0.7 (DEV)",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-50 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-50 APP Test Cases.xlsx",
  "title": "B2C-50 APP - Te faltan N para la promo en el carro (Android) - Evidencias QA",
  "updated_at": "2026-10-16"
 },
 "history": {
  "2026-10-16": [
   "TC-B2C50-APP-001",
   "TC-B2C50-APP-002",
   "TC-B2C50-APP-003",
   "TC-B2C50-APP-004",
   "TC-B2C50-APP-005",
   "TC-B2C50-APP-006",
   "TC-B2C50-APP-007",
   "TC-B2C50-APP-008",
   "TC-B2C50-APP-009",
   "TC-B2C50-APP-010",
   "TC-B2C50-APP-011",
   "TC-B2C50-APP-012"
  ]
 },
 "results": [
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El shelf muestra \"Te faltan N para la promo >\" con N = 3 − 1 y el CTA \"›\".",
   "form_factor": "app",
   "id": "TC-B2C50-APP-001",
   "name": "Verificar que un producto con promo Combina incompleta muestra Te faltan N con CTA en el carro [App] [Guest]",
   "observation": "Causa: {SKU_COMBINA_PROMO} = 000000000000666200-UN (carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades: en el carro de la app dice 'Te faltan 1 para la promo' con 1 un. y el modal '1 / 2 productos'), pero {CANTIDAD_PROMO_COMBINA} vale 3, así que el N esperado no corresponde. Acción: corregir {CANTIDAD_PROMO_COMBINA} a 2 o declarar un SKU con promo Combina de 3 unidades. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')",
     "file": "e-carro.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario revisa el shelf de 000000000000666200-UN.",
   "test_data": "v1.0.7, iOS, 3, 000000000000666200-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El shelf muestra \"Te faltan N para la promo >\" con el CTA \"›\".",
   "form_factor": "app",
   "id": "TC-B2C50-APP-002",
   "name": "Verificar que un logueado ve el mensaje Te faltan N de la promo Combina en el carro [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT. Además {SKU_COMBINA_PROMO} = 000000000000666200-UN (carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades: en el carro de la app dice 'Te faltan 1 para la promo' con 1 un. y el modal '1 / 2 productos'), pero {CANTIDAD_PROMO_COMBINA} vale 3, así que el N esperado no corresponde. Acción: corregir {CANTIDAD_PROMO_COMBINA} a 2 o declarar un SKU con promo Combina de 3 unidades. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')",
     "file": "e-carro.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario revisa el shelf de 000000000000666200-UN.",
   "test_data": "v1.0.7, iOS, 3, 000000000000666200-UN, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "duration_s": 55,
   "executed_at": "2026-10-16",
   "expected": "Se abre el modal Combina la promo (B2C-74) con los productos combinables de la promo.",
   "form_factor": "app",
   "id": "TC-B2C50-APP-003",
   "name": "Verificar que el CTA de la promo Combina abre el modal Combina la promo [App] [Guest]",
   "observation": "Invitado con {SKU_COMBINA_PROMO} × 1 (agregado desde la búsqueda): el carro muestra 'Te faltan 1 para la promo' con el CTA 'Ver productos combinables' y al tocarlo se abre la hoja 'Combina la promo' con '1 / 2 productos', el producto del carro 'En carro 1 un.' y la otra variante combinable (Carne molida tártaro Fundo Río Alegre) con 'Agregar'. La hoja trae al pie 'Volver al inicio'. Primera pasada fallida por el script (contó las tarjetas antes de que se pintaran); re-ejecutado: pasó al primer intento. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "Invitado con {SKU_COMBINA_PROMO} × 1 (agregado desde la búsqueda): el carro muestra 'Te faltan 1 para la promo' con el CTA 'Ver productos combinables' y al tocarlo se abre la hoja 'Combina la promo' con '1 / 2 productos', el producto del carro 'En carro 1 un.' y la otra variante combinable (Carne molida tártaro Fundo Río Alegre) con 'Agregar'. La hoja trae al pie 'Volver al inicio'.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "Android · Paso 0 — producto de la promo agregado al carro",
     "file": "TC-B2C50-APP-003-android-p00-producto-de-la-promo-agregado-al-carro.png"
    },
    {
     "caption": "Android · Paso 2 — carro con el mensaje de promo",
     "file": "TC-B2C50-APP-003-android-p02-carro-con-el-mensaje-de-promo.png"
    },
    {
     "caption": "Android · Paso 3 — modal combina la promo con los combinables",
     "file": "TC-B2C50-APP-003-android-p03-modal-combina-la-promo-con-los-combinables.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C50-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-50.spec.ts:58",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el CTA \"›\" del mensaje en el shelf de 000000000000666200-UN.",
   "test_data": "v1.0.7, iOS, 3, 000000000000666200-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El shelf muestra \"Te faltan 2 para la promo\" sin CTA \"›\".\nEs solo un mensaje y no abre un modal",
   "form_factor": "app",
   "id": "TC-B2C50-APP-004",
   "name": "Verificar que un producto con promo de tipo \"Completa la promo\", incompleta, muestra Te faltan N sin CTA en el carro [App] [Guest]",
   "observation": "Causa: {SKU_COMPLETA_PROMO_3X2} = 000000000641229001-UN (Lay's Stax original 134 g) tiene en DEV una promo de tipo Combina, no 'Completa' del mismo SKU: en la búsqueda muestra 'Combina la promo' y en el carro 'Te faltan 2 para la promo. Ver productos combinables' (con CTA). Acción: declarar un SKU con promo Completa 3x2 del mismo SKU. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')",
     "file": "e-carro.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario revisa el shelf de 000000000641229001-UN.",
   "test_data": "v1.0.7, iOS, 000000000641229001-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "La cantidad pasa a 2 y el mensaje cambia de inmediato a \"Te faltan 1 para la promo\" sin recargar la página.",
   "form_factor": "app",
   "id": "TC-B2C50-APP-005",
   "name": "Verificar que al sumar una unidad el contador Te faltan N baja en 1 sin recargar [App] [Guest]",
   "observation": "Causa: {SKU_COMPLETA_PROMO_3X2} = 000000000641229001-UN (Lay's Stax original 134 g) tiene en DEV una promo de tipo Combina, no 'Completa' del mismo SKU: en la búsqueda muestra 'Combina la promo' y en el carro 'Te faltan 2 para la promo. Ver productos combinables' (con CTA). Acción: declarar un SKU con promo Completa 3x2 del mismo SKU. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')",
     "file": "e-carro.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de 000000000641229001-UN.",
   "test_data": "v1.0.7, iOS, 000000000641229001-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El mensaje \"Te faltan N\" desaparece y el shelf muestra \"Llevas la promo ✓\".",
   "form_factor": "app",
   "id": "TC-B2C50-APP-006",
   "name": "Verificar que al completar la promo el mensaje cambia a Llevas la promo [App] [Guest]",
   "observation": "Causa: {SKU_COMPLETA_PROMO_3X2} = 000000000641229001-UN (Lay's Stax original 134 g) tiene en DEV una promo de tipo Combina, no 'Completa' del mismo SKU: en la búsqueda muestra 'Combina la promo' y en el carro 'Te faltan 2 para la promo. Ver productos combinables' (con CTA). Acción: declarar un SKU con promo Completa 3x2 del mismo SKU. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')",
     "file": "e-carro.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de 000000000641229001-UN hasta llegar a 3 unidades.",
   "test_data": "v1.0.7, iOS, 000000000641229001-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El precio unitario de 000000000641229001-UN se recalcula con el descuento de la promo 3x2 aplicado a las 3 unidades.",
   "form_factor": "app",
   "id": "TC-B2C50-APP-007",
   "name": "Verificar que al completar la promo el precio unitario se recalcula con el descuento [App] [Guest]",
   "observation": "Causa: {SKU_COMPLETA_PROMO_3X2} = 000000000641229001-UN (Lay's Stax original 134 g) tiene en DEV una promo de tipo Combina, no 'Completa' del mismo SKU: en la búsqueda muestra 'Combina la promo' y en el carro 'Te faltan 2 para la promo. Ver productos combinables' (con CTA). Acción: declarar un SKU con promo Completa 3x2 del mismo SKU. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')",
     "file": "e-carro.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de 000000000641229001-UN hasta llegar a 3 unidades.\n4. El usuario revisa el precio del ítem.",
   "test_data": "v1.0.7, iOS, 000000000641229001-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El shelf muestra \"Llevas la promo ✓\" y ya no muestra el mensaje \"Te faltan N\" ni el CTA \"›\".",
   "form_factor": "app",
   "id": "TC-B2C50-APP-008",
   "name": "Verificar que al completar la promo Combina desaparece el CTA de Combina [App] [Guest]",
   "observation": "Causa: {SKU_COMBINA_PROMO} = 000000000000666200-UN (carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades: en el carro de la app dice 'Te faltan 1 para la promo' con 1 un. y el modal '1 / 2 productos'), pero {CANTIDAD_PROMO_COMBINA} vale 3, así que el N esperado no corresponde. Acción: corregir {CANTIDAD_PROMO_COMBINA} a 2 o declarar un SKU con promo Combina de 3 unidades. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')",
     "file": "e-carro.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de 000000000000666200-UN hasta llegar a 3 unidades.",
   "test_data": "v1.0.7, iOS, 3, 000000000000666200-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Con 4 unidades el shelf muestra \"Te faltan 2 para la promo\" (siguiente umbral = 6).",
   "form_factor": "app",
   "id": "TC-B2C50-APP-009",
   "name": "Verificar que al superar el umbral de la promo de tipo \"Completa la promo\" el contador inicia un nuevo ciclo [App] [Guest]",
   "observation": "Causa: {SKU_COMPLETA_PROMO_3X2} = 000000000641229001-UN (Lay's Stax original 134 g) tiene en DEV una promo de tipo Combina, no 'Completa' del mismo SKU: en la búsqueda muestra 'Combina la promo' y en el carro 'Te faltan 2 para la promo. Ver productos combinables' (con CTA). Acción: declarar un SKU con promo Completa 3x2 del mismo SKU. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')",
     "file": "e-carro.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de 000000000641229001-UN hasta llegar a 4 unidades.",
   "test_data": "v1.0.7, iOS, 000000000641229001-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El shelf vuelve a mostrar \"Te faltan N para la promo >\" con N = (2 × 3) − cantidad actual.",
   "form_factor": "app",
   "id": "TC-B2C50-APP-010",
   "name": "Verificar que al superar el umbral de la promo de tipo \"Combina la promo\" el contador inicia un nuevo ciclo [App] [Guest]",
   "observation": "Causa: {SKU_COMBINA_PROMO} = 000000000000666200-UN (carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades: en el carro de la app dice 'Te faltan 1 para la promo' con 1 un. y el modal '1 / 2 productos'), pero {CANTIDAD_PROMO_COMBINA} vale 3, así que el N esperado no corresponde. Acción: corregir {CANTIDAD_PROMO_COMBINA} a 2 o declarar un SKU con promo Combina de 3 unidades. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')",
     "file": "e-carro.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de 000000000000666200-UN hasta llegar a 3 + 1 unidades.",
   "test_data": "v1.0.7, iOS, 3, 000000000000666200-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "duration_s": 59,
   "executed_at": "2026-10-16",
   "expected": "Sin recargar la página, el mensaje del shelf baja en 1 el N (o pasa a \"Llevas la promo ✓\" si se completó).",
   "form_factor": "app",
   "id": "TC-B2C50-APP-011",
   "name": "Verificar que agregar desde el modal Combina la promo actualiza el mensaje del carro [App] [Guest]",
   "observation": "Con {SKU_COMBINA_PROMO} × 1 ('Te faltan 1 para la promo'), 'Agregar' en la otra variante del modal lo lleva a '2 / 2 productos'; al cerrar con ✕ el ítem del carro muestra 'Llevas la promo' sin recargar. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "Con {SKU_COMBINA_PROMO} × 1 ('Te faltan 1 para la promo'), 'Agregar' en la otra variante del modal lo lleva a '2 / 2 productos'; al cerrar con ✕ el ítem del carro muestra 'Llevas la promo' sin recargar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "Android · Paso 0 — producto de la promo agregado al carro",
     "file": "TC-B2C50-APP-011-android-p00-producto-de-la-promo-agregado-al-carro.png"
    },
    {
     "caption": "Android · Paso 2 — carro con el mensaje de promo",
     "file": "TC-B2C50-APP-011-android-p02-carro-con-el-mensaje-de-promo.png"
    },
    {
     "caption": "Android · Paso 4 — modal combina la promo",
     "file": "TC-B2C50-APP-011-android-p04-modal-combina-la-promo.png"
    },
    {
     "caption": "Android · Paso 5 — otro combinable agregado en el modal",
     "file": "TC-B2C50-APP-011-android-p05-otro-combinable-agregado-en-el-modal.png"
    },
    {
     "caption": "Android · Paso 6 — carro con el mensaje actualizado",
     "file": "TC-B2C50-APP-011-android-p06-carro-con-el-mensaje-actualizado.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C50-APP-011-android.png"
    }
   ],
   "spec": "tests-app/B2C-50.spec.ts:71",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el CTA \"›\" del shelf de 000000000000666200-UN.\n4. El sistema abre el modal Combina la promo.\n5. El usuario toca \"Agregar\" en otro producto combinable del modal y cierra el modal.",
   "test_data": "v1.0.7, iOS, 3, 000000000000666200-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El mensaje \"Te faltan N para la promo\" desaparece junto con el producto y 000000000000675191-UN no muestra mensaje de promo.",
   "form_factor": "app",
   "id": "TC-B2C50-APP-012",
   "name": "Verificar que al eliminar los productos de la promo el mensaje desaparece [App] [Guest]",
   "observation": "Causa: {SKU_COMPLETA_PROMO_3X2} = 000000000641229001-UN (Lay's Stax original 134 g) tiene en DEV una promo de tipo Combina, no 'Completa' del mismo SKU: en la búsqueda muestra 'Combina la promo' y en el carro 'Te faltan 2 para la promo. Ver productos combinables' (con CTA). Acción: declarar un SKU con promo Completa 3x2 del mismo SKU. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades\n- El carro también contiene 000000000000675191-UN (sin promo)",
   "screenshots": [
    {
     "caption": "Exploración: carro con 641229001 ('Te faltan 2… Ver productos combinables') y 666200 ('Te faltan 1…')",
     "file": "e-carro.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario elimina 000000000641229001-UN del carro con el ícono de eliminar.",
   "test_data": "v1.0.7, iOS, 000000000641229001-UN, 000000000000675191-UN"
  }
 ]
}
-->
