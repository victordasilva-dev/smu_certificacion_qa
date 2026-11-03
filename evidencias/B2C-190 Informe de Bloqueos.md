# B2C-190 - Informe de bloqueos por umbral

| Campo | Valor |
|---|---|
| Fecha | 2026-11-03 |
| Planilla | B2C-190 APP Test Cases.xlsx |
| Umbral | 30% de los TC pendientes de la corrida (Bloqueado + Bloqueado Data) |
| TC pendientes de la corrida | 19 (los bloqueos que la planilla ya traia de antes no cuentan) |
| Bloqueados | 10 |
| **Porcentaje** | **52.6%** |
| Decision | **Se detuvo la HU**: el umbral se alcanzo; los TC sin correr quedan en `Pendiente` |

## Estado de los TC pendientes de la corrida

| Estado | TCs |
|---|---:|
| Bloqueado Data | 10 |
| Aprobado | 7 |
| Pendiente | 1 |
| Rechazado | 1 |

## Bloqueos por causa

| Estado | Causa | TCs | % de los pendientes | Accion requerida |
|---|---|---:|---:|---|
| Bloqueado Data | token(s) {RUT_TERCERO} | 9 | 47.4% | - |
| Bloqueado Data | token(s) {RUT_SIN_FORMATO}, {RUT_TERCERO} | 1 | 5.3% | - |

## Detalle por TC bloqueado

### Bloqueado Data - token(s) {RUT_TERCERO} (9)

- `TC-B2C190-APP-004` - Verificar que con datos válidos Guardar datos de tercero envía el OTP al correo del comprador [App] [Logueado]
- `TC-B2C190-APP-005` - Verificar que con OTP válido el tercero queda registrado y se muestra su resumen [App] [Logueado]
- `TC-B2C190-APP-007` - Verificar que Editar abre el modal con los datos del tercero precargados [App] [Logueado]
- `TC-B2C190-APP-008` - Verificar que guardar la edición actualiza el tercero sin pedir OTP [App] [Logueado]
- `TC-B2C190-APP-010` - Verificar que Lo recibiré yo elimina al tercero sin OTP y muestra el toast [App] [Logueado]
- `TC-B2C190-APP-018` - Verificar que al corregir el campo el error desaparece y se habilita el CTA [App] [Logueado]
- `TC-B2C190-APP-019` - Verificar que en la edición un dato inválido deja deshabilitado Guardar datos de tercero [App] [Logueado]
- `TC-B2C190-APP-020` - Verificar que el tercero se mantiene al salir y volver a Mis Envíos en la misma sesión [App] [Logueado]
- `TC-B2C190-APP-022` - Verificar que al generar la compra los datos del tercero se eliminan de la sesión [App] [Logueado]

### Bloqueado Data - token(s) {RUT_SIN_FORMATO}, {RUT_TERCERO} (1)

- `TC-B2C190-APP-013` - Verificar que un RUT sin puntos ni guion muestra Ingrese un valor válido [App] [Logueado]

## TC que quedaron sin correr (siguen `Pendiente`)

`TC-B2C190-APP-002`

## Aviso

Umbral alcanzado: avisar a **Juan Carlos Moran** y enviarle este informe como evidencia del umbral.

