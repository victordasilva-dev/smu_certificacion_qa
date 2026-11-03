# Scripts de apoyo

## OTP manual

`node scripts/otp-manual.cjs` mantiene abierto el puente por archivos. Playwright crea una
solicitud única en `.qa/otp/pedidos/`; el operador escribe el código recibido en la terminal y el
puente lo entrega en el archivo correlacionado. No se guardan códigos fijos en el repositorio.

## Plantillas Excel

Requiere `openpyxl` (`pip install openpyxl`). Primero inspecciona un fuente:

```bash
python scripts/qa_excel_template.py inspect ".qa/respaldo/B2C-121 Test Cases.antes-121.xlsx"
```

Genera una copia en una carpeta nueva, sin tocar el original:

```bash
python scripts/qa_excel_template.py clone ".qa/respaldo/B2C-121 Test Cases.antes-121.xlsx" \
  --output-dir reportes/excel
```

Para actualizar únicamente estados de CP existentes, usa un JSON creado desde datos reales:

```bash
python scripts/qa_excel_template.py update fuente.xlsx --output-dir reportes/excel \
  --status-map estados.json
```

El script conserva hojas, fórmulas, estilos y orden de columnas; no inventa casos ni convierte
`TBD` en valores confirmados. Validación básica: ejecutar `inspect` sobre el archivo generado y
comprobar que las hojas y encabezados coinciden con el fuente.
