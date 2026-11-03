# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: B2C-26.spec.ts >> B2C-26 pendientes · Desktop >> TC-B2C26-D-004 · El invitado ve su dirección activa y el logueado ve las guardadas y Google/GPS [Desktop] (Desktop)
- Location: tests/B2C-26.spec.ts:1015:7

# Error details

```
Error: expect(received).toHaveLength(expected)

Expected length: 1
Received length: 28
Received array:  [{"direccion": "Calle Uno 23, La Florida, Metropolitana", "etiqueta": "Casa", "tieneMenu": true}, {"direccion": "Avenida Las Condes 14791, Las Condes, Metropolitana", "etiqueta": "Avenida Las Condes …", "tieneMenu": true}, {"direccion": "Avenida Las Condes 14791, Las Condes, Metropolitana", "etiqueta": "Avenida Las Condes … (2)", "tieneMenu": true}, {"direccion": "Avenida Las Condes 14791, Las Condes, Metropolitana", "etiqueta": "Avenida Las Condes … (3)", "tieneMenu": true}, {"direccion": "Avenida Las Condes 14791, Las Condes, Metropolitana", "etiqueta": "Avenida Las Condes … (4)", "tieneMenu": true}, {"direccion": "Avenida Las Condes 14791, Las Condes, Metropolitana", "etiqueta": "Avenida Las Condes … (5)", "tieneMenu": true}, {"direccion": "Calle Uno 23, La Florida, Metropolitana", "etiqueta": "Calle Uno 23", "tieneMenu": true}, {"direccion": "Calle Uno 23, La Florida, Metropolitana", "etiqueta": "Calle Uno 23 (2)", "tieneMenu": true}, {"direccion": "Calle Uno 23, La Florida, Metropolitana", "etiqueta": "Calle Uno 23 (3)", "tieneMenu": true}, {"direccion": "Calle Uno 23, La Florida, Metropolitana", "etiqueta": "Calle Uno 23 (4)", "tieneMenu": true}, …]
```

# Page snapshot

```yaml
- generic [ref=f5e1]:
  - generic [ref=f5e4]:
    - link [aria-hidden] [ref=f5e5] [cursor=pointer]:
      - /url: "#chakra-skip-nav"
      - text: Skip to Content
    - banner [ref=f5e8]:
      - generic [ref=f5e10]:
        - generic [ref=f5e11]:
          - button [ref=f5e12] [cursor=pointer]
          - button [ref=f5e23] [cursor=pointer]: Categorías
        - textbox [ref=f5e30]:
          - /placeholder: ¿Qué estás buscando?
        - generic [ref=f5e31]:
          - button [ref=f5e32] [cursor=pointer]:
            - generic [aria-hidden] [ref=f5e33]: KP
            - generic [ref=f5e34]: Hola, Karl Paul Fin
          - button [ref=f5e35] [cursor=pointer]:
            - generic [ref=f5e38]: "1"
      - generic [ref=f5e41]:
        - button [ref=f5e43] [cursor=pointer]:
          - generic [ref=f5e54]:
            - paragraph [ref=f5e55]: Camino La Fuente 15…
            - generic [ref=f5e56]:
              - paragraph [ref=f5e57]: "Desde: Jue 29/10, 09:00 hrs."
              - paragraph [ref=f5e59]: $2.990
        - generic [ref=f5e63]:
          - list [ref=f5e66]:
            - listitem [ref=f5e67]:
              - link [ref=f5e68] [cursor=pointer]:
                - /url: /ofertas
                - text: Ofertas
            - listitem [ref=f5e69]:
              - link [ref=f5e70] [cursor=pointer]:
                - /url: /marketplace
                - text: Marketplace
            - listitem [ref=f5e71]:
              - link [ref=f5e72] [cursor=pointer]:
                - /url: /locales
                - text: Locales y horarios
          - button [ref=f5e73] [cursor=pointer]:
            - paragraph [ref=f5e75]: Suscríbete a
    - main [ref=f5e85]:
      - generic [ref=f5e91]:
        - generic [ref=f5e95]:
          - generic [ref=f5e97]:
            - link [ref=f5e102] [cursor=pointer]:
              - /url: /category/bebidas-y-licores
            - link [ref=f5e109] [cursor=pointer]:
              - /url: /category/carnes
            - link [ref=f5e116] [cursor=pointer]:
              - /url: /category/lacteos-huevos-y-refrigerados
          - button [ref=f5e121] [cursor=pointer]
          - button [ref=f5e124] [cursor=pointer]
        - generic [ref=f5e129]:
          - generic [ref=f5e134]:
            - generic [ref=f5e136]:
              - heading [level=3] [ref=f5e138]: Los más vendidos
              - link [ref=f5e140] [cursor=pointer]:
                - /url: /category/carnes
                - text: Mostrar todo
            - generic [ref=f5e141]:
              - generic [ref=f5e143]:
                - generic [ref=f5e145]:
                  - generic [ref=f5e146]:
                    - link [ref=f5e147] [cursor=pointer]:
                      - /url: /chuletas-de-cordero-simunovic-600-g/000000000000653082-UN.html
                    - button [ref=f5e149] [cursor=pointer]
                  - generic [ref=f5e152]:
                    - generic [ref=f5e154]:
                      - paragraph [ref=f5e155]: $18.990
                      - paragraph [ref=f5e156]: ($31.650 x kg)
                    - generic [ref=f5e157]:
                      - link [ref=f5e158] [cursor=pointer]:
                        - /url: /chuletas-de-cordero-simunovic-600-g/000000000000653082-UN.html
                        - generic [ref=f5e159]: Simunovic | Chuletas de cordero Simunovic 600 g
                      - generic [ref=f5e160]: 600 g
                  - button [ref=f5e163] [cursor=pointer]: Agregar
                - generic [ref=f5e165]:
                  - generic [ref=f5e166]:
                    - link [ref=f5e167] [cursor=pointer]:
                      - /url: /abastero-vacuno-nacional-al-vacio-1.8-kg/000000000000028594-KGV.html
                    - button [ref=f5e169] [cursor=pointer]
                  - generic [ref=f5e172]:
                    - generic [ref=f5e174]:
                      - paragraph [ref=f5e175]: $11.190
                      - paragraph [ref=f5e176]: ($6.217 x kg)
                    - generic [ref=f5e177]:
                      - link [ref=f5e178] [cursor=pointer]:
                        - /url: /abastero-vacuno-nacional-al-vacio-1.8-kg/000000000000028594-KGV.html
                        - generic [ref=f5e179]: Nacional | Abastero vacuno Nacional al vacío 1.8 Kg
                      - generic [ref=f5e180]: 1.8 kg
                  - button [ref=f5e183] [cursor=pointer]: Agregar
                - generic [ref=f5e185]:
                  - generic [ref=f5e186]:
                    - link [ref=f5e187] [cursor=pointer]:
                      - /url: /albondigas-super-pollo-espaciales-congeladas-300-g/000000000000675191-UN.html
                    - button [ref=f5e189] [cursor=pointer]
                  - generic [ref=f5e192]:
                    - generic [ref=f5e194]:
                      - paragraph [ref=f5e195]: $2.490
                      - paragraph [ref=f5e196]: ($8.300 x kg)
                    - generic [ref=f5e197]: Pronto disponible
                    - generic [ref=f5e199]:
                      - link [ref=f5e200] [cursor=pointer]:
                        - /url: /albondigas-super-pollo-espaciales-congeladas-300-g/000000000000675191-UN.html
                        - generic [ref=f5e201]: Super Pollo | Albondigas Super Pollo espaciales congeladas 3…
                      - generic [ref=f5e202]: 300 g
                  - button [ref=f5e205] [cursor=pointer]: Ver similares
                - generic [ref=f5e207]:
                  - generic [ref=f5e208]:
                    - link [ref=f5e209] [cursor=pointer]:
                      - /url: /alitas-trutro-de-pollo-super-pollo-congelado-800-g/000000000000748600-UN.html
                    - button [ref=f5e211] [cursor=pointer]
                  - generic [ref=f5e214]:
                    - generic [ref=f5e216]:
                      - paragraph [ref=f5e217]: $4.390
                      - paragraph [ref=f5e218]: ($5.488 x kg)
                    - generic [ref=f5e219]:
                      - link [ref=f5e220] [cursor=pointer]:
                        - /url: /alitas-trutro-de-pollo-super-pollo-congelado-800-g/000000000000748600-UN.html
                        - generic [ref=f5e221]: Super Pollo | Alitas trutro de pollo Super Pollo congelado 8…
                      - generic [ref=f5e222]: 800 g
                  - button [ref=f5e225] [cursor=pointer]: Agregar
                - generic [ref=f5e227]:
                  - generic [ref=f5e228]:
                    - link [ref=f5e229] [cursor=pointer]:
                      - /url: /carne-molida-4-grasa-tartaro-fundo-rio-alegre-250-g/000000000000662457-UN.html
                    - button [pressed] [ref=f5e231] [cursor=pointer]
                  - generic [ref=f5e234]:
                    - generic [ref=f5e235]:
                      - generic [ref=f5e236]:
                        - generic [ref=f5e237]:
                          - generic [aria-hidden] [ref=f5e238]: 💎
                          - paragraph [ref=f5e239]: $2.897
                        - paragraph [ref=f5e240]: ($11.588 x kg)
                      - generic [ref=f5e241]:
                        - paragraph [ref=f5e242]: $3.890
                        - paragraph [ref=f5e243]: ($15.560 x kg)
                    - generic [ref=f5e244]:
                      - link [ref=f5e245] [cursor=pointer]:
                        - /url: /carne-molida-4-grasa-tartaro-fundo-rio-alegre-250-g/000000000000662457-UN.html
                        - generic [ref=f5e246]: Fundo Rio Alegre | Carne molida 4% grasa tártaro Fundo Río A…
                      - generic [ref=f5e247]: 250 g
                  - button [ref=f5e250] [cursor=pointer]: Agregar
                - generic [ref=f5e252]:
                  - generic [ref=f5e253]:
                    - link [ref=f5e254] [cursor=pointer]:
                      - /url: /carne-molida-4-grasa-vacuno-fundo-rio-alegre-tartaro-250-g/000000000000652051-UN.html
                    - button [ref=f5e256] [cursor=pointer]
                  - generic [ref=f5e259]:
                    - generic [ref=f5e260]:
                      - generic [ref=f5e261]:
                        - generic [ref=f5e262]:
                          - generic [aria-hidden] [ref=f5e263]: 💎
                          - paragraph [ref=f5e264]: $2.897
                        - paragraph [ref=f5e265]: ($11.588 x kg)
                      - generic [ref=f5e266]:
                        - paragraph [ref=f5e267]: $3.890
                        - paragraph [ref=f5e268]: ($15.560 x kg)
                    - generic [ref=f5e269]:
                      - link [ref=f5e270] [cursor=pointer]:
                        - /url: /carne-molida-4-grasa-vacuno-fundo-rio-alegre-tartaro-250-g/000000000000652051-UN.html
                        - generic [ref=f5e271]: Fundo Rio Alegre | Carne molida 4% grasa vacuno Fundo Río Al…
                      - generic [ref=f5e272]: 250 g
                  - button [ref=f5e275] [cursor=pointer]: Agregar
                - generic [ref=f5e277]:
                  - generic [ref=f5e278]:
                    - link [ref=f5e279] [cursor=pointer]:
                      - /url: /carne-molida-fundo-rio-alegre-tartaro-4-grasa-500g/000000000000666200-UN.html
                    - generic [ref=f5e281]: Promoción Lleva 2 unidades por Monto
                    - button [pressed] [ref=f5e282] [cursor=pointer]
                  - generic [ref=f5e285]:
                    - generic [ref=f5e286]:
                      - generic [ref=f5e287]:
                        - generic [ref=f5e288]:
                          - generic [aria-hidden] [ref=f5e289]: 💎
                          - paragraph [ref=f5e290]: Lleva 2 por $10.866
                        - paragraph [ref=f5e291]: ($10.866 x kg)
                      - generic [ref=f5e292]:
                        - generic [ref=f5e293]: Lleva 2 por $12.490
                        - paragraph [ref=f5e294]: ($12.490 x kg)
                      - generic [ref=f5e295]:
                        - paragraph [ref=f5e296]: $7.690 c/u
                        - paragraph [ref=f5e297]: ($15.380 x kg)
                    - generic [ref=f5e298]:
                      - link [ref=f5e299] [cursor=pointer]:
                        - /url: /carne-molida-fundo-rio-alegre-tartaro-4-grasa-500g/000000000000666200-UN.html
                        - generic [ref=f5e300]: Fundo Rio Alegre | Carne molida fundo rio alegre tartaro 4% …
                      - generic [ref=f5e301]: 500 g
                  - generic [ref=f5e303]:
                    - button [ref=f5e304] [cursor=pointer]:
                      - generic [aria-hidden] [ref=f5e305]: 😎
                      - paragraph [ref=f5e306]: Combina la promo
                    - button [ref=f5e308] [cursor=pointer]: Agregar
                - generic [ref=f5e310]:
                  - generic [ref=f5e311]:
                    - link [ref=f5e312] [cursor=pointer]:
                      - /url: /carne-molida-tartaro-fundo-rio-alegre-4-grasa-500g/000000000000666285-UN.html
                    - generic [ref=f5e314]: Promoción Lleva 2 unidades por Monto
                    - button [pressed] [ref=f5e315] [cursor=pointer]
                  - generic [ref=f5e318]:
                    - generic [ref=f5e319]:
                      - generic [ref=f5e320]:
                        - generic [ref=f5e321]:
                          - generic [aria-hidden] [ref=f5e322]: 💎
                          - paragraph [ref=f5e323]: Lleva 2 por $10.866
                        - paragraph [ref=f5e324]: ($10.866 x kg)
                      - generic [ref=f5e325]:
                        - generic [ref=f5e326]: Lleva 2 por $12.490
                        - paragraph [ref=f5e327]: ($12.490 x kg)
                      - generic [ref=f5e328]:
                        - paragraph [ref=f5e329]: $7.690 c/u
                        - paragraph [ref=f5e330]: ($15.380 x kg)
                    - generic [ref=f5e331]:
                      - link [ref=f5e332] [cursor=pointer]:
                        - /url: /carne-molida-tartaro-fundo-rio-alegre-4-grasa-500g/000000000000666285-UN.html
                        - generic [ref=f5e333]: Fundo Rio Alegre | Carne molida tartaro fundo río alegre 4% …
                      - generic [ref=f5e334]: 500 g
                  - generic [ref=f5e336]:
                    - button [ref=f5e337] [cursor=pointer]:
                      - generic [aria-hidden] [ref=f5e338]: 😎
                      - paragraph [ref=f5e339]: Combina la promo
                    - button [ref=f5e341] [cursor=pointer]: Agregar
                - generic [ref=f5e343]:
                  - generic [ref=f5e344]:
                    - link [ref=f5e345] [cursor=pointer]:
                      - /url: /choclillo-vacuno-nacional-al-vacio-1.3-kg/000000000000028597-KGV.html
                    - button [ref=f5e347] [cursor=pointer]
                  - generic [ref=f5e350]:
                    - generic [ref=f5e352]:
                      - paragraph [ref=f5e353]: $11.990
                      - paragraph [ref=f5e354]: ($9.223 x kg)
                    - generic [ref=f5e355]:
                      - link [ref=f5e356] [cursor=pointer]:
                        - /url: /choclillo-vacuno-nacional-al-vacio-1.3-kg/000000000000028597-KGV.html
                        - generic [ref=f5e357]: Nacional | Choclillo vacuno Nacional al vacío 1.3 Kg
                      - generic [ref=f5e358]: 1.3 kg
                  - button [ref=f5e361] [cursor=pointer]: Agregar
                - generic [ref=f5e363]:
                  - generic [ref=f5e364]:
                    - link [ref=f5e365] [cursor=pointer]:
                      - /url: /chuleta-centro-de-cerdo-super-cerdo-bandeja-550-g/000000000000626717-UN.html
                    - button [ref=f5e367] [cursor=pointer]
                  - generic [ref=f5e370]:
                    - generic [ref=f5e372]:
                      - paragraph [ref=f5e373]: $4.890
                      - paragraph [ref=f5e374]: ($8.891 x kg)
                    - generic [ref=f5e375]:
                      - link [ref=f5e376] [cursor=pointer]:
                        - /url: /chuleta-centro-de-cerdo-super-cerdo-bandeja-550-g/000000000000626717-UN.html
                        - generic [ref=f5e377]: Super Cerdo | Chuleta centro de cerdo Super Cerdo bandeja 55…
                      - generic [ref=f5e378]: 550 g
                  - button [ref=f5e381] [cursor=pointer]: Agregar
                - generic [ref=f5e383]:
                  - generic [ref=f5e384]:
                    - link [ref=f5e385] [cursor=pointer]:
                      - /url: /chuleta-centro-de-cerdo-super-cerdo-congelado-750-g/000000000000627635-UN.html
                    - button [ref=f5e387] [cursor=pointer]
                  - generic [ref=f5e390]:
                    - generic [ref=f5e391]:
                      - generic [ref=f5e392]:
                        - generic [ref=f5e393]:
                          - generic [aria-hidden] [ref=f5e394]: 💎
                          - paragraph [ref=f5e395]: $6.291
                        - paragraph [ref=f5e396]: ($8.388 x kg)
                      - generic [ref=f5e397]:
                        - generic [ref=f5e398]: 10%
                        - paragraph [ref=f5e399]: $6.291
                        - paragraph [ref=f5e400]: ($8.388 x kg)
                      - paragraph [ref=f5e401]: "Antes: $6.990"
                    - generic [ref=f5e402]:
                      - link [ref=f5e403] [cursor=pointer]:
                        - /url: /chuleta-centro-de-cerdo-super-cerdo-congelado-750-g/000000000000627635-UN.html
                        - generic [ref=f5e404]: Super Cerdo | Chuleta centro de cerdo Super Cerdo congelado …
                      - generic [ref=f5e405]: 750 g
                  - button [ref=f5e408] [cursor=pointer]: Agregar
                - generic [ref=f5e410]:
                  - generic [ref=f5e411]:
                    - link [ref=f5e412] [cursor=pointer]:
                      - /url: /chuleta-parrillera-de-cordero-congelado-caja-1.5-kg/000000000000219902-UN.html
                    - button [ref=f5e414] [cursor=pointer]
                  - generic [ref=f5e417]:
                    - paragraph [ref=f5e420]: $43.990
                    - generic [ref=f5e421]:
                      - link [ref=f5e422] [cursor=pointer]:
                        - /url: /chuleta-parrillera-de-cordero-congelado-caja-1.5-kg/000000000000219902-UN.html
                        - text: Chuleta parrillera de cordero congelado caja 1.5 Kg
                      - generic [ref=f5e423]: 1.5 kg
                  - button [ref=f5e426] [cursor=pointer]: Agregar
              - button [ref=f5e429] [cursor=pointer]
              - button [ref=f5e432] [cursor=pointer]
          - generic [ref=f5e439]:
            - generic [ref=f5e440]:
              - link [ref=f5e442] [cursor=pointer]:
                - /url: /category/frutas-y-verduras
              - generic [ref=f5e445]:
                - generic [ref=f5e446]:
                  - paragraph [ref=f5e448]: "45"
                  - paragraph [ref=f5e449]: días
                - paragraph [ref=f5e451]: ":"
                - generic [ref=f5e452]:
                  - paragraph [ref=f5e454]: "07"
                  - paragraph [ref=f5e455]: horas
                - paragraph [ref=f5e457]: ":"
                - generic [ref=f5e458]:
                  - paragraph [ref=f5e460]: "29"
                  - paragraph [ref=f5e461]: minutos
                - paragraph [ref=f5e463]: ":"
                - generic [ref=f5e464]:
                  - paragraph [ref=f5e466]: "33"
                  - paragraph [ref=f5e467]: segundos
            - generic [ref=f5e471]:
              - generic [ref=f5e473]:
                - generic [ref=f5e474]:
                  - link [ref=f5e475] [cursor=pointer]:
                    - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                  - button [ref=f5e477] [cursor=pointer]
                - generic [ref=f5e480]:
                  - paragraph [ref=f5e483]: $1.290
                  - generic [ref=f5e484]:
                    - link [ref=f5e485] [cursor=pointer]:
                      - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                      - text: Agua saborizada Más manzana 1.6 L
                    - generic [ref=f5e486]: 1.6 l
                - button [ref=f5e489] [cursor=pointer]: Agregar
              - generic [ref=f5e491]:
                - generic [ref=f5e492]:
                  - link [ref=f5e493] [cursor=pointer]:
                    - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                  - button [ref=f5e495] [cursor=pointer]
                - generic [ref=f5e498]:
                  - generic [ref=f5e500]:
                    - paragraph [ref=f5e501]: $2.550
                    - paragraph [ref=f5e502]: ($1.275 x unidad)
                  - generic [ref=f5e503]: Pronto disponible
                  - generic [ref=f5e505]:
                    - link [ref=f5e506] [cursor=pointer]:
                      - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                      - generic [ref=f5e507]: Frutas y Verduras | Choclo bandeja 2 un
                    - generic [ref=f5e508]: 2 un
                - button [ref=f5e511] [cursor=pointer]: Ver similares
              - generic [ref=f5e513]:
                - generic [ref=f5e514]:
                  - link [ref=f5e515] [cursor=pointer]:
                    - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                  - button [ref=f5e517] [cursor=pointer]
                - generic [ref=f5e520]:
                  - generic [ref=f5e521]: Pronto disponible
                  - link [ref=f5e524] [cursor=pointer]:
                    - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                    - generic [ref=f5e525]: Proverde | Choclo cocida Proverde bolsa 500 gr
                - button [ref=f5e527] [cursor=pointer]: Ver similares
              - generic [ref=f5e529]:
                - generic [ref=f5e530]:
                  - link [ref=f5e531] [cursor=pointer]:
                    - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                  - button [ref=f5e533] [cursor=pointer]
                - generic [ref=f5e536]:
                  - paragraph [ref=f5e539]: $2.490
                  - generic [ref=f5e540]:
                    - link [ref=f5e541] [cursor=pointer]:
                      - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                      - generic [ref=f5e542]: Frutas y Verduras | Clementina malla 1 Kg
                    - generic [ref=f5e543]: 1 kg
                - button [ref=f5e546] [cursor=pointer]: Agregar
              - generic [ref=f5e548]:
                - generic [ref=f5e549]:
                  - link [ref=f5e550] [cursor=pointer]:
                    - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                  - button [ref=f5e552] [cursor=pointer]
                - generic [ref=f5e555]:
                  - paragraph [ref=f5e558]: $1.999
                  - generic [ref=f5e559]:
                    - link [ref=f5e560] [cursor=pointer]:
                      - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                      - generic [ref=f5e561]: Frutas y Verduras | Clementina malla 1 Kg
                    - generic [ref=f5e562]: 1 kg
                - button [ref=f5e565] [cursor=pointer]: Agregar
              - generic [ref=f5e567]:
                - generic [ref=f5e568]:
                  - link [ref=f5e569] [cursor=pointer]:
                    - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                  - button [ref=f5e571] [cursor=pointer]
                - generic [ref=f5e574]:
                  - generic [ref=f5e576]:
                    - paragraph [ref=f5e577]: $1.375
                    - paragraph [ref=f5e578]: ($2.750 x kg)
                  - generic [ref=f5e579]:
                    - link [ref=f5e580] [cursor=pointer]:
                      - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                      - generic [ref=f5e581]: Frutas y Verduras | Clementinas granel 500 g
                    - generic [ref=f5e582]: 500 g
                - button [ref=f5e585] [cursor=pointer]: Agregar
              - generic [ref=f5e587]:
                - generic [ref=f5e588]:
                  - link [ref=f5e589] [cursor=pointer]:
                    - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                  - button [ref=f5e591] [cursor=pointer]
                - generic [ref=f5e594]:
                  - generic [ref=f5e596]:
                    - paragraph [ref=f5e597]: $1.999
                    - paragraph [ref=f5e598]: ($3.998 x kg)
                  - generic [ref=f5e599]:
                    - link [ref=f5e600] [cursor=pointer]:
                      - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                      - generic [ref=f5e601]: Frutas y Verduras | Clementinas granel 500 g
                    - generic [ref=f5e602]: 500 g
                - button [ref=f5e605] [cursor=pointer]: Agregar
              - generic [ref=f5e607]:
                - generic [ref=f5e608]:
                  - link [ref=f5e609] [cursor=pointer]:
                    - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                  - generic [ref=f5e611]: Promoción % Unipay
                  - button [ref=f5e612] [cursor=pointer]
                - generic [ref=f5e615]:
                  - generic [ref=f5e616]:
                    - generic [ref=f5e618]:
                      - generic [aria-hidden] [ref=f5e619]: 💎
                      - paragraph [ref=f5e620]: $2.601
                    - generic [ref=f5e621]:
                      - generic [ref=f5e622]: 10%
                      - paragraph [ref=f5e623]: $2.601
                    - paragraph [ref=f5e624]: "Antes: $2.890"
                  - generic [ref=f5e625]:
                    - link [ref=f5e626] [cursor=pointer]:
                      - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                      - generic [ref=f5e627]: Frutas y Verduras | Kiwi bolsa 1 Kg
                    - generic [ref=f5e628]: 1 kg
                - button [ref=f5e631] [cursor=pointer]: Agregar
              - generic [ref=f5e633]:
                - generic [ref=f5e634]:
                  - link [ref=f5e635] [cursor=pointer]:
                    - /url: /kiwi-bolsa-1-kg/000000000010062644-UN.html
                  - button [ref=f5e637] [cursor=pointer]
                - generic [ref=f5e640]:
                  - paragraph [ref=f5e643]: $1.999
                  - generic [ref=f5e644]:
                    - link [ref=f5e645] [cursor=pointer]:
                      - /url: /kiwi-bolsa-1-kg/000000000010062644-UN.html
                      - generic [ref=f5e646]: Frutas y Verduras | Kiwi bolsa 1 Kg
                    - generic [ref=f5e647]: 1 kg
                - button [ref=f5e650] [cursor=pointer]: Agregar
              - generic [ref=f5e652]:
                - generic [ref=f5e653]:
                  - link [ref=f5e654] [cursor=pointer]:
                    - /url: /limon-granel-500-g/000000000000553212-KG.html
                  - button [ref=f5e656] [cursor=pointer]
                - generic [ref=f5e659]:
                  - generic [ref=f5e661]:
                    - paragraph [ref=f5e662]: $995
                    - paragraph [ref=f5e663]: ($1.990 x l)
                  - generic [ref=f5e664]:
                    - link [ref=f5e665] [cursor=pointer]:
                      - /url: /limon-granel-500-g/000000000000553212-KG.html
                      - generic [ref=f5e666]: Frutas y Verduras | Limón granel 500 g
                    - generic [ref=f5e667]: 500 g
                - button [ref=f5e670] [cursor=pointer]: Agregar
              - generic [ref=f5e672]:
                - generic [ref=f5e673]:
                  - link [ref=f5e674] [cursor=pointer]:
                    - /url: /limon-granel-500-g/000000000010553212-KG.html
                  - button [ref=f5e676] [cursor=pointer]
                - generic [ref=f5e679]:
                  - generic [ref=f5e681]:
                    - paragraph [ref=f5e682]: $1.999
                    - paragraph [ref=f5e683]: ($3.998 x l)
                  - generic [ref=f5e684]:
                    - link [ref=f5e685] [cursor=pointer]:
                      - /url: /limon-granel-500-g/000000000010553212-KG.html
                      - generic [ref=f5e686]: Frutas y Verduras | Limón granel 500 g
                    - generic [ref=f5e687]: 500 g
                - button [ref=f5e690] [cursor=pointer]: Agregar
              - generic [ref=f5e692]:
                - generic [ref=f5e693]:
                  - link [ref=f5e694] [cursor=pointer]:
                    - /url: /mangos-granel-500-g/000000000000037972-KG.html
                  - button [ref=f5e696] [cursor=pointer]
                - generic [ref=f5e699]:
                  - generic [ref=f5e701]:
                    - paragraph [ref=f5e702]: $2.790
                    - paragraph [ref=f5e703]: ($5.580 x kg)
                  - generic [ref=f5e704]:
                    - link [ref=f5e705] [cursor=pointer]:
                      - /url: /mangos-granel-500-g/000000000000037972-KG.html
                      - generic [ref=f5e706]: Frutas Y Verduras | Mangos granel 500 g
                    - generic [ref=f5e707]: 500 g
                - button [ref=f5e710] [cursor=pointer]: Agregar
          - generic [ref=f5e715]:
            - heading [level=2] [ref=f5e716]: Categorías destacadas
            - generic [ref=f5e718]:
              - link [ref=f5e722] [cursor=pointer]:
                - /url: /category/frutas-y-verduras
                - paragraph [ref=f5e726]: Orgánico
              - link [ref=f5e730] [cursor=pointer]:
                - /url: /category/congelados
                - paragraph [ref=f5e734]: Comida en casa
              - link [ref=f5e738] [cursor=pointer]:
                - /url: /category/panaderia-y-pasteleria
                - paragraph [ref=f5e742]: Panadería
              - link [ref=f5e746] [cursor=pointer]:
                - /url: /category/panaderia-y-pasteleria
                - paragraph [ref=f5e750]: Pastelería
              - link [ref=f5e754] [cursor=pointer]:
                - /url: /category/bebidas-y-licores
                - paragraph [ref=f5e758]: Celebraciones
              - link [ref=f5e762] [cursor=pointer]:
                - /url: /category/limpieza
                - paragraph [ref=f5e766]: Higiene personal
              - link [ref=f5e770] [cursor=pointer]:
                - /url: /category/limpieza
                - paragraph [ref=f5e774]: Limpieza
          - generic [ref=f5e777]:
            - generic [ref=f5e778]:
              - generic [ref=f5e779]:
                - heading [level=3] [ref=f5e780]: Cada día, una ocasión
                - link [ref=f5e781] [cursor=pointer]:
                  - /url: /search?q=ofertas
                  - text: Mostrar todo
              - paragraph [ref=f5e782]: Encuentra aquí todo lo que necesitas y más
            - generic [ref=f5e783]:
              - generic [ref=f5e785]:
                - link [ref=f5e789] [cursor=pointer]:
                  - /url: /category/carnes
                  - paragraph [ref=f5e795]: Asaíto
                - link [ref=f5e799] [cursor=pointer]:
                  - /url: /category/despensa
                  - paragraph [ref=f5e805]: Picoteo
                - link [ref=f5e809] [cursor=pointer]:
                  - /url: /category/frutas-y-verduras
                  - paragraph [ref=f5e815]: Orgánico
                - link [ref=f5e819] [cursor=pointer]:
                  - /url: /category/desayuno-y-dulces
                  - paragraph [ref=f5e825]: Colaciones
              - button [disabled] [ref=f5e828] [cursor=pointer]
              - button [ref=f5e831] [cursor=pointer]
          - generic [ref=f5e839]:
            - link [ref=f5e840] [cursor=pointer]:
              - /url: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/frutas-y-verduras_frutas
              - paragraph [ref=f5e844]: OFERTA
              - generic:
                - generic:
                  - paragraph: Mecadito Unimarc
                  - generic:
                    - paragraph: "40"
                    - generic:
                      - paragraph: "%"
                      - paragraph: dcto
            - generic [ref=f5e845]:
              - generic [ref=f5e847]:
                - generic [ref=f5e848]:
                  - heading [level=3] [ref=f5e849]: Frescura y calidad
                  - link [ref=f5e850] [cursor=pointer]:
                    - /url: /category/frutas-y-verduras
                    - text: Mostrar todo
                - paragraph [ref=f5e851]: Frutas y verduras
              - generic [ref=f5e852]:
                - generic [ref=f5e854]:
                  - generic [ref=f5e856]:
                    - generic [ref=f5e857]:
                      - link [ref=f5e858] [cursor=pointer]:
                        - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                      - button [ref=f5e860] [cursor=pointer]
                    - generic [ref=f5e863]:
                      - paragraph [ref=f5e866]: $1.290
                      - generic [ref=f5e867]:
                        - link [ref=f5e868] [cursor=pointer]:
                          - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                          - text: Agua saborizada Más manzana 1.6 L
                        - generic [ref=f5e869]: 1.6 l
                    - button [ref=f5e872] [cursor=pointer]: Agregar
                  - generic [ref=f5e874]:
                    - generic [ref=f5e875]:
                      - link [ref=f5e876] [cursor=pointer]:
                        - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                      - button [ref=f5e878] [cursor=pointer]
                    - generic [ref=f5e881]:
                      - generic [ref=f5e883]:
                        - paragraph [ref=f5e884]: $2.550
                        - paragraph [ref=f5e885]: ($1.275 x unidad)
                      - generic [ref=f5e886]: Pronto disponible
                      - generic [ref=f5e888]:
                        - link [ref=f5e889] [cursor=pointer]:
                          - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                          - generic [ref=f5e890]: Frutas y Verduras | Choclo bandeja 2 un
                        - generic [ref=f5e891]: 2 un
                    - button [ref=f5e894] [cursor=pointer]: Ver similares
                  - generic [ref=f5e896]:
                    - generic [ref=f5e897]:
                      - link [ref=f5e898] [cursor=pointer]:
                        - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                      - button [ref=f5e900] [cursor=pointer]
                    - generic [ref=f5e903]:
                      - generic [ref=f5e904]: Pronto disponible
                      - link [ref=f5e907] [cursor=pointer]:
                        - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                        - generic [ref=f5e908]: Proverde | Choclo cocida Proverde bolsa 500 gr
                    - button [ref=f5e910] [cursor=pointer]: Ver similares
                  - generic [ref=f5e912]:
                    - generic [ref=f5e913]:
                      - link [ref=f5e914] [cursor=pointer]:
                        - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                      - button [ref=f5e916] [cursor=pointer]
                    - generic [ref=f5e919]:
                      - paragraph [ref=f5e922]: $2.490
                      - generic [ref=f5e923]:
                        - link [ref=f5e924] [cursor=pointer]:
                          - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                          - generic [ref=f5e925]: Frutas y Verduras | Clementina malla 1 Kg
                        - generic [ref=f5e926]: 1 kg
                    - button [ref=f5e929] [cursor=pointer]: Agregar
                  - generic [ref=f5e931]:
                    - generic [ref=f5e932]:
                      - link [ref=f5e933] [cursor=pointer]:
                        - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                      - button [ref=f5e935] [cursor=pointer]
                    - generic [ref=f5e938]:
                      - paragraph [ref=f5e941]: $1.999
                      - generic [ref=f5e942]:
                        - link [ref=f5e943] [cursor=pointer]:
                          - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                          - generic [ref=f5e944]: Frutas y Verduras | Clementina malla 1 Kg
                        - generic [ref=f5e945]: 1 kg
                    - button [ref=f5e948] [cursor=pointer]: Agregar
                  - generic [ref=f5e950]:
                    - generic [ref=f5e951]:
                      - link [ref=f5e952] [cursor=pointer]:
                        - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                      - button [ref=f5e954] [cursor=pointer]
                    - generic [ref=f5e957]:
                      - generic [ref=f5e959]:
                        - paragraph [ref=f5e960]: $1.375
                        - paragraph [ref=f5e961]: ($2.750 x kg)
                      - generic [ref=f5e962]:
                        - link [ref=f5e963] [cursor=pointer]:
                          - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                          - generic [ref=f5e964]: Frutas y Verduras | Clementinas granel 500 g
                        - generic [ref=f5e965]: 500 g
                    - button [ref=f5e968] [cursor=pointer]: Agregar
                  - generic [ref=f5e970]:
                    - generic [ref=f5e971]:
                      - link [ref=f5e972] [cursor=pointer]:
                        - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                      - button [ref=f5e974] [cursor=pointer]
                    - generic [ref=f5e977]:
                      - generic [ref=f5e979]:
                        - paragraph [ref=f5e980]: $1.999
                        - paragraph [ref=f5e981]: ($3.998 x kg)
                      - generic [ref=f5e982]:
                        - link [ref=f5e983] [cursor=pointer]:
                          - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                          - generic [ref=f5e984]: Frutas y Verduras | Clementinas granel 500 g
                        - generic [ref=f5e985]: 500 g
                    - button [ref=f5e988] [cursor=pointer]: Agregar
                  - generic [ref=f5e990]:
                    - generic [ref=f5e991]:
                      - link [ref=f5e992] [cursor=pointer]:
                        - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                      - generic [ref=f5e994]: Promoción % Unipay
                      - button [ref=f5e995] [cursor=pointer]
                    - generic [ref=f5e998]:
                      - generic [ref=f5e999]:
                        - generic [ref=f5e1001]:
                          - generic [aria-hidden] [ref=f5e1002]: 💎
                          - paragraph [ref=f5e1003]: $2.601
                        - generic [ref=f5e1004]:
                          - generic [ref=f5e1005]: 10%
                          - paragraph [ref=f5e1006]: $2.601
                        - paragraph [ref=f5e1007]: "Antes: $2.890"
                      - generic [ref=f5e1008]:
                        - link [ref=f5e1009] [cursor=pointer]:
                          - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                          - generic [ref=f5e1010]: Frutas y Verduras | Kiwi bolsa 1 Kg
                        - generic [ref=f5e1011]: 1 kg
                    - button [ref=f5e1014] [cursor=pointer]: Agregar
                - button [ref=f5e1017] [cursor=pointer]
                - button [ref=f5e1020] [cursor=pointer]
          - generic [ref=f5e1026]:
            - generic [ref=f5e1027]:
              - generic [ref=f5e1028]:
                - heading [level=3] [ref=f5e1029]: Prende la parrilla
                - link [ref=f5e1030] [cursor=pointer]:
                  - /url: /search?q=parrilla
                  - text: Mostrar todo
              - paragraph [ref=f5e1031]: Disfruta de un rico Asaito
            - generic [ref=f5e1033]:
              - link [ref=f5e1038] [cursor=pointer]:
                - /url: /search?q=parrilla
              - link [ref=f5e1045] [cursor=pointer]:
                - /url: /category/carnes
              - link [ref=f5e1052] [cursor=pointer]:
                - /url: /search?q=guarniciones
              - link [ref=f5e1059] [cursor=pointer]:
                - /url: /category/carnes
              - link [ref=f5e1066] [cursor=pointer]:
                - /url: /search?q=picoteo
          - generic [ref=f5e1074]:
            - link [ref=f5e1075] [cursor=pointer]:
              - /url: /category/panaderia-y-pasteleria
              - paragraph [ref=f5e1078]: 40% dcto
              - generic:
                - generic:
                  - paragraph: Chocolates Milka Variedades
                  - generic:
                    - paragraph: "40"
                    - generic:
                      - paragraph: "%"
                      - paragraph: dcto
            - generic [ref=f5e1079]:
              - generic [ref=f5e1081]:
                - generic [ref=f5e1082]:
                  - heading [level=3] [ref=f5e1083]: Chocolates Milka
                  - link [ref=f5e1084] [cursor=pointer]:
                    - /url: /category/panaderia-y-pasteleria
                    - text: Mostrar todo
                - paragraph [ref=f5e1085]: Endulza tu día
              - generic [ref=f5e1086]:
                - generic [ref=f5e1088]:
                  - generic [ref=f5e1090]:
                    - generic [ref=f5e1091]:
                      - link [ref=f5e1092] [cursor=pointer]:
                        - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                      - button [ref=f5e1094] [cursor=pointer]
                    - generic [ref=f5e1097]:
                      - paragraph [ref=f5e1100]: $1.180
                      - generic [ref=f5e1101]:
                        - link [ref=f5e1102] [cursor=pointer]:
                          - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                          - text: Galleta Alteza bocado 140 g
                        - generic [ref=f5e1103]: 140 g
                    - button [ref=f5e1106] [cursor=pointer]: Agregar
                  - generic [ref=f5e1108]:
                    - generic [ref=f5e1109]:
                      - link [ref=f5e1110] [cursor=pointer]:
                        - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                      - button [ref=f5e1112] [cursor=pointer]
                    - generic [ref=f5e1115]:
                      - paragraph [ref=f5e1118]: $280
                      - generic [ref=f5e1119]:
                        - link [ref=f5e1120] [cursor=pointer]:
                          - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                          - text: Galleta mini Dos en Uno chocolate 35 g
                        - generic [ref=f5e1121]: 35 g
                    - button [ref=f5e1124] [cursor=pointer]: Agregar
                  - generic [ref=f5e1126]:
                    - generic [ref=f5e1127]:
                      - link [ref=f5e1128] [cursor=pointer]:
                        - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                      - button [ref=f5e1130] [cursor=pointer]
                    - generic [ref=f5e1133]:
                      - generic [ref=f5e1134]:
                        - generic [ref=f5e1135]:
                          - generic [ref=f5e1136]: Unipay $757
                          - paragraph [ref=f5e1137]: ($6.882 x kg)
                        - generic [ref=f5e1138]:
                          - paragraph [ref=f5e1139]: $890
                          - paragraph [ref=f5e1140]: ($8.091 x kg)
                      - generic [ref=f5e1141]:
                        - link [ref=f5e1142] [cursor=pointer]:
                          - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                          - generic [ref=f5e1143]: Oreo | Galleta Oreo clásica vainilla 108 g
                        - generic [ref=f5e1144]: 108 g
                    - button [ref=f5e1147] [cursor=pointer]: Agregar
                  - generic [ref=f5e1149]:
                    - generic [ref=f5e1150]:
                      - link [ref=f5e1151] [cursor=pointer]:
                        - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                      - button [pressed] [ref=f5e1153] [cursor=pointer]
                    - generic [ref=f5e1156]:
                      - paragraph [ref=f5e1159]: $4.990
                      - generic [ref=f5e1160]:
                        - link [ref=f5e1161] [cursor=pointer]:
                          - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                          - text: Galletas con mermelada La Galleteria 300 g
                        - generic [ref=f5e1162]: 300 g
                    - button [ref=f5e1165] [cursor=pointer]: Agregar
                  - generic [ref=f5e1167]:
                    - generic [ref=f5e1168]:
                      - link [ref=f5e1169] [cursor=pointer]:
                        - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                      - button [ref=f5e1171] [cursor=pointer]
                    - generic [ref=f5e1174]:
                      - generic [ref=f5e1176]:
                        - paragraph [ref=f5e1177]: $1.290
                        - paragraph [ref=f5e1178]: ($4.607 x kg)
                      - generic [ref=f5e1179]:
                        - link [ref=f5e1180] [cursor=pointer]:
                          - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                          - generic [ref=f5e1181]: Europastry | Pan baguette plus Crandon 1 un
                        - generic [ref=f5e1182]: 1 un
                    - button [ref=f5e1185] [cursor=pointer]: Agregar
                  - generic [ref=f5e1187]:
                    - generic [ref=f5e1188]:
                      - link [ref=f5e1189] [cursor=pointer]:
                        - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                      - button [ref=f5e1191] [cursor=pointer]
                    - generic [ref=f5e1194]:
                      - generic [ref=f5e1196]:
                        - paragraph [ref=f5e1197]: $1.495
                        - paragraph [ref=f5e1198]: ($2.990 x kg)
                      - generic [ref=f5e1199]:
                        - link [ref=f5e1200] [cursor=pointer]:
                          - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                          - generic [ref=f5e1201]: Amada Masa | Pan ciabatta granel Amada Masa 500 g
                        - generic [ref=f5e1202]: 500 g
                    - button [ref=f5e1205] [cursor=pointer]: Agregar
                  - generic [ref=f5e1207]:
                    - generic [ref=f5e1208]:
                      - link [ref=f5e1209] [cursor=pointer]:
                        - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                      - button [ref=f5e1211] [cursor=pointer]
                    - generic [ref=f5e1214]:
                      - generic [ref=f5e1216]:
                        - paragraph [ref=f5e1217]: $2.990
                        - paragraph [ref=f5e1218]: ($5.980 x kg)
                      - generic [ref=f5e1219]:
                        - link [ref=f5e1220] [cursor=pointer]:
                          - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                          - generic [ref=f5e1221]: Amada Masa | Pan hot dog granel Amada Masa 500 g
                        - generic [ref=f5e1222]: 500 g
                    - button [ref=f5e1225] [cursor=pointer]: Agregar
                  - generic [ref=f5e1227]:
                    - generic [ref=f5e1228]:
                      - link [ref=f5e1229] [cursor=pointer]:
                        - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                      - button [ref=f5e1231] [cursor=pointer]
                    - generic [ref=f5e1234]:
                      - paragraph [ref=f5e1237]: $1.095
                      - generic [ref=f5e1238]:
                        - link [ref=f5e1239] [cursor=pointer]:
                          - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                          - text: Pan marraqueta granel Amada Masa 500 g
                        - generic [ref=f5e1240]: 500 g
                    - button [ref=f5e1243] [cursor=pointer]: Agregar
                - button [ref=f5e1246] [cursor=pointer]
                - button [ref=f5e1249] [cursor=pointer]
        - link [ref=f5e1259] [cursor=pointer]:
          - /url: /search?q=despensa
        - generic [ref=f5e1265]:
          - generic [ref=f5e1266]:
            - heading [level=2] [ref=f5e1267]: Nuestras marcas
            - link [ref=f5e1268] [cursor=pointer]:
              - /url: /category/panaderia-y-pasteleria
              - text: Mostrar todo
          - generic [ref=f5e1269]:
            - tab [selected] [ref=f5e1270] [cursor=pointer]: Amada masa
            - tab [ref=f5e1271] [cursor=pointer]: Azul
            - tab [ref=f5e1272] [cursor=pointer]: Como en casa
            - tab [ref=f5e1273] [cursor=pointer]: D-kora
            - tab [ref=f5e1274] [cursor=pointer]: Fundo Río al
            - tab [ref=f5e1275] [cursor=pointer]: Nubelín
            - tab [ref=f5e1276] [cursor=pointer]: Nuestra coci
            - tab [ref=f5e1277] [cursor=pointer]: Smart Clean
            - tab [ref=f5e1278] [cursor=pointer]: Tento
          - generic [ref=f5e1281]:
            - generic [ref=f5e1283]:
              - generic [ref=f5e1285]:
                - generic [ref=f5e1286]:
                  - link [ref=f5e1287] [cursor=pointer]:
                    - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                  - button [ref=f5e1289] [cursor=pointer]
                - generic [ref=f5e1292]:
                  - paragraph [ref=f5e1295]: $1.180
                  - generic [ref=f5e1296]:
                    - link [ref=f5e1297] [cursor=pointer]:
                      - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                      - text: Galleta Alteza bocado 140 g
                    - generic [ref=f5e1298]: 140 g
                - button [ref=f5e1301] [cursor=pointer]: Agregar
              - generic [ref=f5e1303]:
                - generic [ref=f5e1304]:
                  - link [ref=f5e1305] [cursor=pointer]:
                    - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                  - button [ref=f5e1307] [cursor=pointer]
                - generic [ref=f5e1310]:
                  - paragraph [ref=f5e1313]: $280
                  - generic [ref=f5e1314]:
                    - link [ref=f5e1315] [cursor=pointer]:
                      - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                      - text: Galleta mini Dos en Uno chocolate 35 g
                    - generic [ref=f5e1316]: 35 g
                - button [ref=f5e1319] [cursor=pointer]: Agregar
              - generic [ref=f5e1321]:
                - generic [ref=f5e1322]:
                  - link [ref=f5e1323] [cursor=pointer]:
                    - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                  - button [ref=f5e1325] [cursor=pointer]
                - generic [ref=f5e1328]:
                  - generic [ref=f5e1329]:
                    - generic [ref=f5e1330]:
                      - generic [ref=f5e1331]: Unipay $757
                      - paragraph [ref=f5e1332]: ($6.882 x kg)
                    - generic [ref=f5e1333]:
                      - paragraph [ref=f5e1334]: $890
                      - paragraph [ref=f5e1335]: ($8.091 x kg)
                  - generic [ref=f5e1336]:
                    - link [ref=f5e1337] [cursor=pointer]:
                      - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                      - generic [ref=f5e1338]: Oreo | Galleta Oreo clásica vainilla 108 g
                    - generic [ref=f5e1339]: 108 g
                - button [ref=f5e1342] [cursor=pointer]: Agregar
              - generic [ref=f5e1344]:
                - generic [ref=f5e1345]:
                  - link [ref=f5e1346] [cursor=pointer]:
                    - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                  - button [pressed] [ref=f5e1348] [cursor=pointer]
                - generic [ref=f5e1351]:
                  - paragraph [ref=f5e1354]: $4.990
                  - generic [ref=f5e1355]:
                    - link [ref=f5e1356] [cursor=pointer]:
                      - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                      - text: Galletas con mermelada La Galleteria 300 g
                    - generic [ref=f5e1357]: 300 g
                - button [ref=f5e1360] [cursor=pointer]: Agregar
              - generic [ref=f5e1362]:
                - generic [ref=f5e1363]:
                  - link [ref=f5e1364] [cursor=pointer]:
                    - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                  - button [ref=f5e1366] [cursor=pointer]
                - generic [ref=f5e1369]:
                  - generic [ref=f5e1371]:
                    - paragraph [ref=f5e1372]: $1.290
                    - paragraph [ref=f5e1373]: ($4.607 x kg)
                  - generic [ref=f5e1374]:
                    - link [ref=f5e1375] [cursor=pointer]:
                      - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                      - generic [ref=f5e1376]: Europastry | Pan baguette plus Crandon 1 un
                    - generic [ref=f5e1377]: 1 un
                - button [ref=f5e1380] [cursor=pointer]: Agregar
              - generic [ref=f5e1382]:
                - generic [ref=f5e1383]:
                  - link [ref=f5e1384] [cursor=pointer]:
                    - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                  - button [ref=f5e1386] [cursor=pointer]
                - generic [ref=f5e1389]:
                  - generic [ref=f5e1391]:
                    - paragraph [ref=f5e1392]: $1.495
                    - paragraph [ref=f5e1393]: ($2.990 x kg)
                  - generic [ref=f5e1394]:
                    - link [ref=f5e1395] [cursor=pointer]:
                      - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                      - generic [ref=f5e1396]: Amada Masa | Pan ciabatta granel Amada Masa 500 g
                    - generic [ref=f5e1397]: 500 g
                - button [ref=f5e1400] [cursor=pointer]: Agregar
              - generic [ref=f5e1402]:
                - generic [ref=f5e1403]:
                  - link [ref=f5e1404] [cursor=pointer]:
                    - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                  - button [ref=f5e1406] [cursor=pointer]
                - generic [ref=f5e1409]:
                  - generic [ref=f5e1411]:
                    - paragraph [ref=f5e1412]: $2.990
                    - paragraph [ref=f5e1413]: ($5.980 x kg)
                  - generic [ref=f5e1414]:
                    - link [ref=f5e1415] [cursor=pointer]:
                      - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                      - generic [ref=f5e1416]: Amada Masa | Pan hot dog granel Amada Masa 500 g
                    - generic [ref=f5e1417]: 500 g
                - button [ref=f5e1420] [cursor=pointer]: Agregar
              - generic [ref=f5e1422]:
                - generic [ref=f5e1423]:
                  - link [ref=f5e1424] [cursor=pointer]:
                    - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                  - button [ref=f5e1426] [cursor=pointer]
                - generic [ref=f5e1429]:
                  - paragraph [ref=f5e1432]: $1.095
                  - generic [ref=f5e1433]:
                    - link [ref=f5e1434] [cursor=pointer]:
                      - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                      - text: Pan marraqueta granel Amada Masa 500 g
                    - generic [ref=f5e1435]: 500 g
                - button [ref=f5e1438] [cursor=pointer]: Agregar
              - generic [ref=f5e1440]:
                - generic [ref=f5e1441]:
                  - link [ref=f5e1442] [cursor=pointer]:
                    - /url: /pan-marraqueta-prosepan-500-g/000000000000030202-KG.html
                  - button [ref=f5e1444] [cursor=pointer]
                - generic [ref=f5e1447]:
                  - generic [ref=f5e1449]:
                    - paragraph [ref=f5e1450]: $1.095
                    - paragraph [ref=f5e1451]: ($2.190 x kg)
                  - generic [ref=f5e1452]:
                    - link [ref=f5e1453] [cursor=pointer]:
                      - /url: /pan-marraqueta-prosepan-500-g/000000000000030202-KG.html
                      - text: Pan marraqueta Prosepan 500 g
                    - generic [ref=f5e1454]: 500 g
                - button [ref=f5e1457] [cursor=pointer]: Agregar
              - generic [ref=f5e1459]:
                - generic [ref=f5e1460]:
                  - link [ref=f5e1461] [cursor=pointer]:
                    - /url: /pan-pita-integral-granel-amada-masa-500-g/000000000000614468-KG.html
                  - button [ref=f5e1463] [cursor=pointer]
                - generic [ref=f5e1466]:
                  - paragraph [ref=f5e1469]: $2.890
                  - generic [ref=f5e1470]:
                    - link [ref=f5e1471] [cursor=pointer]:
                      - /url: /pan-pita-integral-granel-amada-masa-500-g/000000000000614468-KG.html
                      - text: Pan pita integral granel Amada Masa 500 g
                    - generic [ref=f5e1472]: 500 g
                - button [ref=f5e1475] [cursor=pointer]: Agregar
            - button [ref=f5e1478] [cursor=pointer]
            - button [ref=f5e1481] [cursor=pointer]
        - generic [ref=f5e1486]:
          - generic [ref=f5e1492]:
            - link [ref=f5e1493] [cursor=pointer]:
              - /url: /category/bebidas-y-licores
              - generic:
                - generic:
                  - paragraph: Productos Not Variedades
                  - generic:
                    - paragraph: "30"
                    - generic:
                      - paragraph: "%"
                      - paragraph: dcto
            - generic [ref=f5e1496]:
              - generic [ref=f5e1498]:
                - generic [ref=f5e1499]:
                  - heading [level=3] [ref=f5e1500]: Especial Bebidas
                  - link [ref=f5e1501] [cursor=pointer]:
                    - /url: /category/bebidas-y-licores
                    - text: Mostrar todo
                - paragraph [ref=f5e1502]: Bebidas vegetales y más
              - generic [ref=f5e1503]:
                - generic [ref=f5e1505]:
                  - generic [ref=f5e1507]:
                    - generic [ref=f5e1508]:
                      - link [ref=f5e1509] [cursor=pointer]:
                        - /url: /cerveza-austral-lager-lata-470-cc/000000000000694333-UN.html
                      - button [ref=f5e1511] [cursor=pointer]
                    - generic [ref=f5e1514]:
                      - generic [ref=f5e1516]:
                        - paragraph [ref=f5e1517]: $2.090
                        - paragraph [ref=f5e1518]: ($4.447 x L)
                      - generic [ref=f5e1519]:
                        - link [ref=f5e1520] [cursor=pointer]:
                          - /url: /cerveza-austral-lager-lata-470-cc/000000000000694333-UN.html
                          - generic [ref=f5e1521]: Austral | Cerveza Austral lager lata 470 cc
                        - generic [ref=f5e1522]: 470 cc
                    - button [ref=f5e1525] [cursor=pointer]: Agregar
                  - generic [ref=f5e1527]:
                    - generic [ref=f5e1528]:
                      - link [ref=f5e1529] [cursor=pointer]:
                        - /url: /cerveza-budweiser-zero-botella-6-un-de-330-cc/000000000000663675-UN.html
                      - button [ref=f5e1531] [cursor=pointer]
                    - generic [ref=f5e1534]:
                      - generic [ref=f5e1536]:
                        - paragraph [ref=f5e1537]: $7.790
                        - paragraph [ref=f5e1538]: ($23.606 x L)
                      - generic [ref=f5e1539]:
                        - link [ref=f5e1540] [cursor=pointer]:
                          - /url: /cerveza-budweiser-zero-botella-6-un-de-330-cc/000000000000663675-UN.html
                          - generic [ref=f5e1541]: Budweiser | Cerveza Budweiser zero botella 6 un de 330 cc
                        - generic [ref=f5e1542]: 6 un
                    - button [ref=f5e1545] [cursor=pointer]: Agregar
                  - generic [ref=f5e1547]:
                    - generic [ref=f5e1548]:
                      - link [ref=f5e1549] [cursor=pointer]:
                        - /url: /cerveza-corona-extra-lata-6-un-de-473-cc/000000000000686446-UN.html
                      - button [ref=f5e1551] [cursor=pointer]
                    - generic [ref=f5e1554]:
                      - generic [ref=f5e1556]:
                        - paragraph [ref=f5e1557]: $6.890
                        - paragraph [ref=f5e1558]: ($14.567 x L)
                      - generic [ref=f5e1559]:
                        - link [ref=f5e1560] [cursor=pointer]:
                          - /url: /cerveza-corona-extra-lata-6-un-de-473-cc/000000000000686446-UN.html
                          - generic [ref=f5e1561]: Corona | Cerveza Corona extra lata 6 un de 473 cc
                        - generic [ref=f5e1562]: 6 un
                    - button [ref=f5e1565] [cursor=pointer]: Agregar
                  - generic [ref=f5e1567]:
                    - generic [ref=f5e1568]:
                      - link [ref=f5e1569] [cursor=pointer]:
                        - /url: /cerveza-cristal-lager-botella-650-cc/000000000000686452-UN.html
                      - button [ref=f5e1571] [cursor=pointer]
                    - generic [ref=f5e1574]:
                      - generic [ref=f5e1576]:
                        - paragraph [ref=f5e1577]: $1.350
                        - paragraph [ref=f5e1578]: ($2.077 x L)
                      - generic [ref=f5e1579]:
                        - link [ref=f5e1580] [cursor=pointer]:
                          - /url: /cerveza-cristal-lager-botella-650-cc/000000000000686452-UN.html
                          - generic [ref=f5e1581]: Cristal Cerveza | Cerveza Cristal lager botella 650 cc
                        - generic [ref=f5e1582]: 650 cc
                    - button [ref=f5e1585] [cursor=pointer]: Agregar
                  - generic [ref=f5e1587]:
                    - generic [ref=f5e1588]:
                      - link [ref=f5e1589] [cursor=pointer]:
                        - /url: /cerveza-duvel-moorgat-botella-330-cc/000000000000536215-UN.html
                      - button [ref=f5e1591] [cursor=pointer]
                    - generic [ref=f5e1594]:
                      - paragraph [ref=f5e1597]: $3.550
                      - generic [ref=f5e1598]:
                        - link [ref=f5e1599] [cursor=pointer]:
                          - /url: /cerveza-duvel-moorgat-botella-330-cc/000000000000536215-UN.html
                          - text: Cerveza Duvel moorgat botella 330 cc
                        - generic [ref=f5e1600]: 330 cc
                    - button [ref=f5e1603] [cursor=pointer]: Agregar
                  - generic [ref=f5e1605]:
                    - generic [ref=f5e1606]:
                      - link [ref=f5e1607] [cursor=pointer]:
                        - /url: /cerveza-royal-golden-lager-lata-6-un-de-470-cc/000000000000674841-DIS.html
                      - button [ref=f5e1609] [cursor=pointer]
                    - generic [ref=f5e1612]:
                      - generic [ref=f5e1614]:
                        - paragraph [ref=f5e1615]: $7.290
                        - paragraph [ref=f5e1616]: ($15.511 x L)
                      - generic [ref=f5e1617]:
                        - link [ref=f5e1618] [cursor=pointer]:
                          - /url: /cerveza-royal-golden-lager-lata-6-un-de-470-cc/000000000000674841-DIS.html
                          - generic [ref=f5e1619]: Royal Guard | Cerveza Royal golden lager lata 6 un de 470 cc
                        - generic [ref=f5e1620]: 6 un
                    - button [ref=f5e1623] [cursor=pointer]: Agregar
                  - generic [ref=f5e1625]:
                    - generic [ref=f5e1626]:
                      - link [ref=f5e1627] [cursor=pointer]:
                        - /url: /cerveza-sabor-sandia-stones-350ml/000000000000689879-UN.html
                      - button [ref=f5e1629] [cursor=pointer]
                    - generic [ref=f5e1632]:
                      - generic [ref=f5e1634]:
                        - paragraph [ref=f5e1635]: $6.590
                        - paragraph [ref=f5e1636]: ($18.829 x L)
                      - generic [ref=f5e1637]:
                        - link [ref=f5e1638] [cursor=pointer]:
                          - /url: /cerveza-sabor-sandia-stones-350ml/000000000000689879-UN.html
                          - generic [ref=f5e1639]: Stones | Cerveza sabor sandía Stones 350ml
                        - generic [ref=f5e1640]: 350 ml
                    - button [ref=f5e1643] [cursor=pointer]: Agregar
                  - generic [ref=f5e1645]:
                    - generic [ref=f5e1646]:
                      - link [ref=f5e1647] [cursor=pointer]:
                        - /url: /cerveza-stones-berries-lata-6-un-de-350-ml/000000000000671971-UN.html
                      - button [ref=f5e1649] [cursor=pointer]
                    - generic [ref=f5e1652]:
                      - generic [ref=f5e1654]:
                        - paragraph [ref=f5e1655]: $6.590
                        - paragraph [ref=f5e1656]: ($18.829 x L)
                      - generic [ref=f5e1657]:
                        - link [ref=f5e1658] [cursor=pointer]:
                          - /url: /cerveza-stones-berries-lata-6-un-de-350-ml/000000000000671971-UN.html
                          - generic [ref=f5e1659]: Stones | Cerveza Stones berries lata 6 un de 350 ml
                        - generic [ref=f5e1660]: 6 un
                    - button [ref=f5e1663] [cursor=pointer]: Agregar
                - button [ref=f5e1666] [cursor=pointer]
                - button [ref=f5e1669] [cursor=pointer]
          - generic [ref=f5e1675]:
            - heading [level=2] [ref=f5e1676]: Tus productos mas comprados
            - link [ref=f5e1678] [cursor=pointer]:
              - /url: /account/my-usuals
              - text: Ver todos
            - generic [ref=f5e1679]:
              - generic [ref=f5e1680]:
                - generic [ref=f5e1682]:
                  - generic [ref=f5e1683]:
                    - link [ref=f5e1684] [cursor=pointer]:
                      - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                    - button [pressed] [ref=f5e1686] [cursor=pointer]
                  - generic [ref=f5e1689]:
                    - paragraph [ref=f5e1692]: $4.990
                    - generic [ref=f5e1693]:
                      - link [ref=f5e1694] [cursor=pointer]:
                        - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                        - text: Galletas con mermelada La Galleteria 300 g
                      - generic [ref=f5e1695]: 300 g
                  - button [ref=f5e1698] [cursor=pointer]: Agregar
                - generic [ref=f5e1700]:
                  - generic [ref=f5e1701]:
                    - link [ref=f5e1702] [cursor=pointer]:
                      - /url: /carne-molida-4-grasa-tartaro-fundo-rio-alegre-250-g/000000000000662457-UN.html
                    - button [pressed] [ref=f5e1704] [cursor=pointer]
                  - generic [ref=f5e1707]:
                    - generic [ref=f5e1708]:
                      - generic [ref=f5e1709]:
                        - generic [ref=f5e1710]:
                          - generic [aria-hidden] [ref=f5e1711]: 💎
                          - paragraph [ref=f5e1712]: $2.897
                        - paragraph [ref=f5e1713]: ($11.588 x kg)
                      - generic [ref=f5e1714]:
                        - paragraph [ref=f5e1715]: $3.890
                        - paragraph [ref=f5e1716]: ($15.560 x kg)
                    - generic [ref=f5e1717]:
                      - link [ref=f5e1718] [cursor=pointer]:
                        - /url: /carne-molida-4-grasa-tartaro-fundo-rio-alegre-250-g/000000000000662457-UN.html
                        - generic [ref=f5e1719]: Fundo Rio Alegre | Carne molida 4% grasa tártaro Fundo Río A…
                      - generic [ref=f5e1720]: 250 g
                  - button [ref=f5e1723] [cursor=pointer]: Agregar
                - generic [ref=f5e1725]:
                  - generic [ref=f5e1726]:
                    - link [ref=f5e1727] [cursor=pointer]:
                      - /url: /tapapecho-vacuno-al-vacio-2.2-kg/000000000000029403-KG.html
                    - generic [ref=f5e1729]: Promoción en Carnes
                    - button [pressed] [ref=f5e1730] [cursor=pointer]
                  - generic [ref=f5e1733]:
                    - generic [ref=f5e1734]:
                      - generic [ref=f5e1735]:
                        - generic [ref=f5e1736]:
                          - generic [aria-hidden] [ref=f5e1737]: 💎
                          - paragraph [ref=f5e1738]: $9.490
                        - paragraph [ref=f5e1739]: ($4.314 x kg)
                      - generic [ref=f5e1740]:
                        - generic [ref=f5e1741]: 5%
                        - paragraph [ref=f5e1742]: $9.490
                        - paragraph [ref=f5e1743]: ($4.314 x kg)
                      - paragraph [ref=f5e1744]: "Antes: $9.990"
                    - generic [ref=f5e1745]: Pronto disponible
                    - generic [ref=f5e1747]:
                      - link [ref=f5e1748] [cursor=pointer]:
                        - /url: /tapapecho-vacuno-al-vacio-2.2-kg/000000000000029403-KG.html
                        - generic [ref=f5e1749]: Brasil Paraguay | Tapapecho vacuno al vacío 2.2 Kg
                      - generic [ref=f5e1750]: 2.2 kg
                  - button [ref=f5e1753] [cursor=pointer]: Ver similares
                - generic [ref=f5e1755]:
                  - generic [ref=f5e1756]:
                    - link [ref=f5e1757] [cursor=pointer]:
                      - /url: /carne-molida-fundo-rio-alegre-tartaro-4-grasa-500g/000000000000666200-UN.html
                    - generic [ref=f5e1759]: Promoción Lleva 2 unidades por Monto
                    - button [pressed] [ref=f5e1760] [cursor=pointer]
                  - generic [ref=f5e1763]:
                    - generic [ref=f5e1764]:
                      - generic [ref=f5e1765]:
                        - generic [ref=f5e1766]:
                          - generic [aria-hidden] [ref=f5e1767]: 💎
                          - paragraph [ref=f5e1768]: Lleva 2 por $10.866
                        - paragraph [ref=f5e1769]: ($10.866 x kg)
                      - generic [ref=f5e1770]:
                        - generic [ref=f5e1771]: Lleva 2 por $12.490
                        - paragraph [ref=f5e1772]: ($12.490 x kg)
                      - generic [ref=f5e1773]:
                        - paragraph [ref=f5e1774]: $7.690 c/u
                        - paragraph [ref=f5e1775]: ($15.380 x kg)
                    - generic [ref=f5e1776]:
                      - link [ref=f5e1777] [cursor=pointer]:
                        - /url: /carne-molida-fundo-rio-alegre-tartaro-4-grasa-500g/000000000000666200-UN.html
                        - generic [ref=f5e1778]: Fundo Rio Alegre | Carne molida fundo rio alegre tartaro 4% …
                      - generic [ref=f5e1779]: 500 g
                  - generic [ref=f5e1781]:
                    - button [ref=f5e1782] [cursor=pointer]:
                      - generic [aria-hidden] [ref=f5e1783]: 😎
                      - paragraph [ref=f5e1784]: Combina la promo
                    - button [ref=f5e1786] [cursor=pointer]: Agregar
                - generic [ref=f5e1788]:
                  - generic [ref=f5e1789]:
                    - link [ref=f5e1790] [cursor=pointer]:
                      - /url: /trapero-humedo-nova-desinfectante-10-un/000000000000666306-UN.html
                    - button [ref=f5e1792] [cursor=pointer]
                  - generic [ref=f5e1795]:
                    - generic [ref=f5e1797]:
                      - paragraph [ref=f5e1798]: $3.890
                      - paragraph [ref=f5e1799]: ($389 x unidad)
                    - generic [ref=f5e1800]:
                      - link [ref=f5e1801] [cursor=pointer]:
                        - /url: /trapero-humedo-nova-desinfectante-10-un/000000000000666306-UN.html
                        - generic [ref=f5e1802]: Nova | Trapero húmedo Nova desinfectante 10 un
                      - generic [ref=f5e1803]: 10 un
                  - button [ref=f5e1806] [cursor=pointer]: Agregar
              - button [ref=f5e1807] [cursor=pointer]
              - button [ref=f5e1810] [cursor=pointer]
        - generic [ref=f5e1817]:
          - generic [ref=f5e1818]:
            - paragraph [ref=f5e1819]: Contrata la membresía
            - paragraph [ref=f5e1820]: Obtén despachos gratis y ilimitados por compras sobre $20.000 y descuentos exclusivos
            - link [ref=f5e1821] [cursor=pointer]:
              - /url: /membresia
              - text: Comienza tus 15 días gratis
          - button [ref=f5e1824] [cursor=pointer]
        - generic [ref=f5e1831]:
          - generic [ref=f5e1832]:
            - heading [level=2] [ref=f5e1833]: TÉRMINOS Y CONDICIONES UNIMARC
            - paragraph [ref=f5e1834]: El acceso y uso del sitio web www.unimarc.cl y de la aplicación móvil Unimarc (ambos indistintamente “Unimarc.cl”) por u
          - generic [ref=f5e1835]:
            - generic [ref=f5e1836]:
              - button [expanded] [ref=f5e1837] [cursor=pointer]:
                - generic [ref=f5e1840]: 1. Registro del Cliente
              - region [ref=f5e1841]:
                - paragraph [ref=f5e1843]: Será requisito para la adquisición de productos y servicios ofrecidos en Unimarc.cl, estar registrado en éste, ser mayor de 18 años, y al momento de la compra aceptar estos T&C y su Política de Privacidad. El acceso y registro será gratuito.
            - button [ref=f5e1845] [cursor=pointer]:
              - generic [ref=f5e1849]: 2. Clave de acceso secreta
            - button [ref=f5e1851] [cursor=pointer]:
              - generic [ref=f5e1855]: 3. Derechos del Cliente
            - button [ref=f5e1857] [cursor=pointer]:
              - generic [ref=f5e1861]: 4. Procedimiento para hacer uso de Unima
    - contentinfo [aria-hidden] [ref=f5e1862]:
      - generic [ref=f5e1863]:
        - generic [ref=f5e1864]:
          - generic [ref=f5e1865]:
            - link [ref=f5e1866] [cursor=pointer]:
              - /url: /centro-de-ayuda
              - generic [ref=f5e1873]:
                - paragraph [ref=f5e1874]: Centro de ayuda
                - paragraph [ref=f5e1875]: Aquí encontrarás preguntas frecuentes y mucho más
            - link [ref=f5e1876] [cursor=pointer]:
              - /url: /seguimiento-de-compra
              - generic [ref=f5e1882]:
                - paragraph [ref=f5e1883]: Seguimiento de compra
                - paragraph [ref=f5e1884]: Revisa el estado y detalle de tu compra
            - link [ref=f5e1885] [cursor=pointer]:
              - /url: https://wa.me/56958701477
              - generic [ref=f5e1891]:
                - paragraph [ref=f5e1892]: Whatsapp clientes
                - paragraph [ref=f5e1893]: Escríbenos de 9:00 a 20:00 horas
          - generic [ref=f5e1894]:
            - generic [ref=f5e1895]:
              - button [ref=f5e1896] [cursor=pointer]:
                - paragraph [ref=f5e1899]: Contáctanos
              - generic [ref=f5e1901]:
                - generic [ref=f5e1902]:
                  - paragraph [ref=f5e1903]: Unimarc - Servicio al cliente
                  - link [ref=f5e1908] [cursor=pointer]:
                    - /url: tel:6006000025
                    - text: 600 600 0025
                  - paragraph [ref=f5e1909]: Llámanos de 9:00 a 20:00 horas
                - generic [ref=f5e1910]:
                  - paragraph [ref=f5e1911]: Compras online
                  - link [ref=f5e1919] [cursor=pointer]:
                    - /url: /contacto/compras-online
                    - text: Crea una solicitud
                  - link [ref=f5e1925] [cursor=pointer]:
                    - /url: mailto:despachosunimarc@unimarc.cl
                    - text: despachosunimarc@unimarc.cl
                - generic [ref=f5e1926]:
                  - paragraph [ref=f5e1927]: Tarjeta Unipay - Servicio al cliente
                  - link [ref=f5e1932] [cursor=pointer]:
                    - /url: tel:6003909000
                    - text: 600 390 9000
                  - paragraph [ref=f5e1933]: Llámanos de 9:00 a 20:00 horas
                - generic [ref=f5e1934]:
                  - paragraph [ref=f5e1935]: Compras en tienda
                  - link [ref=f5e1943] [cursor=pointer]:
                    - /url: /contacto/compras-tienda
                    - text: Crea una solicitud
                  - link [ref=f5e1949] [cursor=pointer]:
                    - /url: mailto:contacto.unimarc@unimarc.cl
                    - text: contacto.unimarc@unimarc.cl
            - button [ref=f5e1951] [cursor=pointer]:
              - paragraph [ref=f5e1955]: Servicio al cliente
            - button [ref=f5e1957] [cursor=pointer]:
              - paragraph [ref=f5e1961]: Nuestros programas
            - button [ref=f5e1963] [cursor=pointer]:
              - paragraph [ref=f5e1967]: Nuestra empresa
        - separator [ref=f5e1968]
        - generic [ref=f5e1969]:
          - list [ref=f5e1971]:
            - listitem [ref=f5e1972]:
              - link [ref=f5e1973] [cursor=pointer]:
                - /url: /legales/cookies
                - text: Políticas de Cookies
          - generic [ref=f5e1974]:
            - paragraph [ref=f5e1975]: Síguenos
            - generic [ref=f5e1976]:
              - link [ref=f5e1977] [cursor=pointer]:
                - /url: https://www.facebook.com/unimarc
              - link [ref=f5e1980] [cursor=pointer]:
                - /url: https://www.instagram.com/unimarc
              - link [ref=f5e1985] [cursor=pointer]:
                - /url: https://x.com/unimarc
              - link [ref=f5e1988] [cursor=pointer]:
                - /url: https://www.youtube.com/unimarc
  - generic:
    - region
    - region
    - region
    - region
    - region
    - region
  - dialog [ref=f5e1993]:
    - button "Cerrar" [active] [ref=f5e1994] [cursor=pointer]
    - banner [ref=f5e1997]: Elige tu método de entrega
    - generic [ref=f5e1998]:
      - generic [ref=f5e1999]:
        - button "Despacho a domicilio" [pressed] [ref=f5e2000] [cursor=pointer]
        - button "Retiro en tienda" [ref=f5e2007] [cursor=pointer]
      - paragraph [ref=f5e2014]: Calle, dirección o lugar
      - generic [ref=f5e2015]:
        - 'textbox "Ej: Av. Manquehue norte 457, Las condes" [ref=f5e2017]'
        - button "Activar mi ubicación actual" [ref=f5e2018] [cursor=pointer]
      - generic [ref=f5e2024]:
        - paragraph [ref=f5e2025]: Dirección de despacho
        - generic [ref=f5e2031]:
          - paragraph [ref=f5e2032]: Camino La Fuente 15…
          - paragraph
        - paragraph [ref=f5e2033]: Direcciones guardadas
        - generic [ref=f5e2034]:
          - button [ref=f5e2035] [cursor=pointer]:
            - generic [ref=f5e2039]:
              - paragraph [ref=f5e2040]: Casa
              - paragraph [ref=f5e2041]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2042] [cursor=pointer]
        - generic [ref=f5e2045]:
          - button [ref=f5e2046] [cursor=pointer]:
            - generic [ref=f5e2050]:
              - paragraph [ref=f5e2051]: Avenida Las Condes …
              - paragraph [ref=f5e2052]: Avenida Las Condes 14791, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2053] [cursor=pointer]
        - generic [ref=f5e2056]:
          - button [ref=f5e2057] [cursor=pointer]:
            - generic [ref=f5e2061]:
              - paragraph [ref=f5e2062]: Avenida Las Condes … (2)
              - paragraph [ref=f5e2063]: Avenida Las Condes 14791, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2064] [cursor=pointer]
        - generic [ref=f5e2067]:
          - button [ref=f5e2068] [cursor=pointer]:
            - generic [ref=f5e2072]:
              - paragraph [ref=f5e2073]: Avenida Las Condes … (3)
              - paragraph [ref=f5e2074]: Avenida Las Condes 14791, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2075] [cursor=pointer]
        - generic [ref=f5e2078]:
          - button [ref=f5e2079] [cursor=pointer]:
            - generic [ref=f5e2083]:
              - paragraph [ref=f5e2084]: Avenida Las Condes … (4)
              - paragraph [ref=f5e2085]: Avenida Las Condes 14791, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2086] [cursor=pointer]
        - generic [ref=f5e2089]:
          - button [ref=f5e2090] [cursor=pointer]:
            - generic [ref=f5e2094]:
              - paragraph [ref=f5e2095]: Avenida Las Condes … (5)
              - paragraph [ref=f5e2096]: Avenida Las Condes 14791, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2097] [cursor=pointer]
        - generic [ref=f5e2100]:
          - button [ref=f5e2101] [cursor=pointer]:
            - generic [ref=f5e2105]:
              - paragraph [ref=f5e2106]: Calle Uno 23
              - paragraph [ref=f5e2107]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2108] [cursor=pointer]
        - generic [ref=f5e2111]:
          - button [ref=f5e2112] [cursor=pointer]:
            - generic [ref=f5e2116]:
              - paragraph [ref=f5e2117]: Calle Uno 23 (2)
              - paragraph [ref=f5e2118]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2119] [cursor=pointer]
        - generic [ref=f5e2122]:
          - button [ref=f5e2123] [cursor=pointer]:
            - generic [ref=f5e2127]:
              - paragraph [ref=f5e2128]: Calle Uno 23 (3)
              - paragraph [ref=f5e2129]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2130] [cursor=pointer]
        - generic [ref=f5e2133]:
          - button [ref=f5e2134] [cursor=pointer]:
            - generic [ref=f5e2138]:
              - paragraph [ref=f5e2139]: Calle Uno 23 (4)
              - paragraph [ref=f5e2140]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2141] [cursor=pointer]
        - generic [ref=f5e2144]:
          - button [ref=f5e2145] [cursor=pointer]:
            - generic [ref=f5e2149]:
              - paragraph [ref=f5e2150]: Calle Uno 23 (5)
              - paragraph [ref=f5e2151]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2152] [cursor=pointer]
        - generic [ref=f5e2155]:
          - button [ref=f5e2156] [cursor=pointer]:
            - generic [ref=f5e2160]:
              - paragraph [ref=f5e2161]: Calle Uno 23 (6)
              - paragraph [ref=f5e2162]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2163] [cursor=pointer]
        - generic [ref=f5e2166]:
          - button [ref=f5e2167] [cursor=pointer]:
            - generic [ref=f5e2171]:
              - paragraph [ref=f5e2172]: Calle Uno 23 (7)
              - paragraph [ref=f5e2173]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2174] [cursor=pointer]
        - generic [ref=f5e2177]:
          - button [ref=f5e2178] [cursor=pointer]:
            - generic [ref=f5e2182]:
              - paragraph [ref=f5e2183]: Calle Uno 23 (8)
              - paragraph [ref=f5e2184]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2185] [cursor=pointer]
        - generic [ref=f5e2188]:
          - button [ref=f5e2189] [cursor=pointer]:
            - generic [ref=f5e2193]:
              - paragraph [ref=f5e2194]: Calle Uno 23 (9)
              - paragraph [ref=f5e2195]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2196] [cursor=pointer]
        - generic [ref=f5e2199]:
          - button [ref=f5e2200] [cursor=pointer]:
            - generic [ref=f5e2204]:
              - paragraph [ref=f5e2205]: Camino La Fuente 15…
              - paragraph [ref=f5e2206]: Camino La Fuente 1589, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2207] [cursor=pointer]
        - generic [ref=f5e2210]:
          - button [ref=f5e2211] [cursor=pointer]:
            - generic [ref=f5e2215]:
              - paragraph [ref=f5e2216]: Camino La Fuente 15… (2)
              - paragraph [ref=f5e2217]: Camino La Fuente 1589, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2218] [cursor=pointer]
        - generic [ref=f5e2221]:
          - button [ref=f5e2222] [cursor=pointer]:
            - generic [ref=f5e2226]:
              - paragraph [ref=f5e2227]: Camino La Fuente 15… (3)
              - paragraph [ref=f5e2228]: Camino La Fuente 1589, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2229] [cursor=pointer]
        - generic [ref=f5e2232]:
          - button [ref=f5e2233] [cursor=pointer]:
            - generic [ref=f5e2237]:
              - paragraph [ref=f5e2238]: General José Artiga…
              - paragraph [ref=f5e2239]: General José Artigas 3250, Santiago, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2240] [cursor=pointer]
        - generic [ref=f5e2243]:
          - button [ref=f5e2244] [cursor=pointer]:
            - generic [ref=f5e2248]:
              - paragraph [ref=f5e2249]: Las Condes
              - paragraph [ref=f5e2250]: Las Condes, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2251] [cursor=pointer]
        - generic [ref=f5e2254]:
          - button [ref=f5e2255] [cursor=pointer]:
            - generic [ref=f5e2259]:
              - paragraph [ref=f5e2260]: Libertador General …
              - paragraph [ref=f5e2261]: Libertador General Bernardo O'Higgins 1072, Maipú, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2262] [cursor=pointer]
        - generic [ref=f5e2265]:
          - button [ref=f5e2266] [cursor=pointer]:
            - generic [ref=f5e2270]:
              - paragraph [ref=f5e2271]: Libertador General … (2)
              - paragraph [ref=f5e2272]: Libertador General Bernardo O'Higgins 1072, Maipú, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2273] [cursor=pointer]
        - generic [ref=f5e2276]:
          - button [ref=f5e2277] [cursor=pointer]:
            - generic [ref=f5e2281]:
              - paragraph [ref=f5e2282]: Libertador General … (3)
              - paragraph [ref=f5e2283]: Libertador General Bernardo O'Higgins 1072, Maipú, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2284] [cursor=pointer]
        - generic [ref=f5e2287]:
          - button [ref=f5e2288] [cursor=pointer]:
            - generic [ref=f5e2292]:
              - paragraph [ref=f5e2293]: Libertador General … (4)
              - paragraph [ref=f5e2294]: Libertador General Bernardo O'Higgins 1072, Maipú, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2295] [cursor=pointer]
        - generic [ref=f5e2298]:
          - button [ref=f5e2299] [cursor=pointer]:
            - generic [ref=f5e2303]:
              - paragraph [ref=f5e2304]: Libertador General … (5)
              - paragraph [ref=f5e2305]: Libertador General Bernardo O'Higgins 1072, Maipú, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2306] [cursor=pointer]
        - generic [ref=f5e2309]:
          - button [ref=f5e2310] [cursor=pointer]:
            - generic [ref=f5e2314]:
              - paragraph [ref=f5e2315]: Otra Casa
              - paragraph [ref=f5e2316]: Camino La Fuente, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f5e2317] [cursor=pointer]
        - generic [ref=f5e2320]:
          - button [ref=f5e2321] [cursor=pointer]:
            - generic [ref=f5e2325]:
              - paragraph [ref=f5e2326]: Sin cobertura
              - paragraph [ref=f5e2327]: Mechique, Los Lagos
          - button "Opciones de la dirección" [ref=f5e2328] [cursor=pointer]
        - generic [ref=f5e2331]:
          - button [ref=f5e2332] [cursor=pointer]:
            - generic [ref=f5e2336]:
              - paragraph [ref=f5e2337]: T-551
              - paragraph [ref=f5e2338]: T-551, Futrono
          - button "Opciones de la dirección" [ref=f5e2339] [cursor=pointer]
    - contentinfo [ref=f5e2342]:
      - generic [ref=f5e2343]:
        - paragraph [ref=f5e2348]: ¿No aparece tu dirección?
        - button "Agregar" [ref=f5e2349] [cursor=pointer]
```

# Test source

```ts
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
  1027 |     const homeLogueado = await new PaginaHabilitada(page).goto();
  1028 |     await homeLogueado.header.storeLocator.click();
  1029 |     modal = new MetodoEntregaModal(page);
  1030 |     await modal.esperarAbierto();
  1031 |     await expect(modal.tituloDireccionesGuardadas).toBeVisible({ timeout: 30000 });
  1032 |     await expect(modal.campoBusqueda).toBeVisible();
  1033 |     await expect(modal.botonUbicacionActual).toBeVisible();
> 1034 |     expect(await modal.direccionesGuardadas()).toHaveLength(1);
       |                                                ^ Error: expect(received).toHaveLength(expected)
  1035 |     await capturarEvidencia(page, cp, 8, 'dirección activa y métodos del usuario logueado');
  1036 |   });
  1037 | 
  1038 |   test('TC-B2C26-D-007 · Denegar ubicación vuelve al modal y concederla lleva a B2C-99 [Desktop] (Desktop)', async ({ page, testData }) => {
  1039 |     const cp = 'TC-B2C26-D-007';
  1040 |     const origen = token(testData, 'BASE_URL')!.replace(/\/+$/, '');
  1041 |     await page.context().grantPermissions([], { origin: origen });
  1042 |     const { modal } = await abrirModal(page);
  1043 |     await modal.capturarModal(cp, 4, 'modal de entrega antes del permiso');
  1044 |     await modal.tocarUbicacionActual();
  1045 |     await expect(modal.modalPermisos, 'aviso cuando se deniega el permiso').toBeVisible({ timeout: 20000 });
  1046 |     await capturarEvidencia(modal.modalPermisos, cp, 6, 'permiso de ubicación denegado');
  1047 |     await modal.cerrarModalPermisos();
  1048 |     await expect(modal.encabezado).toBeVisible();
  1049 |     await expect(modal.botonUbicacionActual).toBeVisible();
  1050 | 
  1051 |     const lat = Number(token(testData, 'LATITUD_DESPACHO'));
  1052 |     const lng = Number(token(testData, 'LONGITUD_DESPACHO'));
  1053 |     await page.context().clearPermissions();
  1054 |     await page.context().grantPermissions(['geolocation'], { origin: origen });
  1055 |     await page.context().setGeolocation({ latitude: lat, longitude: lng });
  1056 |     await page.reload({ waitUntil: 'domcontentloaded' });
  1057 |     const permitido = (await abrirModal(page)).modal;
  1058 |     await permitido.observarCarga();
  1059 |     await permitido.tocarUbicacionActual();
  1060 |     await expect(permitido.confirmacionPin, 'al conceder, se abre B2C-99').toBeVisible({ timeout: 30000 });
  1061 |     const centro = await permitido.centroDelMapa();
  1062 |     expect(Math.abs(centro.lat - lat)).toBeLessThan(0.002);
  1063 |     expect(Math.abs(centro.lng - lng)).toBeLessThan(0.002);
  1064 |     await capturarEvidencia(page, cp);
  1065 |   });
  1066 | 
  1067 |   test('TC-B2C26-D-011 · Seleccionar dirección guardada distinta deriva al flujo correspondiente [Desktop] (Desktop)', async ({ page, testData }) => {
  1068 |     const cp = 'TC-B2C26-D-011';
  1069 |     const { modal } = await abrirModalLogueado(page, testData);
  1070 |     const guardadas = await modal.direccionesGuardadas();
  1071 |     const activa = await etiquetaActiva(modal);
  1072 |     const otra = guardadas.find((g) => g.etiqueta !== activa);
  1073 |     await capturarEvidencia(page, cp, 4, 'direcciones guardadas disponibles');
  1074 |     if (!otra) throw new Error('PRECONDICION_NO_DISPONIBLE: la cuenta solo muestra la dirección activa; no hay una dirección guardada distinta para ejecutar las ramas de B2C-26 D-011.');
  1075 | 
  1076 |     const desde = marcaOtp();
  1077 |     await modal.elegirGuardada(otra.etiqueta);
  1078 |     await otpSiAparece(page, testData, desde, 45000);
  1079 |     const derivacion = page.getByText(/sin horarios disponibles|a[uú]n no llegamos|algunos productos podr[ií]an agotarse/i).locator('visible=true').first();
  1080 |     const cambio = new HeaderFull(page).storeLocator;
  1081 |     await expect.poll(async () => (await derivacion.isVisible().catch(() => false)) || /desde:|\d{1,2}:\d{2}/i.test(await cambio.innerText().catch(() => '')), { timeout: 45000 }).toBe(true);
  1082 |     await capturarEvidencia(page, cp, 6, 'resultado al elegir otra dirección guardada');
  1083 |   });
  1084 | 
  1085 |   test('TC-B2C26-D-013 · La dirección del header respeta historial y dirección seteada en sesión [Desktop] (Desktop)', async ({ page, browser, testData }) => {
  1086 |     const cp = 'TC-B2C26-D-013';
  1087 |     await page.context().clearCookies();
  1088 |     await new PaginaHabilitada(page).goto();
  1089 |     await page.evaluate(() => localStorage.clear());
  1090 |     await page.reload({ waitUntil: 'domcontentloaded' });
  1091 |     await loginConOtp(page, testData, 'COMPRADOR_USER');
  1092 |     const conHistorial = await new HeaderFull(page).esperarDireccionEnStoreLocator(45000);
  1093 |     await capturarEvidencia(page, cp, 4, `dirección tras iniciar sesión con historial: ${conHistorial}`);
  1094 |     expect(conHistorial, 'el header presenta una dirección válida').toMatch(/\S+/);
  1095 | 
  1096 |     const nueva = await ventanaNueva(browser, page, testData);
  1097 |     const direccion = token(testData, 'DIRECCION_DESPACHO')!;
  1098 |     const { home } = await fijarComoInvitado(nueva, direccion);
  1099 |     await loginConOtp(nueva, testData, 'COMPRADOR_MEMBRESIA_USER');
  1100 |     const sinHistorial = await home.header.esperarDireccionEnStoreLocator(45000);
  1101 |     await capturarEvidencia(nueva, cp, 8, `dirección seteada en sesión sin historial: ${sinHistorial}`);
  1102 |     expect(sinHistorial.toLowerCase()).toContain(partes(direccion).calle.toLowerCase());
  1103 |     await nueva.context().close();
  1104 |   });
  1105 | });
  1106 | 
  1107 | test.describe('B2C-26 pendientes · Mobile', () => {
  1108 |   test.use(MOBILE);
  1109 | 
  1110 |   test('TC-B2C26-M-006 · Resultado de Google sin calle usa el texto como Calle y continúa al PIN [Mobile] (Mobile)', async ({ page }) => {
  1111 |     const cp = 'TC-B2C26-M-006';
  1112 |     const { modal } = await abrirModal(page);
  1113 |     const consultas = modal.observarConsultasAGoogle();
  1114 |     await modal.campoBusqueda.click();
  1115 |     await modal.campoBusqueda.pressSequentially('Providencia', { delay: 70 });
  1116 |     await expect(modal.sugerencias.first(), 'resultado de Google para la búsqueda indicada').toBeVisible({ timeout: 30000 });
  1117 |     await capturarEvidencia(page, cp, 6, 'resultados de Google para Providencia');
  1118 |     const sugerenciaComuna = consultas.respuestas.some((x) => /"(locality|administrative_area_level_\d|sublocality)"/i.test(x));
  1119 |     expect(sugerenciaComuna, 'Google debe ofrecer un resultado de comuna sin calle').toBe(true);
  1120 |     await modal.sugerencias.first().click();
  1121 |     await expect(modal.confirmacionPin).toBeVisible({ timeout: 30000 });
  1122 |     await modal.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
  1123 |     await expect(modal.confirmacionPin.getByRole('textbox').first()).toHaveValue(/Providencia/i);
  1124 |     await capturarEvidencia(page, cp);
  1125 |   });
  1126 | 
  1127 |   test('TC-B2C26-M-014 · Denegar ubicación vuelve al modal de entrega sin cambios [Mobile] (Mobile)', async ({ page, testData }) => {
  1128 |     const cp = 'TC-B2C26-M-014';
  1129 |     const origen = token(testData, 'BASE_URL')!.replace(/\/+$/, '');
  1130 |     await page.context().grantPermissions([], { origin: origen });
  1131 |     const { modal } = await abrirModal(page);
  1132 |     const antes = await modal.direccionActiva.textContent().catch(() => '');
  1133 |     await modal.tocarUbicacionActual();
  1134 |     await expect(modal.modalPermisos, 'aviso al denegar ubicación').toBeVisible({ timeout: 20000 });
```