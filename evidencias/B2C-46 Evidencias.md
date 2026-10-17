# B2C-46 - Modal "Están de vuelta" - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-46 |
| Última actualización | 2026-10-14 |
| Ejecutado por | Victor Chirinos |
| Ambiente | Storefront DEV https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ · Desktop: chromium · Mobile: webkit |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-46 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 2 |
| Bloqueado Data | 2 |
| **Total** | **4** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-14 | 4 | TC-B2C46-D-005, TC-B2C46-D-006, TC-B2C46-M-005, TC-B2C46-M-006 |

## Detalle por caso de prueba

### TC-B2C46-D-005 - Verificar que si ningún no disponible recuperó stock no se muestra el modal [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (login por correo + OTP)
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN sigue sin stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.

**Resultado esperado**

No se muestra el modal "Están de vuelta" y el carrito se presenta con 000000000400254005-UN en la sección de no disponibles.

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con Retiro en esa tienda el buscador lo muestra con "Agregar" (re-verificado 2026-10-14, ver B2C-39), así que no queda en la sección de no disponibles. La cuenta {USER_AUTH_001} ya inicia sesión (alias con OTP accesible). Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-46 Evidencias/B2C-46-expl-sku-no-disponible-con-stock.png>)

---

### TC-B2C46-D-006 - Verificar que un logueado sin productos no disponibles no ve el modal [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | Chromium |
| Spec | tests/B2C-46.spec.ts:71 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (login por correo + OTP)
- El carro contiene solo 000000000000675191-UN (disponible)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.

**Resultado esperado**

El carrito se carga directamente en su estado habitual, sin el modal "Están de vuelta".

**Resultado obtenido**

Con sesión iniciada con cuenta de comprador vhchirinos+comprador (login por correo + OTP) y el carro solo con 000000000000675191-UN (Albondigas Super Pollo espaciales congeladas 300 g), el carro carga en su estado habitual ("Mi Carro", 1 unidad) sin el modal "Están de vuelta".

**Evidencia**

![Sesión iniciada con la cuenta de comprador](<B2C-46 Evidencias/TC-B2C46-D-006-p00-sesion-iniciada.png>)

![Paso 2 — carro cargado](<B2C-46 Evidencias/TC-B2C46-D-006-p02-carro-cargado.png>)

![Resultado — carro sin el modal "Están de vuelta"](<B2C-46 Evidencias/TC-B2C46-D-006.png>)

---

### TC-B2C46-M-005 - Verificar que si ningún no disponible recuperó stock no se muestra el modal [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (login por correo + OTP)
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN sigue sin stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.

**Resultado esperado**

No se muestra el modal "Están de vuelta" y el carrito se presenta con 000000000400254005-UN en la sección de no disponibles.

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con Retiro en esa tienda el buscador lo muestra con "Agregar" (re-verificado 2026-10-14, ver B2C-39), así que no queda en la sección de no disponibles. La cuenta {USER_AUTH_001} ya inicia sesión (alias con OTP accesible). Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-46 Evidencias/B2C-46-expl-sku-no-disponible-con-stock.png>)

---

### TC-B2C46-M-006 - Verificar que un logueado sin productos no disponibles no ve el modal [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | WebKit |
| Spec | tests/B2C-46.spec.ts:71 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (login por correo + OTP)
- El carro contiene solo 000000000000675191-UN (disponible)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.

**Resultado esperado**

El carrito se carga directamente en su estado habitual, sin el modal "Están de vuelta".

**Resultado obtenido**

Con sesión iniciada con cuenta de comprador vhchirinos+comprador (login por correo + OTP) y el carro solo con 000000000000675191-UN (Albondigas Super Pollo espaciales congeladas 300 g), el carro carga en su estado habitual ("Mi Carro", 1 unidad) sin el modal "Están de vuelta".

**Evidencia**

![Sesión iniciada con la cuenta de comprador](<B2C-46 Evidencias/TC-B2C46-M-006-p00-sesion-iniciada.png>)

![Paso 2 — carro cargado](<B2C-46 Evidencias/TC-B2C46-M-006-p02-carro-cargado.png>)

![Resultado — carro sin el modal "Están de vuelta"](<B2C-46 Evidencias/TC-B2C46-M-006.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "Storefront DEV https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ · Desktop: chromium · Mobile: webkit",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-46",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-46 Test Cases.xlsx",
  "title": "B2C-46 - Modal \"Están de vuelta\" - Evidencias QA",
  "updated_at": "2026-10-14"
 },
 "history": {
  "2026-10-14": [
   "TC-B2C46-D-005",
   "TC-B2C46-D-006",
   "TC-B2C46-M-005",
   "TC-B2C46-M-006"
  ]
 },
 "results": [
  {
   "executed_at": "2026-10-14",
   "expected": "No se muestra el modal \"Están de vuelta\" y el carrito se presenta con 000000000400254005-UN en la sección de no disponibles.",
   "form_factor": "desktop",
   "id": "TC-B2C46-D-005",
   "name": "Verificar que si ningún no disponible recuperó stock no se muestra el modal [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con Retiro en esa tienda el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14, ver B2C-39), así que no queda en la sección de no disponibles. La cuenta {USER_AUTH_001} ya inicia sesión (alias con OTP accesible). Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (login por correo + OTP)\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN sigue sin stock",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-46-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (login por correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "Chromium",
   "executed_at": "2026-10-14",
   "expected": "El carrito se carga directamente en su estado habitual, sin el modal \"Están de vuelta\".",
   "form_factor": "desktop",
   "id": "TC-B2C46-D-006",
   "name": "Verificar que un logueado sin productos no disponibles no ve el modal [Desktop] [Logueado]",
   "observed": "Con sesión iniciada con cuenta de comprador vhchirinos+comprador (login por correo + OTP) y el carro solo con 000000000000675191-UN (Albondigas Super Pollo espaciales congeladas 300 g), el carro carga en su estado habitual (\"Mi Carro\", 1 unidad) sin el modal \"Están de vuelta\".",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (login por correo + OTP)\n- El carro contiene solo 000000000000675191-UN (disponible)",
   "screenshots": [
    {
     "caption": "Sesión iniciada con la cuenta de comprador",
     "file": "TC-B2C46-D-006-p00-sesion-iniciada.png"
    },
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C46-D-006-p02-carro-cargado.png"
    },
    {
     "caption": "Resultado — carro sin el modal \"Están de vuelta\"",
     "file": "TC-B2C46-D-006.png"
    }
   ],
   "spec": "tests/B2C-46.spec.ts:71",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (login por correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "No se muestra el modal \"Están de vuelta\" y el carrito se presenta con 000000000400254005-UN en la sección de no disponibles.",
   "form_factor": "mobile",
   "id": "TC-B2C46-M-005",
   "name": "Verificar que si ningún no disponible recuperó stock no se muestra el modal [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con Retiro en esa tienda el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14, ver B2C-39), así que no queda en la sección de no disponibles. La cuenta {USER_AUTH_001} ya inicia sesión (alias con OTP accesible). Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (login por correo + OTP)\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN sigue sin stock",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-46-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (login por correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "WebKit",
   "executed_at": "2026-10-14",
   "expected": "El carrito se carga directamente en su estado habitual, sin el modal \"Están de vuelta\".",
   "form_factor": "mobile",
   "id": "TC-B2C46-M-006",
   "name": "Verificar que un logueado sin productos no disponibles no ve el modal [Mobile] [Logueado]",
   "observed": "Con sesión iniciada con cuenta de comprador vhchirinos+comprador (login por correo + OTP) y el carro solo con 000000000000675191-UN (Albondigas Super Pollo espaciales congeladas 300 g), el carro carga en su estado habitual (\"Mi Carro\", 1 unidad) sin el modal \"Están de vuelta\".",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (login por correo + OTP)\n- El carro contiene solo 000000000000675191-UN (disponible)",
   "screenshots": [
    {
     "caption": "Sesión iniciada con la cuenta de comprador",
     "file": "TC-B2C46-M-006-p00-sesion-iniciada.png"
    },
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C46-M-006-p02-carro-cargado.png"
    },
    {
     "caption": "Resultado — carro sin el modal \"Están de vuelta\"",
     "file": "TC-B2C46-M-006.png"
    }
   ],
   "spec": "tests/B2C-46.spec.ts:71",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (login por correo + OTP)",
   "viewport": "390x844"
  }
 ]
}
-->
