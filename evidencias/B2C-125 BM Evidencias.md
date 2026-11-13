# B2C-125 BM - Preferencias OTP en Business Manager - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-125 BM |
| Última actualización | 2026-11-12 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-125 BM Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-12 | 2 | TC-B2C125-BM-001, TC-B2C125-BM-002 |

## Detalle por caso de prueba

### TC-B2C125-BM-001 - Verificar que al configurar otp.codeLength con un valor distinto a 6 el modal OTP muestra esa cantidad de campos [BM] [Administrador]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador BM
- Ubicacion: Business Manager (Site Unimarc)
- Cuenta logueada vhchirinos+comprador@avatar-global.com en el storefront con acceso a su casilla de correo
- La dirección activa de vhchirinos+comprador@avatar-global.com es Calle Uno 23, La Florida
- El valor actual de otp.codeLength es 6 (por defecto)

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

Cuenta: vhchirinos+comprador@avatar-global.com (contraseña no se transcribe)

Direcciones: Calle Uno 23, La Florida / A. Las Condes 14791, Lo Barnechea

Grupo de preferencias OTP: {BM_GRUPO_PREFERENCIAS_OTP} sin fila en el Excel de data

**Pasos ejecutados**

1. El usuario ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site con e_vgaldino@smu.cl.
2. El usuario abre Merchant Tools > Site Preferences > Custom Preferences > {BM_GRUPO_PREFERENCIAS_OTP}.
3. El usuario cambia otp.codeLength de 6 a 4 y guarda.
4. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con la sesión de vhchirinos+comprador@avatar-global.com y hace clic en el Store Locator del header.
5. El usuario ingresa la dirección A. Las Condes 14791, Lo Barnechea, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario cuenta los campos de ingreso del código y revisa el código recibido en el correo.
8. El usuario ingresa solo 3 dígitos y verifica que no puede continuar.
9. El usuario completa el cuarto dígito y hace clic en "Continuar".
10. El usuario vuelve a BM y restaura otp.codeLength a 6.

**Resultado esperado**

El modal "Autenticación requerida" muestra 4 campos de ingreso; el código recibido tiene 4 dígitos; con 3 dígitos no se permite continuar y con los 4 dígitos correctos la validación es exitosa y A. Las Condes 14791, Lo Barnechea queda seteada.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {BM_GRUPO_PREFERENCIAS_OTP} (grupo de Custom Preferences de BM donde viven otp.codeLength y otp.resendTimerSeconds) no tiene fila en el Excel de data. Acción: cargar el nombre del grupo en el Excel de data y re-ejecutar. No se abrió BM ni el storefront: no se cambió ninguna preferencia.

---

### TC-B2C125-BM-002 - Verificar que al modificar otp.resendTimerSeconds el temporizador de reenvío usa el nuevo valor [BM] [Administrador]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador BM
- Ubicacion: Business Manager (Site Unimarc)
- Cuenta logueada vhchirinos+comprador@avatar-global.com en el storefront con acceso a su casilla de correo
- La dirección activa de vhchirinos+comprador@avatar-global.com es Calle Uno 23, La Florida
- El valor actual de otp.resendTimerSeconds es 60 (por defecto)

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

Cuenta: vhchirinos+comprador@avatar-global.com (contraseña no se transcribe)

Direcciones: Calle Uno 23, La Florida / A. Las Condes 14791, Lo Barnechea

Grupo de preferencias OTP: {BM_GRUPO_PREFERENCIAS_OTP} sin fila en el Excel de data

**Pasos ejecutados**

1. El usuario ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site con e_vgaldino@smu.cl.
2. El usuario abre Merchant Tools > Site Preferences > Custom Preferences > {BM_GRUPO_PREFERENCIAS_OTP}.
3. El usuario cambia otp.resendTimerSeconds de 60 a 30 y guarda.
4. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con la sesión de vhchirinos+comprador@avatar-global.com y hace clic en el Store Locator del header.
5. El usuario ingresa la dirección A. Las Condes 14791, Lo Barnechea, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario revisa el valor inicial del temporizador "¿No recibiste el código? Pide uno nuevo en".
8. El usuario espera a que termine la cuenta regresiva (cronometrando).
9. El usuario vuelve a BM y restaura otp.resendTimerSeconds a 60.

**Resultado esperado**

El temporizador inicia en 30 segundos (no en 60), no permite reenviar mientras corre y a los 30 segundos se muestra la opción "Reenviar".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {BM_GRUPO_PREFERENCIAS_OTP} (grupo de Custom Preferences de BM donde viven otp.codeLength y otp.resendTimerSeconds) no tiene fila en el Excel de data. Acción: cargar el nombre del grupo en el Excel de data y re-ejecutar. No se abrió BM ni el storefront: no se cambió ninguna preferencia.

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-125 BM",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-125 BM Test Cases.xlsx",
  "title": "B2C-125 BM - Preferencias OTP en Business Manager - Evidencias QA",
  "updated_at": "2026-11-12"
 },
 "history": {
  "2026-11-12": [
   "TC-B2C125-BM-001",
   "TC-B2C125-BM-002"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "El modal \"Autenticación requerida\" muestra 4 campos de ingreso; el código recibido tiene 4 dígitos; con 3 dígitos no se permite continuar y con los 4 dígitos correctos la validación es exitosa y A. Las Condes 14791, Lo Barnechea queda seteada.",
   "form_factor": "bm",
   "id": "TC-B2C125-BM-001",
   "name": "Verificar que al configurar otp.codeLength con un valor distinto a 6 el modal OTP muestra esa cantidad de campos [BM] [Administrador]",
   "observation": "Causa: {BM_GRUPO_PREFERENCIAS_OTP} (grupo de Custom Preferences de BM donde viven otp.codeLength y otp.resendTimerSeconds) no tiene fila en el Excel de data. Acción: cargar el nombre del grupo en el Excel de data y re-ejecutar. No se abrió BM ni el storefront: no se cambió ninguna preferencia.",
   "observed": "No se ejecutó.",
   "preconditions": "- User type: Administrador BM\n- Ubicacion: Business Manager (Site Unimarc)\n- Cuenta logueada vhchirinos+comprador@avatar-global.com en el storefront con acceso a su casilla de correo\n- La dirección activa de vhchirinos+comprador@avatar-global.com es Calle Uno 23, La Florida\n- El valor actual de otp.codeLength es 6 (por defecto)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site con e_vgaldino@smu.cl.\n2. El usuario abre Merchant Tools > Site Preferences > Custom Preferences > {BM_GRUPO_PREFERENCIAS_OTP}.\n3. El usuario cambia otp.codeLength de 6 a 4 y guarda.\n4. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con la sesión de vhchirinos+comprador@avatar-global.com y hace clic en el Store Locator del header.\n5. El usuario ingresa la dirección A. Las Condes 14791, Lo Barnechea, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario cuenta los campos de ingreso del código y revisa el código recibido en el correo.\n8. El usuario ingresa solo 3 dígitos y verifica que no puede continuar.\n9. El usuario completa el cuarto dígito y hace clic en \"Continuar\".\n10. El usuario vuelve a BM y restaura otp.codeLength a 6.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nCuenta: vhchirinos+comprador@avatar-global.com (contraseña no se transcribe)\nDirecciones: Calle Uno 23, La Florida / A. Las Condes 14791, Lo Barnechea\nGrupo de preferencias OTP: {BM_GRUPO_PREFERENCIAS_OTP} sin fila en el Excel de data",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "El temporizador inicia en 30 segundos (no en 60), no permite reenviar mientras corre y a los 30 segundos se muestra la opción \"Reenviar\".",
   "form_factor": "bm",
   "id": "TC-B2C125-BM-002",
   "name": "Verificar que al modificar otp.resendTimerSeconds el temporizador de reenvío usa el nuevo valor [BM] [Administrador]",
   "observation": "Causa: {BM_GRUPO_PREFERENCIAS_OTP} (grupo de Custom Preferences de BM donde viven otp.codeLength y otp.resendTimerSeconds) no tiene fila en el Excel de data. Acción: cargar el nombre del grupo en el Excel de data y re-ejecutar. No se abrió BM ni el storefront: no se cambió ninguna preferencia.",
   "observed": "No se ejecutó.",
   "preconditions": "- User type: Administrador BM\n- Ubicacion: Business Manager (Site Unimarc)\n- Cuenta logueada vhchirinos+comprador@avatar-global.com en el storefront con acceso a su casilla de correo\n- La dirección activa de vhchirinos+comprador@avatar-global.com es Calle Uno 23, La Florida\n- El valor actual de otp.resendTimerSeconds es 60 (por defecto)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site con e_vgaldino@smu.cl.\n2. El usuario abre Merchant Tools > Site Preferences > Custom Preferences > {BM_GRUPO_PREFERENCIAS_OTP}.\n3. El usuario cambia otp.resendTimerSeconds de 60 a 30 y guarda.\n4. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con la sesión de vhchirinos+comprador@avatar-global.com y hace clic en el Store Locator del header.\n5. El usuario ingresa la dirección A. Las Condes 14791, Lo Barnechea, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario revisa el valor inicial del temporizador \"¿No recibiste el código? Pide uno nuevo en\".\n8. El usuario espera a que termine la cuenta regresiva (cronometrando).\n9. El usuario vuelve a BM y restaura otp.resendTimerSeconds a 60.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nCuenta: vhchirinos+comprador@avatar-global.com (contraseña no se transcribe)\nDirecciones: Calle Uno 23, La Florida / A. Las Condes 14791, Lo Barnechea\nGrupo de preferencias OTP: {BM_GRUPO_PREFERENCIAS_OTP} sin fila en el Excel de data",
   "viewport": "1440x900"
  }
 ]
}
-->
