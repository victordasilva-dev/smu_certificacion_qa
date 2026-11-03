#!/usr/bin/env python3
"""Inspecciona y copia plantillas de casos sin modificar los Excel fuente.

Uso:
  python scripts/qa_excel_template.py inspect archivo.xlsx
  python scripts/qa_excel_template.py clone archivo.xlsx --output-dir reportes/excel
  python scripts/qa_excel_template.py update archivo.xlsx --output-dir reportes/excel --status-map estados.json

El mapa opcional debe ser JSON {"TC-ID": "Estado"}; solo actualiza filas existentes.
No crea casos, no reemplaza TBD y conserva hojas, fórmulas, estilos y orden de columnas.
"""
import argparse
import json
from copy import copy
from pathlib import Path
from openpyxl import load_workbook


def inspect(source: Path) -> None:
    wb = load_workbook(source, read_only=True, data_only=False)
    print(f"Archivo: {source}")
    print(f"Hojas: {', '.join(wb.sheetnames)}")
    for ws in wb.worksheets:
        headers = [c.value for c in next(ws.iter_rows(min_row=1, max_row=1))]
        print(f"- {ws.title}: {ws.max_row} filas x {ws.max_column} columnas")
        print("  encabezados:", json.dumps(headers, ensure_ascii=False))
        for row in ws.iter_rows(min_row=2, max_row=min(ws.max_row, 3), values_only=True):
            print("  muestra:", json.dumps(list(row), ensure_ascii=False, default=str)[:500])


def clone(source: Path, output_dir: Path, status_map: Path | None) -> Path:
    output_dir.mkdir(parents=True, exist_ok=True)
    target = output_dir / f"{source.stem}.generado{source.suffix}"
    wb = load_workbook(source, data_only=False)
    changes = 0
    updates = json.loads(status_map.read_text(encoding="utf-8")) if status_map else {}
    if not isinstance(updates, dict):
        raise SystemExit("--status-map debe contener un objeto JSON {CP-ID: Estado}")
    for ws in wb.worksheets:
        headers = [c.value for c in ws[1]]
        if "CP-ID" not in headers or "Estado" not in headers:
            continue
        cp_col, state_col = headers.index("CP-ID") + 1, headers.index("Estado") + 1
        for row in range(2, ws.max_row + 1):
            cp = ws.cell(row, cp_col).value
            if cp in updates:
                ws.cell(row, state_col).value = updates[cp]
                changes += 1
    wb.save(target)
    print(f"Generado: {target}")
    print(f"Actualizaciones de estado: {changes}")
    return target


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("action", choices=["inspect", "clone", "update"])
    parser.add_argument("source", type=Path)
    parser.add_argument("--output-dir", type=Path, default=Path("reportes/excel"))
    parser.add_argument("--status-map", type=Path)
    args = parser.parse_args()
    if not args.source.is_file():
        raise SystemExit(f"No existe el Excel fuente: {args.source}")
    if args.action == "inspect":
        inspect(args.source)
    else:
        clone(args.source, args.output_dir, args.status_map if args.action == "update" else None)


if __name__ == "__main__":
    main()
