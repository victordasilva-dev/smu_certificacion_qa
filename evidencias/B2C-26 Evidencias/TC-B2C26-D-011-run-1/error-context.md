# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: B2C-26.spec.ts >> B2C-26 pendientes · Desktop >> TC-B2C26-D-011 · Seleccionar dirección guardada distinta deriva al flujo correspondiente [Desktop] (Desktop)
- Location: tests/B2C-26.spec.ts:1067:7

# Error details

```
Test timeout of 360000ms exceeded.
```

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - generic [ref=f1e4]:
    - link [aria-hidden] [ref=f1e5] [cursor=pointer]:
      - /url: "#chakra-skip-nav"
      - text: Skip to Content
    - banner [ref=f1e8]:
      - generic [ref=f1e10]:
        - generic [ref=f1e11]:
          - button [ref=f1e12] [cursor=pointer]
          - button [ref=f1e23] [cursor=pointer]: Categorías
        - textbox [ref=f1e30]:
          - /placeholder: ¿Qué estás buscando?
        - generic [ref=f1e31]:
          - button [ref=f1e32] [cursor=pointer]:
            - generic [aria-hidden] [ref=f1e33]: KP
            - generic [ref=f1e34]: Hola, Karl Paul Fin
          - button [ref=f1e35] [cursor=pointer]:
            - generic [ref=f1e38]: "1"
      - generic [ref=f1e41]:
        - button [ref=f1e43] [cursor=pointer]:
          - generic [ref=f1e54]:
            - paragraph [ref=f1e55]: Camino La Fuente 15…
            - generic [ref=f1e56]:
              - paragraph [ref=f1e57]: "Desde: Jue 29/10, 09:00 hrs."
              - paragraph [ref=f1e59]: $2.990
        - generic [ref=f1e63]:
          - list [ref=f1e66]:
            - listitem [ref=f1e67]:
              - link [ref=f1e68] [cursor=pointer]:
                - /url: /ofertas
                - text: Ofertas
            - listitem [ref=f1e69]:
              - link [ref=f1e70] [cursor=pointer]:
                - /url: /marketplace
                - text: Marketplace
            - listitem [ref=f1e71]:
              - link [ref=f1e72] [cursor=pointer]:
                - /url: /locales
                - text: Locales y horarios
          - button [ref=f1e73] [cursor=pointer]:
            - paragraph [ref=f1e75]: Suscríbete a
    - main [ref=f1e85]:
      - generic [ref=f1e91]:
        - generic [ref=f1e95]:
          - generic [ref=f1e97]:
            - link [ref=f1e102] [cursor=pointer]:
              - /url: /category/bebidas-y-licores
            - link [ref=f1e109] [cursor=pointer]:
              - /url: /category/carnes
            - link [ref=f1e116] [cursor=pointer]:
              - /url: /category/lacteos-huevos-y-refrigerados
          - button [ref=f1e121] [cursor=pointer]
          - button [ref=f1e124] [cursor=pointer]
        - generic [ref=f1e129]:
          - generic [ref=f1e134]:
            - generic [ref=f1e136]:
              - heading [level=3] [ref=f1e138]: Los más vendidos
              - link [ref=f1e140] [cursor=pointer]:
                - /url: /category/carnes
                - text: Mostrar todo
            - generic [ref=f1e141]:
              - generic [ref=f1e143]:
                - generic [ref=f1e145]:
                  - generic [ref=f1e146]:
                    - link [ref=f1e147] [cursor=pointer]:
                      - /url: /chuletas-de-cordero-simunovic-600-g/000000000000653082-UN.html
                    - button [ref=f1e149] [cursor=pointer]
                  - generic [ref=f1e152]:
                    - generic [ref=f1e154]:
                      - paragraph [ref=f1e155]: $18.990
                      - paragraph [ref=f1e156]: ($31.650 x kg)
                    - generic [ref=f1e157]:
                      - link [ref=f1e158] [cursor=pointer]:
                        - /url: /chuletas-de-cordero-simunovic-600-g/000000000000653082-UN.html
                        - generic [ref=f1e159]: Simunovic | Chuletas de cordero Simunovic 600 g
                      - generic [ref=f1e160]: 600 g
                  - button [ref=f1e163] [cursor=pointer]: Agregar
                - generic [ref=f1e165]:
                  - generic [ref=f1e166]:
                    - link [ref=f1e167] [cursor=pointer]:
                      - /url: /abastero-vacuno-nacional-al-vacio-1.8-kg/000000000000028594-KGV.html
                    - button [ref=f1e169] [cursor=pointer]
                  - generic [ref=f1e172]:
                    - generic [ref=f1e174]:
                      - paragraph [ref=f1e175]: $11.190
                      - paragraph [ref=f1e176]: ($6.217 x kg)
                    - generic [ref=f1e177]:
                      - link [ref=f1e178] [cursor=pointer]:
                        - /url: /abastero-vacuno-nacional-al-vacio-1.8-kg/000000000000028594-KGV.html
                        - generic [ref=f1e179]: Nacional | Abastero vacuno Nacional al vacío 1.8 Kg
                      - generic [ref=f1e180]: 1.8 kg
                  - button [ref=f1e183] [cursor=pointer]: Agregar
                - generic [ref=f1e185]:
                  - generic [ref=f1e186]:
                    - link [ref=f1e187] [cursor=pointer]:
                      - /url: /albondigas-super-pollo-espaciales-congeladas-300-g/000000000000675191-UN.html
                    - button [ref=f1e189] [cursor=pointer]
                  - generic [ref=f1e192]:
                    - generic [ref=f1e194]:
                      - paragraph [ref=f1e195]: $2.490
                      - paragraph [ref=f1e196]: ($8.300 x kg)
                    - generic [ref=f1e197]: Pronto disponible
                    - generic [ref=f1e199]:
                      - link [ref=f1e200] [cursor=pointer]:
                        - /url: /albondigas-super-pollo-espaciales-congeladas-300-g/000000000000675191-UN.html
                        - generic [ref=f1e201]: Super Pollo | Albondigas Super Pollo espaciales congeladas 3…
                      - generic [ref=f1e202]: 300 g
                  - button [ref=f1e205] [cursor=pointer]: Ver similares
                - generic [ref=f1e207]:
                  - generic [ref=f1e208]:
                    - link [ref=f1e209] [cursor=pointer]:
                      - /url: /alitas-trutro-de-pollo-super-pollo-congelado-800-g/000000000000748600-UN.html
                    - button [ref=f1e211] [cursor=pointer]
                  - generic [ref=f1e214]:
                    - generic [ref=f1e216]:
                      - paragraph [ref=f1e217]: $4.390
                      - paragraph [ref=f1e218]: ($5.488 x kg)
                    - generic [ref=f1e219]:
                      - link [ref=f1e220] [cursor=pointer]:
                        - /url: /alitas-trutro-de-pollo-super-pollo-congelado-800-g/000000000000748600-UN.html
                        - generic [ref=f1e221]: Super Pollo | Alitas trutro de pollo Super Pollo congelado 8…
                      - generic [ref=f1e222]: 800 g
                  - button [ref=f1e225] [cursor=pointer]: Agregar
                - generic [ref=f1e227]:
                  - generic [ref=f1e228]:
                    - link [ref=f1e229] [cursor=pointer]:
                      - /url: /carne-molida-4-grasa-tartaro-fundo-rio-alegre-250-g/000000000000662457-UN.html
                    - button [pressed] [ref=f1e231] [cursor=pointer]
                  - generic [ref=f1e234]:
                    - generic [ref=f1e235]:
                      - generic [ref=f1e236]:
                        - generic [ref=f1e237]:
                          - generic [aria-hidden] [ref=f1e238]: 💎
                          - paragraph [ref=f1e239]: $2.897
                        - paragraph [ref=f1e240]: ($11.588 x kg)
                      - generic [ref=f1e241]:
                        - paragraph [ref=f1e242]: $3.890
                        - paragraph [ref=f1e243]: ($15.560 x kg)
                    - generic [ref=f1e244]:
                      - link [ref=f1e245] [cursor=pointer]:
                        - /url: /carne-molida-4-grasa-tartaro-fundo-rio-alegre-250-g/000000000000662457-UN.html
                        - generic [ref=f1e246]: Fundo Rio Alegre | Carne molida 4% grasa tártaro Fundo Río A…
                      - generic [ref=f1e247]: 250 g
                  - button [ref=f1e250] [cursor=pointer]: Agregar
                - generic [ref=f1e252]:
                  - generic [ref=f1e253]:
                    - link [ref=f1e254] [cursor=pointer]:
                      - /url: /carne-molida-4-grasa-vacuno-fundo-rio-alegre-tartaro-250-g/000000000000652051-UN.html
                    - button [ref=f1e256] [cursor=pointer]
                  - generic [ref=f1e259]:
                    - generic [ref=f1e260]:
                      - generic [ref=f1e261]:
                        - generic [ref=f1e262]:
                          - generic [aria-hidden] [ref=f1e263]: 💎
                          - paragraph [ref=f1e264]: $2.897
                        - paragraph [ref=f1e265]: ($11.588 x kg)
                      - generic [ref=f1e266]:
                        - paragraph [ref=f1e267]: $3.890
                        - paragraph [ref=f1e268]: ($15.560 x kg)
                    - generic [ref=f1e269]:
                      - link [ref=f1e270] [cursor=pointer]:
                        - /url: /carne-molida-4-grasa-vacuno-fundo-rio-alegre-tartaro-250-g/000000000000652051-UN.html
                        - generic [ref=f1e271]: Fundo Rio Alegre | Carne molida 4% grasa vacuno Fundo Río Al…
                      - generic [ref=f1e272]: 250 g
                  - button [ref=f1e275] [cursor=pointer]: Agregar
                - generic [ref=f1e277]:
                  - generic [ref=f1e278]:
                    - link [ref=f1e279] [cursor=pointer]:
                      - /url: /carne-molida-fundo-rio-alegre-tartaro-4-grasa-500g/000000000000666200-UN.html
                    - generic [ref=f1e281]: Promoción Lleva 2 unidades por Monto
                    - button [pressed] [ref=f1e282] [cursor=pointer]
                  - generic [ref=f1e285]:
                    - generic [ref=f1e286]:
                      - generic [ref=f1e287]:
                        - generic [ref=f1e288]:
                          - generic [aria-hidden] [ref=f1e289]: 💎
                          - paragraph [ref=f1e290]: Lleva 2 por $10.866
                        - paragraph [ref=f1e291]: ($10.866 x kg)
                      - generic [ref=f1e292]:
                        - generic [ref=f1e293]: Lleva 2 por $12.490
                        - paragraph [ref=f1e294]: ($12.490 x kg)
                      - generic [ref=f1e295]:
                        - paragraph [ref=f1e296]: $7.690 c/u
                        - paragraph [ref=f1e297]: ($15.380 x kg)
                    - generic [ref=f1e298]:
                      - link [ref=f1e299] [cursor=pointer]:
                        - /url: /carne-molida-fundo-rio-alegre-tartaro-4-grasa-500g/000000000000666200-UN.html
                        - generic [ref=f1e300]: Fundo Rio Alegre | Carne molida fundo rio alegre tartaro 4% …
                      - generic [ref=f1e301]: 500 g
                  - generic [ref=f1e303]:
                    - button [ref=f1e304] [cursor=pointer]:
                      - generic [aria-hidden] [ref=f1e305]: 😎
                      - paragraph [ref=f1e306]: Combina la promo
                    - button [ref=f1e308] [cursor=pointer]: Agregar
                - generic [ref=f1e310]:
                  - generic [ref=f1e311]:
                    - link [ref=f1e312] [cursor=pointer]:
                      - /url: /carne-molida-tartaro-fundo-rio-alegre-4-grasa-500g/000000000000666285-UN.html
                    - generic [ref=f1e314]: Promoción Lleva 2 unidades por Monto
                    - button [pressed] [ref=f1e315] [cursor=pointer]
                  - generic [ref=f1e318]:
                    - generic [ref=f1e319]:
                      - generic [ref=f1e320]:
                        - generic [ref=f1e321]:
                          - generic [aria-hidden] [ref=f1e322]: 💎
                          - paragraph [ref=f1e323]: Lleva 2 por $10.866
                        - paragraph [ref=f1e324]: ($10.866 x kg)
                      - generic [ref=f1e325]:
                        - generic [ref=f1e326]: Lleva 2 por $12.490
                        - paragraph [ref=f1e327]: ($12.490 x kg)
                      - generic [ref=f1e328]:
                        - paragraph [ref=f1e329]: $7.690 c/u
                        - paragraph [ref=f1e330]: ($15.380 x kg)
                    - generic [ref=f1e331]:
                      - link [ref=f1e332] [cursor=pointer]:
                        - /url: /carne-molida-tartaro-fundo-rio-alegre-4-grasa-500g/000000000000666285-UN.html
                        - generic [ref=f1e333]: Fundo Rio Alegre | Carne molida tartaro fundo río alegre 4% …
                      - generic [ref=f1e334]: 500 g
                  - generic [ref=f1e336]:
                    - button [ref=f1e337] [cursor=pointer]:
                      - generic [aria-hidden] [ref=f1e338]: 😎
                      - paragraph [ref=f1e339]: Combina la promo
                    - button [ref=f1e341] [cursor=pointer]: Agregar
                - generic [ref=f1e343]:
                  - generic [ref=f1e344]:
                    - link [ref=f1e345] [cursor=pointer]:
                      - /url: /choclillo-vacuno-nacional-al-vacio-1.3-kg/000000000000028597-KGV.html
                    - button [ref=f1e347] [cursor=pointer]
                  - generic [ref=f1e350]:
                    - generic [ref=f1e352]:
                      - paragraph [ref=f1e353]: $11.990
                      - paragraph [ref=f1e354]: ($9.223 x kg)
                    - generic [ref=f1e355]:
                      - link [ref=f1e356] [cursor=pointer]:
                        - /url: /choclillo-vacuno-nacional-al-vacio-1.3-kg/000000000000028597-KGV.html
                        - generic [ref=f1e357]: Nacional | Choclillo vacuno Nacional al vacío 1.3 Kg
                      - generic [ref=f1e358]: 1.3 kg
                  - button [ref=f1e361] [cursor=pointer]: Agregar
                - generic [ref=f1e363]:
                  - generic [ref=f1e364]:
                    - link [ref=f1e365] [cursor=pointer]:
                      - /url: /chuleta-centro-de-cerdo-super-cerdo-bandeja-550-g/000000000000626717-UN.html
                    - button [ref=f1e367] [cursor=pointer]
                  - generic [ref=f1e370]:
                    - generic [ref=f1e372]:
                      - paragraph [ref=f1e373]: $4.890
                      - paragraph [ref=f1e374]: ($8.891 x kg)
                    - generic [ref=f1e375]:
                      - link [ref=f1e376] [cursor=pointer]:
                        - /url: /chuleta-centro-de-cerdo-super-cerdo-bandeja-550-g/000000000000626717-UN.html
                        - generic [ref=f1e377]: Super Cerdo | Chuleta centro de cerdo Super Cerdo bandeja 55…
                      - generic [ref=f1e378]: 550 g
                  - button [ref=f1e381] [cursor=pointer]: Agregar
                - generic [ref=f1e383]:
                  - generic [ref=f1e384]:
                    - link [ref=f1e385] [cursor=pointer]:
                      - /url: /chuleta-centro-de-cerdo-super-cerdo-congelado-750-g/000000000000627635-UN.html
                    - button [ref=f1e387] [cursor=pointer]
                  - generic [ref=f1e390]:
                    - generic [ref=f1e391]:
                      - generic [ref=f1e392]:
                        - generic [ref=f1e393]:
                          - generic [aria-hidden] [ref=f1e394]: 💎
                          - paragraph [ref=f1e395]: $6.291
                        - paragraph [ref=f1e396]: ($8.388 x kg)
                      - generic [ref=f1e397]:
                        - generic [ref=f1e398]: 10%
                        - paragraph [ref=f1e399]: $6.291
                        - paragraph [ref=f1e400]: ($8.388 x kg)
                      - paragraph [ref=f1e401]: "Antes: $6.990"
                    - generic [ref=f1e402]:
                      - link [ref=f1e403] [cursor=pointer]:
                        - /url: /chuleta-centro-de-cerdo-super-cerdo-congelado-750-g/000000000000627635-UN.html
                        - generic [ref=f1e404]: Super Cerdo | Chuleta centro de cerdo Super Cerdo congelado …
                      - generic [ref=f1e405]: 750 g
                  - button [ref=f1e408] [cursor=pointer]: Agregar
                - generic [ref=f1e410]:
                  - generic [ref=f1e411]:
                    - link [ref=f1e412] [cursor=pointer]:
                      - /url: /chuleta-parrillera-de-cordero-congelado-caja-1.5-kg/000000000000219902-UN.html
                    - button [ref=f1e414] [cursor=pointer]
                  - generic [ref=f1e417]:
                    - paragraph [ref=f1e420]: $43.990
                    - generic [ref=f1e421]:
                      - link [ref=f1e422] [cursor=pointer]:
                        - /url: /chuleta-parrillera-de-cordero-congelado-caja-1.5-kg/000000000000219902-UN.html
                        - text: Chuleta parrillera de cordero congelado caja 1.5 Kg
                      - generic [ref=f1e423]: 1.5 kg
                  - button [ref=f1e426] [cursor=pointer]: Agregar
              - button [ref=f1e429] [cursor=pointer]
              - button [ref=f1e432] [cursor=pointer]
          - generic [ref=f1e439]:
            - generic [ref=f1e440]:
              - link [ref=f1e442] [cursor=pointer]:
                - /url: /category/frutas-y-verduras
              - generic [ref=f1e445]:
                - generic [ref=f1e446]:
                  - paragraph [ref=f1e448]: "45"
                  - paragraph [ref=f1e449]: días
                - paragraph [ref=f1e451]: ":"
                - generic [ref=f1e452]:
                  - paragraph [ref=f1e454]: "07"
                  - paragraph [ref=f1e455]: horas
                - paragraph [ref=f1e457]: ":"
                - generic [ref=f1e458]:
                  - paragraph [ref=f1e460]: "17"
                  - paragraph [ref=f1e461]: minutos
                - paragraph [ref=f1e463]: ":"
                - generic [ref=f1e464]:
                  - paragraph [ref=f1e466]: "49"
                  - paragraph [ref=f1e467]: segundos
            - generic [ref=f1e471]:
              - generic [ref=f1e473]:
                - generic [ref=f1e474]:
                  - link [ref=f1e475] [cursor=pointer]:
                    - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                  - button [ref=f1e477] [cursor=pointer]
                - generic [ref=f1e480]:
                  - paragraph [ref=f1e483]: $1.290
                  - generic [ref=f1e484]:
                    - link [ref=f1e485] [cursor=pointer]:
                      - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                      - text: Agua saborizada Más manzana 1.6 L
                    - generic [ref=f1e486]: 1.6 l
                - button [ref=f1e489] [cursor=pointer]: Agregar
              - generic [ref=f1e491]:
                - generic [ref=f1e492]:
                  - link [ref=f1e493] [cursor=pointer]:
                    - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                  - button [ref=f1e495] [cursor=pointer]
                - generic [ref=f1e498]:
                  - generic [ref=f1e500]:
                    - paragraph [ref=f1e501]: $2.550
                    - paragraph [ref=f1e502]: ($1.275 x unidad)
                  - generic [ref=f1e503]: Pronto disponible
                  - generic [ref=f1e505]:
                    - link [ref=f1e506] [cursor=pointer]:
                      - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                      - generic [ref=f1e507]: Frutas y Verduras | Choclo bandeja 2 un
                    - generic [ref=f1e508]: 2 un
                - button [ref=f1e511] [cursor=pointer]: Ver similares
              - generic [ref=f1e513]:
                - generic [ref=f1e514]:
                  - link [ref=f1e515] [cursor=pointer]:
                    - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                  - button [ref=f1e517] [cursor=pointer]
                - generic [ref=f1e520]:
                  - generic [ref=f1e521]: Pronto disponible
                  - link [ref=f1e524] [cursor=pointer]:
                    - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                    - generic [ref=f1e525]: Proverde | Choclo cocida Proverde bolsa 500 gr
                - button [ref=f1e527] [cursor=pointer]: Ver similares
              - generic [ref=f1e529]:
                - generic [ref=f1e530]:
                  - link [ref=f1e531] [cursor=pointer]:
                    - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                  - button [ref=f1e533] [cursor=pointer]
                - generic [ref=f1e536]:
                  - paragraph [ref=f1e539]: $2.490
                  - generic [ref=f1e540]:
                    - link [ref=f1e541] [cursor=pointer]:
                      - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                      - generic [ref=f1e542]: Frutas y Verduras | Clementina malla 1 Kg
                    - generic [ref=f1e543]: 1 kg
                - button [ref=f1e546] [cursor=pointer]: Agregar
              - generic [ref=f1e548]:
                - generic [ref=f1e549]:
                  - link [ref=f1e550] [cursor=pointer]:
                    - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                  - button [ref=f1e552] [cursor=pointer]
                - generic [ref=f1e555]:
                  - paragraph [ref=f1e558]: $1.999
                  - generic [ref=f1e559]:
                    - link [ref=f1e560] [cursor=pointer]:
                      - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                      - generic [ref=f1e561]: Frutas y Verduras | Clementina malla 1 Kg
                    - generic [ref=f1e562]: 1 kg
                - button [ref=f1e565] [cursor=pointer]: Agregar
              - generic [ref=f1e567]:
                - generic [ref=f1e568]:
                  - link [ref=f1e569] [cursor=pointer]:
                    - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                  - button [ref=f1e571] [cursor=pointer]
                - generic [ref=f1e574]:
                  - generic [ref=f1e576]:
                    - paragraph [ref=f1e577]: $1.375
                    - paragraph [ref=f1e578]: ($2.750 x kg)
                  - generic [ref=f1e579]:
                    - link [ref=f1e580] [cursor=pointer]:
                      - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                      - generic [ref=f1e581]: Frutas y Verduras | Clementinas granel 500 g
                    - generic [ref=f1e582]: 500 g
                - button [ref=f1e585] [cursor=pointer]: Agregar
              - generic [ref=f1e587]:
                - generic [ref=f1e588]:
                  - link [ref=f1e589] [cursor=pointer]:
                    - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                  - button [ref=f1e591] [cursor=pointer]
                - generic [ref=f1e594]:
                  - generic [ref=f1e596]:
                    - paragraph [ref=f1e597]: $1.999
                    - paragraph [ref=f1e598]: ($3.998 x kg)
                  - generic [ref=f1e599]:
                    - link [ref=f1e600] [cursor=pointer]:
                      - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                      - generic [ref=f1e601]: Frutas y Verduras | Clementinas granel 500 g
                    - generic [ref=f1e602]: 500 g
                - button [ref=f1e605] [cursor=pointer]: Agregar
              - generic [ref=f1e607]:
                - generic [ref=f1e608]:
                  - link [ref=f1e609] [cursor=pointer]:
                    - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                  - generic [ref=f1e611]: Promoción % Unipay
                  - button [ref=f1e612] [cursor=pointer]
                - generic [ref=f1e615]:
                  - generic [ref=f1e616]:
                    - generic [ref=f1e618]:
                      - generic [aria-hidden] [ref=f1e619]: 💎
                      - paragraph [ref=f1e620]: $2.601
                    - generic [ref=f1e621]:
                      - generic [ref=f1e622]: 10%
                      - paragraph [ref=f1e623]: $2.601
                    - paragraph [ref=f1e624]: "Antes: $2.890"
                  - generic [ref=f1e625]:
                    - link [ref=f1e626] [cursor=pointer]:
                      - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                      - generic [ref=f1e627]: Frutas y Verduras | Kiwi bolsa 1 Kg
                    - generic [ref=f1e628]: 1 kg
                - button [ref=f1e631] [cursor=pointer]: Agregar
              - generic [ref=f1e633]:
                - generic [ref=f1e634]:
                  - link [ref=f1e635] [cursor=pointer]:
                    - /url: /kiwi-bolsa-1-kg/000000000010062644-UN.html
                  - button [ref=f1e637] [cursor=pointer]
                - generic [ref=f1e640]:
                  - paragraph [ref=f1e643]: $1.999
                  - generic [ref=f1e644]:
                    - link [ref=f1e645] [cursor=pointer]:
                      - /url: /kiwi-bolsa-1-kg/000000000010062644-UN.html
                      - generic [ref=f1e646]: Frutas y Verduras | Kiwi bolsa 1 Kg
                    - generic [ref=f1e647]: 1 kg
                - button [ref=f1e650] [cursor=pointer]: Agregar
              - generic [ref=f1e652]:
                - generic [ref=f1e653]:
                  - link [ref=f1e654] [cursor=pointer]:
                    - /url: /limon-granel-500-g/000000000000553212-KG.html
                  - button [ref=f1e656] [cursor=pointer]
                - generic [ref=f1e659]:
                  - generic [ref=f1e661]:
                    - paragraph [ref=f1e662]: $995
                    - paragraph [ref=f1e663]: ($1.990 x l)
                  - generic [ref=f1e664]:
                    - link [ref=f1e665] [cursor=pointer]:
                      - /url: /limon-granel-500-g/000000000000553212-KG.html
                      - generic [ref=f1e666]: Frutas y Verduras | Limón granel 500 g
                    - generic [ref=f1e667]: 500 g
                - button [ref=f1e670] [cursor=pointer]: Agregar
              - generic [ref=f1e672]:
                - generic [ref=f1e673]:
                  - link [ref=f1e674] [cursor=pointer]:
                    - /url: /limon-granel-500-g/000000000010553212-KG.html
                  - button [ref=f1e676] [cursor=pointer]
                - generic [ref=f1e679]:
                  - generic [ref=f1e681]:
                    - paragraph [ref=f1e682]: $1.999
                    - paragraph [ref=f1e683]: ($3.998 x l)
                  - generic [ref=f1e684]:
                    - link [ref=f1e685] [cursor=pointer]:
                      - /url: /limon-granel-500-g/000000000010553212-KG.html
                      - generic [ref=f1e686]: Frutas y Verduras | Limón granel 500 g
                    - generic [ref=f1e687]: 500 g
                - button [ref=f1e690] [cursor=pointer]: Agregar
              - generic [ref=f1e692]:
                - generic [ref=f1e693]:
                  - link [ref=f1e694] [cursor=pointer]:
                    - /url: /mangos-granel-500-g/000000000000037972-KG.html
                  - button [ref=f1e696] [cursor=pointer]
                - generic [ref=f1e699]:
                  - generic [ref=f1e701]:
                    - paragraph [ref=f1e702]: $2.790
                    - paragraph [ref=f1e703]: ($5.580 x kg)
                  - generic [ref=f1e704]:
                    - link [ref=f1e705] [cursor=pointer]:
                      - /url: /mangos-granel-500-g/000000000000037972-KG.html
                      - generic [ref=f1e706]: Frutas Y Verduras | Mangos granel 500 g
                    - generic [ref=f1e707]: 500 g
                - button [ref=f1e710] [cursor=pointer]: Agregar
          - generic [ref=f1e715]:
            - heading [level=2] [ref=f1e716]: Categorías destacadas
            - generic [ref=f1e718]:
              - link [ref=f1e722] [cursor=pointer]:
                - /url: /category/frutas-y-verduras
                - paragraph [ref=f1e726]: Orgánico
              - link [ref=f1e730] [cursor=pointer]:
                - /url: /category/congelados
                - paragraph [ref=f1e734]: Comida en casa
              - link [ref=f1e738] [cursor=pointer]:
                - /url: /category/panaderia-y-pasteleria
                - paragraph [ref=f1e742]: Panadería
              - link [ref=f1e746] [cursor=pointer]:
                - /url: /category/panaderia-y-pasteleria
                - paragraph [ref=f1e750]: Pastelería
              - link [ref=f1e754] [cursor=pointer]:
                - /url: /category/bebidas-y-licores
                - paragraph [ref=f1e758]: Celebraciones
              - link [ref=f1e762] [cursor=pointer]:
                - /url: /category/limpieza
                - paragraph [ref=f1e766]: Higiene personal
              - link [ref=f1e770] [cursor=pointer]:
                - /url: /category/limpieza
                - paragraph [ref=f1e774]: Limpieza
          - generic [ref=f1e777]:
            - generic [ref=f1e778]:
              - generic [ref=f1e779]:
                - heading [level=3] [ref=f1e780]: Cada día, una ocasión
                - link [ref=f1e781] [cursor=pointer]:
                  - /url: /search?q=ofertas
                  - text: Mostrar todo
              - paragraph [ref=f1e782]: Encuentra aquí todo lo que necesitas y más
            - generic [ref=f1e783]:
              - generic [ref=f1e785]:
                - link [ref=f1e789] [cursor=pointer]:
                  - /url: /category/carnes
                  - paragraph [ref=f1e795]: Asaíto
                - link [ref=f1e799] [cursor=pointer]:
                  - /url: /category/despensa
                  - paragraph [ref=f1e805]: Picoteo
                - link [ref=f1e809] [cursor=pointer]:
                  - /url: /category/frutas-y-verduras
                  - paragraph [ref=f1e815]: Orgánico
                - link [ref=f1e819] [cursor=pointer]:
                  - /url: /category/desayuno-y-dulces
                  - paragraph [ref=f1e825]: Colaciones
              - button [disabled] [ref=f1e828] [cursor=pointer]
              - button [ref=f1e831] [cursor=pointer]
          - generic [ref=f1e839]:
            - link [ref=f1e840] [cursor=pointer]:
              - /url: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/frutas-y-verduras_frutas
              - paragraph [ref=f1e844]: OFERTA
              - generic:
                - generic:
                  - paragraph: Mecadito Unimarc
                  - generic:
                    - paragraph: "40"
                    - generic:
                      - paragraph: "%"
                      - paragraph: dcto
            - generic [ref=f1e845]:
              - generic [ref=f1e847]:
                - generic [ref=f1e848]:
                  - heading [level=3] [ref=f1e849]: Frescura y calidad
                  - link [ref=f1e850] [cursor=pointer]:
                    - /url: /category/frutas-y-verduras
                    - text: Mostrar todo
                - paragraph [ref=f1e851]: Frutas y verduras
              - generic [ref=f1e852]:
                - generic [ref=f1e854]:
                  - generic [ref=f1e856]:
                    - generic [ref=f1e857]:
                      - link [ref=f1e858] [cursor=pointer]:
                        - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                      - button [ref=f1e860] [cursor=pointer]
                    - generic [ref=f1e863]:
                      - paragraph [ref=f1e866]: $1.290
                      - generic [ref=f1e867]:
                        - link [ref=f1e868] [cursor=pointer]:
                          - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                          - text: Agua saborizada Más manzana 1.6 L
                        - generic [ref=f1e869]: 1.6 l
                    - button [ref=f1e872] [cursor=pointer]: Agregar
                  - generic [ref=f1e874]:
                    - generic [ref=f1e875]:
                      - link [ref=f1e876] [cursor=pointer]:
                        - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                      - button [ref=f1e878] [cursor=pointer]
                    - generic [ref=f1e881]:
                      - generic [ref=f1e883]:
                        - paragraph [ref=f1e884]: $2.550
                        - paragraph [ref=f1e885]: ($1.275 x unidad)
                      - generic [ref=f1e886]: Pronto disponible
                      - generic [ref=f1e888]:
                        - link [ref=f1e889] [cursor=pointer]:
                          - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                          - generic [ref=f1e890]: Frutas y Verduras | Choclo bandeja 2 un
                        - generic [ref=f1e891]: 2 un
                    - button [ref=f1e894] [cursor=pointer]: Ver similares
                  - generic [ref=f1e896]:
                    - generic [ref=f1e897]:
                      - link [ref=f1e898] [cursor=pointer]:
                        - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                      - button [ref=f1e900] [cursor=pointer]
                    - generic [ref=f1e903]:
                      - generic [ref=f1e904]: Pronto disponible
                      - link [ref=f1e907] [cursor=pointer]:
                        - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                        - generic [ref=f1e908]: Proverde | Choclo cocida Proverde bolsa 500 gr
                    - button [ref=f1e910] [cursor=pointer]: Ver similares
                  - generic [ref=f1e912]:
                    - generic [ref=f1e913]:
                      - link [ref=f1e914] [cursor=pointer]:
                        - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                      - button [ref=f1e916] [cursor=pointer]
                    - generic [ref=f1e919]:
                      - paragraph [ref=f1e922]: $2.490
                      - generic [ref=f1e923]:
                        - link [ref=f1e924] [cursor=pointer]:
                          - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                          - generic [ref=f1e925]: Frutas y Verduras | Clementina malla 1 Kg
                        - generic [ref=f1e926]: 1 kg
                    - button [ref=f1e929] [cursor=pointer]: Agregar
                  - generic [ref=f1e931]:
                    - generic [ref=f1e932]:
                      - link [ref=f1e933] [cursor=pointer]:
                        - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                      - button [ref=f1e935] [cursor=pointer]
                    - generic [ref=f1e938]:
                      - paragraph [ref=f1e941]: $1.999
                      - generic [ref=f1e942]:
                        - link [ref=f1e943] [cursor=pointer]:
                          - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                          - generic [ref=f1e944]: Frutas y Verduras | Clementina malla 1 Kg
                        - generic [ref=f1e945]: 1 kg
                    - button [ref=f1e948] [cursor=pointer]: Agregar
                  - generic [ref=f1e950]:
                    - generic [ref=f1e951]:
                      - link [ref=f1e952] [cursor=pointer]:
                        - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                      - button [ref=f1e954] [cursor=pointer]
                    - generic [ref=f1e957]:
                      - generic [ref=f1e959]:
                        - paragraph [ref=f1e960]: $1.375
                        - paragraph [ref=f1e961]: ($2.750 x kg)
                      - generic [ref=f1e962]:
                        - link [ref=f1e963] [cursor=pointer]:
                          - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                          - generic [ref=f1e964]: Frutas y Verduras | Clementinas granel 500 g
                        - generic [ref=f1e965]: 500 g
                    - button [ref=f1e968] [cursor=pointer]: Agregar
                  - generic [ref=f1e970]:
                    - generic [ref=f1e971]:
                      - link [ref=f1e972] [cursor=pointer]:
                        - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                      - button [ref=f1e974] [cursor=pointer]
                    - generic [ref=f1e977]:
                      - generic [ref=f1e979]:
                        - paragraph [ref=f1e980]: $1.999
                        - paragraph [ref=f1e981]: ($3.998 x kg)
                      - generic [ref=f1e982]:
                        - link [ref=f1e983] [cursor=pointer]:
                          - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                          - generic [ref=f1e984]: Frutas y Verduras | Clementinas granel 500 g
                        - generic [ref=f1e985]: 500 g
                    - button [ref=f1e988] [cursor=pointer]: Agregar
                  - generic [ref=f1e990]:
                    - generic [ref=f1e991]:
                      - link [ref=f1e992] [cursor=pointer]:
                        - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                      - generic [ref=f1e994]: Promoción % Unipay
                      - button [ref=f1e995] [cursor=pointer]
                    - generic [ref=f1e998]:
                      - generic [ref=f1e999]:
                        - generic [ref=f1e1001]:
                          - generic [aria-hidden] [ref=f1e1002]: 💎
                          - paragraph [ref=f1e1003]: $2.601
                        - generic [ref=f1e1004]:
                          - generic [ref=f1e1005]: 10%
                          - paragraph [ref=f1e1006]: $2.601
                        - paragraph [ref=f1e1007]: "Antes: $2.890"
                      - generic [ref=f1e1008]:
                        - link [ref=f1e1009] [cursor=pointer]:
                          - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                          - generic [ref=f1e1010]: Frutas y Verduras | Kiwi bolsa 1 Kg
                        - generic [ref=f1e1011]: 1 kg
                    - button [ref=f1e1014] [cursor=pointer]: Agregar
                - button [ref=f1e1017] [cursor=pointer]
                - button [ref=f1e1020] [cursor=pointer]
          - generic [ref=f1e1026]:
            - generic [ref=f1e1027]:
              - generic [ref=f1e1028]:
                - heading [level=3] [ref=f1e1029]: Prende la parrilla
                - link [ref=f1e1030] [cursor=pointer]:
                  - /url: /search?q=parrilla
                  - text: Mostrar todo
              - paragraph [ref=f1e1031]: Disfruta de un rico Asaito
            - generic [ref=f1e1033]:
              - link [ref=f1e1038] [cursor=pointer]:
                - /url: /search?q=parrilla
              - link [ref=f1e1045] [cursor=pointer]:
                - /url: /category/carnes
              - link [ref=f1e1052] [cursor=pointer]:
                - /url: /search?q=guarniciones
              - link [ref=f1e1059] [cursor=pointer]:
                - /url: /category/carnes
              - link [ref=f1e1066] [cursor=pointer]:
                - /url: /search?q=picoteo
          - generic [ref=f1e1074]:
            - link [ref=f1e1075] [cursor=pointer]:
              - /url: /category/panaderia-y-pasteleria
              - paragraph [ref=f1e1078]: 40% dcto
              - generic:
                - generic:
                  - paragraph: Chocolates Milka Variedades
                  - generic:
                    - paragraph: "40"
                    - generic:
                      - paragraph: "%"
                      - paragraph: dcto
            - generic [ref=f1e1079]:
              - generic [ref=f1e1081]:
                - generic [ref=f1e1082]:
                  - heading [level=3] [ref=f1e1083]: Chocolates Milka
                  - link [ref=f1e1084] [cursor=pointer]:
                    - /url: /category/panaderia-y-pasteleria
                    - text: Mostrar todo
                - paragraph [ref=f1e1085]: Endulza tu día
              - generic [ref=f1e1086]:
                - generic [ref=f1e1088]:
                  - generic [ref=f1e1090]:
                    - generic [ref=f1e1091]:
                      - link [ref=f1e1092] [cursor=pointer]:
                        - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                      - button [ref=f1e1094] [cursor=pointer]
                    - generic [ref=f1e1097]:
                      - paragraph [ref=f1e1100]: $1.180
                      - generic [ref=f1e1101]:
                        - link [ref=f1e1102] [cursor=pointer]:
                          - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                          - text: Galleta Alteza bocado 140 g
                        - generic [ref=f1e1103]: 140 g
                    - button [ref=f1e1106] [cursor=pointer]: Agregar
                  - generic [ref=f1e1108]:
                    - generic [ref=f1e1109]:
                      - link [ref=f1e1110] [cursor=pointer]:
                        - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                      - button [ref=f1e1112] [cursor=pointer]
                    - generic [ref=f1e1115]:
                      - paragraph [ref=f1e1118]: $280
                      - generic [ref=f1e1119]:
                        - link [ref=f1e1120] [cursor=pointer]:
                          - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                          - text: Galleta mini Dos en Uno chocolate 35 g
                        - generic [ref=f1e1121]: 35 g
                    - button [ref=f1e1124] [cursor=pointer]: Agregar
                  - generic [ref=f1e1126]:
                    - generic [ref=f1e1127]:
                      - link [ref=f1e1128] [cursor=pointer]:
                        - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                      - button [ref=f1e1130] [cursor=pointer]
                    - generic [ref=f1e1133]:
                      - generic [ref=f1e1134]:
                        - generic [ref=f1e1135]:
                          - generic [ref=f1e1136]: Unipay $757
                          - paragraph [ref=f1e1137]: ($6.882 x kg)
                        - generic [ref=f1e1138]:
                          - paragraph [ref=f1e1139]: $890
                          - paragraph [ref=f1e1140]: ($8.091 x kg)
                      - generic [ref=f1e1141]:
                        - link [ref=f1e1142] [cursor=pointer]:
                          - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                          - generic [ref=f1e1143]: Oreo | Galleta Oreo clásica vainilla 108 g
                        - generic [ref=f1e1144]: 108 g
                    - button [ref=f1e1147] [cursor=pointer]: Agregar
                  - generic [ref=f1e1149]:
                    - generic [ref=f1e1150]:
                      - link [ref=f1e1151] [cursor=pointer]:
                        - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                      - button [pressed] [ref=f1e1153] [cursor=pointer]
                    - generic [ref=f1e1156]:
                      - paragraph [ref=f1e1159]: $4.990
                      - generic [ref=f1e1160]:
                        - link [ref=f1e1161] [cursor=pointer]:
                          - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                          - text: Galletas con mermelada La Galleteria 300 g
                        - generic [ref=f1e1162]: 300 g
                    - button [ref=f1e1165] [cursor=pointer]: Agregar
                  - generic [ref=f1e1167]:
                    - generic [ref=f1e1168]:
                      - link [ref=f1e1169] [cursor=pointer]:
                        - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                      - button [ref=f1e1171] [cursor=pointer]
                    - generic [ref=f1e1174]:
                      - generic [ref=f1e1176]:
                        - paragraph [ref=f1e1177]: $1.290
                        - paragraph [ref=f1e1178]: ($4.607 x kg)
                      - generic [ref=f1e1179]:
                        - link [ref=f1e1180] [cursor=pointer]:
                          - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                          - generic [ref=f1e1181]: Europastry | Pan baguette plus Crandon 1 un
                        - generic [ref=f1e1182]: 1 un
                    - button [ref=f1e1185] [cursor=pointer]: Agregar
                  - generic [ref=f1e1187]:
                    - generic [ref=f1e1188]:
                      - link [ref=f1e1189] [cursor=pointer]:
                        - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                      - button [ref=f1e1191] [cursor=pointer]
                    - generic [ref=f1e1194]:
                      - generic [ref=f1e1196]:
                        - paragraph [ref=f1e1197]: $1.495
                        - paragraph [ref=f1e1198]: ($2.990 x kg)
                      - generic [ref=f1e1199]:
                        - link [ref=f1e1200] [cursor=pointer]:
                          - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                          - generic [ref=f1e1201]: Amada Masa | Pan ciabatta granel Amada Masa 500 g
                        - generic [ref=f1e1202]: 500 g
                    - button [ref=f1e1205] [cursor=pointer]: Agregar
                  - generic [ref=f1e1207]:
                    - generic [ref=f1e1208]:
                      - link [ref=f1e1209] [cursor=pointer]:
                        - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                      - button [ref=f1e1211] [cursor=pointer]
                    - generic [ref=f1e1214]:
                      - generic [ref=f1e1216]:
                        - paragraph [ref=f1e1217]: $2.990
                        - paragraph [ref=f1e1218]: ($5.980 x kg)
                      - generic [ref=f1e1219]:
                        - link [ref=f1e1220] [cursor=pointer]:
                          - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                          - generic [ref=f1e1221]: Amada Masa | Pan hot dog granel Amada Masa 500 g
                        - generic [ref=f1e1222]: 500 g
                    - button [ref=f1e1225] [cursor=pointer]: Agregar
                  - generic [ref=f1e1227]:
                    - generic [ref=f1e1228]:
                      - link [ref=f1e1229] [cursor=pointer]:
                        - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                      - button [ref=f1e1231] [cursor=pointer]
                    - generic [ref=f1e1234]:
                      - paragraph [ref=f1e1237]: $1.095
                      - generic [ref=f1e1238]:
                        - link [ref=f1e1239] [cursor=pointer]:
                          - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                          - text: Pan marraqueta granel Amada Masa 500 g
                        - generic [ref=f1e1240]: 500 g
                    - button [ref=f1e1243] [cursor=pointer]: Agregar
                - button [ref=f1e1246] [cursor=pointer]
                - button [ref=f1e1249] [cursor=pointer]
        - link [ref=f1e1259] [cursor=pointer]:
          - /url: /search?q=despensa
        - generic [ref=f1e1265]:
          - generic [ref=f1e1266]:
            - heading [level=2] [ref=f1e1267]: Nuestras marcas
            - link [ref=f1e1268] [cursor=pointer]:
              - /url: /category/panaderia-y-pasteleria
              - text: Mostrar todo
          - generic [ref=f1e1269]:
            - tab [selected] [ref=f1e1270] [cursor=pointer]: Amada masa
            - tab [ref=f1e1271] [cursor=pointer]: Azul
            - tab [ref=f1e1272] [cursor=pointer]: Como en casa
            - tab [ref=f1e1273] [cursor=pointer]: D-kora
            - tab [ref=f1e1274] [cursor=pointer]: Fundo Río al
            - tab [ref=f1e1275] [cursor=pointer]: Nubelín
            - tab [ref=f1e1276] [cursor=pointer]: Nuestra coci
            - tab [ref=f1e1277] [cursor=pointer]: Smart Clean
            - tab [ref=f1e1278] [cursor=pointer]: Tento
          - generic [ref=f1e1281]:
            - generic [ref=f1e1283]:
              - generic [ref=f1e1285]:
                - generic [ref=f1e1286]:
                  - link [ref=f1e1287] [cursor=pointer]:
                    - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                  - button [ref=f1e1289] [cursor=pointer]
                - generic [ref=f1e1292]:
                  - paragraph [ref=f1e1295]: $1.180
                  - generic [ref=f1e1296]:
                    - link [ref=f1e1297] [cursor=pointer]:
                      - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                      - text: Galleta Alteza bocado 140 g
                    - generic [ref=f1e1298]: 140 g
                - button [ref=f1e1301] [cursor=pointer]: Agregar
              - generic [ref=f1e1303]:
                - generic [ref=f1e1304]:
                  - link [ref=f1e1305] [cursor=pointer]:
                    - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                  - button [ref=f1e1307] [cursor=pointer]
                - generic [ref=f1e1310]:
                  - paragraph [ref=f1e1313]: $280
                  - generic [ref=f1e1314]:
                    - link [ref=f1e1315] [cursor=pointer]:
                      - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                      - text: Galleta mini Dos en Uno chocolate 35 g
                    - generic [ref=f1e1316]: 35 g
                - button [ref=f1e1319] [cursor=pointer]: Agregar
              - generic [ref=f1e1321]:
                - generic [ref=f1e1322]:
                  - link [ref=f1e1323] [cursor=pointer]:
                    - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                  - button [ref=f1e1325] [cursor=pointer]
                - generic [ref=f1e1328]:
                  - generic [ref=f1e1329]:
                    - generic [ref=f1e1330]:
                      - generic [ref=f1e1331]: Unipay $757
                      - paragraph [ref=f1e1332]: ($6.882 x kg)
                    - generic [ref=f1e1333]:
                      - paragraph [ref=f1e1334]: $890
                      - paragraph [ref=f1e1335]: ($8.091 x kg)
                  - generic [ref=f1e1336]:
                    - link [ref=f1e1337] [cursor=pointer]:
                      - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                      - generic [ref=f1e1338]: Oreo | Galleta Oreo clásica vainilla 108 g
                    - generic [ref=f1e1339]: 108 g
                - button [ref=f1e1342] [cursor=pointer]: Agregar
              - generic [ref=f1e1344]:
                - generic [ref=f1e1345]:
                  - link [ref=f1e1346] [cursor=pointer]:
                    - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                  - button [pressed] [ref=f1e1348] [cursor=pointer]
                - generic [ref=f1e1351]:
                  - paragraph [ref=f1e1354]: $4.990
                  - generic [ref=f1e1355]:
                    - link [ref=f1e1356] [cursor=pointer]:
                      - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                      - text: Galletas con mermelada La Galleteria 300 g
                    - generic [ref=f1e1357]: 300 g
                - button [ref=f1e1360] [cursor=pointer]: Agregar
              - generic [ref=f1e1362]:
                - generic [ref=f1e1363]:
                  - link [ref=f1e1364] [cursor=pointer]:
                    - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                  - button [ref=f1e1366] [cursor=pointer]
                - generic [ref=f1e1369]:
                  - generic [ref=f1e1371]:
                    - paragraph [ref=f1e1372]: $1.290
                    - paragraph [ref=f1e1373]: ($4.607 x kg)
                  - generic [ref=f1e1374]:
                    - link [ref=f1e1375] [cursor=pointer]:
                      - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                      - generic [ref=f1e1376]: Europastry | Pan baguette plus Crandon 1 un
                    - generic [ref=f1e1377]: 1 un
                - button [ref=f1e1380] [cursor=pointer]: Agregar
              - generic [ref=f1e1382]:
                - generic [ref=f1e1383]:
                  - link [ref=f1e1384] [cursor=pointer]:
                    - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                  - button [ref=f1e1386] [cursor=pointer]
                - generic [ref=f1e1389]:
                  - generic [ref=f1e1391]:
                    - paragraph [ref=f1e1392]: $1.495
                    - paragraph [ref=f1e1393]: ($2.990 x kg)
                  - generic [ref=f1e1394]:
                    - link [ref=f1e1395] [cursor=pointer]:
                      - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                      - generic [ref=f1e1396]: Amada Masa | Pan ciabatta granel Amada Masa 500 g
                    - generic [ref=f1e1397]: 500 g
                - button [ref=f1e1400] [cursor=pointer]: Agregar
              - generic [ref=f1e1402]:
                - generic [ref=f1e1403]:
                  - link [ref=f1e1404] [cursor=pointer]:
                    - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                  - button [ref=f1e1406] [cursor=pointer]
                - generic [ref=f1e1409]:
                  - generic [ref=f1e1411]:
                    - paragraph [ref=f1e1412]: $2.990
                    - paragraph [ref=f1e1413]: ($5.980 x kg)
                  - generic [ref=f1e1414]:
                    - link [ref=f1e1415] [cursor=pointer]:
                      - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                      - generic [ref=f1e1416]: Amada Masa | Pan hot dog granel Amada Masa 500 g
                    - generic [ref=f1e1417]: 500 g
                - button [ref=f1e1420] [cursor=pointer]: Agregar
              - generic [ref=f1e1422]:
                - generic [ref=f1e1423]:
                  - link [ref=f1e1424] [cursor=pointer]:
                    - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                  - button [ref=f1e1426] [cursor=pointer]
                - generic [ref=f1e1429]:
                  - paragraph [ref=f1e1432]: $1.095
                  - generic [ref=f1e1433]:
                    - link [ref=f1e1434] [cursor=pointer]:
                      - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                      - text: Pan marraqueta granel Amada Masa 500 g
                    - generic [ref=f1e1435]: 500 g
                - button [ref=f1e1438] [cursor=pointer]: Agregar
              - generic [ref=f1e1440]:
                - generic [ref=f1e1441]:
                  - link [ref=f1e1442] [cursor=pointer]:
                    - /url: /pan-marraqueta-prosepan-500-g/000000000000030202-KG.html
                  - button [ref=f1e1444] [cursor=pointer]
                - generic [ref=f1e1447]:
                  - generic [ref=f1e1449]:
                    - paragraph [ref=f1e1450]: $1.095
                    - paragraph [ref=f1e1451]: ($2.190 x kg)
                  - generic [ref=f1e1452]:
                    - link [ref=f1e1453] [cursor=pointer]:
                      - /url: /pan-marraqueta-prosepan-500-g/000000000000030202-KG.html
                      - text: Pan marraqueta Prosepan 500 g
                    - generic [ref=f1e1454]: 500 g
                - button [ref=f1e1457] [cursor=pointer]: Agregar
              - generic [ref=f1e1459]:
                - generic [ref=f1e1460]:
                  - link [ref=f1e1461] [cursor=pointer]:
                    - /url: /pan-pita-integral-granel-amada-masa-500-g/000000000000614468-KG.html
                  - button [ref=f1e1463] [cursor=pointer]
                - generic [ref=f1e1466]:
                  - paragraph [ref=f1e1469]: $2.890
                  - generic [ref=f1e1470]:
                    - link [ref=f1e1471] [cursor=pointer]:
                      - /url: /pan-pita-integral-granel-amada-masa-500-g/000000000000614468-KG.html
                      - text: Pan pita integral granel Amada Masa 500 g
                    - generic [ref=f1e1472]: 500 g
                - button [ref=f1e1475] [cursor=pointer]: Agregar
            - button [ref=f1e1478] [cursor=pointer]
            - button [ref=f1e1481] [cursor=pointer]
        - generic [ref=f1e1486]:
          - generic [ref=f1e1492]:
            - link [ref=f1e1493] [cursor=pointer]:
              - /url: /category/bebidas-y-licores
              - generic:
                - generic:
                  - paragraph: Productos Not Variedades
                  - generic:
                    - paragraph: "30"
                    - generic:
                      - paragraph: "%"
                      - paragraph: dcto
            - generic [ref=f1e1496]:
              - generic [ref=f1e1498]:
                - generic [ref=f1e1499]:
                  - heading [level=3] [ref=f1e1500]: Especial Bebidas
                  - link [ref=f1e1501] [cursor=pointer]:
                    - /url: /category/bebidas-y-licores
                    - text: Mostrar todo
                - paragraph [ref=f1e1502]: Bebidas vegetales y más
              - generic [ref=f1e1503]:
                - generic [ref=f1e1505]:
                  - generic [ref=f1e1507]:
                    - generic [ref=f1e1508]:
                      - link [ref=f1e1509] [cursor=pointer]:
                        - /url: /cerveza-austral-lager-lata-470-cc/000000000000694333-UN.html
                      - button [ref=f1e1511] [cursor=pointer]
                    - generic [ref=f1e1514]:
                      - generic [ref=f1e1516]:
                        - paragraph [ref=f1e1517]: $2.090
                        - paragraph [ref=f1e1518]: ($4.447 x L)
                      - generic [ref=f1e1519]:
                        - link [ref=f1e1520] [cursor=pointer]:
                          - /url: /cerveza-austral-lager-lata-470-cc/000000000000694333-UN.html
                          - generic [ref=f1e1521]: Austral | Cerveza Austral lager lata 470 cc
                        - generic [ref=f1e1522]: 470 cc
                    - button [ref=f1e1525] [cursor=pointer]: Agregar
                  - generic [ref=f1e1527]:
                    - generic [ref=f1e1528]:
                      - link [ref=f1e1529] [cursor=pointer]:
                        - /url: /cerveza-budweiser-zero-botella-6-un-de-330-cc/000000000000663675-UN.html
                      - button [ref=f1e1531] [cursor=pointer]
                    - generic [ref=f1e1534]:
                      - generic [ref=f1e1536]:
                        - paragraph [ref=f1e1537]: $7.790
                        - paragraph [ref=f1e1538]: ($23.606 x L)
                      - generic [ref=f1e1539]:
                        - link [ref=f1e1540] [cursor=pointer]:
                          - /url: /cerveza-budweiser-zero-botella-6-un-de-330-cc/000000000000663675-UN.html
                          - generic [ref=f1e1541]: Budweiser | Cerveza Budweiser zero botella 6 un de 330 cc
                        - generic [ref=f1e1542]: 6 un
                    - button [ref=f1e1545] [cursor=pointer]: Agregar
                  - generic [ref=f1e1547]:
                    - generic [ref=f1e1548]:
                      - link [ref=f1e1549] [cursor=pointer]:
                        - /url: /cerveza-corona-extra-lata-6-un-de-473-cc/000000000000686446-UN.html
                      - button [ref=f1e1551] [cursor=pointer]
                    - generic [ref=f1e1554]:
                      - generic [ref=f1e1556]:
                        - paragraph [ref=f1e1557]: $6.890
                        - paragraph [ref=f1e1558]: ($14.567 x L)
                      - generic [ref=f1e1559]:
                        - link [ref=f1e1560] [cursor=pointer]:
                          - /url: /cerveza-corona-extra-lata-6-un-de-473-cc/000000000000686446-UN.html
                          - generic [ref=f1e1561]: Corona | Cerveza Corona extra lata 6 un de 473 cc
                        - generic [ref=f1e1562]: 6 un
                    - button [ref=f1e1565] [cursor=pointer]: Agregar
                  - generic [ref=f1e1567]:
                    - generic [ref=f1e1568]:
                      - link [ref=f1e1569] [cursor=pointer]:
                        - /url: /cerveza-cristal-lager-botella-650-cc/000000000000686452-UN.html
                      - button [ref=f1e1571] [cursor=pointer]
                    - generic [ref=f1e1574]:
                      - generic [ref=f1e1576]:
                        - paragraph [ref=f1e1577]: $1.350
                        - paragraph [ref=f1e1578]: ($2.077 x L)
                      - generic [ref=f1e1579]:
                        - link [ref=f1e1580] [cursor=pointer]:
                          - /url: /cerveza-cristal-lager-botella-650-cc/000000000000686452-UN.html
                          - generic [ref=f1e1581]: Cristal Cerveza | Cerveza Cristal lager botella 650 cc
                        - generic [ref=f1e1582]: 650 cc
                    - button [ref=f1e1585] [cursor=pointer]: Agregar
                  - generic [ref=f1e1587]:
                    - generic [ref=f1e1588]:
                      - link [ref=f1e1589] [cursor=pointer]:
                        - /url: /cerveza-duvel-moorgat-botella-330-cc/000000000000536215-UN.html
                      - button [ref=f1e1591] [cursor=pointer]
                    - generic [ref=f1e1594]:
                      - paragraph [ref=f1e1597]: $3.550
                      - generic [ref=f1e1598]:
                        - link [ref=f1e1599] [cursor=pointer]:
                          - /url: /cerveza-duvel-moorgat-botella-330-cc/000000000000536215-UN.html
                          - text: Cerveza Duvel moorgat botella 330 cc
                        - generic [ref=f1e1600]: 330 cc
                    - button [ref=f1e1603] [cursor=pointer]: Agregar
                  - generic [ref=f1e1605]:
                    - generic [ref=f1e1606]:
                      - link [ref=f1e1607] [cursor=pointer]:
                        - /url: /cerveza-royal-golden-lager-lata-6-un-de-470-cc/000000000000674841-DIS.html
                      - button [ref=f1e1609] [cursor=pointer]
                    - generic [ref=f1e1612]:
                      - generic [ref=f1e1614]:
                        - paragraph [ref=f1e1615]: $7.290
                        - paragraph [ref=f1e1616]: ($15.511 x L)
                      - generic [ref=f1e1617]:
                        - link [ref=f1e1618] [cursor=pointer]:
                          - /url: /cerveza-royal-golden-lager-lata-6-un-de-470-cc/000000000000674841-DIS.html
                          - generic [ref=f1e1619]: Royal Guard | Cerveza Royal golden lager lata 6 un de 470 cc
                        - generic [ref=f1e1620]: 6 un
                    - button [ref=f1e1623] [cursor=pointer]: Agregar
                  - generic [ref=f1e1625]:
                    - generic [ref=f1e1626]:
                      - link [ref=f1e1627] [cursor=pointer]:
                        - /url: /cerveza-sabor-sandia-stones-350ml/000000000000689879-UN.html
                      - button [ref=f1e1629] [cursor=pointer]
                    - generic [ref=f1e1632]:
                      - generic [ref=f1e1634]:
                        - paragraph [ref=f1e1635]: $6.590
                        - paragraph [ref=f1e1636]: ($18.829 x L)
                      - generic [ref=f1e1637]:
                        - link [ref=f1e1638] [cursor=pointer]:
                          - /url: /cerveza-sabor-sandia-stones-350ml/000000000000689879-UN.html
                          - generic [ref=f1e1639]: Stones | Cerveza sabor sandía Stones 350ml
                        - generic [ref=f1e1640]: 350 ml
                    - button [ref=f1e1643] [cursor=pointer]: Agregar
                  - generic [ref=f1e1645]:
                    - generic [ref=f1e1646]:
                      - link [ref=f1e1647] [cursor=pointer]:
                        - /url: /cerveza-stones-berries-lata-6-un-de-350-ml/000000000000671971-UN.html
                      - button [ref=f1e1649] [cursor=pointer]
                    - generic [ref=f1e1652]:
                      - generic [ref=f1e1654]:
                        - paragraph [ref=f1e1655]: $6.590
                        - paragraph [ref=f1e1656]: ($18.829 x L)
                      - generic [ref=f1e1657]:
                        - link [ref=f1e1658] [cursor=pointer]:
                          - /url: /cerveza-stones-berries-lata-6-un-de-350-ml/000000000000671971-UN.html
                          - generic [ref=f1e1659]: Stones | Cerveza Stones berries lata 6 un de 350 ml
                        - generic [ref=f1e1660]: 6 un
                    - button [ref=f1e1663] [cursor=pointer]: Agregar
                - button [ref=f1e1666] [cursor=pointer]
                - button [ref=f1e1669] [cursor=pointer]
          - generic [ref=f1e1675]:
            - heading [level=2] [ref=f1e1676]: Tus productos mas comprados
            - link [ref=f1e1678] [cursor=pointer]:
              - /url: /account/my-usuals
              - text: Ver todos
            - generic [ref=f1e1679]:
              - generic [ref=f1e1680]:
                - generic [ref=f1e1682]:
                  - generic [ref=f1e1683]:
                    - link [ref=f1e1684] [cursor=pointer]:
                      - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                    - button [pressed] [ref=f1e1686] [cursor=pointer]
                  - generic [ref=f1e1689]:
                    - paragraph [ref=f1e1692]: $4.990
                    - generic [ref=f1e1693]:
                      - link [ref=f1e1694] [cursor=pointer]:
                        - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                        - text: Galletas con mermelada La Galleteria 300 g
                      - generic [ref=f1e1695]: 300 g
                  - button [ref=f1e1698] [cursor=pointer]: Agregar
                - generic [ref=f1e1700]:
                  - generic [ref=f1e1701]:
                    - link [ref=f1e1702] [cursor=pointer]:
                      - /url: /carne-molida-4-grasa-tartaro-fundo-rio-alegre-250-g/000000000000662457-UN.html
                    - button [pressed] [ref=f1e1704] [cursor=pointer]
                  - generic [ref=f1e1707]:
                    - generic [ref=f1e1708]:
                      - generic [ref=f1e1709]:
                        - generic [ref=f1e1710]:
                          - generic [aria-hidden] [ref=f1e1711]: 💎
                          - paragraph [ref=f1e1712]: $2.897
                        - paragraph [ref=f1e1713]: ($11.588 x kg)
                      - generic [ref=f1e1714]:
                        - paragraph [ref=f1e1715]: $3.890
                        - paragraph [ref=f1e1716]: ($15.560 x kg)
                    - generic [ref=f1e1717]:
                      - link [ref=f1e1718] [cursor=pointer]:
                        - /url: /carne-molida-4-grasa-tartaro-fundo-rio-alegre-250-g/000000000000662457-UN.html
                        - generic [ref=f1e1719]: Fundo Rio Alegre | Carne molida 4% grasa tártaro Fundo Río A…
                      - generic [ref=f1e1720]: 250 g
                  - button [ref=f1e1723] [cursor=pointer]: Agregar
                - generic [ref=f1e1725]:
                  - generic [ref=f1e1726]:
                    - link [ref=f1e1727] [cursor=pointer]:
                      - /url: /tapapecho-vacuno-al-vacio-2.2-kg/000000000000029403-KG.html
                    - generic [ref=f1e1729]: Promoción en Carnes
                    - button [pressed] [ref=f1e1730] [cursor=pointer]
                  - generic [ref=f1e1733]:
                    - generic [ref=f1e1734]:
                      - generic [ref=f1e1735]:
                        - generic [ref=f1e1736]:
                          - generic [aria-hidden] [ref=f1e1737]: 💎
                          - paragraph [ref=f1e1738]: $9.490
                        - paragraph [ref=f1e1739]: ($4.314 x kg)
                      - generic [ref=f1e1740]:
                        - generic [ref=f1e1741]: 5%
                        - paragraph [ref=f1e1742]: $9.490
                        - paragraph [ref=f1e1743]: ($4.314 x kg)
                      - paragraph [ref=f1e1744]: "Antes: $9.990"
                    - generic [ref=f1e1745]: Pronto disponible
                    - generic [ref=f1e1747]:
                      - link [ref=f1e1748] [cursor=pointer]:
                        - /url: /tapapecho-vacuno-al-vacio-2.2-kg/000000000000029403-KG.html
                        - generic [ref=f1e1749]: Brasil Paraguay | Tapapecho vacuno al vacío 2.2 Kg
                      - generic [ref=f1e1750]: 2.2 kg
                  - button [ref=f1e1753] [cursor=pointer]: Ver similares
                - generic [ref=f1e1755]:
                  - generic [ref=f1e1756]:
                    - link [ref=f1e1757] [cursor=pointer]:
                      - /url: /carne-molida-fundo-rio-alegre-tartaro-4-grasa-500g/000000000000666200-UN.html
                    - generic [ref=f1e1759]: Promoción Lleva 2 unidades por Monto
                    - button [pressed] [ref=f1e1760] [cursor=pointer]
                  - generic [ref=f1e1763]:
                    - generic [ref=f1e1764]:
                      - generic [ref=f1e1765]:
                        - generic [ref=f1e1766]:
                          - generic [aria-hidden] [ref=f1e1767]: 💎
                          - paragraph [ref=f1e1768]: Lleva 2 por $10.866
                        - paragraph [ref=f1e1769]: ($10.866 x kg)
                      - generic [ref=f1e1770]:
                        - generic [ref=f1e1771]: Lleva 2 por $12.490
                        - paragraph [ref=f1e1772]: ($12.490 x kg)
                      - generic [ref=f1e1773]:
                        - paragraph [ref=f1e1774]: $7.690 c/u
                        - paragraph [ref=f1e1775]: ($15.380 x kg)
                    - generic [ref=f1e1776]:
                      - link [ref=f1e1777] [cursor=pointer]:
                        - /url: /carne-molida-fundo-rio-alegre-tartaro-4-grasa-500g/000000000000666200-UN.html
                        - generic [ref=f1e1778]: Fundo Rio Alegre | Carne molida fundo rio alegre tartaro 4% …
                      - generic [ref=f1e1779]: 500 g
                  - generic [ref=f1e1781]:
                    - button [ref=f1e1782] [cursor=pointer]:
                      - generic [aria-hidden] [ref=f1e1783]: 😎
                      - paragraph [ref=f1e1784]: Combina la promo
                    - button [ref=f1e1786] [cursor=pointer]: Agregar
                - generic [ref=f1e1788]:
                  - generic [ref=f1e1789]:
                    - link [ref=f1e1790] [cursor=pointer]:
                      - /url: /trapero-humedo-nova-desinfectante-10-un/000000000000666306-UN.html
                    - button [ref=f1e1792] [cursor=pointer]
                  - generic [ref=f1e1795]:
                    - generic [ref=f1e1797]:
                      - paragraph [ref=f1e1798]: $3.890
                      - paragraph [ref=f1e1799]: ($389 x unidad)
                    - generic [ref=f1e1800]:
                      - link [ref=f1e1801] [cursor=pointer]:
                        - /url: /trapero-humedo-nova-desinfectante-10-un/000000000000666306-UN.html
                        - generic [ref=f1e1802]: Nova | Trapero húmedo Nova desinfectante 10 un
                      - generic [ref=f1e1803]: 10 un
                  - button [ref=f1e1806] [cursor=pointer]: Agregar
              - button [ref=f1e1807] [cursor=pointer]
              - button [ref=f1e1810] [cursor=pointer]
        - generic [ref=f1e1817]:
          - generic [ref=f1e1818]:
            - paragraph [ref=f1e1819]: Contrata la membresía
            - paragraph [ref=f1e1820]: Obtén despachos gratis y ilimitados por compras sobre $20.000 y descuentos exclusivos
            - link [ref=f1e1821] [cursor=pointer]:
              - /url: /membresia
              - text: Comienza tus 15 días gratis
          - button [ref=f1e1824] [cursor=pointer]
        - generic [ref=f1e1831]:
          - generic [ref=f1e1832]:
            - heading [level=2] [ref=f1e1833]: TÉRMINOS Y CONDICIONES UNIMARC
            - paragraph [ref=f1e1834]: El acceso y uso del sitio web www.unimarc.cl y de la aplicación móvil Unimarc (ambos indistintamente “Unimarc.cl”) por u
          - generic [ref=f1e1835]:
            - generic [ref=f1e1836]:
              - button [expanded] [ref=f1e1837] [cursor=pointer]:
                - generic [ref=f1e1840]: 1. Registro del Cliente
              - region [ref=f1e1841]:
                - paragraph [ref=f1e1843]: Será requisito para la adquisición de productos y servicios ofrecidos en Unimarc.cl, estar registrado en éste, ser mayor de 18 años, y al momento de la compra aceptar estos T&C y su Política de Privacidad. El acceso y registro será gratuito.
            - button [ref=f1e1845] [cursor=pointer]:
              - generic [ref=f1e1849]: 2. Clave de acceso secreta
            - button [ref=f1e1851] [cursor=pointer]:
              - generic [ref=f1e1855]: 3. Derechos del Cliente
            - button [ref=f1e1857] [cursor=pointer]:
              - generic [ref=f1e1861]: 4. Procedimiento para hacer uso de Unima
    - contentinfo [aria-hidden] [ref=f1e1862]:
      - generic [ref=f1e1863]:
        - generic [ref=f1e1864]:
          - generic [ref=f1e1865]:
            - link [ref=f1e1866] [cursor=pointer]:
              - /url: /centro-de-ayuda
              - generic [ref=f1e1873]:
                - paragraph [ref=f1e1874]: Centro de ayuda
                - paragraph [ref=f1e1875]: Aquí encontrarás preguntas frecuentes y mucho más
            - link [ref=f1e1876] [cursor=pointer]:
              - /url: /seguimiento-de-compra
              - generic [ref=f1e1882]:
                - paragraph [ref=f1e1883]: Seguimiento de compra
                - paragraph [ref=f1e1884]: Revisa el estado y detalle de tu compra
            - link [ref=f1e1885] [cursor=pointer]:
              - /url: https://wa.me/56958701477
              - generic [ref=f1e1891]:
                - paragraph [ref=f1e1892]: Whatsapp clientes
                - paragraph [ref=f1e1893]: Escríbenos de 9:00 a 20:00 horas
          - generic [ref=f1e1894]:
            - generic [ref=f1e1895]:
              - button [ref=f1e1896] [cursor=pointer]:
                - paragraph [ref=f1e1899]: Contáctanos
              - generic [ref=f1e1901]:
                - generic [ref=f1e1902]:
                  - paragraph [ref=f1e1903]: Unimarc - Servicio al cliente
                  - link [ref=f1e1908] [cursor=pointer]:
                    - /url: tel:6006000025
                    - text: 600 600 0025
                  - paragraph [ref=f1e1909]: Llámanos de 9:00 a 20:00 horas
                - generic [ref=f1e1910]:
                  - paragraph [ref=f1e1911]: Compras online
                  - link [ref=f1e1919] [cursor=pointer]:
                    - /url: /contacto/compras-online
                    - text: Crea una solicitud
                  - link [ref=f1e1925] [cursor=pointer]:
                    - /url: mailto:despachosunimarc@unimarc.cl
                    - text: despachosunimarc@unimarc.cl
                - generic [ref=f1e1926]:
                  - paragraph [ref=f1e1927]: Tarjeta Unipay - Servicio al cliente
                  - link [ref=f1e1932] [cursor=pointer]:
                    - /url: tel:6003909000
                    - text: 600 390 9000
                  - paragraph [ref=f1e1933]: Llámanos de 9:00 a 20:00 horas
                - generic [ref=f1e1934]:
                  - paragraph [ref=f1e1935]: Compras en tienda
                  - link [ref=f1e1943] [cursor=pointer]:
                    - /url: /contacto/compras-tienda
                    - text: Crea una solicitud
                  - link [ref=f1e1949] [cursor=pointer]:
                    - /url: mailto:contacto.unimarc@unimarc.cl
                    - text: contacto.unimarc@unimarc.cl
            - button [ref=f1e1951] [cursor=pointer]:
              - paragraph [ref=f1e1955]: Servicio al cliente
            - button [ref=f1e1957] [cursor=pointer]:
              - paragraph [ref=f1e1961]: Nuestros programas
            - button [ref=f1e1963] [cursor=pointer]:
              - paragraph [ref=f1e1967]: Nuestra empresa
        - separator [ref=f1e1968]
        - generic [ref=f1e1969]:
          - list [ref=f1e1971]:
            - listitem [ref=f1e1972]:
              - link [ref=f1e1973] [cursor=pointer]:
                - /url: /legales/cookies
                - text: Políticas de Cookies
          - generic [ref=f1e1974]:
            - paragraph [ref=f1e1975]: Síguenos
            - generic [ref=f1e1976]:
              - link [ref=f1e1977] [cursor=pointer]:
                - /url: https://www.facebook.com/unimarc
              - link [ref=f1e1980] [cursor=pointer]:
                - /url: https://www.instagram.com/unimarc
              - link [ref=f1e1985] [cursor=pointer]:
                - /url: https://x.com/unimarc
              - link [ref=f1e1988] [cursor=pointer]:
                - /url: https://www.youtube.com/unimarc
  - generic:
    - region
    - region
    - region
    - region
    - region
    - region
  - dialog [ref=f1e1993]:
    - button [ref=f1e1994] [cursor=pointer]
    - banner [ref=f1e1997]: Elige tu método de entrega
    - generic [ref=f1e1998]:
      - generic [ref=f1e1999]:
        - button [pressed] [ref=f1e2000] [cursor=pointer]:
          - generic [ref=f1e2001]: Despacho a domicilio
        - button [ref=f1e2007] [cursor=pointer]:
          - generic [ref=f1e2008]: Retiro en tienda
      - paragraph [ref=f1e2014]: Calle, dirección o lugar
      - generic [ref=f1e2015]:
        - textbox [ref=f1e2017]:
          - /placeholder: "Ej: Av. Manquehue norte 457, Las condes"
        - button [ref=f1e2018] [cursor=pointer]:
          - generic [ref=f1e2019]: Activar mi ubicación actual
      - generic [ref=f1e2024]:
        - paragraph [ref=f1e2025]: Dirección de despacho
        - paragraph [ref=f1e2032]: Camino La Fuente 15…
        - paragraph [ref=f1e2033]: Direcciones guardadas
        - generic [ref=f1e2034]:
          - button [ref=f1e2035] [cursor=pointer]:
            - generic [ref=f1e2039]:
              - paragraph [ref=f1e2040]: Casa
              - paragraph [ref=f1e2041]: Calle Uno 23, La Florida, Metropolitana
          - button [ref=f1e2042] [cursor=pointer]
        - generic [ref=f1e2045]:
          - button [ref=f1e2046] [cursor=pointer]:
            - generic [ref=f1e2050]:
              - paragraph [ref=f1e2051]: Avenida Las Condes …
              - paragraph [ref=f1e2052]: Avenida Las Condes 14791, Las Condes, Metropolitana
          - button [ref=f1e2053] [cursor=pointer]
        - generic [ref=f1e2056]:
          - button [ref=f1e2057] [cursor=pointer]:
            - generic [ref=f1e2061]:
              - paragraph [ref=f1e2062]: Avenida Las Condes … (2)
              - paragraph [ref=f1e2063]: Avenida Las Condes 14791, Las Condes, Metropolitana
          - button [ref=f1e2064] [cursor=pointer]
        - generic [ref=f1e2067]:
          - button [ref=f1e2068] [cursor=pointer]:
            - generic [ref=f1e2072]:
              - paragraph [ref=f1e2073]: Avenida Las Condes … (3)
              - paragraph [ref=f1e2074]: Avenida Las Condes 14791, Las Condes, Metropolitana
          - button [ref=f1e2075] [cursor=pointer]
        - generic [ref=f1e2078]:
          - button [ref=f1e2079] [cursor=pointer]:
            - generic [ref=f1e2083]:
              - paragraph [ref=f1e2084]: Avenida Las Condes … (4)
              - paragraph [ref=f1e2085]: Avenida Las Condes 14791, Las Condes, Metropolitana
          - button [ref=f1e2086] [cursor=pointer]
        - generic [ref=f1e2089]:
          - button [ref=f1e2090] [cursor=pointer]:
            - generic [ref=f1e2094]:
              - paragraph [ref=f1e2095]: Avenida Las Condes … (5)
              - paragraph [ref=f1e2096]: Avenida Las Condes 14791, Las Condes, Metropolitana
          - button [ref=f1e2097] [cursor=pointer]
        - generic [ref=f1e2100]:
          - button [ref=f1e2101] [cursor=pointer]:
            - generic [ref=f1e2105]:
              - paragraph [ref=f1e2106]: Calle Uno 23
              - paragraph [ref=f1e2107]: Calle Uno 23, La Florida, Metropolitana
          - button [ref=f1e2108] [cursor=pointer]
        - generic [ref=f1e2111]:
          - button [ref=f1e2112] [cursor=pointer]:
            - generic [ref=f1e2116]:
              - paragraph [ref=f1e2117]: Calle Uno 23 (2)
              - paragraph [ref=f1e2118]: Calle Uno 23, La Florida, Metropolitana
          - button [ref=f1e2119] [cursor=pointer]
        - generic [ref=f1e2122]:
          - button [ref=f1e2123] [cursor=pointer]:
            - generic [ref=f1e2127]:
              - paragraph [ref=f1e2128]: Calle Uno 23 (3)
              - paragraph [ref=f1e2129]: Calle Uno 23, La Florida, Metropolitana
          - button [ref=f1e2130] [cursor=pointer]
        - generic [ref=f1e2133]:
          - button [ref=f1e2134] [cursor=pointer]:
            - generic [ref=f1e2138]:
              - paragraph [ref=f1e2139]: Calle Uno 23 (4)
              - paragraph [ref=f1e2140]: Calle Uno 23, La Florida, Metropolitana
          - button [ref=f1e2141] [cursor=pointer]
        - generic [ref=f1e2144]:
          - button [ref=f1e2145] [cursor=pointer]:
            - generic [ref=f1e2149]:
              - paragraph [ref=f1e2150]: Calle Uno 23 (5)
              - paragraph [ref=f1e2151]: Calle Uno 23, La Florida, Metropolitana
          - button [ref=f1e2152] [cursor=pointer]
        - generic [ref=f1e2155]:
          - button [ref=f1e2156] [cursor=pointer]:
            - generic [ref=f1e2160]:
              - paragraph [ref=f1e2161]: Calle Uno 23 (6)
              - paragraph [ref=f1e2162]: Calle Uno 23, La Florida, Metropolitana
          - button [ref=f1e2163] [cursor=pointer]
        - generic [ref=f1e2166]:
          - button [ref=f1e2167] [cursor=pointer]:
            - generic [ref=f1e2171]:
              - paragraph [ref=f1e2172]: Calle Uno 23 (7)
              - paragraph [ref=f1e2173]: Calle Uno 23, La Florida, Metropolitana
          - button [ref=f1e2174] [cursor=pointer]
        - generic [ref=f1e2177]:
          - button [ref=f1e2178] [cursor=pointer]:
            - generic [ref=f1e2182]:
              - paragraph [ref=f1e2183]: Calle Uno 23 (8)
              - paragraph [ref=f1e2184]: Calle Uno 23, La Florida, Metropolitana
          - button [ref=f1e2185] [cursor=pointer]
        - generic [ref=f1e2188]:
          - button [ref=f1e2189] [cursor=pointer]:
            - generic [ref=f1e2193]:
              - paragraph [ref=f1e2194]: Calle Uno 23 (9)
              - paragraph [ref=f1e2195]: Calle Uno 23, La Florida, Metropolitana
          - button [ref=f1e2196] [cursor=pointer]
        - generic [ref=f1e2199]:
          - button [ref=f1e2200] [cursor=pointer]:
            - generic [ref=f1e2204]:
              - paragraph [ref=f1e2205]: Camino La Fuente 15…
              - paragraph [ref=f1e2206]: Camino La Fuente 1589, Las Condes, Metropolitana
          - button [ref=f1e2207] [cursor=pointer]
        - generic [ref=f1e2210]:
          - button [ref=f1e2211] [cursor=pointer]:
            - generic [ref=f1e2215]:
              - paragraph [ref=f1e2216]: Camino La Fuente 15… (2)
              - paragraph [ref=f1e2217]: Camino La Fuente 1589, Las Condes, Metropolitana
          - button [ref=f1e2218] [cursor=pointer]
        - generic [ref=f1e2221]:
          - button [ref=f1e2222] [cursor=pointer]:
            - generic [ref=f1e2226]:
              - paragraph [ref=f1e2227]: Camino La Fuente 15… (3)
              - paragraph [ref=f1e2228]: Camino La Fuente 1589, Las Condes, Metropolitana
          - button [ref=f1e2229] [cursor=pointer]
        - generic [ref=f1e2232]:
          - button [ref=f1e2233] [cursor=pointer]:
            - generic [ref=f1e2237]:
              - paragraph [ref=f1e2238]: Camino La Fuente 15… (4)
              - paragraph [ref=f1e2239]: Camino La Fuente 1589, Las Condes, Metropolitana
          - button [ref=f1e2240] [cursor=pointer]
        - generic [ref=f1e2243]:
          - button [ref=f1e2244] [cursor=pointer]:
            - generic [ref=f1e2248]:
              - paragraph [ref=f1e2249]: General José Artiga…
              - paragraph [ref=f1e2250]: General José Artigas 3250, Santiago, Metropolitana
          - button [ref=f1e2251] [cursor=pointer]
        - generic [ref=f1e2254]:
          - button [ref=f1e2255] [cursor=pointer]:
            - generic [ref=f1e2259]:
              - paragraph [ref=f1e2260]: Las Condes
              - paragraph [ref=f1e2261]: Las Condes, Las Condes, Metropolitana
          - button [ref=f1e2262] [cursor=pointer]
        - generic [ref=f1e2265]:
          - button [ref=f1e2266] [cursor=pointer]:
            - generic [ref=f1e2270]:
              - paragraph [ref=f1e2271]: Libertador General …
              - paragraph [ref=f1e2272]: Libertador General Bernardo O'Higgins 1072, Maipú, Metropolitana
          - button [ref=f1e2273] [cursor=pointer]
        - generic [ref=f1e2276]:
          - button [ref=f1e2277] [cursor=pointer]:
            - generic [ref=f1e2281]:
              - paragraph [ref=f1e2282]: Libertador General … (2)
              - paragraph [ref=f1e2283]: Libertador General Bernardo O'Higgins 1072, Maipú, Metropolitana
          - button [ref=f1e2284] [cursor=pointer]
        - generic [ref=f1e2287]:
          - button [ref=f1e2288] [cursor=pointer]:
            - generic [ref=f1e2292]:
              - paragraph [ref=f1e2293]: Libertador General … (3)
              - paragraph [ref=f1e2294]: Libertador General Bernardo O'Higgins 1072, Maipú, Metropolitana
          - button [ref=f1e2295] [cursor=pointer]
        - generic [ref=f1e2298]:
          - button [ref=f1e2299] [cursor=pointer]:
            - generic [ref=f1e2303]:
              - paragraph [ref=f1e2304]: Libertador General … (4)
              - paragraph [ref=f1e2305]: Libertador General Bernardo O'Higgins 1072, Maipú, Metropolitana
          - button [ref=f1e2306] [cursor=pointer]
        - generic [ref=f1e2309]:
          - button [ref=f1e2310] [cursor=pointer]:
            - generic [ref=f1e2314]:
              - paragraph [ref=f1e2315]: Libertador General … (5)
              - paragraph [ref=f1e2316]: Libertador General Bernardo O'Higgins 1072, Maipú, Metropolitana
          - button [ref=f1e2317] [cursor=pointer]
        - generic [ref=f1e2320]:
          - button [ref=f1e2321] [cursor=pointer]:
            - generic [ref=f1e2325]:
              - paragraph [ref=f1e2326]: Otra Casa
              - paragraph [ref=f1e2327]: Camino La Fuente, Las Condes, Metropolitana
          - button [ref=f1e2328] [cursor=pointer]
        - generic [ref=f1e2331]:
          - button [ref=f1e2332] [cursor=pointer]:
            - generic [ref=f1e2336]:
              - paragraph [ref=f1e2337]: Sin cobertura
              - paragraph [ref=f1e2338]: Mechique, Los Lagos
          - button [ref=f1e2339] [cursor=pointer]
        - generic [ref=f1e2342]:
          - button [ref=f1e2343] [cursor=pointer]:
            - generic [ref=f1e2347]:
              - paragraph [ref=f1e2348]: T-551
              - paragraph [ref=f1e2349]: T-551, Futrono
          - button [ref=f1e2350] [cursor=pointer]
    - contentinfo [ref=f1e2353]:
      - generic [ref=f1e2354]:
        - paragraph [ref=f1e2359]: ¿No aparece tu dirección?
        - button [ref=f1e2360] [cursor=pointer]: Agregar
  - dialog [ref=f1e2363]:
    - button "Close" [ref=f1e2364] [cursor=pointer]
    - banner [ref=f1e2367]: Autenticación requerida
    - generic [ref=f1e2370]:
      - paragraph [ref=f1e2371]: Enviamos un código de verificación al correo dau****@a***.com
      - generic [ref=f1e2372]:
        - textbox "Dígito 1 de 6" [active] [ref=f1e2373]
        - textbox "Dígito 2 de 6" [ref=f1e2374]
        - textbox "Dígito 3 de 6" [ref=f1e2375]
        - textbox "Dígito 4 de 6" [ref=f1e2376]
        - textbox "Dígito 5 de 6" [ref=f1e2377]
        - textbox "Dígito 6 de 6" [ref=f1e2378]
      - button "Reenviar" [ref=f1e2380] [cursor=pointer]
      - paragraph [ref=f1e2381]: "Importante: Asegúrate de ingresar correctamente el código de verificación"
      - button "Continuar" [disabled] [ref=f1e2382]
```

# Test source

```ts
  1   | import * as fs from 'fs';
  2   | import * as path from 'path';
  3   | import { Browser, Page } from '@playwright/test';
  4   | import { test, expect, token } from './support/fixtures';
  5   | import { LoadedTestData } from './support/testData';
  6   | import { DESKTOP, MOBILE } from './support/viewports';
  7   | import { capturarEvidencia } from './support/evidencia';
  8   | import { esperarOtp, marcaOtp } from './support/otp';
  9   | import { volverDeLaCuenta } from './support/loginOtp';
  10  | import { PaginaHabilitada } from './pages/PaginaHabilitada';
  11  | import { HeaderFull } from './pages/HeaderFull';
  12  | import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
  13  | import { LoginModal } from './pages/LoginModal';
  14  | import { MenuCuenta } from './pages/MenuCuenta';
  15  | import { CarroPage } from './pages/CarroPage';
  16  | import { SRPPage } from './pages/SRPPage';
  17  | import { AgotarseModal } from './pages/AgotarseModal';
  18  | 
  19  | /**
  20  |  * B2C-26 — Setear método de entrega con Despacho a domicilio (planilla SP2, 59 TC).
  21  |  *
  22  |  * Los 13 casos Pendiente de la planilla se ejecutan abajo; sus valores se resuelven desde la
  23  |  * maestra vigente, incluso si la columna Test Data conserva una etiqueta TBD desactualizada.
  24  |  * Las cuentas QA y los cambios de direcciones se usan en secuencia (`--workers=1`) porque comparten
  25  |  * sesión. Cualquier precondición que no exista en el estado real queda documentada al ejecutar.
  26  |  */
  27  | 
  28  | const SESION = path.resolve('.qa/auth/b189-user.json');
  29  | 
  30  | function correo(testData: LoadedTestData, usuario = 'COMPRADOR_USER'): string {
  31  |   return token(testData, usuario)!.split('/')[0].trim();
  32  | }
  33  | 
  34  | function escapar(s: string): string {
  35  |   return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  36  | }
  37  | 
  38  | /** "Camino La Fuente 1589 Las Condes" / "Calle Uno 23, La Florida" → calle, número y comuna. */
  39  | function partes(direccion: string): { calle: string; numero: string; comuna: string } {
  40  |   const m = direccion.match(/^(.*?)\s+(\d+[A-Za-z]?)\s*,?\s*(.+)$/);
  41  |   if (!m) throw new Error(`No se pudo separar la dirección "${direccion}"`);
  42  |   return { calle: m[1].trim(), numero: m[2], comuna: m[3].trim() };
  43  | }
  44  | 
  45  | /** La sugerencia de Google de una dirección: calle + número. */
  46  | function sugerenciaDe(direccion: string): RegExp {
  47  |   const p = partes(direccion);
  48  |   return new RegExp(`${escapar(p.calle)}\\s+${p.numero}`, 'i');
  49  | }
  50  | 
  51  | async function abrirModal(page: Page): Promise<{ home: PaginaHabilitada; modal: MetodoEntregaModal }> {
  52  |   const home = await new PaginaHabilitada(page).goto();
  53  |   await home.cookies.aceptarSiAparece();
  54  |   await home.header.storeLocator.click();
  55  |   const modal = await new MetodoEntregaModal(page).esperarAbierto();
  56  |   return { home, modal };
  57  | }
  58  | 
  59  | /** Responde el OTP de "Autenticación requerida" si aparece en `espera` ms (y "Algunos productos podrían agotarse"). */
  60  | async function otpSiAparece(page: Page, testData: LoadedTestData, desde: Date, espera = 15000): Promise<boolean> {
  61  |   const agotarse = new AgotarseModal(page);
  62  |   const modal = new MetodoEntregaModal(page);
  63  |   const fin = Date.now() + espera;
  64  |   while (Date.now() < fin) {
  65  |     if (await agotarse.root.isVisible().catch(() => false)) await agotarse.botonSi.click().catch(() => {});
  66  |     if (await modal.modalOtp.isVisible().catch(() => false)) {
  67  |       await new LoginModal(page).escribirCodigo(await esperarOtp(correo(testData), desde, { digitos: 6 }));
  68  |       await modal.modalOtp.waitFor({ state: 'hidden', timeout: 30000 });
  69  |       return true;
  70  |     }
> 71  |     await page.waitForTimeout(500);
      |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  72  |   }
  73  |   return false;
  74  | }
  75  | 
  76  | /** Login por correo + OTP desde "Ingresa aquí", con la oferta de passkey y un posible segundo OTP. */
  77  | async function loginConOtp(page: Page, testData: LoadedTestData, usuario = 'COMPRADOR_USER'): Promise<void> {
  78  |   const origen = page.url();
  79  |   const login = new LoginModal(page);
  80  |   const desde = marcaOtp();
  81  |   await login.pedirCodigo(correo(testData, usuario));
  82  |   const codigo = await esperarOtp(correo(testData, usuario), desde, { digitos: 6 });
  83  |   const desde2 = marcaOtp();
  84  |   await login.escribirCodigo(codigo);
  85  |   await login.disparador.first().waitFor({ state: 'hidden', timeout: 45000 });
  86  |   const otp = new MetodoEntregaModal(page).modalOtp;
  87  |   const ahoraNo = login.ofertaPasskey.getByRole('button', { name: /^ahora no$/i });
  88  |   let respondido = false;
  89  |   const fin = Date.now() + 20000;
  90  |   while (Date.now() < fin) {
  91  |     if (!respondido && (await otp.isVisible().catch(() => false))) {
  92  |       await login.escribirCodigo(await esperarOtp(correo(testData, usuario), desde2, { digitos: 6 }));
  93  |       await otp.waitFor({ state: 'hidden', timeout: 30000 });
  94  |       respondido = true;
  95  |       continue;
  96  |     }
  97  |     if (await ahoraNo.isVisible().catch(() => false)) await ahoraNo.click({ timeout: 5000 }).catch(() => {});
  98  |     await page.waitForTimeout(500);
  99  |   }
  100 |   await login.descartarPasskey();
  101 |   await volverDeLaCuenta(page, origen);
  102 | }
  103 | 
  104 | /** Inicia sesión con {COMPRADOR_USER}: reusa la sesión guardada y, si no sirve, por correo + OTP. */
  105 | async function iniciarSesion(page: Page, testData: LoadedTestData, usuario = 'COMPRADOR_USER'): Promise<PaginaHabilitada> {
  106 |   if (usuario !== 'COMPRADOR_USER') {
  107 |     await page.context().clearCookies();
  108 |     await new PaginaHabilitada(page).goto();
  109 |     await page.evaluate(() => localStorage.clear());
  110 |     await page.reload({ waitUntil: 'domcontentloaded' });
  111 |   } else if (fs.existsSync(SESION)) {
  112 |     await page.context().addCookies(JSON.parse(fs.readFileSync(SESION, 'utf-8')).cookies ?? []);
  113 |   }
  114 |   const home = await new PaginaHabilitada(page).goto();
  115 |   await home.cookies.aceptarSiAparece();
  116 |   // En Mobile el saludo es el avatar con iniciales y tarda en pintarse: sin sesión, lo que se ve es "Ingresa aquí".
  117 |   const conSesion = await home.header.saludo.waitFor({ state: 'visible', timeout: 30000 }).then(
  118 |     () => true,
  119 |     async () => !(await new LoginModal(page).disparador.first().isVisible().catch(() => false)),
  120 |   );
  121 |   if (!conSesion) await loginConOtp(page, testData, usuario);
  122 |   await new LoginModal(page).descartarPasskey();
  123 |   await expect(home.header.saludo, 'sesión iniciada').toBeVisible({ timeout: 30000 });
  124 |   if (usuario === 'COMPRADOR_USER') {
  125 |     fs.mkdirSync(path.dirname(SESION), { recursive: true });
  126 |     await page.context().storageState({ path: SESION });
  127 |   }
  128 |   return home;
  129 | }
  130 | 
  131 | /** Deja activa la guardada "Casa" ({DIRECCION_DESPACHO_001}) si el header muestra otra cosa. */
  132 | async function asegurarCasa(page: Page, testData: LoadedTestData): Promise<void> {
  133 |   const home = await new PaginaHabilitada(page).goto();
  134 |   const actual = await home.header.esperarDireccionEnStoreLocator().catch(() => '');
  135 |   if (/^(casa$|calle uno 23)/i.test(actual)) return;
  136 |   await home.header.storeLocator.click();
  137 |   const modal = await new MetodoEntregaModal(page).esperarAbierto();
  138 |   await modal.tituloDireccionesGuardadas.waitFor({ state: 'visible', timeout: 30000 });
  139 |   const desde = marcaOtp();
  140 |   await modal.elegirGuardada('Casa');
  141 |   await otpSiAparece(page, testData, desde, 20000);
  142 |   await new PaginaHabilitada(page).goto();
  143 | }
  144 | 
  145 | /** Abre el modal con sesión iniciada y espera la lista de direcciones guardadas. */
  146 | async function abrirModalLogueado(page: Page, testData: LoadedTestData, usuario = 'COMPRADOR_USER'): Promise<{ home: PaginaHabilitada; modal: MetodoEntregaModal }> {
  147 |   const home = await iniciarSesion(page, testData, usuario);
  148 |   await home.header.esperarDireccionEnStoreLocator().catch(() => '');
  149 |   await home.header.storeLocator.click();
  150 |   const modal = await new MetodoEntregaModal(page).esperarAbierto();
  151 |   await expect(modal.tituloDireccionesGuardadas, 'lista de direcciones guardadas').toBeVisible({ timeout: 30000 });
  152 |   return { home, modal };
  153 | }
  154 | 
  155 | /** Etiqueta de la guardada activa. En Mobile el bloque "Dirección de despacho" puede mostrar la etiqueta ("Casa") en vez de la línea. */
  156 | async function etiquetaActiva(modal: MetodoEntregaModal): Promise<string> {
  157 |   const activa = ((await modal.direccionActiva.textContent()) ?? '').trim();
  158 |   const guardadas = await modal.direccionesGuardadas();
  159 |   const t = guardadas.find((g) => g.etiqueta === activa) ?? guardadas.find((g) => g.direccion.startsWith(activa));
  160 |   if (!t) throw new Error(`Ninguna dirección guardada coincide con la activa "${activa}"`);
  161 |   return t.etiqueta;
  162 | }
  163 | 
  164 | /** Cuántas guardadas tienen la misma línea de dirección (las duplicadas se renumeran al borrar una). */
  165 | async function copias(modal: MetodoEntregaModal, direccion: string): Promise<number> {
  166 |   return (await modal.direccionesGuardadas()).filter((g) => g.direccion === direccion).length;
  167 | }
  168 | 
  169 | /** Una guardada duplicada ("… (n)") distinta de la activa: se puede eliminar sin perder data. */
  170 | async function duplicadaEliminable(modal: MetodoEntregaModal): Promise<string> {
  171 |   const guardadas = await modal.direccionesGuardadas();
```