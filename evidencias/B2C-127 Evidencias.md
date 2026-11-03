# B2C-127 — Ejecución y archivo

- Fecha: 2026-10-28.
- El libro contiene 26 casos, D/M-001 a D/M-013.
- D/M-001 a D/M-007 (14 casos): **Bloqueado Data**. `{DIRECCION_SIN_SLA}` resolvió a una dirección de despacho con ventana activa («Jue 29/10, 09:00 hrs.»; entrega $2.990), así que el sitio no mostró «Por ahora no hay horarios disponibles». Playwright verificó esta condición en D-001 y D-002; D-003 quedó interrumpido en el mismo paso. Los 11 casos restantes de este grupo no se lanzaron porque comparten esa precondición.
- D/M-008 a D/M-013 (12 casos): **Bloqueado Data**. La maestra contiene `{TIENDA_RETIRO_SIN_SLA}` sin valor, por lo que no se puede seleccionar la tienda requerida.
- OTP: no solicitado.
- El resumen cuenta las 26 filas. La planilla quedó archivada en `Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-127 Test Cases.xlsx` y ya no está en «Para Ejecutar».
- Spec de ejecución: `tests/B2C-127.spec.ts`.
- Captura del flujo observado: `evidencias/B2C-127 Evidencias/TC-B2C127-D-001-direccion-resuelve-con-ventana.png`.
