# B2C-126 — reejecución de casos con OTP

- D-013: Rechazado. OTP ingresado; la página no mostró «Se agotaron» en 45 s.
- M-005: Bloqueado Data. Falta un SKU que cumpla la condición de no tener stock en la tienda de destino. No pidió OTP; el carro mostró «Están de vuelta» y agregó Quix, por lo que la condición de agotado no se reprodujo en el estado actual.
- La corrida completa anterior tuvo 4 aprobados y 22 fallidos, pero los resultados por CP no se conservaron al relanzar estos dos casos. Esta copia actualiza D-013 y M-005; los otros 24 conservan el estado de origen (Pendiente), sin inventar resultados.
- La hoja RESULTADOS y sus fórmulas se preservaron como estaban en el archivo fuente.
