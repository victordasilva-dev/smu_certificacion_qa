# B2C-189 - Informe de bloqueos por umbral

| Campo | Valor |
|---|---|
| Fecha | 2026-11-03 |
| Planilla | B2C-189 APP Test Cases.xlsx |
| Umbral | 30% de los TC pendientes de la corrida (Bloqueado + Bloqueado Data) |
| TC pendientes de la corrida | 11 (los bloqueos que la planilla ya traia de antes no cuentan) |
| Bloqueados | 4 |
| **Porcentaje** | **36.4%** |
| Decision | **Se detuvo la HU**: el umbral se alcanzo; los TC sin correr quedan en `Pendiente` |

## Estado de los TC pendientes de la corrida

| Estado | TCs |
|---|---:|
| Aprobado | 5 |
| Bloqueado Data | 4 |
| Pendiente | 2 |

## Bloqueos por causa

| Estado | Causa | TCs | % de los pendientes | Accion requerida |
|---|---|---:|---:|---|
| Bloqueado Data | token(s) {SKU_VALID_001} | 2 | 18.2% | - |
| Bloqueado Data | token(s) {DIRECCION_DESPACHO_001}, {DIRECCION_MISMA_TIENDA} | 1 | 9.1% | - |
| Bloqueado Data | token(s) {SKU_STOCK_SOLO_TIENDA_A}, {TIENDA_RETIRO_002} | 1 | 9.1% | - |

## Detalle por TC bloqueado

### Bloqueado Data - token(s) {SKU_VALID_001} (2)

- `TC-B2C189-APP-005` - Verificar que una nueva dirección con todo disponible actualiza la tarjeta y las ventanas [App] [Logueado]
- `TC-B2C189-APP-006` - Verificar que una nueva tienda con todo disponible actualiza la tarjeta y las ventanas [App] [Logueado]

### Bloqueado Data - token(s) {DIRECCION_DESPACHO_001}, {DIRECCION_MISMA_TIENDA} (1)

- `TC-B2C189-APP-015` - Verificar que una dirección de la misma tienda abastecedora se actualiza sin validar productos [App] [Logueado]

### Bloqueado Data - token(s) {SKU_STOCK_SOLO_TIENDA_A}, {TIENDA_RETIRO_002} (1)

- `TC-B2C189-APP-018` - Verificar que una nueva tienda de retiro con producto no disponible activa el flujo de no disponibles [App] [Logueado]

## TC que quedaron sin correr (siguen `Pendiente`)

`TC-B2C189-APP-007`, `TC-B2C189-APP-008`

## Aviso

Umbral alcanzado: avisar a **Juan Carlos Moran** y enviarle este informe como evidencia del umbral.

