# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: B2C-26.spec.ts >> B2C-26 pendientes · Desktop >> TC-B2C26-D-004 · El invitado ve su dirección activa y el logueado ve las guardadas y Google/GPS [Desktop] (Desktop)
- Location: tests/B2C-26.spec.ts:1015:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[role="dialog"]').filter({ hasText: /elige tu m[ée]todo de entrega|direcci[óo]n manual/i }).visible().first().getByText(/^direcciones guardadas$/i)
Expected: visible
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('[role="dialog"]').filter({ hasText: /elige tu m[ée]todo de entrega|direcci[óo]n manual/i }).visible().first().getByText(/^direcciones guardadas$/i) with timeout 30000ms
  - waiting for locator('[role="dialog"]').filter({ hasText: /elige tu m[ée]todo de entrega|direcci[óo]n manual/i }).visible().first().getByText(/^direcciones guardadas$/i)

```

```yaml
- link "Skip to Content":
  - /url: "#chakra-skip-nav"
- banner:
  - button "Unimarc":
    - img "Unimarc"
  - button "Categorías":
    - img
    - text: Categorías
  - textbox "¿Qué estás buscando?"
  - button "Hola, Karl Paul Fin"
  - 'button "Mi carrito, número de artículos: 1"':
    - img
    - text: "1"
  - 'button "Camino La Fuente 15… Desde: Jue 29/10, 09:00 hrs. $2.990"':
    - paragraph: Camino La Fuente 15…
    - paragraph: "Desde: Jue 29/10, 09:00 hrs."
    - paragraph: $2.990
  - list:
    - listitem:
      - link "Ofertas":
        - /url: /ofertas
    - listitem:
      - link "Marketplace":
        - /url: /marketplace
    - listitem:
      - link "Locales y horarios":
        - /url: /locales
  - button "Suscríbete a Unimarc":
    - paragraph: Suscríbete a
    - img "UNIMARC"
- main:
  - link "Ramazzotti Aperitivo":
    - /url: /category/bebidas-y-licores
    - img "Ramazzotti Aperitivo"
  - link "Asaíto":
    - /url: /category/carnes
    - img "Asaíto"
  - link "Lácteos":
    - /url: /category/lacteos-huevos-y-refrigerados
    - img "Lácteos"
  - button "Anterior":
    - img
  - button "Siguiente":
    - img
  - heading "Los más vendidos" [level=3]
  - link "Mostrar todo":
    - /url: /category/carnes
  - link "Chuletas de cordero Simunovic 600 g":
    - /url: /chuletas-de-cordero-simunovic-600-g/000000000000653082-UN.html
    - img "Chuletas de cordero Simunovic 600 g"
  - button "Guardar en favoritos"
  - paragraph: $18.990
  - paragraph: ($31.650 x kg)
  - link "Simunovic | Chuletas de cordero Simunovic 600 g":
    - /url: /chuletas-de-cordero-simunovic-600-g/000000000000653082-UN.html
  - text: 600 g
  - button "Agregar"
  - link "Abastero vacuno Nacional al vacío 1.8 Kg":
    - /url: /abastero-vacuno-nacional-al-vacio-1.8-kg/000000000000028594-KGV.html
    - img "Abastero vacuno Nacional al vacío 1.8 Kg"
  - button "Guardar en favoritos"
  - paragraph: $11.190
  - paragraph: ($6.217 x kg)
  - link "Nacional | Abastero vacuno Nacional al vacío 1.8 Kg":
    - /url: /abastero-vacuno-nacional-al-vacio-1.8-kg/000000000000028594-KGV.html
  - text: 1.8 kg
  - button "Agregar"
  - link "Albondigas Super Pollo espaciales congeladas 300 g":
    - /url: /albondigas-super-pollo-espaciales-congeladas-300-g/000000000000675191-UN.html
    - img "Albondigas Super Pollo espaciales congeladas 300 g"
  - button "Guardar en favoritos"
  - paragraph: $2.490
  - paragraph: ($8.300 x kg)
  - text: Pronto disponible
  - link "Super Pollo | Albondigas Super Pollo espaciales congeladas 3…":
    - /url: /albondigas-super-pollo-espaciales-congeladas-300-g/000000000000675191-UN.html
  - text: 300 g
  - button "Ver similares"
  - link "Alitas trutro de pollo Super Pollo congelado 800 g":
    - /url: /alitas-trutro-de-pollo-super-pollo-congelado-800-g/000000000000748600-UN.html
    - img "Alitas trutro de pollo Super Pollo congelado 800 g"
  - button "Guardar en favoritos"
  - paragraph: $4.390
  - paragraph: ($5.488 x kg)
  - link "Super Pollo | Alitas trutro de pollo Super Pollo congelado 8…":
    - /url: /alitas-trutro-de-pollo-super-pollo-congelado-800-g/000000000000748600-UN.html
  - text: 800 g
  - button "Agregar"
  - link "Carne molida 4% grasa tártaro Fundo Río Alegre 250 g":
    - /url: /carne-molida-4-grasa-tartaro-fundo-rio-alegre-250-g/000000000000662457-UN.html
    - img "Carne molida 4% grasa tártaro Fundo Río Alegre 250 g"
  - button "Quitar de favoritos" [pressed]
  - paragraph: $2.897
  - paragraph: ($11.588 x kg)
  - paragraph: $3.890
  - paragraph: ($15.560 x kg)
  - link "Fundo Rio Alegre | Carne molida 4% grasa tártaro Fundo Río A…":
    - /url: /carne-molida-4-grasa-tartaro-fundo-rio-alegre-250-g/000000000000662457-UN.html
  - text: 250 g
  - button "Agregar"
  - link "Carne molida 4% grasa vacuno Fundo Río Alegre tártaro 250 g":
    - /url: /carne-molida-4-grasa-vacuno-fundo-rio-alegre-tartaro-250-g/000000000000652051-UN.html
    - img "Carne molida 4% grasa vacuno Fundo Río Alegre tártaro 250 g"
  - button "Guardar en favoritos"
  - paragraph: $2.897
  - paragraph: ($11.588 x kg)
  - paragraph: $3.890
  - paragraph: ($15.560 x kg)
  - link "Fundo Rio Alegre | Carne molida 4% grasa vacuno Fundo Río Al…":
    - /url: /carne-molida-4-grasa-vacuno-fundo-rio-alegre-tartaro-250-g/000000000000652051-UN.html
  - text: 250 g
  - button "Agregar"
  - link "Carne molida fundo rio alegre tartaro 4% grasa 500g":
    - /url: /carne-molida-fundo-rio-alegre-tartaro-4-grasa-500g/000000000000666200-UN.html
    - img "Carne molida fundo rio alegre tartaro 4% grasa 500g"
  - text: Promoción Lleva 2 unidades por Monto
  - button "Quitar de favoritos" [pressed]
  - paragraph: Lleva 2 por $10.866
  - paragraph: ($10.866 x kg)
  - text: Lleva 2 por $12.490
  - paragraph: ($12.490 x kg)
  - paragraph: $7.690 c/u
  - paragraph: ($15.380 x kg)
  - link "Fundo Rio Alegre | Carne molida fundo rio alegre tartaro 4% …":
    - /url: /carne-molida-fundo-rio-alegre-tartaro-4-grasa-500g/000000000000666200-UN.html
  - text: 500 g
  - button "Combina la promo chevron-right":
    - paragraph: Combina la promo
    - img "chevron-right"
  - button "Agregar"
  - link "Carne molida tartaro fundo río alegre 4% grasa 500g":
    - /url: /carne-molida-tartaro-fundo-rio-alegre-4-grasa-500g/000000000000666285-UN.html
    - img "Carne molida tartaro fundo río alegre 4% grasa 500g"
  - text: Promoción Lleva 2 unidades por Monto
  - button "Quitar de favoritos" [pressed]
  - paragraph: Lleva 2 por $10.866
  - paragraph: ($10.866 x kg)
  - text: Lleva 2 por $12.490
  - paragraph: ($12.490 x kg)
  - paragraph: $7.690 c/u
  - paragraph: ($15.380 x kg)
  - link "Fundo Rio Alegre | Carne molida tartaro fundo río alegre 4% …":
    - /url: /carne-molida-tartaro-fundo-rio-alegre-4-grasa-500g/000000000000666285-UN.html
  - text: 500 g
  - button "Combina la promo chevron-right":
    - paragraph: Combina la promo
    - img "chevron-right"
  - button "Agregar"
  - link "Choclillo vacuno Nacional al vacío 1.3 Kg":
    - /url: /choclillo-vacuno-nacional-al-vacio-1.3-kg/000000000000028597-KGV.html
    - img "Choclillo vacuno Nacional al vacío 1.3 Kg"
  - button "Guardar en favoritos"
  - paragraph: $11.990
  - paragraph: ($9.223 x kg)
  - link "Nacional | Choclillo vacuno Nacional al vacío 1.3 Kg":
    - /url: /choclillo-vacuno-nacional-al-vacio-1.3-kg/000000000000028597-KGV.html
  - text: 1.3 kg
  - button "Agregar"
  - link "Chuleta centro de cerdo Super Cerdo bandeja 550 g":
    - /url: /chuleta-centro-de-cerdo-super-cerdo-bandeja-550-g/000000000000626717-UN.html
    - img "Chuleta centro de cerdo Super Cerdo bandeja 550 g"
  - button "Guardar en favoritos"
  - paragraph: $4.890
  - paragraph: ($8.891 x kg)
  - link "Super Cerdo | Chuleta centro de cerdo Super Cerdo bandeja 55…":
    - /url: /chuleta-centro-de-cerdo-super-cerdo-bandeja-550-g/000000000000626717-UN.html
  - text: 550 g
  - button "Agregar"
  - link "Chuleta centro de cerdo Super Cerdo congelado 750 g":
    - /url: /chuleta-centro-de-cerdo-super-cerdo-congelado-750-g/000000000000627635-UN.html
    - img "Chuleta centro de cerdo Super Cerdo congelado 750 g"
  - button "Guardar en favoritos"
  - paragraph: $6.291
  - paragraph: ($8.388 x kg)
  - text: 10%
  - paragraph: $6.291
  - paragraph: ($8.388 x kg)
  - paragraph: "Antes: $6.990"
  - link "Super Cerdo | Chuleta centro de cerdo Super Cerdo congelado …":
    - /url: /chuleta-centro-de-cerdo-super-cerdo-congelado-750-g/000000000000627635-UN.html
  - text: 750 g
  - button "Agregar"
  - link "Chuleta parrillera de cordero congelado caja 1.5 Kg":
    - /url: /chuleta-parrillera-de-cordero-congelado-caja-1.5-kg/000000000000219902-UN.html
    - img "Chuleta parrillera de cordero congelado caja 1.5 Kg"
  - button "Guardar en favoritos"
  - paragraph: $43.990
  - link "Chuleta parrillera de cordero congelado caja 1.5 Kg":
    - /url: /chuleta-parrillera-de-cordero-congelado-caja-1.5-kg/000000000000219902-UN.html
  - text: 1.5 kg
  - button "Agregar"
  - button "Anterior":
    - img
  - button "Siguiente":
    - img
  - link "Logo":
    - /url: /category/frutas-y-verduras
    - img "Logo"
  - paragraph: "45"
  - paragraph: días
  - paragraph: ":"
  - paragraph: "07"
  - paragraph: horas
  - paragraph: ":"
  - paragraph: "38"
  - paragraph: minutos
  - paragraph: ":"
  - paragraph: "10"
  - paragraph: segundos
  - link "Agua saborizada Más manzana 1.6 L":
    - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
    - img "Agua saborizada Más manzana 1.6 L"
  - button "Guardar en favoritos"
  - paragraph: $1.290
  - link "Agua saborizada Más manzana 1.6 L":
    - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
  - text: 1.6 l
  - button "Agregar"
  - link "Choclo bandeja 2 un":
    - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
    - img "Choclo bandeja 2 un"
  - button "Guardar en favoritos"
  - paragraph: $2.550
  - paragraph: ($1.275 x unidad)
  - text: Pronto disponible
  - link "Frutas y Verduras | Choclo bandeja 2 un":
    - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
  - text: 2 un
  - button "Ver similares"
  - link "Choclo cocida Proverde bolsa 500 gr":
    - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
    - img "Choclo cocida Proverde bolsa 500 gr"
  - button "Guardar en favoritos"
  - paragraph
  - text: Pronto disponible
  - link "Proverde | Choclo cocida Proverde bolsa 500 gr":
    - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
  - button "Ver similares"
  - link "Clementina malla 1 Kg":
    - /url: /clementina-malla-1-kg/000000000000037966-UN.html
    - img "Clementina malla 1 Kg"
  - button "Guardar en favoritos"
  - paragraph: $2.490
  - link "Frutas y Verduras | Clementina malla 1 Kg":
    - /url: /clementina-malla-1-kg/000000000000037966-UN.html
  - text: 1 kg
  - button "Agregar"
  - link "Clementina malla 1 Kg":
    - /url: /clementina-malla-1-kg/000000000010037966-UN.html
    - img "Clementina malla 1 Kg"
  - button "Guardar en favoritos"
  - paragraph: $1.999
  - link "Frutas y Verduras | Clementina malla 1 Kg":
    - /url: /clementina-malla-1-kg/000000000010037966-UN.html
  - text: 1 kg
  - button "Agregar"
  - link "Clementinas granel 500 g":
    - /url: /clementinas-granel-500-g/000000000000037969-KG.html
    - img "Clementinas granel 500 g"
  - button "Guardar en favoritos"
  - paragraph: $1.375
  - paragraph: ($2.750 x kg)
  - link "Frutas y Verduras | Clementinas granel 500 g":
    - /url: /clementinas-granel-500-g/000000000000037969-KG.html
  - text: 500 g
  - button "Agregar"
  - link "Clementinas granel 500 g":
    - /url: /clementinas-granel-500-g/000000000010037969-KG.html
    - img "Clementinas granel 500 g"
  - button "Guardar en favoritos"
  - paragraph: $1.999
  - paragraph: ($3.998 x kg)
  - link "Frutas y Verduras | Clementinas granel 500 g":
    - /url: /clementinas-granel-500-g/000000000010037969-KG.html
  - text: 500 g
  - button "Agregar"
  - link "Kiwi bolsa 1 Kg":
    - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
    - img "Kiwi bolsa 1 Kg"
  - text: Promoción % Unipay
  - button "Guardar en favoritos"
  - paragraph: $2.601
  - text: 10%
  - paragraph: $2.601
  - paragraph: "Antes: $2.890"
  - link "Frutas y Verduras | Kiwi bolsa 1 Kg":
    - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
  - text: 1 kg
  - button "Agregar"
  - link "Kiwi bolsa 1 Kg":
    - /url: /kiwi-bolsa-1-kg/000000000010062644-UN.html
    - img "Kiwi bolsa 1 Kg"
  - button "Guardar en favoritos"
  - paragraph: $1.999
  - link "Frutas y Verduras | Kiwi bolsa 1 Kg":
    - /url: /kiwi-bolsa-1-kg/000000000010062644-UN.html
  - text: 1 kg
  - button "Agregar"
  - link "Limón granel 500 g":
    - /url: /limon-granel-500-g/000000000000553212-KG.html
    - img "Limón granel 500 g"
  - button "Guardar en favoritos"
  - paragraph: $995
  - paragraph: ($1.990 x l)
  - link "Frutas y Verduras | Limón granel 500 g":
    - /url: /limon-granel-500-g/000000000000553212-KG.html
  - text: 500 g
  - button "Agregar"
  - link "Limón granel 500 g":
    - /url: /limon-granel-500-g/000000000010553212-KG.html
    - img "Limón granel 500 g"
  - button "Guardar en favoritos"
  - paragraph: $1.999
  - paragraph: ($3.998 x l)
  - link "Frutas y Verduras | Limón granel 500 g":
    - /url: /limon-granel-500-g/000000000010553212-KG.html
  - text: 500 g
  - button "Agregar"
  - link "Mangos granel 500 g":
    - /url: /mangos-granel-500-g/000000000000037972-KG.html
    - img "Mangos granel 500 g"
  - button "Guardar en favoritos"
  - paragraph: $2.790
  - paragraph: ($5.580 x kg)
  - link "Frutas Y Verduras | Mangos granel 500 g":
    - /url: /mangos-granel-500-g/000000000000037972-KG.html
  - text: 500 g
  - button "Agregar"
  - link:
    - /url: /category/frutas-y-verduras
  - heading "Categorías destacadas" [level=2]
  - link "Orgánico Orgánico":
    - /url: /category/frutas-y-verduras
    - img "Orgánico"
    - paragraph: Orgánico
  - link "Comida en casa Comida en casa":
    - /url: /category/congelados
    - img "Comida en casa"
    - paragraph: Comida en casa
  - link "Panadería Panadería":
    - /url: /category/panaderia-y-pasteleria
    - img "Panadería"
    - paragraph: Panadería
  - link "Pastelería Pastelería":
    - /url: /category/panaderia-y-pasteleria
    - img "Pastelería"
    - paragraph: Pastelería
  - link "Celebraciones Celebraciones":
    - /url: /category/bebidas-y-licores
    - img "Celebraciones"
    - paragraph: Celebraciones
  - link "Higiene personal Higiene personal":
    - /url: /category/limpieza
    - img "Higiene personal"
    - paragraph: Higiene personal
  - link "Limpieza Limpieza":
    - /url: /category/limpieza
    - img "Limpieza"
    - paragraph: Limpieza
  - heading "Cada día, una ocasión" [level=3]
  - link "Mostrar todo":
    - /url: /search?q=ofertas
  - paragraph: Encuentra aquí todo lo que necesitas y más
  - link "Asaíto Asaíto":
    - /url: /category/carnes
    - img "Asaíto"
    - paragraph: Asaíto
  - link "Picoteo Picoteo":
    - /url: /category/despensa
    - img "Picoteo"
    - paragraph: Picoteo
  - link "Orgánico Orgánico":
    - /url: /category/frutas-y-verduras
    - img "Orgánico"
    - paragraph: Orgánico
  - link "Colaciones Colaciones":
    - /url: /category/desayuno-y-dulces
    - img "Colaciones"
    - paragraph: Colaciones
  - button "Anterior" [disabled]:
    - img
  - button "Siguiente":
    - img
  - link "OFERTA OFERTA Mecadito Unimarc 40 % dcto":
    - /url: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/frutas-y-verduras_frutas
    - img "OFERTA"
    - paragraph: OFERTA
    - paragraph: Mecadito Unimarc
    - paragraph: "40"
    - paragraph: "%"
    - paragraph: dcto
  - heading "Frescura y calidad" [level=3]
  - link "Mostrar todo":
    - /url: /category/frutas-y-verduras
  - paragraph: Frutas y verduras
  - link "Agua saborizada Más manzana 1.6 L":
    - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
    - img "Agua saborizada Más manzana 1.6 L"
  - button "Guardar en favoritos"
  - paragraph: $1.290
  - link "Agua saborizada Más manzana 1.6 L":
    - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
  - text: 1.6 l
  - button "Agregar"
  - link "Choclo bandeja 2 un":
    - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
    - img "Choclo bandeja 2 un"
  - button "Guardar en favoritos"
  - paragraph: $2.550
  - paragraph: ($1.275 x unidad)
  - text: Pronto disponible
  - link "Frutas y Verduras | Choclo bandeja 2 un":
    - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
  - text: 2 un
  - button "Ver similares"
  - link "Choclo cocida Proverde bolsa 500 gr":
    - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
    - img "Choclo cocida Proverde bolsa 500 gr"
  - button "Guardar en favoritos"
  - paragraph
  - text: Pronto disponible
  - link "Proverde | Choclo cocida Proverde bolsa 500 gr":
    - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
  - button "Ver similares"
  - link "Clementina malla 1 Kg":
    - /url: /clementina-malla-1-kg/000000000000037966-UN.html
    - img "Clementina malla 1 Kg"
  - button "Guardar en favoritos"
  - paragraph: $2.490
  - link "Frutas y Verduras | Clementina malla 1 Kg":
    - /url: /clementina-malla-1-kg/000000000000037966-UN.html
  - text: 1 kg
  - button "Agregar"
  - link "Clementina malla 1 Kg":
    - /url: /clementina-malla-1-kg/000000000010037966-UN.html
    - img "Clementina malla 1 Kg"
  - button "Guardar en favoritos"
  - paragraph: $1.999
  - link "Frutas y Verduras | Clementina malla 1 Kg":
    - /url: /clementina-malla-1-kg/000000000010037966-UN.html
  - text: 1 kg
  - button "Agregar"
  - link "Clementinas granel 500 g":
    - /url: /clementinas-granel-500-g/000000000000037969-KG.html
    - img "Clementinas granel 500 g"
  - button "Guardar en favoritos"
  - paragraph: $1.375
  - paragraph: ($2.750 x kg)
  - link "Frutas y Verduras | Clementinas granel 500 g":
    - /url: /clementinas-granel-500-g/000000000000037969-KG.html
  - text: 500 g
  - button "Agregar"
  - link "Clementinas granel 500 g":
    - /url: /clementinas-granel-500-g/000000000010037969-KG.html
    - img "Clementinas granel 500 g"
  - button "Guardar en favoritos"
  - paragraph: $1.999
  - paragraph: ($3.998 x kg)
  - link "Frutas y Verduras | Clementinas granel 500 g":
    - /url: /clementinas-granel-500-g/000000000010037969-KG.html
  - text: 500 g
  - button "Agregar"
  - link "Kiwi bolsa 1 Kg":
    - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
    - img "Kiwi bolsa 1 Kg"
  - text: Promoción % Unipay
  - button "Guardar en favoritos"
  - paragraph: $2.601
  - text: 10%
  - paragraph: $2.601
  - paragraph: "Antes: $2.890"
  - link "Frutas y Verduras | Kiwi bolsa 1 Kg":
    - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
  - text: 1 kg
  - button "Agregar"
  - button "Anterior":
    - img
  - button "Siguiente":
    - img
  - heading "Prende la parrilla" [level=3]
  - link "Mostrar todo":
    - /url: /search?q=parrilla
  - paragraph: Disfruta de un rico Asaito
  - link "Parrilla — banner principal":
    - /url: /search?q=parrilla
    - img "Parrilla — banner principal"
  - link "Choripanes a la parrilla":
    - /url: /category/carnes
    - img "Choripanes a la parrilla"
  - link "Guarniciones":
    - /url: /search?q=guarniciones
    - img "Guarniciones"
  - link "Cortes premium":
    - /url: /category/carnes
    - img "Cortes premium"
  - link "Tabla y picoteo":
    - /url: /search?q=picoteo
    - img "Tabla y picoteo"
  - link "40% dcto Chocolates Milka Variedades 40 % dcto":
    - /url: /category/panaderia-y-pasteleria
    - paragraph: 40% dcto
    - paragraph: Chocolates Milka Variedades
    - paragraph: "40"
    - paragraph: "%"
    - paragraph: dcto
  - heading "Chocolates Milka" [level=3]
  - link "Mostrar todo":
    - /url: /category/panaderia-y-pasteleria
  - paragraph: Endulza tu día
  - link "Galleta Alteza bocado 140 g":
    - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
    - img "Galleta Alteza bocado 140 g"
  - button "Guardar en favoritos"
  - paragraph: $1.180
  - link "Galleta Alteza bocado 140 g":
    - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
  - text: 140 g
  - button "Agregar"
  - link "Galleta mini Dos en Uno chocolate 35 g":
    - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
    - img "Galleta mini Dos en Uno chocolate 35 g"
  - button "Guardar en favoritos"
  - paragraph: $280
  - link "Galleta mini Dos en Uno chocolate 35 g":
    - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
  - text: 35 g
  - button "Agregar"
  - link "Galleta Oreo clásica vainilla 108 g":
    - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
    - img "Galleta Oreo clásica vainilla 108 g"
  - button "Guardar en favoritos"
  - text: Unipay $757
  - paragraph: ($6.882 x kg)
  - paragraph: $890
  - paragraph: ($8.091 x kg)
  - link "Oreo | Galleta Oreo clásica vainilla 108 g":
    - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
  - text: 108 g
  - button "Agregar"
  - link "Galletas con mermelada La Galleteria 300 g":
    - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
    - img "Galletas con mermelada La Galleteria 300 g"
  - button "Quitar de favoritos" [pressed]
  - paragraph: $4.990
  - link "Galletas con mermelada La Galleteria 300 g":
    - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
  - text: 300 g
  - button "Agregar"
  - link "Pan baguette plus Crandon 1 un":
    - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
    - img "Pan baguette plus Crandon 1 un"
  - button "Guardar en favoritos"
  - paragraph: $1.290
  - paragraph: ($4.607 x kg)
  - link "Europastry | Pan baguette plus Crandon 1 un":
    - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
  - text: 1 un
  - button "Agregar"
  - link "Pan ciabatta granel Amada Masa 500 g":
    - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
    - img "Pan ciabatta granel Amada Masa 500 g"
  - button "Guardar en favoritos"
  - paragraph: $1.495
  - paragraph: ($2.990 x kg)
  - link "Amada Masa | Pan ciabatta granel Amada Masa 500 g":
    - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
  - text: 500 g
  - button "Agregar"
  - link "Pan hot dog granel Amada Masa 500 g":
    - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
    - img "Pan hot dog granel Amada Masa 500 g"
  - button "Guardar en favoritos"
  - paragraph: $2.990
  - paragraph: ($5.980 x kg)
  - link "Amada Masa | Pan hot dog granel Amada Masa 500 g":
    - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
  - text: 500 g
  - button "Agregar"
  - link "Pan marraqueta granel Amada Masa 500 g":
    - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
    - img "Pan marraqueta granel Amada Masa 500 g"
  - button "Guardar en favoritos"
  - paragraph: $1.095
  - link "Pan marraqueta granel Amada Masa 500 g":
    - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
  - text: 500 g
  - button "Agregar"
  - button "Anterior":
    - img
  - button "Siguiente":
    - img
  - link "Abarrotes y despensa":
    - /url: /search?q=despensa
    - img "Abarrotes y despensa"
  - heading "Nuestras marcas" [level=2]
  - link "Mostrar todo":
    - /url: /category/panaderia-y-pasteleria
  - tab "Amada masa" [selected]
  - tab "Azul"
  - tab "Como en casa"
  - tab "D-kora"
  - tab "Fundo Río al"
  - tab "Nubelín"
  - tab "Nuestra coci"
  - tab "Smart Clean"
  - tab "Tento"
  - link "Galleta Alteza bocado 140 g":
    - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
    - img "Galleta Alteza bocado 140 g"
  - button "Guardar en favoritos"
  - paragraph: $1.180
  - link "Galleta Alteza bocado 140 g":
    - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
  - text: 140 g
  - button "Agregar"
  - link "Galleta mini Dos en Uno chocolate 35 g":
    - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
    - img "Galleta mini Dos en Uno chocolate 35 g"
  - button "Guardar en favoritos"
  - paragraph: $280
  - link "Galleta mini Dos en Uno chocolate 35 g":
    - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
  - text: 35 g
  - button "Agregar"
  - link "Galleta Oreo clásica vainilla 108 g":
    - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
    - img "Galleta Oreo clásica vainilla 108 g"
  - button "Guardar en favoritos"
  - text: Unipay $757
  - paragraph: ($6.882 x kg)
  - paragraph: $890
  - paragraph: ($8.091 x kg)
  - link "Oreo | Galleta Oreo clásica vainilla 108 g":
    - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
  - text: 108 g
  - button "Agregar"
  - link "Galletas con mermelada La Galleteria 300 g":
    - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
    - img "Galletas con mermelada La Galleteria 300 g"
  - button "Quitar de favoritos" [pressed]
  - paragraph: $4.990
  - link "Galletas con mermelada La Galleteria 300 g":
    - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
  - text: 300 g
  - button "Agregar"
  - link "Pan baguette plus Crandon 1 un":
    - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
    - img "Pan baguette plus Crandon 1 un"
  - button "Guardar en favoritos"
  - paragraph: $1.290
  - paragraph: ($4.607 x kg)
  - link "Europastry | Pan baguette plus Crandon 1 un":
    - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
  - text: 1 un
  - button "Agregar"
  - link "Pan ciabatta granel Amada Masa 500 g":
    - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
    - img "Pan ciabatta granel Amada Masa 500 g"
  - button "Guardar en favoritos"
  - paragraph: $1.495
  - paragraph: ($2.990 x kg)
  - link "Amada Masa | Pan ciabatta granel Amada Masa 500 g":
    - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
  - text: 500 g
  - button "Agregar"
  - link "Pan hot dog granel Amada Masa 500 g":
    - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
    - img "Pan hot dog granel Amada Masa 500 g"
  - button "Guardar en favoritos"
  - paragraph: $2.990
  - paragraph: ($5.980 x kg)
  - link "Amada Masa | Pan hot dog granel Amada Masa 500 g":
    - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
  - text: 500 g
  - button "Agregar"
  - link "Pan marraqueta granel Amada Masa 500 g":
    - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
    - img "Pan marraqueta granel Amada Masa 500 g"
  - button "Guardar en favoritos"
  - paragraph: $1.095
  - link "Pan marraqueta granel Amada Masa 500 g":
    - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
  - text: 500 g
  - button "Agregar"
  - link "Pan marraqueta Prosepan 500 g":
    - /url: /pan-marraqueta-prosepan-500-g/000000000000030202-KG.html
    - img "Pan marraqueta Prosepan 500 g"
  - button "Guardar en favoritos"
  - paragraph: $1.095
  - paragraph: ($2.190 x kg)
  - link "Pan marraqueta Prosepan 500 g":
    - /url: /pan-marraqueta-prosepan-500-g/000000000000030202-KG.html
  - text: 500 g
  - button "Agregar"
  - link "Pan pita integral granel Amada Masa 500 g":
    - /url: /pan-pita-integral-granel-amada-masa-500-g/000000000000614468-KG.html
    - img "Pan pita integral granel Amada Masa 500 g"
  - button "Guardar en favoritos"
  - paragraph: $2.890
  - link "Pan pita integral granel Amada Masa 500 g":
    - /url: /pan-pita-integral-granel-amada-masa-500-g/000000000000614468-KG.html
  - text: 500 g
  - button "Agregar"
  - button "Anterior":
    - img
  - button "Siguiente":
    - img
  - link "Banner Productos Not Variedades 30 % dcto":
    - /url: /category/bebidas-y-licores
    - img "Banner"
    - paragraph: Productos Not Variedades
    - paragraph: "30"
    - paragraph: "%"
    - paragraph: dcto
  - heading "Especial Bebidas" [level=3]
  - link "Mostrar todo":
    - /url: /category/bebidas-y-licores
  - paragraph: Bebidas vegetales y más
  - link "Cerveza Austral lager lata 470 cc":
    - /url: /cerveza-austral-lager-lata-470-cc/000000000000694333-UN.html
    - img "Cerveza Austral lager lata 470 cc"
  - button "Guardar en favoritos"
  - paragraph: $2.090
  - paragraph: ($4.447 x L)
  - link "Austral | Cerveza Austral lager lata 470 cc":
    - /url: /cerveza-austral-lager-lata-470-cc/000000000000694333-UN.html
  - text: 470 cc
  - button "Agregar"
  - link "Cerveza Budweiser zero botella 6 un de 330 cc":
    - /url: /cerveza-budweiser-zero-botella-6-un-de-330-cc/000000000000663675-UN.html
    - img "Cerveza Budweiser zero botella 6 un de 330 cc"
  - button "Guardar en favoritos"
  - paragraph: $7.790
  - paragraph: ($23.606 x L)
  - link "Budweiser | Cerveza Budweiser zero botella 6 un de 330 cc":
    - /url: /cerveza-budweiser-zero-botella-6-un-de-330-cc/000000000000663675-UN.html
  - text: 6 un
  - button "Agregar"
  - link "Cerveza Corona extra lata 6 un de 473 cc":
    - /url: /cerveza-corona-extra-lata-6-un-de-473-cc/000000000000686446-UN.html
    - img "Cerveza Corona extra lata 6 un de 473 cc"
  - button "Guardar en favoritos"
  - paragraph: $6.890
  - paragraph: ($14.567 x L)
  - link "Corona | Cerveza Corona extra lata 6 un de 473 cc":
    - /url: /cerveza-corona-extra-lata-6-un-de-473-cc/000000000000686446-UN.html
  - text: 6 un
  - button "Agregar"
  - link "Cerveza Cristal lager botella 650 cc":
    - /url: /cerveza-cristal-lager-botella-650-cc/000000000000686452-UN.html
    - img "Cerveza Cristal lager botella 650 cc"
  - button "Guardar en favoritos"
  - paragraph: $1.350
  - paragraph: ($2.077 x L)
  - link "Cristal Cerveza | Cerveza Cristal lager botella 650 cc":
    - /url: /cerveza-cristal-lager-botella-650-cc/000000000000686452-UN.html
  - text: 650 cc
  - button "Agregar"
  - link "Cerveza Duvel moorgat botella 330 cc":
    - /url: /cerveza-duvel-moorgat-botella-330-cc/000000000000536215-UN.html
    - img "Cerveza Duvel moorgat botella 330 cc"
  - button "Guardar en favoritos"
  - paragraph: $3.550
  - link "Cerveza Duvel moorgat botella 330 cc":
    - /url: /cerveza-duvel-moorgat-botella-330-cc/000000000000536215-UN.html
  - text: 330 cc
  - button "Agregar"
  - link "Cerveza Royal golden lager lata 6 un de 470 cc":
    - /url: /cerveza-royal-golden-lager-lata-6-un-de-470-cc/000000000000674841-DIS.html
    - img "Cerveza Royal golden lager lata 6 un de 470 cc"
  - button "Guardar en favoritos"
  - paragraph: $7.290
  - paragraph: ($15.511 x L)
  - link "Royal Guard | Cerveza Royal golden lager lata 6 un de 470 cc":
    - /url: /cerveza-royal-golden-lager-lata-6-un-de-470-cc/000000000000674841-DIS.html
  - text: 6 un
  - button "Agregar"
  - link "Cerveza sabor sandía Stones 350ml":
    - /url: /cerveza-sabor-sandia-stones-350ml/000000000000689879-UN.html
    - img "Cerveza sabor sandía Stones 350ml"
  - button "Guardar en favoritos"
  - paragraph: $6.590
  - paragraph: ($18.829 x L)
  - link "Stones | Cerveza sabor sandía Stones 350ml":
    - /url: /cerveza-sabor-sandia-stones-350ml/000000000000689879-UN.html
  - text: 350 ml
  - button "Agregar"
  - link "Cerveza Stones berries lata 6 un de 350 ml":
    - /url: /cerveza-stones-berries-lata-6-un-de-350-ml/000000000000671971-UN.html
    - img "Cerveza Stones berries lata 6 un de 350 ml"
  - button "Guardar en favoritos"
  - paragraph: $6.590
  - paragraph: ($18.829 x L)
  - link "Stones | Cerveza Stones berries lata 6 un de 350 ml":
    - /url: /cerveza-stones-berries-lata-6-un-de-350-ml/000000000000671971-UN.html
  - text: 6 un
  - button "Agregar"
  - button "Anterior":
    - img
  - button "Siguiente":
    - img
  - heading "Tus productos mas comprados" [level=2]
  - link "Ver todos":
    - /url: /account/my-usuals
  - link "Galletas con mermelada La Galleteria 300 g":
    - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
    - img "Galletas con mermelada La Galleteria 300 g"
  - button "Quitar de favoritos" [pressed]
  - paragraph: $4.990
  - link "Galletas con mermelada La Galleteria 300 g":
    - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
  - text: 300 g
  - button "Agregar"
  - link "Carne molida 4% grasa tártaro Fundo Río Alegre 250 g":
    - /url: /carne-molida-4-grasa-tartaro-fundo-rio-alegre-250-g/000000000000662457-UN.html
    - img "Carne molida 4% grasa tártaro Fundo Río Alegre 250 g"
  - button "Quitar de favoritos" [pressed]
  - paragraph: $2.897
  - paragraph: ($11.588 x kg)
  - paragraph: $3.890
  - paragraph: ($15.560 x kg)
  - link "Fundo Rio Alegre | Carne molida 4% grasa tártaro Fundo Río A…":
    - /url: /carne-molida-4-grasa-tartaro-fundo-rio-alegre-250-g/000000000000662457-UN.html
  - text: 250 g
  - button "Agregar"
  - link "Tapapecho vacuno al vacío 2.2 Kg":
    - /url: /tapapecho-vacuno-al-vacio-2.2-kg/000000000000029403-KG.html
    - img "Tapapecho vacuno al vacío 2.2 Kg"
  - text: Promoción en Carnes
  - button "Quitar de favoritos" [pressed]
  - paragraph: $9.490
  - paragraph: ($4.314 x kg)
  - text: 5%
  - paragraph: $9.490
  - paragraph: ($4.314 x kg)
  - paragraph: "Antes: $9.990"
  - text: Pronto disponible
  - link "Brasil Paraguay | Tapapecho vacuno al vacío 2.2 Kg":
    - /url: /tapapecho-vacuno-al-vacio-2.2-kg/000000000000029403-KG.html
  - text: 2.2 kg
  - button "Ver similares"
  - link "Carne molida fundo rio alegre tartaro 4% grasa 500g":
    - /url: /carne-molida-fundo-rio-alegre-tartaro-4-grasa-500g/000000000000666200-UN.html
    - img "Carne molida fundo rio alegre tartaro 4% grasa 500g"
  - text: Promoción Lleva 2 unidades por Monto
  - button "Quitar de favoritos" [pressed]
  - paragraph: Lleva 2 por $10.866
  - paragraph: ($10.866 x kg)
  - text: Lleva 2 por $12.490
  - paragraph: ($12.490 x kg)
  - paragraph: $7.690 c/u
  - paragraph: ($15.380 x kg)
  - link "Fundo Rio Alegre | Carne molida fundo rio alegre tartaro 4% …":
    - /url: /carne-molida-fundo-rio-alegre-tartaro-4-grasa-500g/000000000000666200-UN.html
  - text: 500 g
  - button "Combina la promo chevron-right":
    - paragraph: Combina la promo
    - img "chevron-right"
  - button "Agregar"
  - link "Trapero húmedo Nova desinfectante 10 un":
    - /url: /trapero-humedo-nova-desinfectante-10-un/000000000000666306-UN.html
    - img "Trapero húmedo Nova desinfectante 10 un"
  - button "Guardar en favoritos"
  - paragraph: $3.890
  - paragraph: ($389 x unidad)
  - link "Nova | Trapero húmedo Nova desinfectante 10 un":
    - /url: /trapero-humedo-nova-desinfectante-10-un/000000000000666306-UN.html
  - text: 10 un
  - button "Agregar"
  - button "Ver productos anteriores"
  - button "Ver más productos"
  - paragraph: Contrata la membresía
  - paragraph: Obtén despachos gratis y ilimitados por compras sobre $20.000 y descuentos exclusivos
  - link "Comienza tus 15 días gratis":
    - /url: /membresia
  - button "Pausar video":
    - img
  - heading "TÉRMINOS Y CONDICIONES UNIMARC" [level=2]
  - paragraph: El acceso y uso del sitio web www.unimarc.cl y de la aplicación móvil Unimarc (ambos indistintamente “Unimarc.cl”) por u
  - button "1. Registro del Cliente" [expanded]
  - region "1. Registro del Cliente":
    - paragraph: Será requisito para la adquisición de productos y servicios ofrecidos en Unimarc.cl, estar registrado en éste, ser mayor de 18 años, y al momento de la compra aceptar estos T&C y su Política de Privacidad. El acceso y registro será gratuito.
  - button "2. Clave de acceso secreta"
  - button "3. Derechos del Cliente"
  - button "4. Procedimiento para hacer uso de Unima"
- contentinfo:
  - link "Centro de ayuda Aquí encontrarás preguntas frecuentes y mucho más":
    - /url: /centro-de-ayuda
    - paragraph: Centro de ayuda
    - paragraph: Aquí encontrarás preguntas frecuentes y mucho más
  - link "Seguimiento de compra Revisa el estado y detalle de tu compra":
    - /url: /seguimiento-de-compra
    - paragraph: Seguimiento de compra
    - paragraph: Revisa el estado y detalle de tu compra
  - link "Whatsapp clientes Escríbenos de 9:00 a 20:00 horas":
    - /url: https://wa.me/56958701477
    - paragraph: Whatsapp clientes
    - paragraph: Escríbenos de 9:00 a 20:00 horas
  - button "Contáctanos":
    - paragraph: Contáctanos
  - paragraph: Unimarc - Servicio al cliente
  - link "600 600 0025":
    - /url: tel:6006000025
  - paragraph: Llámanos de 9:00 a 20:00 horas
  - paragraph: Compras online
  - link "Crea una solicitud":
    - /url: /contacto/compras-online
  - link "despachosunimarc@unimarc.cl":
    - /url: mailto:despachosunimarc@unimarc.cl
  - paragraph: Tarjeta Unipay - Servicio al cliente
  - link "600 390 9000":
    - /url: tel:6003909000
  - paragraph: Llámanos de 9:00 a 20:00 horas
  - paragraph: Compras en tienda
  - link "Crea una solicitud":
    - /url: /contacto/compras-tienda
  - link "contacto.unimarc@unimarc.cl":
    - /url: mailto:contacto.unimarc@unimarc.cl
  - button "Servicio al cliente":
    - paragraph: Servicio al cliente
  - button "Nuestros programas":
    - paragraph: Nuestros programas
  - button "Nuestra empresa":
    - paragraph: Nuestra empresa
  - separator
  - list:
    - listitem:
      - link "Políticas de Cookies":
        - /url: /legales/cookies
  - paragraph: Síguenos
  - link "Facebook":
    - /url: https://www.facebook.com/unimarc
    - img
  - link "Instagram":
    - /url: https://www.instagram.com/unimarc
  - link "X":
    - /url: https://x.com/unimarc
    - img
  - link "YouTube":
    - /url: https://www.youtube.com/unimarc
    - img
- region
- region
- region
- region
- region
- region
```

# Test source

```ts
  928  |       page.on('response', async (r) => {
  929  |         if (/\/customers\/[^/]+\/orders/.test(r.url())) ordenes.push(await r.text().catch(() => ''));
  930  |       });
  931  |       const home = await new PaginaHabilitada(page).goto();
  932  |       await capturarEvidencia(home.header.barraDelSitio, cp, 2, 'Home sin sesión');
  933  |       await loginConOtp(page, testData);
  934  |       await page.context().storageState({ path: SESION });
  935  |       const enHeader = await home.header.esperarDireccionEnStoreLocator(45000);
  936  |       const texto = await textoHeader(page);
  937  |       await capturarEvidencia(home.header.barraDelSitio, cp, 4, `header: «${texto}»`);
  938  |       expect(texto, 'dirección + «Desde» + fecha + horario + precio').toMatch(/desde:\s*\S+\s+\d{1,2}\/\d{1,2},\s*\d{1,2}:\d{2}\s*hrs\.?\s*(\$[\d.]+|gratis)/i);
  939  |       // La última compra completada de {COMPRADOR_USER} es en {DIRECCION_DESPACHO_001} (Calle Uno 23).
  940  |       expect(enHeader, 'dirección de la última compra').toMatch(new RegExp(escapar(partes(token(testData, 'DIRECCION_DESPACHO_001')!).calle), 'i'));
  941  |     });
  942  | 
  943  |     test('TC-B2C26-M-032 · El header del invitado muestra la dirección de la sesión con el formato definido [Guest] (Mobile)', async ({ page, testData }) => {
  944  |       const cp = 'TC-B2C26-M-032';
  945  |       const dir = token(testData, 'DIRECCION_DESPACHO')!;
  946  |       const p = partes(dir);
  947  |       const { home } = await fijarComoInvitado(page, dir);
  948  |       const texto = await textoHeader(page);
  949  |       await capturarEvidencia(home.header.barraDelSitio, cp, 4, `header: «${texto}»`);
  950  |       const c = await home.header.composicionDelStoreLocator();
  951  |       expect.soft(c.iconos.filter((i) => i.dx < c.textoDx).length, 'ícono de despacho').toBeGreaterThan(0);
  952  |       expect.soft(c.iconos.filter((i) => i.dx > c.textoDx).length, 'ícono de edición').toBeGreaterThan(0);
  953  |       expect.soft(texto, 'calle y numeración').toMatch(new RegExp(`${escapar(p.calle)}\\s+${p.numero}`, 'i'));
  954  |       expect.soft(texto, `comuna (${p.comuna})`).toMatch(new RegExp(escapar(p.comuna), 'i'));
  955  |     });
  956  | 
  957  |     test('TC-B2C26-M-033 · La dirección del invitado no persiste al cerrar el navegador [Guest] (Mobile)', async ({ page, browser, testData }) => {
  958  |       const cp = 'TC-B2C26-M-033';
  959  |       const { home, enHeader } = await fijarComoInvitado(page, token(testData, 'DIRECCION_DESPACHO')!);
  960  |       await capturarEvidencia(home.header.barraDelSitio, cp, 4, `header: «${enHeader}»`);
  961  |       await page.context().close();
  962  |       const otra = await ventanaNueva(browser, page, testData);
  963  |       const home2 = await new PaginaHabilitada(otra).goto();
  964  |       await expect(home2.header.storeLocator).toContainText(/elige una forma de entrega/i, { timeout: 30000 });
  965  |       await capturarEvidencia(otra, cp);
  966  |       await otra.context().close();
  967  |     });
  968  | 
  969  |     test('TC-B2C26-M-035 · La dirección activa se mantiene en el header al navegar por el sitio [Logueado] (Mobile)', async ({ page, testData }) => {
  970  |       const cp = 'TC-B2C26-M-035';
  971  |       await iniciarSesion(page, testData);
  972  |       const home = await new PaginaHabilitada(page).goto();
  973  |       const activa = await home.header.esperarDireccionEnStoreLocator();
  974  |       const vistos = await recorrerSitio(page, testData, cp, home);
  975  |       for (const [pagina, valor] of Object.entries(vistos)) expect.soft(valor, `Store Locator en ${pagina}`).toBe(activa);
  976  |       await capturarEvidencia(page, cp);
  977  |     });
  978  | 
  979  |     test('TC-B2C26-M-036 · Al reiniciar sesión se recupera la dirección de la última compra o la última seteada [Logueado] (Mobile)', async ({ page, testData }) => {
  980  |       const cp = 'TC-B2C26-M-036';
  981  |       const home = await iniciarSesion(page, testData);
  982  |       const antes = await home.header.esperarDireccionEnStoreLocator();
  983  |       await capturarEvidencia(home.header.barraDelSitio, cp, 3, `dirección activa «${antes}»`);
  984  |       await new MenuCuenta(page).cerrarSesion();
  985  |       await capturarEvidencia(page, cp, 4, 'sesión cerrada');
  986  |       await loginConOtp(page, testData);
  987  |       await page.context().storageState({ path: SESION });
  988  |       const despues = await new HeaderFull(page).esperarDireccionEnStoreLocator(45000);
  989  |       await capturarEvidencia(new HeaderFull(page).barraDelSitio, cp, 5, `tras volver a iniciar sesión: «${despues}»`);
  990  |       expect(despues, 'misma dirección (última compra / última seteada)').toBe(antes);
  991  |     });
  992  | 
  993  |     test('TC-B2C26-M-037 · El formulario manual acepta +, - y / en la dirección [Guest] (Mobile)', async ({ page, testData }) => {
  994  |       await caracteresEspeciales(page, testData, 'TC-B2C26-M-037');
  995  |     });
  996  | 
  997  |     test('TC-B2C26-M-038 · Dirección manual sin numeración se ve con «S/N» [Guest] (Mobile)', async ({ page, testData }) => {
  998  |       await sinNumeroInvitado(page, testData, 'TC-B2C26-M-038');
  999  |     });
  1000 | 
  1001 |     test('TC-B2C26-M-039 · Dirección sin numeración se guarda en el perfil con «S/N» [Logueado] (Mobile)', async ({ page, testData }) => {
  1002 |       await sinNumeroLogueado(page, testData, 'TC-B2C26-M-039');
  1003 |     });
  1004 | 
  1005 |     test('TC-B2C26-M-040 · Plus Code de Google se agrega sin problemas [Guest] (Mobile)', async ({ page, testData }) => {
  1006 |       await plusCode(page, testData, 'TC-B2C26-M-040');
  1007 |     });
  1008 |   });
  1009 | });
  1010 | 
  1011 | // Casos pendientes cuyos valores se resolvieron desde la maestra de datos vigente.
  1012 | test.describe('B2C-26 pendientes · Desktop', () => {
  1013 |   test.use(DESKTOP);
  1014 | 
  1015 |   test('TC-B2C26-D-004 · El invitado ve su dirección activa y el logueado ve las guardadas y Google/GPS [Desktop] (Desktop)', async ({ page, testData }) => {
  1016 |     const cp = 'TC-B2C26-D-004';
  1017 |     const direccion = token(testData, 'DIRECCION_DESPACHO')!;
  1018 |     const { home } = await fijarComoInvitado(page, direccion);
  1019 |     await home.header.storeLocator.click();
  1020 |     let modal = await new MetodoEntregaModal(page).esperarAbierto();
  1021 |     await expect(modal.bloqueDireccionDespacho).toBeVisible();
  1022 |     await expect(modal.direccionActiva).toContainText(new RegExp(escapar(partes(direccion).calle), 'i'));
  1023 |     await capturarEvidencia(page, cp, 4, 'dirección activa del invitado');
  1024 | 
  1025 |     await modal.botonCerrar.click();
  1026 |     await loginConOtp(page, testData);
  1027 |     modal = new MetodoEntregaModal(page);
> 1028 |     await expect(modal.tituloDireccionesGuardadas).toBeVisible({ timeout: 30000 });
       |                                                    ^ Error: expect(locator).toBeVisible() failed
  1029 |     await expect(modal.campoBusqueda).toBeVisible();
  1030 |     await expect(modal.botonUbicacionActual).toBeVisible();
  1031 |     expect(await modal.direccionesGuardadas()).toHaveLength(1);
  1032 |     await capturarEvidencia(page, cp, 8, 'dirección activa y métodos del usuario logueado');
  1033 |   });
  1034 | 
  1035 |   test('TC-B2C26-D-007 · Denegar ubicación vuelve al modal y concederla lleva a B2C-99 [Desktop] (Desktop)', async ({ page, testData }) => {
  1036 |     const cp = 'TC-B2C26-D-007';
  1037 |     const origen = token(testData, 'BASE_URL')!.replace(/\/+$/, '');
  1038 |     await page.context().grantPermissions([], { origin: origen });
  1039 |     const { modal } = await abrirModal(page);
  1040 |     await modal.capturarModal(cp, 4, 'modal de entrega antes del permiso');
  1041 |     await modal.tocarUbicacionActual();
  1042 |     await expect(modal.modalPermisos, 'aviso cuando se deniega el permiso').toBeVisible({ timeout: 20000 });
  1043 |     await capturarEvidencia(modal.modalPermisos, cp, 6, 'permiso de ubicación denegado');
  1044 |     await modal.cerrarModalPermisos();
  1045 |     await expect(modal.encabezado).toBeVisible();
  1046 |     await expect(modal.botonUbicacionActual).toBeVisible();
  1047 | 
  1048 |     const lat = Number(token(testData, 'LATITUD_DESPACHO'));
  1049 |     const lng = Number(token(testData, 'LONGITUD_DESPACHO'));
  1050 |     await modal.concederUbicacion(lat, lng);
  1051 |     await modal.observarCarga();
  1052 |     await modal.tocarUbicacionActual();
  1053 |     await expect(modal.confirmacionPin, 'al conceder, se abre B2C-99').toBeVisible({ timeout: 30000 });
  1054 |     const centro = await modal.centroDelMapa();
  1055 |     expect(Math.abs(centro.lat - lat)).toBeLessThan(0.002);
  1056 |     expect(Math.abs(centro.lng - lng)).toBeLessThan(0.002);
  1057 |     await capturarEvidencia(page, cp);
  1058 |   });
  1059 | 
  1060 |   test('TC-B2C26-D-011 · Seleccionar dirección guardada distinta deriva al flujo correspondiente [Desktop] (Desktop)', async ({ page, testData }) => {
  1061 |     const cp = 'TC-B2C26-D-011';
  1062 |     const { modal } = await abrirModalLogueado(page, testData);
  1063 |     const guardadas = await modal.direccionesGuardadas();
  1064 |     const activa = await etiquetaActiva(modal);
  1065 |     const otra = guardadas.find((g) => g.etiqueta !== activa);
  1066 |     await capturarEvidencia(page, cp, 4, 'direcciones guardadas disponibles');
  1067 |     if (!otra) throw new Error('PRECONDICION_NO_DISPONIBLE: la cuenta solo muestra la dirección activa; no hay una dirección guardada distinta para ejecutar las ramas de B2C-26 D-011.');
  1068 | 
  1069 |     const desde = marcaOtp();
  1070 |     await modal.elegirGuardada(otra.etiqueta);
  1071 |     await otpSiAparece(page, testData, desde, 45000);
  1072 |     const derivacion = page.getByText(/sin horarios disponibles|a[uú]n no llegamos|algunos productos podr[ií]an agotarse/i).locator('visible=true').first();
  1073 |     const cambio = new HeaderFull(page).storeLocator;
  1074 |     await expect.poll(async () => (await derivacion.isVisible().catch(() => false)) || /desde:|\d{1,2}:\d{2}/i.test(await cambio.innerText().catch(() => '')), { timeout: 45000 }).toBe(true);
  1075 |     await capturarEvidencia(page, cp, 6, 'resultado al elegir otra dirección guardada');
  1076 |   });
  1077 | 
  1078 |   test('TC-B2C26-D-013 · La dirección del header respeta historial y dirección seteada en sesión [Desktop] (Desktop)', async ({ page, browser, testData }) => {
  1079 |     const cp = 'TC-B2C26-D-013';
  1080 |     await page.context().clearCookies();
  1081 |     await new PaginaHabilitada(page).goto();
  1082 |     await page.evaluate(() => localStorage.clear());
  1083 |     await page.reload({ waitUntil: 'domcontentloaded' });
  1084 |     await loginConOtp(page, testData, 'COMPRADOR_USER');
  1085 |     const conHistorial = await new HeaderFull(page).esperarDireccionEnStoreLocator(45000);
  1086 |     await capturarEvidencia(page, cp, 4, `dirección tras iniciar sesión con historial: ${conHistorial}`);
  1087 |     expect(conHistorial, 'el header presenta una dirección válida').toMatch(/\S+/);
  1088 | 
  1089 |     const nueva = await ventanaNueva(browser, page, testData);
  1090 |     const direccion = token(testData, 'DIRECCION_DESPACHO')!;
  1091 |     const { home } = await fijarComoInvitado(nueva, direccion);
  1092 |     await loginConOtp(nueva, testData, 'COMPRADOR_MEMBRESIA_USER');
  1093 |     const sinHistorial = await home.header.esperarDireccionEnStoreLocator(45000);
  1094 |     await capturarEvidencia(nueva, cp, 8, `dirección seteada en sesión sin historial: ${sinHistorial}`);
  1095 |     expect(sinHistorial.toLowerCase()).toContain(partes(direccion).calle.toLowerCase());
  1096 |     await nueva.context().close();
  1097 |   });
  1098 | });
  1099 | 
  1100 | test.describe('B2C-26 pendientes · Mobile', () => {
  1101 |   test.use(MOBILE);
  1102 | 
  1103 |   test('TC-B2C26-M-006 · Resultado de Google sin calle usa el texto como Calle y continúa al PIN [Mobile] (Mobile)', async ({ page }) => {
  1104 |     const cp = 'TC-B2C26-M-006';
  1105 |     const { modal } = await abrirModal(page);
  1106 |     const consultas = modal.observarConsultasAGoogle();
  1107 |     await modal.campoBusqueda.click();
  1108 |     await modal.campoBusqueda.pressSequentially('Providencia', { delay: 70 });
  1109 |     await expect(modal.sugerencias.first(), 'resultado de Google para la búsqueda indicada').toBeVisible({ timeout: 30000 });
  1110 |     await capturarEvidencia(page, cp, 6, 'resultados de Google para Providencia');
  1111 |     const sugerenciaComuna = consultas.respuestas.some((x) => /"(locality|administrative_area_level_\d|sublocality)"/i.test(x));
  1112 |     expect(sugerenciaComuna, 'Google debe ofrecer un resultado de comuna sin calle').toBe(true);
  1113 |     await modal.sugerencias.first().click();
  1114 |     await expect(modal.confirmacionPin).toBeVisible({ timeout: 30000 });
  1115 |     await modal.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
  1116 |     await expect(modal.confirmacionPin.getByRole('textbox').first()).toHaveValue(/Providencia/i);
  1117 |     await capturarEvidencia(page, cp);
  1118 |   });
  1119 | 
  1120 |   test('TC-B2C26-M-014 · Denegar ubicación vuelve al modal de entrega sin cambios [Mobile] (Mobile)', async ({ page, testData }) => {
  1121 |     const cp = 'TC-B2C26-M-014';
  1122 |     const origen = token(testData, 'BASE_URL')!.replace(/\/+$/, '');
  1123 |     await page.context().grantPermissions([], { origin: origen });
  1124 |     const { modal } = await abrirModal(page);
  1125 |     const antes = await modal.direccionActiva.textContent().catch(() => '');
  1126 |     await modal.tocarUbicacionActual();
  1127 |     await expect(modal.modalPermisos, 'aviso al denegar ubicación').toBeVisible({ timeout: 20000 });
  1128 |     await capturarEvidencia(modal.modalPermisos, cp, 6, 'aviso de permisos de ubicación');
```