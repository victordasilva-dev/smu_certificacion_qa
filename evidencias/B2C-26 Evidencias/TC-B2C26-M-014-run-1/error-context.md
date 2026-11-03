# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: B2C-26.spec.ts >> B2C-26 pendientes · Mobile >> TC-B2C26-M-014 · Denegar ubicación vuelve al modal de entrega sin cambios [Mobile] (Mobile)
- Location: tests/B2C-26.spec.ts:1127:7

# Error details

```
Test timeout of 180000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - link [aria-hidden] [ref=e5] [cursor=pointer]:
      - /url: "#chakra-skip-nav"
      - text: Skip to Content
    - banner [ref=e8]:
      - button [ref=e12] [cursor=pointer]:
        - paragraph [ref=e24]: Elige una forma de entrega
      - generic [ref=e29]:
        - generic [ref=e30]:
          - button [ref=e31] [cursor=pointer]
          - button [ref=e34] [cursor=pointer]
        - textbox [ref=e42]:
          - /placeholder: ¿Qué estás buscando?
        - generic [ref=e43]:
          - button [ref=e44] [cursor=pointer]
          - button [ref=e49] [cursor=pointer]:
            - generic [ref=e52]: "0"
      - generic [ref=e57]:
        - button [ref=e59] [cursor=pointer]:
          - paragraph [ref=e66]: Suscríbete a
        - list [ref=e76]:
          - listitem [ref=e77]:
            - link [ref=e78] [cursor=pointer]:
              - /url: /ofertas
              - text: Ofertas
          - listitem [ref=e79]:
            - link [ref=e80] [cursor=pointer]:
              - /url: /marketplace
              - text: Marketplace
          - listitem [ref=e81]:
            - link [ref=e82] [cursor=pointer]:
              - /url: /locales
              - text: Locales y horarios
    - main [ref=e84]:
      - generic [ref=e90]:
        - generic [ref=e94]:
          - generic [ref=e96]:
            - link [ref=e101] [cursor=pointer]:
              - /url: /category/bebidas-y-licores
            - link [ref=e108] [cursor=pointer]:
              - /url: /category/carnes
            - link [ref=e115] [cursor=pointer]:
              - /url: /category/lacteos-huevos-y-refrigerados
          - button [ref=e120] [cursor=pointer]
          - button [ref=e123] [cursor=pointer]
        - generic [ref=e128]:
          - generic [ref=e133]:
            - generic [ref=e135]:
              - heading [level=3] [ref=e137]: Los más vendidos
              - link [ref=e139] [cursor=pointer]:
                - /url: /category/carnes
                - text: Mostrar todo
            - generic [ref=e140]:
              - generic [ref=e142]:
                - generic [ref=e144]:
                  - generic [ref=e145]:
                    - link [ref=e146] [cursor=pointer]:
                      - /url: /chuletas-de-cordero-simunovic-600-g/000000000000653082-UN.html
                    - button [ref=e148] [cursor=pointer]
                  - generic [ref=e151]:
                    - generic [ref=e153]:
                      - paragraph [ref=e154]: $18.990
                      - paragraph [ref=e155]: ($31.650 x kg)
                    - generic [ref=e156]:
                      - link [ref=e157] [cursor=pointer]:
                        - /url: /chuletas-de-cordero-simunovic-600-g/000000000000653082-UN.html
                        - generic [ref=e158]: Simunovic | Chuletas de cordero Simunovi…
                      - generic [ref=e159]: 600 g
                  - button [ref=e162] [cursor=pointer]: Agregar
                - generic [ref=e164]:
                  - generic [ref=e165]:
                    - link [ref=e166] [cursor=pointer]:
                      - /url: /abastero-vacuno-nacional-al-vacio-1.8-kg/000000000000028594-KGV.html
                    - button [ref=e168] [cursor=pointer]
                  - generic [ref=e171]:
                    - generic [ref=e173]:
                      - paragraph [ref=e174]: $11.190
                      - paragraph [ref=e175]: ($6.217 x kg)
                    - generic [ref=e176]:
                      - link [ref=e177] [cursor=pointer]:
                        - /url: /abastero-vacuno-nacional-al-vacio-1.8-kg/000000000000028594-KGV.html
                        - generic [ref=e178]: Nacional | Abastero vacuno Nacional al v…
                      - generic [ref=e179]: 1.8 kg
                  - button [ref=e182] [cursor=pointer]: Agregar
                - generic [ref=e184]:
                  - generic [ref=e185]:
                    - link [ref=e186] [cursor=pointer]:
                      - /url: /albondigas-super-pollo-espaciales-congeladas-300-g/000000000000675191-UN.html
                    - button [ref=e188] [cursor=pointer]
                  - generic [ref=e191]:
                    - generic [ref=e193]:
                      - paragraph [ref=e194]: $2.490
                      - paragraph [ref=e195]: ($8.300 x kg)
                    - generic [ref=e196]:
                      - link [ref=e197] [cursor=pointer]:
                        - /url: /albondigas-super-pollo-espaciales-congeladas-300-g/000000000000675191-UN.html
                        - generic [ref=e198]: Super Pollo | Albondigas Super Pollo esp…
                      - generic [ref=e199]: 300 g
                  - button [ref=e202] [cursor=pointer]: Agregar
                - generic [ref=e204]:
                  - generic [ref=e205]:
                    - link [ref=e206] [cursor=pointer]:
                      - /url: /alitas-trutro-de-pollo-super-pollo-congelado-800-g/000000000000748600-UN.html
                    - button [ref=e208] [cursor=pointer]
                  - generic [ref=e211]:
                    - generic [ref=e213]:
                      - paragraph [ref=e214]: $4.390
                      - paragraph [ref=e215]: ($5.488 x kg)
                    - generic [ref=e216]:
                      - link [ref=e217] [cursor=pointer]:
                        - /url: /alitas-trutro-de-pollo-super-pollo-congelado-800-g/000000000000748600-UN.html
                        - generic [ref=e218]: Super Pollo | Alitas trutro de pollo Sup…
                      - generic [ref=e219]: 800 g
                  - button [ref=e222] [cursor=pointer]: Agregar
                - generic [ref=e224]:
                  - generic [ref=e225]:
                    - link [ref=e226] [cursor=pointer]:
                      - /url: /carne-molida-4-grasa-tartaro-fundo-rio-alegre-250-g/000000000000662457-UN.html
                    - button [ref=e228] [cursor=pointer]
                  - generic [ref=e231]:
                    - generic [ref=e232]:
                      - generic [ref=e233]:
                        - generic [ref=e234]:
                          - generic [aria-hidden] [ref=e235]: 💎
                          - paragraph [ref=e236]: $2.897
                        - paragraph [ref=e237]: ($11.588 x kg)
                      - generic [ref=e238]:
                        - paragraph [ref=e239]: $3.890
                        - paragraph [ref=e240]: ($15.560 x kg)
                    - generic [ref=e241]:
                      - link [ref=e242] [cursor=pointer]:
                        - /url: /carne-molida-4-grasa-tartaro-fundo-rio-alegre-250-g/000000000000662457-UN.html
                        - generic [ref=e243]: Fundo Rio Alegre | Carne molida 4% grasa…
                      - generic [ref=e244]: 250 g
                  - button [ref=e247] [cursor=pointer]: Agregar
                - generic [ref=e249]:
                  - generic [ref=e250]:
                    - link [ref=e251] [cursor=pointer]:
                      - /url: /carne-molida-4-grasa-vacuno-fundo-rio-alegre-tartaro-250-g/000000000000652051-UN.html
                    - button [ref=e253] [cursor=pointer]
                  - generic [ref=e256]:
                    - generic [ref=e257]:
                      - generic [ref=e258]:
                        - generic [ref=e259]:
                          - generic [aria-hidden] [ref=e260]: 💎
                          - paragraph [ref=e261]: $2.897
                        - paragraph [ref=e262]: ($11.588 x kg)
                      - generic [ref=e263]:
                        - paragraph [ref=e264]: $3.890
                        - paragraph [ref=e265]: ($15.560 x kg)
                    - generic [ref=e266]:
                      - link [ref=e267] [cursor=pointer]:
                        - /url: /carne-molida-4-grasa-vacuno-fundo-rio-alegre-tartaro-250-g/000000000000652051-UN.html
                        - generic [ref=e268]: Fundo Rio Alegre | Carne molida 4% grasa…
                      - generic [ref=e269]: 250 g
                  - button [ref=e272] [cursor=pointer]: Agregar
                - generic [ref=e274]:
                  - generic [ref=e275]:
                    - link [ref=e276] [cursor=pointer]:
                      - /url: /carne-molida-fundo-rio-alegre-tartaro-4-grasa-500g/000000000000666200-UN.html
                    - generic [ref=e278]: Promoción Lleva 2 unidades por Monto
                    - button [ref=e279] [cursor=pointer]
                  - generic [ref=e282]:
                    - generic [ref=e283]:
                      - generic [ref=e284]:
                        - generic [ref=e285]:
                          - generic [aria-hidden] [ref=e286]: 💎
                          - paragraph [ref=e287]: Lleva 2 por $10.866
                        - paragraph [ref=e288]: ($10.866 x kg)
                      - generic [ref=e289]:
                        - generic [ref=e290]: Lleva 2 por $12.490
                        - paragraph [ref=e291]: ($12.490 x kg)
                      - generic [ref=e292]:
                        - paragraph [ref=e293]: $7.690 c/u
                        - paragraph [ref=e294]: ($15.380 x kg)
                    - generic [ref=e295]:
                      - link [ref=e296] [cursor=pointer]:
                        - /url: /carne-molida-fundo-rio-alegre-tartaro-4-grasa-500g/000000000000666200-UN.html
                        - generic [ref=e297]: Fundo Rio Alegre | Carne molida fundo ri…
                      - generic [ref=e298]: 500 g
                  - generic [ref=e300]:
                    - button [ref=e301] [cursor=pointer]:
                      - generic [aria-hidden] [ref=e302]: 😎
                      - paragraph [ref=e303]: Combina la promo
                    - button [ref=e305] [cursor=pointer]: Agregar
                - generic [ref=e307]:
                  - generic [ref=e308]:
                    - link [ref=e309] [cursor=pointer]:
                      - /url: /carne-molida-tartaro-fundo-rio-alegre-4-grasa-500g/000000000000666285-UN.html
                    - generic [ref=e311]: Promoción Lleva 2 unidades por Monto
                    - button [ref=e312] [cursor=pointer]
                  - generic [ref=e315]:
                    - generic [ref=e316]:
                      - generic [ref=e317]:
                        - generic [ref=e318]:
                          - generic [aria-hidden] [ref=e319]: 💎
                          - paragraph [ref=e320]: Lleva 2 por $10.866
                        - paragraph [ref=e321]: ($10.866 x kg)
                      - generic [ref=e322]:
                        - generic [ref=e323]: Lleva 2 por $12.490
                        - paragraph [ref=e324]: ($12.490 x kg)
                      - generic [ref=e325]:
                        - paragraph [ref=e326]: $7.690 c/u
                        - paragraph [ref=e327]: ($15.380 x kg)
                    - generic [ref=e328]:
                      - link [ref=e329] [cursor=pointer]:
                        - /url: /carne-molida-tartaro-fundo-rio-alegre-4-grasa-500g/000000000000666285-UN.html
                        - generic [ref=e330]: Fundo Rio Alegre | Carne molida tartaro …
                      - generic [ref=e331]: 500 g
                  - generic [ref=e333]:
                    - button [ref=e334] [cursor=pointer]:
                      - generic [aria-hidden] [ref=e335]: 😎
                      - paragraph [ref=e336]: Combina la promo
                    - button [ref=e338] [cursor=pointer]: Agregar
                - generic [ref=e340]:
                  - generic [ref=e341]:
                    - link [ref=e342] [cursor=pointer]:
                      - /url: /choclillo-vacuno-nacional-al-vacio-1.3-kg/000000000000028597-KGV.html
                    - button [ref=e344] [cursor=pointer]
                  - generic [ref=e347]:
                    - generic [ref=e349]:
                      - paragraph [ref=e350]: $11.990
                      - paragraph [ref=e351]: ($9.223 x kg)
                    - generic [ref=e352]:
                      - link [ref=e353] [cursor=pointer]:
                        - /url: /choclillo-vacuno-nacional-al-vacio-1.3-kg/000000000000028597-KGV.html
                        - generic [ref=e354]: Nacional | Choclillo vacuno Nacional al …
                      - generic [ref=e355]: 1.3 kg
                  - button [ref=e358] [cursor=pointer]: Agregar
                - generic [ref=e360]:
                  - generic [ref=e361]:
                    - link [ref=e362] [cursor=pointer]:
                      - /url: /chuleta-centro-de-cerdo-super-cerdo-bandeja-550-g/000000000000626717-UN.html
                    - button [ref=e364] [cursor=pointer]
                  - generic [ref=e367]:
                    - generic [ref=e369]:
                      - paragraph [ref=e370]: $4.890
                      - paragraph [ref=e371]: ($8.891 x kg)
                    - generic [ref=e372]:
                      - link [ref=e373] [cursor=pointer]:
                        - /url: /chuleta-centro-de-cerdo-super-cerdo-bandeja-550-g/000000000000626717-UN.html
                        - generic [ref=e374]: Super Cerdo | Chuleta centro de cerdo Su…
                      - generic [ref=e375]: 550 g
                  - button [ref=e378] [cursor=pointer]: Agregar
                - generic [ref=e380]:
                  - generic [ref=e381]:
                    - link [ref=e382] [cursor=pointer]:
                      - /url: /chuleta-centro-de-cerdo-super-cerdo-congelado-750-g/000000000000627635-UN.html
                    - button [ref=e384] [cursor=pointer]
                  - generic [ref=e387]:
                    - generic [ref=e388]:
                      - generic [ref=e389]:
                        - generic [ref=e390]:
                          - generic [aria-hidden] [ref=e391]: 💎
                          - paragraph [ref=e392]: $6.291
                        - paragraph [ref=e393]: ($8.388 x kg)
                      - generic [ref=e394]:
                        - generic [ref=e395]: 10%
                        - paragraph [ref=e396]: $6.291
                        - paragraph [ref=e397]: ($8.388 x kg)
                      - paragraph [ref=e398]: "Antes: $6.990"
                    - generic [ref=e399]:
                      - link [ref=e400] [cursor=pointer]:
                        - /url: /chuleta-centro-de-cerdo-super-cerdo-congelado-750-g/000000000000627635-UN.html
                        - generic [ref=e401]: Super Cerdo | Chuleta centro de cerdo Su…
                      - generic [ref=e402]: 750 g
                  - button [ref=e405] [cursor=pointer]: Agregar
                - generic [ref=e407]:
                  - generic [ref=e408]:
                    - link [ref=e409] [cursor=pointer]:
                      - /url: /chuleta-parrillera-de-cordero-congelado-caja-1.5-kg/000000000000219902-UN.html
                    - button [ref=e411] [cursor=pointer]
                  - generic [ref=e414]:
                    - paragraph [ref=e417]: $43.990
                    - generic [ref=e418]:
                      - link [ref=e419] [cursor=pointer]:
                        - /url: /chuleta-parrillera-de-cordero-congelado-caja-1.5-kg/000000000000219902-UN.html
                        - generic [ref=e420]: Chuleta parrillera de cordero congelado …
                      - generic [ref=e421]: 1.5 kg
                  - button [ref=e424] [cursor=pointer]: Agregar
              - button [ref=e427] [cursor=pointer]
              - button [ref=e430] [cursor=pointer]
          - generic [ref=e437]:
            - generic [ref=e438]:
              - link [ref=e440] [cursor=pointer]:
                - /url: /category/frutas-y-verduras
              - generic [ref=e443]:
                - generic [ref=e444]:
                  - paragraph [ref=e446]: "45"
                  - paragraph [ref=e447]: días
                - paragraph [ref=e449]: ":"
                - generic [ref=e450]:
                  - paragraph [ref=e452]: "06"
                  - paragraph [ref=e453]: horas
                - paragraph [ref=e455]: ":"
                - generic [ref=e456]:
                  - paragraph [ref=e458]: "58"
                  - paragraph [ref=e459]: minutos
                - paragraph [ref=e461]: ":"
                - generic [ref=e462]:
                  - paragraph [ref=e464]: "04"
                  - paragraph [ref=e465]: segundos
            - generic [ref=e469]:
              - generic [ref=e471]:
                - generic [ref=e472]:
                  - link [ref=e473] [cursor=pointer]:
                    - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                    - img [ref=e474]:
                      - paragraph [ref=e476]: Imagen no disponible
                  - button [ref=e477] [cursor=pointer]
                - generic [ref=e480]:
                  - paragraph [ref=e483]: $1.290
                  - generic [ref=e484]:
                    - link [ref=e485] [cursor=pointer]:
                      - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                      - text: Agua saborizada Más manzana 1.6 L
                    - generic [ref=e486]: 1.6 l
                - button [ref=e489] [cursor=pointer]: Agregar
              - generic [ref=e491]:
                - generic [ref=e492]:
                  - link [ref=e493] [cursor=pointer]:
                    - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                    - img [ref=e494]:
                      - paragraph [ref=e496]: Imagen no disponible
                  - button [ref=e497] [cursor=pointer]
                - generic [ref=e500]:
                  - generic [ref=e502]:
                    - paragraph [ref=e503]: $2.550
                    - paragraph [ref=e504]: ($1.275 x unidad)
                  - generic [ref=e505]:
                    - link [ref=e506] [cursor=pointer]:
                      - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                      - generic [ref=e507]: Frutas y Verduras | Choclo bandeja 2 un
                    - generic [ref=e508]: 2 un
                - button [ref=e511] [cursor=pointer]: Agregar
              - generic [ref=e513]:
                - generic [ref=e514]:
                  - link [ref=e515] [cursor=pointer]:
                    - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                  - button [ref=e517] [cursor=pointer]
                - link [ref=e522] [cursor=pointer]:
                  - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                  - generic [ref=e523]: Proverde | Choclo cocida Proverde bolsa …
                - button [ref=e525] [cursor=pointer]: Agregar
              - generic [ref=e527]:
                - generic [ref=e528]:
                  - link [ref=e529] [cursor=pointer]:
                    - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                  - button [ref=e531] [cursor=pointer]
                - generic [ref=e534]:
                  - paragraph [ref=e537]: $2.490
                  - generic [ref=e538]:
                    - link [ref=e539] [cursor=pointer]:
                      - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                      - generic [ref=e540]: Frutas y Verduras | Clementina malla 1 K…
                    - generic [ref=e541]: 1 kg
                - button [ref=e544] [cursor=pointer]: Agregar
              - generic [ref=e546]:
                - generic [ref=e547]:
                  - link [ref=e548] [cursor=pointer]:
                    - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                  - button [ref=e550] [cursor=pointer]
                - generic [ref=e553]:
                  - paragraph [ref=e556]: $1.999
                  - generic [ref=e557]:
                    - link [ref=e558] [cursor=pointer]:
                      - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                      - generic [ref=e559]: Frutas y Verduras | Clementina malla 1 K…
                    - generic [ref=e560]: 1 kg
                - button [ref=e563] [cursor=pointer]: Agregar
              - generic [ref=e565]:
                - generic [ref=e566]:
                  - link [ref=e567] [cursor=pointer]:
                    - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                  - button [ref=e569] [cursor=pointer]
                - generic [ref=e572]:
                  - generic [ref=e574]:
                    - paragraph [ref=e575]: $1.375
                    - paragraph [ref=e576]: ($2.750 x kg)
                  - generic [ref=e577]:
                    - link [ref=e578] [cursor=pointer]:
                      - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                      - generic [ref=e579]: Frutas y Verduras | Clementinas granel 5…
                    - generic [ref=e580]: 500 g
                - button [ref=e583] [cursor=pointer]: Agregar
              - generic [ref=e585]:
                - generic [ref=e586]:
                  - link [ref=e587] [cursor=pointer]:
                    - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                  - button [ref=e589] [cursor=pointer]
                - generic [ref=e592]:
                  - generic [ref=e594]:
                    - paragraph [ref=e595]: $1.999
                    - paragraph [ref=e596]: ($3.998 x kg)
                  - generic [ref=e597]:
                    - link [ref=e598] [cursor=pointer]:
                      - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                      - generic [ref=e599]: Frutas y Verduras | Clementinas granel 5…
                    - generic [ref=e600]: 500 g
                - button [ref=e603] [cursor=pointer]: Agregar
              - generic [ref=e605]:
                - generic [ref=e606]:
                  - link [ref=e607] [cursor=pointer]:
                    - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                  - generic [ref=e609]: Promoción % Unipay
                  - button [ref=e610] [cursor=pointer]
                - generic [ref=e613]:
                  - generic [ref=e614]:
                    - generic [ref=e616]:
                      - generic [aria-hidden] [ref=e617]: 💎
                      - paragraph [ref=e618]: $2.601
                    - generic [ref=e619]:
                      - generic [ref=e620]: 10%
                      - paragraph [ref=e621]: $2.601
                    - paragraph [ref=e622]: "Antes: $2.890"
                  - generic [ref=e623]:
                    - link [ref=e624] [cursor=pointer]:
                      - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                      - generic [ref=e625]: Frutas y Verduras | Kiwi bolsa 1 Kg
                    - generic [ref=e626]: 1 kg
                - button [ref=e629] [cursor=pointer]: Agregar
              - generic [ref=e631]:
                - generic [ref=e632]:
                  - link [ref=e633] [cursor=pointer]:
                    - /url: /kiwi-bolsa-1-kg/000000000010062644-UN.html
                  - button [ref=e635] [cursor=pointer]
                - generic [ref=e638]:
                  - paragraph [ref=e641]: $1.999
                  - generic [ref=e642]:
                    - link [ref=e643] [cursor=pointer]:
                      - /url: /kiwi-bolsa-1-kg/000000000010062644-UN.html
                      - generic [ref=e644]: Frutas y Verduras | Kiwi bolsa 1 Kg
                    - generic [ref=e645]: 1 kg
                - button [ref=e648] [cursor=pointer]: Agregar
              - generic [ref=e650]:
                - generic [ref=e651]:
                  - link [ref=e652] [cursor=pointer]:
                    - /url: /limon-granel-500-g/000000000000553212-KG.html
                  - button [ref=e654] [cursor=pointer]
                - generic [ref=e657]:
                  - generic [ref=e659]:
                    - paragraph [ref=e660]: $995
                    - paragraph [ref=e661]: ($1.990 x l)
                  - generic [ref=e662]:
                    - link [ref=e663] [cursor=pointer]:
                      - /url: /limon-granel-500-g/000000000000553212-KG.html
                      - generic [ref=e664]: Frutas y Verduras | Limón granel 500 g
                    - generic [ref=e665]: 500 g
                - button [ref=e668] [cursor=pointer]: Agregar
              - generic [ref=e670]:
                - generic [ref=e671]:
                  - link [ref=e672] [cursor=pointer]:
                    - /url: /limon-granel-500-g/000000000010553212-KG.html
                  - button [ref=e674] [cursor=pointer]
                - generic [ref=e677]:
                  - generic [ref=e679]:
                    - paragraph [ref=e680]: $1.999
                    - paragraph [ref=e681]: ($3.998 x l)
                  - generic [ref=e682]:
                    - link [ref=e683] [cursor=pointer]:
                      - /url: /limon-granel-500-g/000000000010553212-KG.html
                      - generic [ref=e684]: Frutas y Verduras | Limón granel 500 g
                    - generic [ref=e685]: 500 g
                - button [ref=e688] [cursor=pointer]: Agregar
              - generic [ref=e690]:
                - generic [ref=e691]:
                  - link [ref=e692] [cursor=pointer]:
                    - /url: /mangos-granel-500-g/000000000000037972-KG.html
                  - button [ref=e694] [cursor=pointer]
                - generic [ref=e697]:
                  - generic [ref=e699]:
                    - paragraph [ref=e700]: $2.790
                    - paragraph [ref=e701]: ($5.580 x kg)
                  - generic [ref=e702]:
                    - link [ref=e703] [cursor=pointer]:
                      - /url: /mangos-granel-500-g/000000000000037972-KG.html
                      - generic [ref=e704]: Frutas Y Verduras | Mangos granel 500 g
                    - generic [ref=e705]: 500 g
                - button [ref=e708] [cursor=pointer]: Agregar
          - generic [ref=e713]:
            - heading [level=2] [ref=e714]: Categorías destacadas
            - generic [ref=e716]:
              - link [ref=e720] [cursor=pointer]:
                - /url: /category/frutas-y-verduras
                - paragraph [ref=e724]: Orgánico
              - link [ref=e728] [cursor=pointer]:
                - /url: /category/congelados
                - paragraph [ref=e732]: Comida en casa
              - link [ref=e736] [cursor=pointer]:
                - /url: /category/panaderia-y-pasteleria
                - paragraph [ref=e740]: Panadería
              - link [ref=e744] [cursor=pointer]:
                - /url: /category/panaderia-y-pasteleria
                - paragraph [ref=e748]: Pastelería
              - link [ref=e752] [cursor=pointer]:
                - /url: /category/bebidas-y-licores
                - paragraph [ref=e756]: Celebraciones
              - link [ref=e760] [cursor=pointer]:
                - /url: /category/limpieza
                - paragraph [ref=e764]: Higiene personal
              - link [ref=e768] [cursor=pointer]:
                - /url: /category/limpieza
                - paragraph [ref=e772]: Limpieza
          - generic [ref=e775]:
            - generic [ref=e776]:
              - generic [ref=e777]:
                - heading [level=3] [ref=e778]: Cada día, una ocasión
                - link [ref=e779] [cursor=pointer]:
                  - /url: /search?q=ofertas
                  - text: Mostrar todo
              - paragraph [ref=e780]: Encuentra aquí todo lo que necesitas y más
            - generic [ref=e781]:
              - generic [ref=e783]:
                - link [ref=e787] [cursor=pointer]:
                  - /url: /category/carnes
                  - paragraph [ref=e793]: Asaíto
                - link [ref=e797] [cursor=pointer]:
                  - /url: /category/despensa
                  - paragraph [ref=e803]: Picoteo
                - link [ref=e807] [cursor=pointer]:
                  - /url: /category/frutas-y-verduras
                  - paragraph [ref=e813]: Orgánico
                - link [ref=e817] [cursor=pointer]:
                  - /url: /category/desayuno-y-dulces
                  - paragraph [ref=e823]: Colaciones
              - button [disabled] [ref=e826] [cursor=pointer]
              - button [ref=e829] [cursor=pointer]
          - generic [ref=e836]:
            - generic [ref=e838]:
              - generic [ref=e839]:
                - heading [level=3] [ref=e840]: Frescura y calidad
                - link [ref=e841] [cursor=pointer]:
                  - /url: /category/frutas-y-verduras
                  - text: Mostrar todo
              - paragraph [ref=e842]: Frutas y verduras
            - generic [ref=e843]:
              - link [ref=e844] [cursor=pointer]:
                - /url: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/frutas-y-verduras_frutas
                - paragraph [ref=e848]: OFERTA
                - generic:
                  - generic:
                    - paragraph: Mecadito Unimarc
                    - generic:
                      - paragraph: "40"
                      - generic:
                        - paragraph: "%"
                        - paragraph: dcto
              - generic [ref=e850]:
                - generic [ref=e852]:
                  - generic [ref=e854]:
                    - generic [ref=e855]:
                      - link [ref=e856] [cursor=pointer]:
                        - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                      - button [ref=e858] [cursor=pointer]
                    - generic [ref=e861]:
                      - paragraph [ref=e864]: $1.290
                      - generic [ref=e865]:
                        - link [ref=e866] [cursor=pointer]:
                          - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                          - text: Agua saborizada Más manzana 1.6 L
                        - generic [ref=e867]: 1.6 l
                    - button [ref=e870] [cursor=pointer]: Agregar
                  - generic [ref=e872]:
                    - generic [ref=e873]:
                      - link [ref=e874] [cursor=pointer]:
                        - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                      - button [ref=e876] [cursor=pointer]
                    - generic [ref=e879]:
                      - generic [ref=e881]:
                        - paragraph [ref=e882]: $2.550
                        - paragraph [ref=e883]: ($1.275 x unidad)
                      - generic [ref=e884]:
                        - link [ref=e885] [cursor=pointer]:
                          - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                          - generic [ref=e886]: Frutas y Verduras | Choclo bandeja 2 un
                        - generic [ref=e887]: 2 un
                    - button [ref=e890] [cursor=pointer]: Agregar
                  - generic [ref=e892]:
                    - generic [ref=e893]:
                      - link [ref=e894] [cursor=pointer]:
                        - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                      - button [ref=e896] [cursor=pointer]
                    - link [ref=e901] [cursor=pointer]:
                      - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                      - generic [ref=e902]: Proverde | Choclo cocida Proverde bolsa …
                    - button [ref=e904] [cursor=pointer]: Agregar
                  - generic [ref=e906]:
                    - generic [ref=e907]:
                      - link [ref=e908] [cursor=pointer]:
                        - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                      - button [ref=e910] [cursor=pointer]
                    - generic [ref=e913]:
                      - paragraph [ref=e916]: $2.490
                      - generic [ref=e917]:
                        - link [ref=e918] [cursor=pointer]:
                          - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                          - generic [ref=e919]: Frutas y Verduras | Clementina malla 1 K…
                        - generic [ref=e920]: 1 kg
                    - button [ref=e923] [cursor=pointer]: Agregar
                  - generic [ref=e925]:
                    - generic [ref=e926]:
                      - link [ref=e927] [cursor=pointer]:
                        - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                      - button [ref=e929] [cursor=pointer]
                    - generic [ref=e932]:
                      - paragraph [ref=e935]: $1.999
                      - generic [ref=e936]:
                        - link [ref=e937] [cursor=pointer]:
                          - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                          - generic [ref=e938]: Frutas y Verduras | Clementina malla 1 K…
                        - generic [ref=e939]: 1 kg
                    - button [ref=e942] [cursor=pointer]: Agregar
                  - generic [ref=e944]:
                    - generic [ref=e945]:
                      - link [ref=e946] [cursor=pointer]:
                        - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                      - button [ref=e948] [cursor=pointer]
                    - generic [ref=e951]:
                      - generic [ref=e953]:
                        - paragraph [ref=e954]: $1.375
                        - paragraph [ref=e955]: ($2.750 x kg)
                      - generic [ref=e956]:
                        - link [ref=e957] [cursor=pointer]:
                          - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                          - generic [ref=e958]: Frutas y Verduras | Clementinas granel 5…
                        - generic [ref=e959]: 500 g
                    - button [ref=e962] [cursor=pointer]: Agregar
                  - generic [ref=e964]:
                    - generic [ref=e965]:
                      - link [ref=e966] [cursor=pointer]:
                        - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                      - button [ref=e968] [cursor=pointer]
                    - generic [ref=e971]:
                      - generic [ref=e973]:
                        - paragraph [ref=e974]: $1.999
                        - paragraph [ref=e975]: ($3.998 x kg)
                      - generic [ref=e976]:
                        - link [ref=e977] [cursor=pointer]:
                          - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                          - generic [ref=e978]: Frutas y Verduras | Clementinas granel 5…
                        - generic [ref=e979]: 500 g
                    - button [ref=e982] [cursor=pointer]: Agregar
                  - generic [ref=e984]:
                    - generic [ref=e985]:
                      - link [ref=e986] [cursor=pointer]:
                        - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                      - generic [ref=e988]: Promoción % Unipay
                      - button [ref=e989] [cursor=pointer]
                    - generic [ref=e992]:
                      - generic [ref=e993]:
                        - generic [ref=e995]:
                          - generic [aria-hidden] [ref=e996]: 💎
                          - paragraph [ref=e997]: $2.601
                        - generic [ref=e998]:
                          - generic [ref=e999]: 10%
                          - paragraph [ref=e1000]: $2.601
                        - paragraph [ref=e1001]: "Antes: $2.890"
                      - generic [ref=e1002]:
                        - link [ref=e1003] [cursor=pointer]:
                          - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                          - generic [ref=e1004]: Frutas y Verduras | Kiwi bolsa 1 Kg
                        - generic [ref=e1005]: 1 kg
                    - button [ref=e1008] [cursor=pointer]: Agregar
                - button [ref=e1011] [cursor=pointer]
                - button [ref=e1014] [cursor=pointer]
          - generic [ref=e1020]:
            - generic [ref=e1021]:
              - generic [ref=e1022]:
                - heading [level=3] [ref=e1023]: Prende la parrilla
                - link [ref=e1024] [cursor=pointer]:
                  - /url: /search?q=parrilla
                  - text: Mostrar todo
              - paragraph [ref=e1025]: Disfruta de un rico Asaito
            - generic [ref=e1027]:
              - link [ref=e1032] [cursor=pointer]:
                - /url: /search?q=parrilla
              - link [ref=e1039] [cursor=pointer]:
                - /url: /category/carnes
              - link [ref=e1046] [cursor=pointer]:
                - /url: /search?q=guarniciones
              - link [ref=e1053] [cursor=pointer]:
                - /url: /category/carnes
              - link [ref=e1060] [cursor=pointer]:
                - /url: /search?q=picoteo
          - generic [ref=e1067]:
            - generic [ref=e1069]:
              - generic [ref=e1070]:
                - heading [level=3] [ref=e1071]: Chocolates Milka
                - link [ref=e1072] [cursor=pointer]:
                  - /url: /category/panaderia-y-pasteleria
                  - text: Mostrar todo
              - paragraph [ref=e1073]: Endulza tu día
            - generic [ref=e1074]:
              - link [ref=e1075] [cursor=pointer]:
                - /url: /category/panaderia-y-pasteleria
                - paragraph [ref=e1078]: 40% dcto
                - generic:
                  - generic:
                    - paragraph: Chocolates Milka Variedades
                    - generic:
                      - paragraph: "40"
                      - generic:
                        - paragraph: "%"
                        - paragraph: dcto
              - generic [ref=e1080]:
                - generic [ref=e1082]:
                  - generic [ref=e1084]:
                    - generic [ref=e1085]:
                      - link [ref=e1086] [cursor=pointer]:
                        - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                      - button [ref=e1088] [cursor=pointer]
                    - generic [ref=e1091]:
                      - paragraph [ref=e1094]: $1.180
                      - generic [ref=e1095]:
                        - link [ref=e1096] [cursor=pointer]:
                          - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                          - text: Galleta Alteza bocado 140 g
                        - generic [ref=e1097]: 140 g
                    - button [ref=e1100] [cursor=pointer]: Agregar
                  - generic [ref=e1102]:
                    - generic [ref=e1103]:
                      - link [ref=e1104] [cursor=pointer]:
                        - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                      - button [ref=e1106] [cursor=pointer]
                    - generic [ref=e1109]:
                      - paragraph [ref=e1112]: $280
                      - generic [ref=e1113]:
                        - link [ref=e1114] [cursor=pointer]:
                          - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                          - text: Galleta mini Dos en Uno chocolate 35 g
                        - generic [ref=e1115]: 35 g
                    - button [ref=e1118] [cursor=pointer]: Agregar
                  - generic [ref=e1120]:
                    - generic [ref=e1121]:
                      - link [ref=e1122] [cursor=pointer]:
                        - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                      - button [ref=e1124] [cursor=pointer]
                    - generic [ref=e1127]:
                      - generic [ref=e1128]:
                        - generic [ref=e1129]:
                          - generic [ref=e1130]: Unipay $757
                          - paragraph [ref=e1131]: ($6.882 x kg)
                        - generic [ref=e1132]:
                          - paragraph [ref=e1133]: $890
                          - paragraph [ref=e1134]: ($8.091 x kg)
                      - generic [ref=e1135]:
                        - link [ref=e1136] [cursor=pointer]:
                          - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                          - generic [ref=e1137]: Oreo | Galleta Oreo clásica vainilla 108…
                        - generic [ref=e1138]: 108 g
                    - button [ref=e1141] [cursor=pointer]: Agregar
                  - generic [ref=e1143]:
                    - generic [ref=e1144]:
                      - link [ref=e1145] [cursor=pointer]:
                        - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                      - button [ref=e1147] [cursor=pointer]
                    - generic [ref=e1150]:
                      - paragraph [ref=e1153]: $4.990
                      - generic [ref=e1154]:
                        - link [ref=e1155] [cursor=pointer]:
                          - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                          - generic [ref=e1156]: Galletas con mermelada La Galleteria 300…
                        - generic [ref=e1157]: 300 g
                    - button [ref=e1160] [cursor=pointer]: Agregar
                  - generic [ref=e1162]:
                    - generic [ref=e1163]:
                      - link [ref=e1164] [cursor=pointer]:
                        - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                      - button [ref=e1166] [cursor=pointer]
                    - generic [ref=e1169]:
                      - generic [ref=e1171]:
                        - paragraph [ref=e1172]: $1.290
                        - paragraph [ref=e1173]: ($4.607 x kg)
                      - generic [ref=e1174]:
                        - link [ref=e1175] [cursor=pointer]:
                          - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                          - generic [ref=e1176]: Europastry | Pan baguette plus Crandon 1…
                        - generic [ref=e1177]: 1 un
                    - button [ref=e1180] [cursor=pointer]: Agregar
                  - generic [ref=e1182]:
                    - generic [ref=e1183]:
                      - link [ref=e1184] [cursor=pointer]:
                        - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                      - button [ref=e1186] [cursor=pointer]
                    - generic [ref=e1189]:
                      - generic [ref=e1191]:
                        - paragraph [ref=e1192]: $1.495
                        - paragraph [ref=e1193]: ($2.990 x kg)
                      - generic [ref=e1194]:
                        - link [ref=e1195] [cursor=pointer]:
                          - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                          - generic [ref=e1196]: Amada Masa | Pan ciabatta granel Amada M…
                        - generic [ref=e1197]: 500 g
                    - button [ref=e1200] [cursor=pointer]: Agregar
                  - generic [ref=e1202]:
                    - generic [ref=e1203]:
                      - link [ref=e1204] [cursor=pointer]:
                        - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                      - button [ref=e1206] [cursor=pointer]
                    - generic [ref=e1209]:
                      - generic [ref=e1211]:
                        - paragraph [ref=e1212]: $2.990
                        - paragraph [ref=e1213]: ($5.980 x kg)
                      - generic [ref=e1214]:
                        - link [ref=e1215] [cursor=pointer]:
                          - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                          - generic [ref=e1216]: Amada Masa | Pan hot dog granel Amada Ma…
                        - generic [ref=e1217]: 500 g
                    - button [ref=e1220] [cursor=pointer]: Agregar
                  - generic [ref=e1222]:
                    - generic [ref=e1223]:
                      - link [ref=e1224] [cursor=pointer]:
                        - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                      - button [ref=e1226] [cursor=pointer]
                    - generic [ref=e1229]:
                      - paragraph [ref=e1232]: $1.095
                      - generic [ref=e1233]:
                        - link [ref=e1234] [cursor=pointer]:
                          - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                          - text: Pan marraqueta granel Amada Masa 500 g
                        - generic [ref=e1235]: 500 g
                    - button [ref=e1238] [cursor=pointer]: Agregar
                - button [ref=e1241] [cursor=pointer]
                - button [ref=e1244] [cursor=pointer]
        - link [ref=e1254] [cursor=pointer]:
          - /url: /search?q=despensa
        - generic [ref=e1260]:
          - generic [ref=e1261]:
            - heading [level=2] [ref=e1262]: Nuestras marcas
            - link [ref=e1263] [cursor=pointer]:
              - /url: /category/panaderia-y-pasteleria
              - text: Mostrar todo
          - generic [ref=e1264]:
            - tab [selected] [ref=e1265] [cursor=pointer]: Amada masa
            - tab [ref=e1266] [cursor=pointer]: Azul
            - tab [ref=e1267] [cursor=pointer]: Como en casa
            - tab [ref=e1268] [cursor=pointer]: D-kora
            - tab [ref=e1269] [cursor=pointer]: Fundo Río al
            - tab [ref=e1270] [cursor=pointer]: Nubelín
            - tab [ref=e1271] [cursor=pointer]: Nuestra coci
            - tab [ref=e1272] [cursor=pointer]: Smart Clean
            - tab [ref=e1273] [cursor=pointer]: Tento
          - generic [ref=e1276]:
            - generic [ref=e1278]:
              - generic [ref=e1280]:
                - generic [ref=e1281]:
                  - link [ref=e1282] [cursor=pointer]:
                    - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                  - button [ref=e1284] [cursor=pointer]
                - generic [ref=e1287]:
                  - paragraph [ref=e1290]: $1.180
                  - generic [ref=e1291]:
                    - link [ref=e1292] [cursor=pointer]:
                      - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                      - text: Galleta Alteza bocado 140 g
                    - generic [ref=e1293]: 140 g
                - button [ref=e1296] [cursor=pointer]: Agregar
              - generic [ref=e1298]:
                - generic [ref=e1299]:
                  - link [ref=e1300] [cursor=pointer]:
                    - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                  - button [ref=e1302] [cursor=pointer]
                - generic [ref=e1305]:
                  - paragraph [ref=e1308]: $280
                  - generic [ref=e1309]:
                    - link [ref=e1310] [cursor=pointer]:
                      - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                      - text: Galleta mini Dos en Uno chocolate 35 g
                    - generic [ref=e1311]: 35 g
                - button [ref=e1314] [cursor=pointer]: Agregar
              - generic [ref=e1316]:
                - generic [ref=e1317]:
                  - link [ref=e1318] [cursor=pointer]:
                    - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                  - button [ref=e1320] [cursor=pointer]
                - generic [ref=e1323]:
                  - generic [ref=e1324]:
                    - generic [ref=e1325]:
                      - generic [ref=e1326]: Unipay $757
                      - paragraph [ref=e1327]: ($6.882 x kg)
                    - generic [ref=e1328]:
                      - paragraph [ref=e1329]: $890
                      - paragraph [ref=e1330]: ($8.091 x kg)
                  - generic [ref=e1331]:
                    - link [ref=e1332] [cursor=pointer]:
                      - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                      - generic [ref=e1333]: Oreo | Galleta Oreo clásica vainilla 108…
                    - generic [ref=e1334]: 108 g
                - button [ref=e1337] [cursor=pointer]: Agregar
              - generic [ref=e1339]:
                - generic [ref=e1340]:
                  - link [ref=e1341] [cursor=pointer]:
                    - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                  - button [ref=e1343] [cursor=pointer]
                - generic [ref=e1346]:
                  - paragraph [ref=e1349]: $4.990
                  - generic [ref=e1350]:
                    - link [ref=e1351] [cursor=pointer]:
                      - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                      - generic [ref=e1352]: Galletas con mermelada La Galleteria 300…
                    - generic [ref=e1353]: 300 g
                - button [ref=e1356] [cursor=pointer]: Agregar
              - generic [ref=e1358]:
                - generic [ref=e1359]:
                  - link [ref=e1360] [cursor=pointer]:
                    - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                  - button [ref=e1362] [cursor=pointer]
                - generic [ref=e1365]:
                  - generic [ref=e1367]:
                    - paragraph [ref=e1368]: $1.290
                    - paragraph [ref=e1369]: ($4.607 x kg)
                  - generic [ref=e1370]:
                    - link [ref=e1371] [cursor=pointer]:
                      - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                      - generic [ref=e1372]: Europastry | Pan baguette plus Crandon 1…
                    - generic [ref=e1373]: 1 un
                - button [ref=e1376] [cursor=pointer]: Agregar
              - generic [ref=e1378]:
                - generic [ref=e1379]:
                  - link [ref=e1380] [cursor=pointer]:
                    - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                  - button [ref=e1382] [cursor=pointer]
                - generic [ref=e1385]:
                  - generic [ref=e1387]:
                    - paragraph [ref=e1388]: $1.495
                    - paragraph [ref=e1389]: ($2.990 x kg)
                  - generic [ref=e1390]:
                    - link [ref=e1391] [cursor=pointer]:
                      - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                      - generic [ref=e1392]: Amada Masa | Pan ciabatta granel Amada M…
                    - generic [ref=e1393]: 500 g
                - button [ref=e1396] [cursor=pointer]: Agregar
              - generic [ref=e1398]:
                - generic [ref=e1399]:
                  - link [ref=e1400] [cursor=pointer]:
                    - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                  - button [ref=e1402] [cursor=pointer]
                - generic [ref=e1405]:
                  - generic [ref=e1407]:
                    - paragraph [ref=e1408]: $2.990
                    - paragraph [ref=e1409]: ($5.980 x kg)
                  - generic [ref=e1410]:
                    - link [ref=e1411] [cursor=pointer]:
                      - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                      - generic [ref=e1412]: Amada Masa | Pan hot dog granel Amada Ma…
                    - generic [ref=e1413]: 500 g
                - button [ref=e1416] [cursor=pointer]: Agregar
              - generic [ref=e1418]:
                - generic [ref=e1419]:
                  - link [ref=e1420] [cursor=pointer]:
                    - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                  - button [ref=e1422] [cursor=pointer]
                - generic [ref=e1425]:
                  - paragraph [ref=e1428]: $1.095
                  - generic [ref=e1429]:
                    - link [ref=e1430] [cursor=pointer]:
                      - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                      - text: Pan marraqueta granel Amada Masa 500 g
                    - generic [ref=e1431]: 500 g
                - button [ref=e1434] [cursor=pointer]: Agregar
              - generic [ref=e1436]:
                - generic [ref=e1437]:
                  - link [ref=e1438] [cursor=pointer]:
                    - /url: /pan-marraqueta-prosepan-500-g/000000000000030202-KG.html
                  - button [ref=e1440] [cursor=pointer]
                - generic [ref=e1443]:
                  - generic [ref=e1445]:
                    - paragraph [ref=e1446]: $1.095
                    - paragraph [ref=e1447]: ($2.190 x kg)
                  - generic [ref=e1448]:
                    - link [ref=e1449] [cursor=pointer]:
                      - /url: /pan-marraqueta-prosepan-500-g/000000000000030202-KG.html
                      - text: Pan marraqueta Prosepan 500 g
                    - generic [ref=e1450]: 500 g
                - button [ref=e1453] [cursor=pointer]: Agregar
              - generic [ref=e1455]:
                - generic [ref=e1456]:
                  - link [ref=e1457] [cursor=pointer]:
                    - /url: /pan-pita-integral-granel-amada-masa-500-g/000000000000614468-KG.html
                  - button [ref=e1459] [cursor=pointer]
                - generic [ref=e1462]:
                  - paragraph [ref=e1465]: $2.890
                  - generic [ref=e1466]:
                    - link [ref=e1467] [cursor=pointer]:
                      - /url: /pan-pita-integral-granel-amada-masa-500-g/000000000000614468-KG.html
                      - generic [ref=e1468]: Pan pita integral granel Amada Masa 500 …
                    - generic [ref=e1469]: 500 g
                - button [ref=e1472] [cursor=pointer]: Agregar
            - button [ref=e1475] [cursor=pointer]
            - button [ref=e1478] [cursor=pointer]
        - generic [ref=e1488]:
          - generic [ref=e1490]:
            - generic [ref=e1491]:
              - heading [level=3] [ref=e1492]: Especial Bebidas
              - link [ref=e1493] [cursor=pointer]:
                - /url: /category/bebidas-y-licores
                - text: Mostrar todo
            - paragraph [ref=e1494]: Bebidas vegetales y más
          - generic [ref=e1495]:
            - link [ref=e1496] [cursor=pointer]:
              - /url: /category/bebidas-y-licores
              - generic:
                - generic:
                  - paragraph: Productos Not Variedades
                  - generic:
                    - paragraph: "30"
                    - generic:
                      - paragraph: "%"
                      - paragraph: dcto
            - generic [ref=e1500]:
              - generic [ref=e1502]:
                - generic [ref=e1504]:
                  - generic [ref=e1505]:
                    - link [ref=e1506] [cursor=pointer]:
                      - /url: /cerveza-austral-lager-lata-470-cc/000000000000694333-UN.html
                    - button [ref=e1508] [cursor=pointer]
                  - generic [ref=e1511]:
                    - generic [ref=e1513]:
                      - paragraph [ref=e1514]: $2.090
                      - paragraph [ref=e1515]: ($4.447 x L)
                    - generic [ref=e1516]:
                      - link [ref=e1517] [cursor=pointer]:
                        - /url: /cerveza-austral-lager-lata-470-cc/000000000000694333-UN.html
                        - generic [ref=e1518]: Austral | Cerveza Austral lager lata 470…
                      - generic [ref=e1519]: 470 cc
                  - button [ref=e1522] [cursor=pointer]: Agregar
                - generic [ref=e1524]:
                  - generic [ref=e1525]:
                    - link [ref=e1526] [cursor=pointer]:
                      - /url: /cerveza-budweiser-zero-botella-6-un-de-330-cc/000000000000663675-UN.html
                    - button [ref=e1528] [cursor=pointer]
                  - generic [ref=e1531]:
                    - generic [ref=e1533]:
                      - paragraph [ref=e1534]: $7.790
                      - paragraph [ref=e1535]: ($23.606 x L)
                    - generic [ref=e1536]:
                      - link [ref=e1537] [cursor=pointer]:
                        - /url: /cerveza-budweiser-zero-botella-6-un-de-330-cc/000000000000663675-UN.html
                        - generic [ref=e1538]: Budweiser | Cerveza Budweiser zero botel…
                      - generic [ref=e1539]: 6 un
                  - button [ref=e1542] [cursor=pointer]: Agregar
                - generic [ref=e1544]:
                  - generic [ref=e1545]:
                    - link [ref=e1546] [cursor=pointer]:
                      - /url: /cerveza-corona-extra-lata-6-un-de-473-cc/000000000000686446-UN.html
                    - button [ref=e1548] [cursor=pointer]
                  - generic [ref=e1551]:
                    - generic [ref=e1553]:
                      - paragraph [ref=e1554]: $6.890
                      - paragraph [ref=e1555]: ($14.567 x L)
                    - generic [ref=e1556]:
                      - link [ref=e1557] [cursor=pointer]:
                        - /url: /cerveza-corona-extra-lata-6-un-de-473-cc/000000000000686446-UN.html
                        - generic [ref=e1558]: Corona | Cerveza Corona extra lata 6 un …
                      - generic [ref=e1559]: 6 un
                  - button [ref=e1562] [cursor=pointer]: Agregar
                - generic [ref=e1564]:
                  - generic [ref=e1565]:
                    - link [ref=e1566] [cursor=pointer]:
                      - /url: /cerveza-cristal-lager-botella-650-cc/000000000000686452-UN.html
                    - button [ref=e1568] [cursor=pointer]
                  - generic [ref=e1571]:
                    - generic [ref=e1573]:
                      - paragraph [ref=e1574]: $1.350
                      - paragraph [ref=e1575]: ($2.077 x L)
                    - generic [ref=e1576]:
                      - link [ref=e1577] [cursor=pointer]:
                        - /url: /cerveza-cristal-lager-botella-650-cc/000000000000686452-UN.html
                        - generic [ref=e1578]: Cristal Cerveza | Cerveza Cristal lager …
                      - generic [ref=e1579]: 650 cc
                  - button [ref=e1582] [cursor=pointer]: Agregar
                - generic [ref=e1584]:
                  - generic [ref=e1585]:
                    - link [ref=e1586] [cursor=pointer]:
                      - /url: /cerveza-duvel-moorgat-botella-330-cc/000000000000536215-UN.html
                    - button [ref=e1588] [cursor=pointer]
                  - generic [ref=e1591]:
                    - paragraph [ref=e1594]: $3.550
                    - generic [ref=e1595]:
                      - link [ref=e1596] [cursor=pointer]:
                        - /url: /cerveza-duvel-moorgat-botella-330-cc/000000000000536215-UN.html
                        - text: Cerveza Duvel moorgat botella 330 cc
                      - generic [ref=e1597]: 330 cc
                  - button [ref=e1600] [cursor=pointer]: Agregar
                - generic [ref=e1602]:
                  - generic [ref=e1603]:
                    - link [ref=e1604] [cursor=pointer]:
                      - /url: /cerveza-royal-golden-lager-lata-6-un-de-470-cc/000000000000674841-DIS.html
                    - button [ref=e1606] [cursor=pointer]
                  - generic [ref=e1609]:
                    - generic [ref=e1611]:
                      - paragraph [ref=e1612]: $7.290
                      - paragraph [ref=e1613]: ($15.511 x L)
                    - generic [ref=e1614]:
                      - link [ref=e1615] [cursor=pointer]:
                        - /url: /cerveza-royal-golden-lager-lata-6-un-de-470-cc/000000000000674841-DIS.html
                        - generic [ref=e1616]: Royal Guard | Cerveza Royal golden lager…
                      - generic [ref=e1617]: 6 un
                  - button [ref=e1620] [cursor=pointer]: Agregar
                - generic [ref=e1622]:
                  - generic [ref=e1623]:
                    - link [ref=e1624] [cursor=pointer]:
                      - /url: /cerveza-sabor-sandia-stones-350ml/000000000000689879-UN.html
                    - button [ref=e1626] [cursor=pointer]
                  - generic [ref=e1629]:
                    - generic [ref=e1631]:
                      - paragraph [ref=e1632]: $6.590
                      - paragraph [ref=e1633]: ($18.829 x L)
                    - generic [ref=e1634]:
                      - link [ref=e1635] [cursor=pointer]:
                        - /url: /cerveza-sabor-sandia-stones-350ml/000000000000689879-UN.html
                        - generic [ref=e1636]: Stones | Cerveza sabor sandía Stones 350…
                      - generic [ref=e1637]: 350 ml
                  - button [ref=e1640] [cursor=pointer]: Agregar
                - generic [ref=e1642]:
                  - generic [ref=e1643]:
                    - link [ref=e1644] [cursor=pointer]:
                      - /url: /cerveza-stones-berries-lata-6-un-de-350-ml/000000000000671971-UN.html
                    - button [ref=e1646] [cursor=pointer]
                  - generic [ref=e1649]:
                    - generic [ref=e1651]:
                      - paragraph [ref=e1652]: $6.590
                      - paragraph [ref=e1653]: ($18.829 x L)
                    - generic [ref=e1654]:
                      - link [ref=e1655] [cursor=pointer]:
                        - /url: /cerveza-stones-berries-lata-6-un-de-350-ml/000000000000671971-UN.html
                        - generic [ref=e1656]: Stones | Cerveza Stones berries lata 6 u…
                      - generic [ref=e1657]: 6 un
                  - button [ref=e1660] [cursor=pointer]: Agregar
              - button [ref=e1663] [cursor=pointer]
              - button [ref=e1666] [cursor=pointer]
        - generic [ref=e1673]:
          - generic [ref=e1674]:
            - paragraph [ref=e1675]: Contrata la membresía
            - paragraph [ref=e1676]: Obtén despachos gratis y ilimitados por compras sobre $20.000 y descuentos exclusivos
            - link [ref=e1677] [cursor=pointer]:
              - /url: /membresia
              - text: Comienza tus 15 días gratis
          - button [ref=e1680] [cursor=pointer]
        - generic [ref=e1687]:
          - generic [ref=e1688]:
            - heading [level=2] [ref=e1689]: TÉRMINOS Y CONDICIONES UNIMARC
            - paragraph [ref=e1690]: El acceso y uso del sitio web www.unimarc.cl y de la aplicación móvil Unimarc (ambos indistintamente “Unimarc.cl”) por u
          - generic [ref=e1691]:
            - generic [ref=e1692]:
              - button [expanded] [ref=e1693] [cursor=pointer]:
                - generic [ref=e1696]: 1. Registro del Cliente
              - region [ref=e1697]:
                - paragraph [ref=e1699]: Será requisito para la adquisición de productos y servicios ofrecidos en Unimarc.cl, estar registrado en éste, ser mayor de 18 años, y al momento de la compra aceptar estos T&C y su Política de Privacidad. El acceso y registro será gratuito.
            - button [ref=e1701] [cursor=pointer]:
              - generic [ref=e1705]: 2. Clave de acceso secreta
            - button [ref=e1707] [cursor=pointer]:
              - generic [ref=e1711]: 3. Derechos del Cliente
            - button [ref=e1713] [cursor=pointer]:
              - generic [ref=e1717]: 4. Procedimiento para hacer uso de Unima
    - contentinfo [aria-hidden] [ref=e1718]:
      - generic [ref=e1719]:
        - generic [ref=e1720]:
          - generic [ref=e1721]:
            - link [ref=e1722] [cursor=pointer]:
              - /url: /centro-de-ayuda
              - generic [ref=e1729]:
                - paragraph [ref=e1730]: Centro de ayuda
                - paragraph [ref=e1731]: Aquí encontrarás preguntas frecuentes y mucho más
            - link [ref=e1732] [cursor=pointer]:
              - /url: /seguimiento-de-compra
              - generic [ref=e1738]:
                - paragraph [ref=e1739]: Seguimiento de compra
                - paragraph [ref=e1740]: Revisa el estado y detalle de tu compra
            - link [ref=e1741] [cursor=pointer]:
              - /url: https://wa.me/56958701477
              - generic [ref=e1747]:
                - paragraph [ref=e1748]: Whatsapp clientes
                - paragraph [ref=e1749]: Escríbenos de 9:00 a 20:00 horas
          - generic [ref=e1750]:
            - generic [ref=e1751]:
              - button [ref=e1752] [cursor=pointer]:
                - paragraph [ref=e1755]: Contáctanos
              - generic [ref=e1757]:
                - generic [ref=e1758]:
                  - paragraph [ref=e1759]: Unimarc - Servicio al cliente
                  - link [ref=e1764] [cursor=pointer]:
                    - /url: tel:6006000025
                    - text: 600 600 0025
                  - paragraph [ref=e1765]: Llámanos de 9:00 a 20:00 horas
                - generic [ref=e1766]:
                  - paragraph [ref=e1767]: Compras online
                  - link [ref=e1775] [cursor=pointer]:
                    - /url: /contacto/compras-online
                    - text: Crea una solicitud
                  - link [ref=e1781] [cursor=pointer]:
                    - /url: mailto:despachosunimarc@unimarc.cl
                    - text: despachosunimarc@unimarc.cl
                - generic [ref=e1782]:
                  - paragraph [ref=e1783]: Tarjeta Unipay - Servicio al cliente
                  - link [ref=e1788] [cursor=pointer]:
                    - /url: tel:6003909000
                    - text: 600 390 9000
                  - paragraph [ref=e1789]: Llámanos de 9:00 a 20:00 horas
                - generic [ref=e1790]:
                  - paragraph [ref=e1791]: Compras en tienda
                  - link [ref=e1799] [cursor=pointer]:
                    - /url: /contacto/compras-tienda
                    - text: Crea una solicitud
                  - link [ref=e1805] [cursor=pointer]:
                    - /url: mailto:contacto.unimarc@unimarc.cl
                    - text: contacto.unimarc@unimarc.cl
            - button [ref=e1807] [cursor=pointer]:
              - paragraph [ref=e1811]: Servicio al cliente
            - button [ref=e1813] [cursor=pointer]:
              - paragraph [ref=e1817]: Nuestros programas
            - button [ref=e1819] [cursor=pointer]:
              - paragraph [ref=e1823]: Nuestra empresa
        - separator [ref=e1824]
        - generic [ref=e1825]:
          - list [ref=e1827]:
            - listitem [ref=e1828]:
              - link [ref=e1829] [cursor=pointer]:
                - /url: /legales/cookies
                - text: Políticas de Cookies
          - generic [ref=e1830]:
            - paragraph [ref=e1831]: Síguenos
            - generic [ref=e1832]:
              - link [ref=e1833] [cursor=pointer]:
                - /url: https://www.facebook.com/unimarc
              - link [ref=e1836] [cursor=pointer]:
                - /url: https://www.instagram.com/unimarc
              - link [ref=e1841] [cursor=pointer]:
                - /url: https://x.com/unimarc
              - link [ref=e1844] [cursor=pointer]:
                - /url: https://www.youtube.com/unimarc
  - generic:
    - region
    - region
    - region
    - region
    - region
    - region
  - dialog [ref=e1849]:
    - button "Cerrar" [active] [ref=e1850] [cursor=pointer]
    - banner [ref=e1853]: Elige tu método de entrega
    - generic [ref=e1854]:
      - generic [ref=e1855]:
        - button "Despacho a domicilio" [pressed] [ref=e1856] [cursor=pointer]
        - button "Retiro en tienda" [ref=e1863] [cursor=pointer]
      - paragraph [ref=e1870]: Calle, dirección o lugar
      - generic [ref=e1871]:
        - 'textbox "Ej: Av. Manquehue norte 457, Las condes" [ref=e1873]'
        - button "Activar mi ubicación actual" [ref=e1874] [cursor=pointer]
      - generic [ref=e1881]:
        - paragraph [ref=e1882]: Aún no tienes direcciones guardadas
        - paragraph [ref=e1883]: Para armar tu carro, ingresa una dirección y te mostraremos los productos disponibles para esa ubicación.
    - contentinfo [ref=e1884]:
      - generic [ref=e1885]:
        - paragraph [ref=e1890]: ¿No aparece tu dirección?
        - button "Agregar" [ref=e1891] [cursor=pointer]
```

# Test source

```ts
  444 | 
  445 |   /** "Para armar tu carro, ingresa una dirección…": el texto de ayuda bajo el mensaje. */
  446 |   get textoAyuda(): Locator {
  447 |     return this.root.getByText(/ingresa una direcci[óo]n/i);
  448 |   }
  449 | 
  450 |   /** La ilustración del área de contenido (la pitahaya). */
  451 |   get imagenContenido(): Locator {
  452 |     return this.root.locator('img').locator('visible=true').first();
  453 |   }
  454 | 
  455 |   /** Cabecera de la pestaña Retiro: "Selecciona tu tienda Unimarc" (entrada de B2C-121). */
  456 |   get tituloSeleccionTienda(): Locator {
  457 |     return this.root.getByText(/selecciona tu tienda unimarc/i);
  458 |   }
  459 | 
  460 |   get campoBuscarTienda(): Locator {
  461 |     return this.root.getByRole('textbox', { name: /buscar tienda/i });
  462 |   }
  463 | 
  464 |   /**
  465 |    * Estado visual de una pestaña: `aria-pressed`, color del texto y relleno del ícono. La pestaña
  466 |    * activa pinta el ícono en rojo (rgb(218, 41, 28)); la inactiva, texto e ícono en gris.
  467 |    */
  468 |   async estiloTab(tab: Locator): Promise<{ activa: boolean; texto: string; icono: string | null }> {
  469 |     return tab.evaluate((b) => {
  470 |       const relleno = Array.from(b.querySelectorAll('svg *'))
  471 |         .map((s) => getComputedStyle(s).fill)
  472 |         .find((f) => f && f !== 'none');
  473 |       return { activa: b.getAttribute('aria-pressed') === 'true', texto: getComputedStyle(b).color, icono: relleno ?? null };
  474 |     });
  475 |   }
  476 | 
  477 |   async cerrarConX(): Promise<void> {
  478 |     await this.botonCerrar.click();
  479 |     await this.root.waitFor({ state: 'hidden', timeout: 15000 });
  480 |   }
  481 | 
  482 |   /** Clic en el primer punto del viewport que quede fuera del drawer, o `null` si no hay ninguno. */
  483 |   async clicFuera(): Promise<{ x: number; y: number } | null> {
  484 |     const caja = await this.root.boundingBox();
  485 |     const vp = this.page.viewportSize();
  486 |     if (!caja || !vp) return null;
  487 |     const puntos = [
  488 |       { x: caja.x + caja.width + 40, y: vp.height / 2 },
  489 |       { x: caja.x - 40, y: vp.height / 2 },
  490 |       { x: vp.width / 2, y: caja.y + caja.height + 20 },
  491 |       { x: vp.width / 2, y: caja.y - 20 },
  492 |     ].filter((p) => p.x > 0 && p.x < vp.width && p.y > 0 && p.y < vp.height);
  493 |     if (!puntos.length) return null;
  494 |     await this.page.mouse.click(puntos[0].x, puntos[0].y);
  495 |     return puntos[0];
  496 |   }
  497 | 
  498 |   /**
  499 |    * Swipe hacia abajo con eventos táctiles reales sobre la cabecera del drawer (de su borde
  500 |    * superior hasta el 90 % del alto del viewport). El drawer de Chakra solo reaccionaría si el
  501 |    * sitio le hubiera montado un gesto de arrastre.
  502 |    */
  503 |   async swipeAbajo(): Promise<void> {
  504 |     const caja = await this.root.boundingBox();
  505 |     const vp = this.page.viewportSize();
  506 |     if (!caja || !vp) throw new Error('El drawer no tiene recuadro: no está renderizado');
  507 |     await this.root.evaluate(
  508 |       (el, { x, y0, y1 }) => {
  509 |         const objetivo = document.elementFromPoint(x, y0) ?? el;
  510 |         const toque = (y: number) => new Touch({ identifier: 1, target: objetivo, clientX: x, clientY: y, pageX: x, pageY: y });
  511 |         const lanzar = (tipo: string, y: number, activo: boolean) =>
  512 |           objetivo.dispatchEvent(
  513 |             new TouchEvent(tipo, { bubbles: true, cancelable: true, touches: activo ? [toque(y)] : [], targetTouches: activo ? [toque(y)] : [], changedTouches: [toque(y)] }),
  514 |           );
  515 |         // WebKit de escritorio puede no exponer el constructor `Touch`: entonces queda solo el
  516 |         // arrastre con el mouse de abajo.
  517 |         try {
  518 |           lanzar('touchstart', y0, true);
  519 |           for (let i = 1; i <= 10; i++) lanzar('touchmove', y0 + ((y1 - y0) * i) / 10, true);
  520 |           lanzar('touchend', y1, false);
  521 |         } catch {
  522 |           /* sin soporte de Touch */
  523 |         }
  524 |       },
  525 |       { x: caja.x + caja.width / 2, y0: caja.y + 30, y1: vp.height * 0.9 },
  526 |     );
  527 |     // Un arrastre con el mouse cubre la otra forma en que suelen implementarse estos gestos.
  528 |     await this.page.mouse.move(caja.x + caja.width / 2, caja.y + 30);
  529 |     await this.page.mouse.down();
  530 |     await this.page.mouse.move(caja.x + caja.width / 2, vp.height * 0.9, { steps: 10 });
  531 |     await this.page.mouse.up();
  532 |   }
  533 | 
  534 |   async escribirEnBuscador(texto: string): Promise<void> {
  535 |     await this.campoBusqueda.fill(texto);
  536 |   }
  537 | 
  538 |   async tocarAgregar(): Promise<void> {
  539 |     await this.botonAgregar.click();
  540 |     await this.encabezadoManual.waitFor({ state: 'visible', timeout: 30000 });
  541 |   }
  542 | 
  543 |   async tocarUbicacionActual(): Promise<void> {
> 544 |     await this.botonUbicacionActual.click();
      |                                     ^ Error: locator.click: Target page, context or browser has been closed
  545 |   }
  546 | 
  547 |   async cerrarModalPermisos(): Promise<void> {
  548 |     await this.botonCerrarPermisos.click();
  549 |     await this.modalPermisos.waitFor({ state: 'hidden', timeout: 15000 });
  550 |   }
  551 | 
  552 |   async reintentar(): Promise<void> {
  553 |     await this.botonReintentar.click();
  554 |   }
  555 | 
  556 |   async volverAlInicio(): Promise<void> {
  557 |     await this.botonVolverAlInicio.click();
  558 |   }
  559 | 
  560 |   /** Textos de las opciones de un `<select>`, sin el placeholder ("Elegir …"). */
  561 |   async opciones(select: Locator): Promise<string[]> {
  562 |     const textos = await select.locator('option').allTextContents();
  563 |     return textos.map((t) => t.trim()).filter((t) => t && !/^elegir /i.test(t));
  564 |   }
  565 | 
  566 |   /** Texto de la opción elegida en un `<select>` (el placeholder cuenta como elegida). */
  567 |   async seleccionada(select: Locator): Promise<string> {
  568 |     return select.evaluate((el: HTMLSelectElement) => el.options[el.selectedIndex]?.text?.trim() ?? '');
  569 |   }
  570 | 
  571 |   async elegirRegion(nombre: string): Promise<void> {
  572 |     await this.selectRegion.selectOption({ label: nombre });
  573 |   }
  574 | 
  575 |   async elegirComuna(nombre: string): Promise<void> {
  576 |     await this.selectComuna.selectOption({ label: nombre });
  577 |   }
  578 | 
  579 |   // --- Simulaciones de falla (las que los TC piden hacer con DevTools) ------------------------
  580 | 
  581 |   /**
  582 |    * Hace fallar la carga de las direcciones guardadas, que es lo que el TC hace a mano con
  583 |    * "Network request blocking" en DevTools.
  584 |    *
  585 |    * Al abrir el drawer, el sitio pide el cliente (`shopper-customers/.../customers/{id}`), que es
  586 |    * quien trae las direcciones; con esa respuesta en 500 el drawer muestra "Ups, algo salió mal".
  587 |    * La regex exige que la ruta termine en el id del cliente: `/customers/{id}/baskets` y
  588 |    * `/product-lists` son otras llamadas y tienen que seguir respondiendo, o se rompería el header.
  589 |    *
  590 |    * Hay que activarla **después** del login: el login también pide el cliente, y con la ruta
  591 |    * cortada la sesión no terminaría de armarse.
  592 |    *
  593 |    * **Y hay que esperar a que los datos del cliente queden viejos.** El sitio los trae armados
  594 |    * desde el servidor y los reutiliza mientras son recientes: abrir el drawer no los vuelve a pedir
  595 |    * hasta que pasan unos 60 s (medido el 2026-09-28: la primera petición salió a los ~62 s de
  596 |    * iniciar sesión, y la pantalla de error apareció al abrir el drawer después de eso). Ni abrir el
  597 |    * drawer enseguida ni recargar la página sirven —la recarga vuelve a servirlos desde el servidor—,
  598 |    * y así fallaron las dos primeras corridas de B2C-26. El tester que bloquea la petición en
  599 |    * DevTools cae en el mismo caso sin notarlo, porque tarda más que eso en preparar el bloqueo.
  600 |    */
  601 |   async forzarErrorCargaDirecciones(): Promise<void> {
  602 |     await this.page.route(RUTA_CLIENTE, (route) =>
  603 |       route.request().method() === 'GET'
  604 |         ? route.fulfill({ status: 500, contentType: 'application/json', body: '{"title":"simulado"}' })
  605 |         : route.continue(),
  606 |     );
  607 |     await this.page.waitForTimeout(ESPERA_DATOS_VIEJOS_MS);
  608 |   }
  609 | 
  610 |   async restaurarCargaDirecciones(): Promise<void> {
  611 |     await this.page.unroute(RUTA_CLIENTE);
  612 |   }
  613 | 
  614 |   /**
  615 |    * Permiso de ubicación concedido pero sin coordenadas: el equivalente de DevTools > Sensors >
  616 |    * "Location unavailable". Se instala antes de navegar para que valga en toda la sesión, también
  617 |    * al reintentar.
  618 |    */
  619 |   async simularUbicacionNoDisponible(): Promise<void> {
  620 |     await this.page.context().grantPermissions(['geolocation']);
  621 |     await this.page.addInitScript(() => {
  622 |       const error = { code: 2, message: 'Position unavailable', PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 };
  623 |       navigator.geolocation.getCurrentPosition = (_ok, ko) => {
  624 |         setTimeout(() => ko && ko(error as GeolocationPositionError), 300);
  625 |       };
  626 |       navigator.geolocation.watchPosition = (_ok, ko) => {
  627 |         setTimeout(() => ko && ko(error as GeolocationPositionError), 300);
  628 |         return 1;
  629 |       };
  630 |     });
  631 |   }
  632 | 
  633 |   /**
  634 |    * Google Maps caído: aborta todo lo que va a `maps.googleapis.com`, que es lo que el TC bloquea en
  635 |    * DevTools. Se instala antes de navegar, para que el SDK de Maps tampoco llegue a cargar.
  636 |    */
  637 |   async simularFallaGoogle(): Promise<void> {
  638 |     await this.page.route(/maps\.googleapis\.com/, (route) => route.abort());
  639 |   }
  640 | 
  641 |   /**
  642 |    * Error de API al cambiar la dirección activa: el POST `smu-delivery/.../apply` que dispara el
  643 |    * clic en una dirección guardada responde 500 (el bloqueo de DevTools del TC).
  644 |    */
```