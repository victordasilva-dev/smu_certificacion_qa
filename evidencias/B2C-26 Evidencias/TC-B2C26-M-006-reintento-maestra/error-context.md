# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: B2C-26.spec.ts >> B2C-26 pendientes · Mobile >> TC-B2C26-M-006 · Resultado de Google sin calle usa el texto como Calle y continúa al PIN [Mobile] (Mobile)
- Location: tests/B2C-26.spec.ts:1111:7

# Error details

```
Error: Google debe ofrecer un resultado de comuna sin calle

expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
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
                  - paragraph [ref=e458]: "19"
                  - paragraph [ref=e459]: minutos
                - paragraph [ref=e461]: ":"
                - generic [ref=e462]:
                  - paragraph [ref=e464]: "03"
                  - paragraph [ref=e465]: segundos
            - generic [ref=e469]:
              - generic [ref=e471]:
                - generic [ref=e472]:
                  - link [ref=e473] [cursor=pointer]:
                    - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                  - button [ref=e475] [cursor=pointer]
                - generic [ref=e478]:
                  - paragraph [ref=e481]: $1.290
                  - generic [ref=e482]:
                    - link [ref=e483] [cursor=pointer]:
                      - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                      - text: Agua saborizada Más manzana 1.6 L
                    - generic [ref=e484]: 1.6 l
                - button [ref=e487] [cursor=pointer]: Agregar
              - generic [ref=e489]:
                - generic [ref=e490]:
                  - link [ref=e491] [cursor=pointer]:
                    - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                  - button [ref=e493] [cursor=pointer]
                - generic [ref=e496]:
                  - generic [ref=e498]:
                    - paragraph [ref=e499]: $2.550
                    - paragraph [ref=e500]: ($1.275 x unidad)
                  - generic [ref=e501]:
                    - link [ref=e502] [cursor=pointer]:
                      - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                      - generic [ref=e503]: Frutas y Verduras | Choclo bandeja 2 un
                    - generic [ref=e504]: 2 un
                - button [ref=e507] [cursor=pointer]: Agregar
              - generic [ref=e509]:
                - generic [ref=e510]:
                  - link [ref=e511] [cursor=pointer]:
                    - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                  - button [ref=e513] [cursor=pointer]
                - link [ref=e518] [cursor=pointer]:
                  - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                  - generic [ref=e519]: Proverde | Choclo cocida Proverde bolsa …
                - button [ref=e521] [cursor=pointer]: Agregar
              - generic [ref=e523]:
                - generic [ref=e524]:
                  - link [ref=e525] [cursor=pointer]:
                    - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                  - button [ref=e527] [cursor=pointer]
                - generic [ref=e530]:
                  - paragraph [ref=e533]: $2.490
                  - generic [ref=e534]:
                    - link [ref=e535] [cursor=pointer]:
                      - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                      - generic [ref=e536]: Frutas y Verduras | Clementina malla 1 K…
                    - generic [ref=e537]: 1 kg
                - button [ref=e540] [cursor=pointer]: Agregar
              - generic [ref=e542]:
                - generic [ref=e543]:
                  - link [ref=e544] [cursor=pointer]:
                    - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                  - button [ref=e546] [cursor=pointer]
                - generic [ref=e549]:
                  - paragraph [ref=e552]: $1.999
                  - generic [ref=e553]:
                    - link [ref=e554] [cursor=pointer]:
                      - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                      - generic [ref=e555]: Frutas y Verduras | Clementina malla 1 K…
                    - generic [ref=e556]: 1 kg
                - button [ref=e559] [cursor=pointer]: Agregar
              - generic [ref=e561]:
                - generic [ref=e562]:
                  - link [ref=e563] [cursor=pointer]:
                    - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                  - button [ref=e565] [cursor=pointer]
                - generic [ref=e568]:
                  - generic [ref=e570]:
                    - paragraph [ref=e571]: $1.375
                    - paragraph [ref=e572]: ($2.750 x kg)
                  - generic [ref=e573]:
                    - link [ref=e574] [cursor=pointer]:
                      - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                      - generic [ref=e575]: Frutas y Verduras | Clementinas granel 5…
                    - generic [ref=e576]: 500 g
                - button [ref=e579] [cursor=pointer]: Agregar
              - generic [ref=e581]:
                - generic [ref=e582]:
                  - link [ref=e583] [cursor=pointer]:
                    - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                  - button [ref=e585] [cursor=pointer]
                - generic [ref=e588]:
                  - generic [ref=e590]:
                    - paragraph [ref=e591]: $1.999
                    - paragraph [ref=e592]: ($3.998 x kg)
                  - generic [ref=e593]:
                    - link [ref=e594] [cursor=pointer]:
                      - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                      - generic [ref=e595]: Frutas y Verduras | Clementinas granel 5…
                    - generic [ref=e596]: 500 g
                - button [ref=e599] [cursor=pointer]: Agregar
              - generic [ref=e601]:
                - generic [ref=e602]:
                  - link [ref=e603] [cursor=pointer]:
                    - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                  - generic [ref=e605]: Promoción % Unipay
                  - button [ref=e606] [cursor=pointer]
                - generic [ref=e609]:
                  - generic [ref=e610]:
                    - generic [ref=e612]:
                      - generic [aria-hidden] [ref=e613]: 💎
                      - paragraph [ref=e614]: $2.601
                    - generic [ref=e615]:
                      - generic [ref=e616]: 10%
                      - paragraph [ref=e617]: $2.601
                    - paragraph [ref=e618]: "Antes: $2.890"
                  - generic [ref=e619]:
                    - link [ref=e620] [cursor=pointer]:
                      - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                      - generic [ref=e621]: Frutas y Verduras | Kiwi bolsa 1 Kg
                    - generic [ref=e622]: 1 kg
                - button [ref=e625] [cursor=pointer]: Agregar
              - generic [ref=e627]:
                - generic [ref=e628]:
                  - link [ref=e629] [cursor=pointer]:
                    - /url: /kiwi-bolsa-1-kg/000000000010062644-UN.html
                  - button [ref=e631] [cursor=pointer]
                - generic [ref=e634]:
                  - paragraph [ref=e637]: $1.999
                  - generic [ref=e638]:
                    - link [ref=e639] [cursor=pointer]:
                      - /url: /kiwi-bolsa-1-kg/000000000010062644-UN.html
                      - generic [ref=e640]: Frutas y Verduras | Kiwi bolsa 1 Kg
                    - generic [ref=e641]: 1 kg
                - button [ref=e644] [cursor=pointer]: Agregar
              - generic [ref=e646]:
                - generic [ref=e647]:
                  - link [ref=e648] [cursor=pointer]:
                    - /url: /limon-granel-500-g/000000000000553212-KG.html
                  - button [ref=e650] [cursor=pointer]
                - generic [ref=e653]:
                  - generic [ref=e655]:
                    - paragraph [ref=e656]: $995
                    - paragraph [ref=e657]: ($1.990 x l)
                  - generic [ref=e658]:
                    - link [ref=e659] [cursor=pointer]:
                      - /url: /limon-granel-500-g/000000000000553212-KG.html
                      - generic [ref=e660]: Frutas y Verduras | Limón granel 500 g
                    - generic [ref=e661]: 500 g
                - button [ref=e664] [cursor=pointer]: Agregar
              - generic [ref=e666]:
                - generic [ref=e667]:
                  - link [ref=e668] [cursor=pointer]:
                    - /url: /limon-granel-500-g/000000000010553212-KG.html
                  - button [ref=e670] [cursor=pointer]
                - generic [ref=e673]:
                  - generic [ref=e675]:
                    - paragraph [ref=e676]: $1.999
                    - paragraph [ref=e677]: ($3.998 x l)
                  - generic [ref=e678]:
                    - link [ref=e679] [cursor=pointer]:
                      - /url: /limon-granel-500-g/000000000010553212-KG.html
                      - generic [ref=e680]: Frutas y Verduras | Limón granel 500 g
                    - generic [ref=e681]: 500 g
                - button [ref=e684] [cursor=pointer]: Agregar
              - generic [ref=e686]:
                - generic [ref=e687]:
                  - link [ref=e688] [cursor=pointer]:
                    - /url: /mangos-granel-500-g/000000000000037972-KG.html
                  - button [ref=e690] [cursor=pointer]
                - generic [ref=e693]:
                  - generic [ref=e695]:
                    - paragraph [ref=e696]: $2.790
                    - paragraph [ref=e697]: ($5.580 x kg)
                  - generic [ref=e698]:
                    - link [ref=e699] [cursor=pointer]:
                      - /url: /mangos-granel-500-g/000000000000037972-KG.html
                      - generic [ref=e700]: Frutas Y Verduras | Mangos granel 500 g
                    - generic [ref=e701]: 500 g
                - button [ref=e704] [cursor=pointer]: Agregar
          - generic [ref=e709]:
            - heading [level=2] [ref=e710]: Categorías destacadas
            - generic [ref=e712]:
              - link [ref=e716] [cursor=pointer]:
                - /url: /category/frutas-y-verduras
                - paragraph [ref=e720]: Orgánico
              - link [ref=e724] [cursor=pointer]:
                - /url: /category/congelados
                - paragraph [ref=e728]: Comida en casa
              - link [ref=e732] [cursor=pointer]:
                - /url: /category/panaderia-y-pasteleria
                - paragraph [ref=e736]: Panadería
              - link [ref=e740] [cursor=pointer]:
                - /url: /category/panaderia-y-pasteleria
                - paragraph [ref=e744]: Pastelería
              - link [ref=e748] [cursor=pointer]:
                - /url: /category/bebidas-y-licores
                - paragraph [ref=e752]: Celebraciones
              - link [ref=e756] [cursor=pointer]:
                - /url: /category/limpieza
                - paragraph [ref=e760]: Higiene personal
              - link [ref=e764] [cursor=pointer]:
                - /url: /category/limpieza
                - paragraph [ref=e768]: Limpieza
          - generic [ref=e771]:
            - generic [ref=e772]:
              - generic [ref=e773]:
                - heading [level=3] [ref=e774]: Cada día, una ocasión
                - link [ref=e775] [cursor=pointer]:
                  - /url: /search?q=ofertas
                  - text: Mostrar todo
              - paragraph [ref=e776]: Encuentra aquí todo lo que necesitas y más
            - generic [ref=e777]:
              - generic [ref=e779]:
                - link [ref=e783] [cursor=pointer]:
                  - /url: /category/carnes
                  - paragraph [ref=e789]: Asaíto
                - link [ref=e793] [cursor=pointer]:
                  - /url: /category/despensa
                  - paragraph [ref=e799]: Picoteo
                - link [ref=e803] [cursor=pointer]:
                  - /url: /category/frutas-y-verduras
                  - paragraph [ref=e809]: Orgánico
                - link [ref=e813] [cursor=pointer]:
                  - /url: /category/desayuno-y-dulces
                  - paragraph [ref=e819]: Colaciones
              - button [disabled] [ref=e822] [cursor=pointer]
              - button [ref=e825] [cursor=pointer]
          - generic [ref=e832]:
            - generic [ref=e834]:
              - generic [ref=e835]:
                - heading [level=3] [ref=e836]: Frescura y calidad
                - link [ref=e837] [cursor=pointer]:
                  - /url: /category/frutas-y-verduras
                  - text: Mostrar todo
              - paragraph [ref=e838]: Frutas y verduras
            - generic [ref=e839]:
              - link [ref=e840] [cursor=pointer]:
                - /url: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/frutas-y-verduras_frutas
                - paragraph [ref=e844]: OFERTA
                - generic:
                  - generic:
                    - paragraph: Mecadito Unimarc
                    - generic:
                      - paragraph: "40"
                      - generic:
                        - paragraph: "%"
                        - paragraph: dcto
              - generic [ref=e846]:
                - generic [ref=e848]:
                  - generic [ref=e850]:
                    - generic [ref=e851]:
                      - link [ref=e852] [cursor=pointer]:
                        - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                      - button [ref=e854] [cursor=pointer]
                    - generic [ref=e857]:
                      - paragraph [ref=e860]: $1.290
                      - generic [ref=e861]:
                        - link [ref=e862] [cursor=pointer]:
                          - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                          - text: Agua saborizada Más manzana 1.6 L
                        - generic [ref=e863]: 1.6 l
                    - button [ref=e866] [cursor=pointer]: Agregar
                  - generic [ref=e868]:
                    - generic [ref=e869]:
                      - link [ref=e870] [cursor=pointer]:
                        - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                      - button [ref=e872] [cursor=pointer]
                    - generic [ref=e875]:
                      - generic [ref=e877]:
                        - paragraph [ref=e878]: $2.550
                        - paragraph [ref=e879]: ($1.275 x unidad)
                      - generic [ref=e880]:
                        - link [ref=e881] [cursor=pointer]:
                          - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                          - generic [ref=e882]: Frutas y Verduras | Choclo bandeja 2 un
                        - generic [ref=e883]: 2 un
                    - button [ref=e886] [cursor=pointer]: Agregar
                  - generic [ref=e888]:
                    - generic [ref=e889]:
                      - link [ref=e890] [cursor=pointer]:
                        - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                      - button [ref=e892] [cursor=pointer]
                    - link [ref=e897] [cursor=pointer]:
                      - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                      - generic [ref=e898]: Proverde | Choclo cocida Proverde bolsa …
                    - button [ref=e900] [cursor=pointer]: Agregar
                  - generic [ref=e902]:
                    - generic [ref=e903]:
                      - link [ref=e904] [cursor=pointer]:
                        - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                      - button [ref=e906] [cursor=pointer]
                    - generic [ref=e909]:
                      - paragraph [ref=e912]: $2.490
                      - generic [ref=e913]:
                        - link [ref=e914] [cursor=pointer]:
                          - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                          - generic [ref=e915]: Frutas y Verduras | Clementina malla 1 K…
                        - generic [ref=e916]: 1 kg
                    - button [ref=e919] [cursor=pointer]: Agregar
                  - generic [ref=e921]:
                    - generic [ref=e922]:
                      - link [ref=e923] [cursor=pointer]:
                        - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                      - button [ref=e925] [cursor=pointer]
                    - generic [ref=e928]:
                      - paragraph [ref=e931]: $1.999
                      - generic [ref=e932]:
                        - link [ref=e933] [cursor=pointer]:
                          - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                          - generic [ref=e934]: Frutas y Verduras | Clementina malla 1 K…
                        - generic [ref=e935]: 1 kg
                    - button [ref=e938] [cursor=pointer]: Agregar
                  - generic [ref=e940]:
                    - generic [ref=e941]:
                      - link [ref=e942] [cursor=pointer]:
                        - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                      - button [ref=e944] [cursor=pointer]
                    - generic [ref=e947]:
                      - generic [ref=e949]:
                        - paragraph [ref=e950]: $1.375
                        - paragraph [ref=e951]: ($2.750 x kg)
                      - generic [ref=e952]:
                        - link [ref=e953] [cursor=pointer]:
                          - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                          - generic [ref=e954]: Frutas y Verduras | Clementinas granel 5…
                        - generic [ref=e955]: 500 g
                    - button [ref=e958] [cursor=pointer]: Agregar
                  - generic [ref=e960]:
                    - generic [ref=e961]:
                      - link [ref=e962] [cursor=pointer]:
                        - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                      - button [ref=e964] [cursor=pointer]
                    - generic [ref=e967]:
                      - generic [ref=e969]:
                        - paragraph [ref=e970]: $1.999
                        - paragraph [ref=e971]: ($3.998 x kg)
                      - generic [ref=e972]:
                        - link [ref=e973] [cursor=pointer]:
                          - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                          - generic [ref=e974]: Frutas y Verduras | Clementinas granel 5…
                        - generic [ref=e975]: 500 g
                    - button [ref=e978] [cursor=pointer]: Agregar
                  - generic [ref=e980]:
                    - generic [ref=e981]:
                      - link [ref=e982] [cursor=pointer]:
                        - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                      - generic [ref=e984]: Promoción % Unipay
                      - button [ref=e985] [cursor=pointer]
                    - generic [ref=e988]:
                      - generic [ref=e989]:
                        - generic [ref=e991]:
                          - generic [aria-hidden] [ref=e992]: 💎
                          - paragraph [ref=e993]: $2.601
                        - generic [ref=e994]:
                          - generic [ref=e995]: 10%
                          - paragraph [ref=e996]: $2.601
                        - paragraph [ref=e997]: "Antes: $2.890"
                      - generic [ref=e998]:
                        - link [ref=e999] [cursor=pointer]:
                          - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                          - generic [ref=e1000]: Frutas y Verduras | Kiwi bolsa 1 Kg
                        - generic [ref=e1001]: 1 kg
                    - button [ref=e1004] [cursor=pointer]: Agregar
                - button [ref=e1007] [cursor=pointer]
                - button [ref=e1010] [cursor=pointer]
          - generic [ref=e1016]:
            - generic [ref=e1017]:
              - generic [ref=e1018]:
                - heading [level=3] [ref=e1019]: Prende la parrilla
                - link [ref=e1020] [cursor=pointer]:
                  - /url: /search?q=parrilla
                  - text: Mostrar todo
              - paragraph [ref=e1021]: Disfruta de un rico Asaito
            - generic [ref=e1023]:
              - link [ref=e1028] [cursor=pointer]:
                - /url: /search?q=parrilla
              - link [ref=e1035] [cursor=pointer]:
                - /url: /category/carnes
              - link [ref=e1042] [cursor=pointer]:
                - /url: /search?q=guarniciones
              - link [ref=e1049] [cursor=pointer]:
                - /url: /category/carnes
              - link [ref=e1056] [cursor=pointer]:
                - /url: /search?q=picoteo
          - generic [ref=e1063]:
            - generic [ref=e1065]:
              - generic [ref=e1066]:
                - heading [level=3] [ref=e1067]: Chocolates Milka
                - link [ref=e1068] [cursor=pointer]:
                  - /url: /category/panaderia-y-pasteleria
                  - text: Mostrar todo
              - paragraph [ref=e1069]: Endulza tu día
            - generic [ref=e1070]:
              - link [ref=e1071] [cursor=pointer]:
                - /url: /category/panaderia-y-pasteleria
                - paragraph [ref=e1074]: 40% dcto
                - generic:
                  - generic:
                    - paragraph: Chocolates Milka Variedades
                    - generic:
                      - paragraph: "40"
                      - generic:
                        - paragraph: "%"
                        - paragraph: dcto
              - generic [ref=e1076]:
                - generic [ref=e1078]:
                  - generic [ref=e1080]:
                    - generic [ref=e1081]:
                      - link [ref=e1082] [cursor=pointer]:
                        - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                      - button [ref=e1084] [cursor=pointer]
                    - generic [ref=e1087]:
                      - paragraph [ref=e1090]: $1.180
                      - generic [ref=e1091]:
                        - link [ref=e1092] [cursor=pointer]:
                          - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                          - text: Galleta Alteza bocado 140 g
                        - generic [ref=e1093]: 140 g
                    - button [ref=e1096] [cursor=pointer]: Agregar
                  - generic [ref=e1098]:
                    - generic [ref=e1099]:
                      - link [ref=e1100] [cursor=pointer]:
                        - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                      - button [ref=e1102] [cursor=pointer]
                    - generic [ref=e1105]:
                      - paragraph [ref=e1108]: $280
                      - generic [ref=e1109]:
                        - link [ref=e1110] [cursor=pointer]:
                          - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                          - text: Galleta mini Dos en Uno chocolate 35 g
                        - generic [ref=e1111]: 35 g
                    - button [ref=e1114] [cursor=pointer]: Agregar
                  - generic [ref=e1116]:
                    - generic [ref=e1117]:
                      - link [ref=e1118] [cursor=pointer]:
                        - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                      - button [ref=e1120] [cursor=pointer]
                    - generic [ref=e1123]:
                      - generic [ref=e1124]:
                        - generic [ref=e1125]:
                          - generic [ref=e1126]: Unipay $757
                          - paragraph [ref=e1127]: ($6.882 x kg)
                        - generic [ref=e1128]:
                          - paragraph [ref=e1129]: $890
                          - paragraph [ref=e1130]: ($8.091 x kg)
                      - generic [ref=e1131]:
                        - link [ref=e1132] [cursor=pointer]:
                          - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                          - generic [ref=e1133]: Oreo | Galleta Oreo clásica vainilla 108…
                        - generic [ref=e1134]: 108 g
                    - button [ref=e1137] [cursor=pointer]: Agregar
                  - generic [ref=e1139]:
                    - generic [ref=e1140]:
                      - link [ref=e1141] [cursor=pointer]:
                        - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                      - button [ref=e1143] [cursor=pointer]
                    - generic [ref=e1146]:
                      - paragraph [ref=e1149]: $4.990
                      - generic [ref=e1150]:
                        - link [ref=e1151] [cursor=pointer]:
                          - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                          - generic [ref=e1152]: Galletas con mermelada La Galleteria 300…
                        - generic [ref=e1153]: 300 g
                    - button [ref=e1156] [cursor=pointer]: Agregar
                  - generic [ref=e1158]:
                    - generic [ref=e1159]:
                      - link [ref=e1160] [cursor=pointer]:
                        - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                      - button [ref=e1162] [cursor=pointer]
                    - generic [ref=e1165]:
                      - generic [ref=e1167]:
                        - paragraph [ref=e1168]: $1.290
                        - paragraph [ref=e1169]: ($4.607 x kg)
                      - generic [ref=e1170]:
                        - link [ref=e1171] [cursor=pointer]:
                          - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                          - generic [ref=e1172]: Europastry | Pan baguette plus Crandon 1…
                        - generic [ref=e1173]: 1 un
                    - button [ref=e1176] [cursor=pointer]: Agregar
                  - generic [ref=e1178]:
                    - generic [ref=e1179]:
                      - link [ref=e1180] [cursor=pointer]:
                        - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                      - button [ref=e1182] [cursor=pointer]
                    - generic [ref=e1185]:
                      - generic [ref=e1187]:
                        - paragraph [ref=e1188]: $1.495
                        - paragraph [ref=e1189]: ($2.990 x kg)
                      - generic [ref=e1190]:
                        - link [ref=e1191] [cursor=pointer]:
                          - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                          - generic [ref=e1192]: Amada Masa | Pan ciabatta granel Amada M…
                        - generic [ref=e1193]: 500 g
                    - button [ref=e1196] [cursor=pointer]: Agregar
                  - generic [ref=e1198]:
                    - generic [ref=e1199]:
                      - link [ref=e1200] [cursor=pointer]:
                        - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                      - button [ref=e1202] [cursor=pointer]
                    - generic [ref=e1205]:
                      - generic [ref=e1207]:
                        - paragraph [ref=e1208]: $2.990
                        - paragraph [ref=e1209]: ($5.980 x kg)
                      - generic [ref=e1210]:
                        - link [ref=e1211] [cursor=pointer]:
                          - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                          - generic [ref=e1212]: Amada Masa | Pan hot dog granel Amada Ma…
                        - generic [ref=e1213]: 500 g
                    - button [ref=e1216] [cursor=pointer]: Agregar
                  - generic [ref=e1218]:
                    - generic [ref=e1219]:
                      - link [ref=e1220] [cursor=pointer]:
                        - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                      - button [ref=e1222] [cursor=pointer]
                    - generic [ref=e1225]:
                      - paragraph [ref=e1228]: $1.095
                      - generic [ref=e1229]:
                        - link [ref=e1230] [cursor=pointer]:
                          - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                          - text: Pan marraqueta granel Amada Masa 500 g
                        - generic [ref=e1231]: 500 g
                    - button [ref=e1234] [cursor=pointer]: Agregar
                - button [ref=e1237] [cursor=pointer]
                - button [ref=e1240] [cursor=pointer]
        - link [ref=e1250] [cursor=pointer]:
          - /url: /search?q=despensa
        - generic [ref=e1256]:
          - generic [ref=e1257]:
            - heading [level=2] [ref=e1258]: Nuestras marcas
            - link [ref=e1259] [cursor=pointer]:
              - /url: /category/panaderia-y-pasteleria
              - text: Mostrar todo
          - generic [ref=e1260]:
            - tab [selected] [ref=e1261] [cursor=pointer]: Amada masa
            - tab [ref=e1262] [cursor=pointer]: Azul
            - tab [ref=e1263] [cursor=pointer]: Como en casa
            - tab [ref=e1264] [cursor=pointer]: D-kora
            - tab [ref=e1265] [cursor=pointer]: Fundo Río al
            - tab [ref=e1266] [cursor=pointer]: Nubelín
            - tab [ref=e1267] [cursor=pointer]: Nuestra coci
            - tab [ref=e1268] [cursor=pointer]: Smart Clean
            - tab [ref=e1269] [cursor=pointer]: Tento
          - generic [ref=e1272]:
            - generic [ref=e1274]:
              - generic [ref=e1276]:
                - generic [ref=e1277]:
                  - link [ref=e1278] [cursor=pointer]:
                    - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                  - button [ref=e1280] [cursor=pointer]
                - generic [ref=e1283]:
                  - paragraph [ref=e1286]: $1.180
                  - generic [ref=e1287]:
                    - link [ref=e1288] [cursor=pointer]:
                      - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                      - text: Galleta Alteza bocado 140 g
                    - generic [ref=e1289]: 140 g
                - button [ref=e1292] [cursor=pointer]: Agregar
              - generic [ref=e1294]:
                - generic [ref=e1295]:
                  - link [ref=e1296] [cursor=pointer]:
                    - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                  - button [ref=e1298] [cursor=pointer]
                - generic [ref=e1301]:
                  - paragraph [ref=e1304]: $280
                  - generic [ref=e1305]:
                    - link [ref=e1306] [cursor=pointer]:
                      - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                      - text: Galleta mini Dos en Uno chocolate 35 g
                    - generic [ref=e1307]: 35 g
                - button [ref=e1310] [cursor=pointer]: Agregar
              - generic [ref=e1312]:
                - generic [ref=e1313]:
                  - link [ref=e1314] [cursor=pointer]:
                    - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                  - button [ref=e1316] [cursor=pointer]
                - generic [ref=e1319]:
                  - generic [ref=e1320]:
                    - generic [ref=e1321]:
                      - generic [ref=e1322]: Unipay $757
                      - paragraph [ref=e1323]: ($6.882 x kg)
                    - generic [ref=e1324]:
                      - paragraph [ref=e1325]: $890
                      - paragraph [ref=e1326]: ($8.091 x kg)
                  - generic [ref=e1327]:
                    - link [ref=e1328] [cursor=pointer]:
                      - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                      - generic [ref=e1329]: Oreo | Galleta Oreo clásica vainilla 108…
                    - generic [ref=e1330]: 108 g
                - button [ref=e1333] [cursor=pointer]: Agregar
              - generic [ref=e1335]:
                - generic [ref=e1336]:
                  - link [ref=e1337] [cursor=pointer]:
                    - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                  - button [ref=e1339] [cursor=pointer]
                - generic [ref=e1342]:
                  - paragraph [ref=e1345]: $4.990
                  - generic [ref=e1346]:
                    - link [ref=e1347] [cursor=pointer]:
                      - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                      - generic [ref=e1348]: Galletas con mermelada La Galleteria 300…
                    - generic [ref=e1349]: 300 g
                - button [ref=e1352] [cursor=pointer]: Agregar
              - generic [ref=e1354]:
                - generic [ref=e1355]:
                  - link [ref=e1356] [cursor=pointer]:
                    - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                  - button [ref=e1358] [cursor=pointer]
                - generic [ref=e1361]:
                  - generic [ref=e1363]:
                    - paragraph [ref=e1364]: $1.290
                    - paragraph [ref=e1365]: ($4.607 x kg)
                  - generic [ref=e1366]:
                    - link [ref=e1367] [cursor=pointer]:
                      - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                      - generic [ref=e1368]: Europastry | Pan baguette plus Crandon 1…
                    - generic [ref=e1369]: 1 un
                - button [ref=e1372] [cursor=pointer]: Agregar
              - generic [ref=e1374]:
                - generic [ref=e1375]:
                  - link [ref=e1376] [cursor=pointer]:
                    - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                  - button [ref=e1378] [cursor=pointer]
                - generic [ref=e1381]:
                  - generic [ref=e1383]:
                    - paragraph [ref=e1384]: $1.495
                    - paragraph [ref=e1385]: ($2.990 x kg)
                  - generic [ref=e1386]:
                    - link [ref=e1387] [cursor=pointer]:
                      - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                      - generic [ref=e1388]: Amada Masa | Pan ciabatta granel Amada M…
                    - generic [ref=e1389]: 500 g
                - button [ref=e1392] [cursor=pointer]: Agregar
              - generic [ref=e1394]:
                - generic [ref=e1395]:
                  - link [ref=e1396] [cursor=pointer]:
                    - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                  - button [ref=e1398] [cursor=pointer]
                - generic [ref=e1401]:
                  - generic [ref=e1403]:
                    - paragraph [ref=e1404]: $2.990
                    - paragraph [ref=e1405]: ($5.980 x kg)
                  - generic [ref=e1406]:
                    - link [ref=e1407] [cursor=pointer]:
                      - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                      - generic [ref=e1408]: Amada Masa | Pan hot dog granel Amada Ma…
                    - generic [ref=e1409]: 500 g
                - button [ref=e1412] [cursor=pointer]: Agregar
              - generic [ref=e1414]:
                - generic [ref=e1415]:
                  - link [ref=e1416] [cursor=pointer]:
                    - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                  - button [ref=e1418] [cursor=pointer]
                - generic [ref=e1421]:
                  - paragraph [ref=e1424]: $1.095
                  - generic [ref=e1425]:
                    - link [ref=e1426] [cursor=pointer]:
                      - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                      - text: Pan marraqueta granel Amada Masa 500 g
                    - generic [ref=e1427]: 500 g
                - button [ref=e1430] [cursor=pointer]: Agregar
              - generic [ref=e1432]:
                - generic [ref=e1433]:
                  - link [ref=e1434] [cursor=pointer]:
                    - /url: /pan-marraqueta-prosepan-500-g/000000000000030202-KG.html
                  - button [ref=e1436] [cursor=pointer]
                - generic [ref=e1439]:
                  - generic [ref=e1441]:
                    - paragraph [ref=e1442]: $1.095
                    - paragraph [ref=e1443]: ($2.190 x kg)
                  - generic [ref=e1444]:
                    - link [ref=e1445] [cursor=pointer]:
                      - /url: /pan-marraqueta-prosepan-500-g/000000000000030202-KG.html
                      - text: Pan marraqueta Prosepan 500 g
                    - generic [ref=e1446]: 500 g
                - button [ref=e1449] [cursor=pointer]: Agregar
              - generic [ref=e1451]:
                - generic [ref=e1452]:
                  - link [ref=e1453] [cursor=pointer]:
                    - /url: /pan-pita-integral-granel-amada-masa-500-g/000000000000614468-KG.html
                  - button [ref=e1455] [cursor=pointer]
                - generic [ref=e1458]:
                  - paragraph [ref=e1461]: $2.890
                  - generic [ref=e1462]:
                    - link [ref=e1463] [cursor=pointer]:
                      - /url: /pan-pita-integral-granel-amada-masa-500-g/000000000000614468-KG.html
                      - generic [ref=e1464]: Pan pita integral granel Amada Masa 500 …
                    - generic [ref=e1465]: 500 g
                - button [ref=e1468] [cursor=pointer]: Agregar
            - button [ref=e1471] [cursor=pointer]
            - button [ref=e1474] [cursor=pointer]
        - generic [ref=e1484]:
          - generic [ref=e1486]:
            - generic [ref=e1487]:
              - heading [level=3] [ref=e1488]: Especial Bebidas
              - link [ref=e1489] [cursor=pointer]:
                - /url: /category/bebidas-y-licores
                - text: Mostrar todo
            - paragraph [ref=e1490]: Bebidas vegetales y más
          - generic [ref=e1491]:
            - link [ref=e1492] [cursor=pointer]:
              - /url: /category/bebidas-y-licores
              - generic:
                - generic:
                  - paragraph: Productos Not Variedades
                  - generic:
                    - paragraph: "30"
                    - generic:
                      - paragraph: "%"
                      - paragraph: dcto
            - generic [ref=e1496]:
              - generic [ref=e1498]:
                - generic [ref=e1500]:
                  - generic [ref=e1501]:
                    - link [ref=e1502] [cursor=pointer]:
                      - /url: /cerveza-austral-lager-lata-470-cc/000000000000694333-UN.html
                    - button [ref=e1504] [cursor=pointer]
                  - generic [ref=e1507]:
                    - generic [ref=e1509]:
                      - paragraph [ref=e1510]: $2.090
                      - paragraph [ref=e1511]: ($4.447 x L)
                    - generic [ref=e1512]:
                      - link [ref=e1513] [cursor=pointer]:
                        - /url: /cerveza-austral-lager-lata-470-cc/000000000000694333-UN.html
                        - generic [ref=e1514]: Austral | Cerveza Austral lager lata 470…
                      - generic [ref=e1515]: 470 cc
                  - button [ref=e1518] [cursor=pointer]: Agregar
                - generic [ref=e1520]:
                  - generic [ref=e1521]:
                    - link [ref=e1522] [cursor=pointer]:
                      - /url: /cerveza-budweiser-zero-botella-6-un-de-330-cc/000000000000663675-UN.html
                    - button [ref=e1524] [cursor=pointer]
                  - generic [ref=e1527]:
                    - generic [ref=e1529]:
                      - paragraph [ref=e1530]: $7.790
                      - paragraph [ref=e1531]: ($23.606 x L)
                    - generic [ref=e1532]:
                      - link [ref=e1533] [cursor=pointer]:
                        - /url: /cerveza-budweiser-zero-botella-6-un-de-330-cc/000000000000663675-UN.html
                        - generic [ref=e1534]: Budweiser | Cerveza Budweiser zero botel…
                      - generic [ref=e1535]: 6 un
                  - button [ref=e1538] [cursor=pointer]: Agregar
                - generic [ref=e1540]:
                  - generic [ref=e1541]:
                    - link [ref=e1542] [cursor=pointer]:
                      - /url: /cerveza-corona-extra-lata-6-un-de-473-cc/000000000000686446-UN.html
                    - button [ref=e1544] [cursor=pointer]
                  - generic [ref=e1547]:
                    - generic [ref=e1549]:
                      - paragraph [ref=e1550]: $6.890
                      - paragraph [ref=e1551]: ($14.567 x L)
                    - generic [ref=e1552]:
                      - link [ref=e1553] [cursor=pointer]:
                        - /url: /cerveza-corona-extra-lata-6-un-de-473-cc/000000000000686446-UN.html
                        - generic [ref=e1554]: Corona | Cerveza Corona extra lata 6 un …
                      - generic [ref=e1555]: 6 un
                  - button [ref=e1558] [cursor=pointer]: Agregar
                - generic [ref=e1560]:
                  - generic [ref=e1561]:
                    - link [ref=e1562] [cursor=pointer]:
                      - /url: /cerveza-cristal-lager-botella-650-cc/000000000000686452-UN.html
                    - button [ref=e1564] [cursor=pointer]
                  - generic [ref=e1567]:
                    - generic [ref=e1569]:
                      - paragraph [ref=e1570]: $1.350
                      - paragraph [ref=e1571]: ($2.077 x L)
                    - generic [ref=e1572]:
                      - link [ref=e1573] [cursor=pointer]:
                        - /url: /cerveza-cristal-lager-botella-650-cc/000000000000686452-UN.html
                        - generic [ref=e1574]: Cristal Cerveza | Cerveza Cristal lager …
                      - generic [ref=e1575]: 650 cc
                  - button [ref=e1578] [cursor=pointer]: Agregar
                - generic [ref=e1580]:
                  - generic [ref=e1581]:
                    - link [ref=e1582] [cursor=pointer]:
                      - /url: /cerveza-duvel-moorgat-botella-330-cc/000000000000536215-UN.html
                    - button [ref=e1584] [cursor=pointer]
                  - generic [ref=e1587]:
                    - paragraph [ref=e1590]: $3.550
                    - generic [ref=e1591]:
                      - link [ref=e1592] [cursor=pointer]:
                        - /url: /cerveza-duvel-moorgat-botella-330-cc/000000000000536215-UN.html
                        - text: Cerveza Duvel moorgat botella 330 cc
                      - generic [ref=e1593]: 330 cc
                  - button [ref=e1596] [cursor=pointer]: Agregar
                - generic [ref=e1598]:
                  - generic [ref=e1599]:
                    - link [ref=e1600] [cursor=pointer]:
                      - /url: /cerveza-royal-golden-lager-lata-6-un-de-470-cc/000000000000674841-DIS.html
                    - button [ref=e1602] [cursor=pointer]
                  - generic [ref=e1605]:
                    - generic [ref=e1607]:
                      - paragraph [ref=e1608]: $7.290
                      - paragraph [ref=e1609]: ($15.511 x L)
                    - generic [ref=e1610]:
                      - link [ref=e1611] [cursor=pointer]:
                        - /url: /cerveza-royal-golden-lager-lata-6-un-de-470-cc/000000000000674841-DIS.html
                        - generic [ref=e1612]: Royal Guard | Cerveza Royal golden lager…
                      - generic [ref=e1613]: 6 un
                  - button [ref=e1616] [cursor=pointer]: Agregar
                - generic [ref=e1618]:
                  - generic [ref=e1619]:
                    - link [ref=e1620] [cursor=pointer]:
                      - /url: /cerveza-sabor-sandia-stones-350ml/000000000000689879-UN.html
                    - button [ref=e1622] [cursor=pointer]
                  - generic [ref=e1625]:
                    - generic [ref=e1627]:
                      - paragraph [ref=e1628]: $6.590
                      - paragraph [ref=e1629]: ($18.829 x L)
                    - generic [ref=e1630]:
                      - link [ref=e1631] [cursor=pointer]:
                        - /url: /cerveza-sabor-sandia-stones-350ml/000000000000689879-UN.html
                        - generic [ref=e1632]: Stones | Cerveza sabor sandía Stones 350…
                      - generic [ref=e1633]: 350 ml
                  - button [ref=e1636] [cursor=pointer]: Agregar
                - generic [ref=e1638]:
                  - generic [ref=e1639]:
                    - link [ref=e1640] [cursor=pointer]:
                      - /url: /cerveza-stones-berries-lata-6-un-de-350-ml/000000000000671971-UN.html
                    - button [ref=e1642] [cursor=pointer]
                  - generic [ref=e1645]:
                    - generic [ref=e1647]:
                      - paragraph [ref=e1648]: $6.590
                      - paragraph [ref=e1649]: ($18.829 x L)
                    - generic [ref=e1650]:
                      - link [ref=e1651] [cursor=pointer]:
                        - /url: /cerveza-stones-berries-lata-6-un-de-350-ml/000000000000671971-UN.html
                        - generic [ref=e1652]: Stones | Cerveza Stones berries lata 6 u…
                      - generic [ref=e1653]: 6 un
                  - button [ref=e1656] [cursor=pointer]: Agregar
              - button [ref=e1659] [cursor=pointer]
              - button [ref=e1662] [cursor=pointer]
        - generic [ref=e1669]:
          - generic [ref=e1670]:
            - paragraph [ref=e1671]: Contrata la membresía
            - paragraph [ref=e1672]: Obtén despachos gratis y ilimitados por compras sobre $20.000 y descuentos exclusivos
            - link [ref=e1673] [cursor=pointer]:
              - /url: /membresia
              - text: Comienza tus 15 días gratis
          - button [ref=e1676] [cursor=pointer]
        - generic [ref=e1683]:
          - generic [ref=e1684]:
            - heading [level=2] [ref=e1685]: TÉRMINOS Y CONDICIONES UNIMARC
            - paragraph [ref=e1686]: El acceso y uso del sitio web www.unimarc.cl y de la aplicación móvil Unimarc (ambos indistintamente “Unimarc.cl”) por u
          - generic [ref=e1687]:
            - generic [ref=e1688]:
              - button [expanded] [ref=e1689] [cursor=pointer]:
                - generic [ref=e1692]: 1. Registro del Cliente
              - region [ref=e1693]:
                - paragraph [ref=e1695]: Será requisito para la adquisición de productos y servicios ofrecidos en Unimarc.cl, estar registrado en éste, ser mayor de 18 años, y al momento de la compra aceptar estos T&C y su Política de Privacidad. El acceso y registro será gratuito.
            - button [ref=e1697] [cursor=pointer]:
              - generic [ref=e1701]: 2. Clave de acceso secreta
            - button [ref=e1703] [cursor=pointer]:
              - generic [ref=e1707]: 3. Derechos del Cliente
            - button [ref=e1709] [cursor=pointer]:
              - generic [ref=e1713]: 4. Procedimiento para hacer uso de Unima
    - contentinfo [aria-hidden] [ref=e1714]:
      - generic [ref=e1715]:
        - generic [ref=e1716]:
          - generic [ref=e1717]:
            - link [ref=e1718] [cursor=pointer]:
              - /url: /centro-de-ayuda
              - generic [ref=e1725]:
                - paragraph [ref=e1726]: Centro de ayuda
                - paragraph [ref=e1727]: Aquí encontrarás preguntas frecuentes y mucho más
            - link [ref=e1728] [cursor=pointer]:
              - /url: /seguimiento-de-compra
              - generic [ref=e1734]:
                - paragraph [ref=e1735]: Seguimiento de compra
                - paragraph [ref=e1736]: Revisa el estado y detalle de tu compra
            - link [ref=e1737] [cursor=pointer]:
              - /url: https://wa.me/56958701477
              - generic [ref=e1743]:
                - paragraph [ref=e1744]: Whatsapp clientes
                - paragraph [ref=e1745]: Escríbenos de 9:00 a 20:00 horas
          - generic [ref=e1746]:
            - generic [ref=e1747]:
              - button [ref=e1748] [cursor=pointer]:
                - paragraph [ref=e1751]: Contáctanos
              - generic [ref=e1753]:
                - generic [ref=e1754]:
                  - paragraph [ref=e1755]: Unimarc - Servicio al cliente
                  - link [ref=e1760] [cursor=pointer]:
                    - /url: tel:6006000025
                    - text: 600 600 0025
                  - paragraph [ref=e1761]: Llámanos de 9:00 a 20:00 horas
                - generic [ref=e1762]:
                  - paragraph [ref=e1763]: Compras online
                  - link [ref=e1771] [cursor=pointer]:
                    - /url: /contacto/compras-online
                    - text: Crea una solicitud
                  - link [ref=e1777] [cursor=pointer]:
                    - /url: mailto:despachosunimarc@unimarc.cl
                    - text: despachosunimarc@unimarc.cl
                - generic [ref=e1778]:
                  - paragraph [ref=e1779]: Tarjeta Unipay - Servicio al cliente
                  - link [ref=e1784] [cursor=pointer]:
                    - /url: tel:6003909000
                    - text: 600 390 9000
                  - paragraph [ref=e1785]: Llámanos de 9:00 a 20:00 horas
                - generic [ref=e1786]:
                  - paragraph [ref=e1787]: Compras en tienda
                  - link [ref=e1795] [cursor=pointer]:
                    - /url: /contacto/compras-tienda
                    - text: Crea una solicitud
                  - link [ref=e1801] [cursor=pointer]:
                    - /url: mailto:contacto.unimarc@unimarc.cl
                    - text: contacto.unimarc@unimarc.cl
            - button [ref=e1803] [cursor=pointer]:
              - paragraph [ref=e1807]: Servicio al cliente
            - button [ref=e1809] [cursor=pointer]:
              - paragraph [ref=e1813]: Nuestros programas
            - button [ref=e1815] [cursor=pointer]:
              - paragraph [ref=e1819]: Nuestra empresa
        - separator [ref=e1820]
        - generic [ref=e1821]:
          - list [ref=e1823]:
            - listitem [ref=e1824]:
              - link [ref=e1825] [cursor=pointer]:
                - /url: /legales/cookies
                - text: Políticas de Cookies
          - generic [ref=e1826]:
            - paragraph [ref=e1827]: Síguenos
            - generic [ref=e1828]:
              - link [ref=e1829] [cursor=pointer]:
                - /url: https://www.facebook.com/unimarc
              - link [ref=e1832] [cursor=pointer]:
                - /url: https://www.instagram.com/unimarc
              - link [ref=e1837] [cursor=pointer]:
                - /url: https://x.com/unimarc
              - link [ref=e1840] [cursor=pointer]:
                - /url: https://www.youtube.com/unimarc
  - generic:
    - region
    - region
    - region
    - region
    - region
    - region
  - dialog [ref=e1845]:
    - button "Cerrar" [ref=e1846] [cursor=pointer]
    - banner [ref=e1849]: Elige tu método de entrega
    - generic [ref=e1850]:
      - generic [ref=e1851]:
        - button "Despacho a domicilio" [pressed] [ref=e1852] [cursor=pointer]
        - button "Retiro en tienda" [ref=e1859] [cursor=pointer]
      - paragraph [ref=e1866]: Calle, dirección o lugar
      - generic [ref=e1867]:
        - 'textbox "Ej: Av. Manquehue norte 457, Las condes" [active] [ref=e1869]': Las Condes
        - button "Activar mi ubicación actual" [ref=e1870] [cursor=pointer]
        - listbox [ref=e1876]:
          - option [ref=e1877] [cursor=pointer]:
            - generic [ref=e1883]:
              - paragraph [ref=e1884]: Las Condesas
              - paragraph [ref=e1885]: Las Condes
          - option [ref=e1886] [cursor=pointer]:
            - generic [ref=e1892]:
              - paragraph [ref=e1893]: Las Condes
              - paragraph [ref=e1894]: Chiguayante
          - option [ref=e1895] [cursor=pointer]:
            - generic [ref=e1901]:
              - paragraph [ref=e1902]: Las Condes
              - paragraph [ref=e1903]: Antofagasta
          - option [ref=e1904] [cursor=pointer]:
            - generic [ref=e1910]:
              - paragraph [ref=e1911]: Las Condes
              - paragraph [ref=e1912]: San Bernardo
          - option [ref=e1913] [cursor=pointer]:
            - generic [ref=e1919]:
              - paragraph [ref=e1920]: Las Condes
              - paragraph [ref=e1921]: Paredones
      - generic [ref=e1923]:
        - paragraph [ref=e1924]: Aún no tienes direcciones guardadas
        - paragraph [ref=e1925]: Para armar tu carro, ingresa una dirección y te mostraremos los productos disponibles para esa ubicación.
    - contentinfo [ref=e1926]:
      - generic [ref=e1927]:
        - paragraph [ref=e1932]: ¿No aparece tu dirección?
        - button "Agregar" [ref=e1933] [cursor=pointer]
```

# Test source

```ts
  1021 |     let modal = await new MetodoEntregaModal(page).esperarAbierto();
  1022 |     await expect(modal.bloqueDireccionDespacho).toBeVisible();
  1023 |     await expect(modal.direccionActiva).toContainText(new RegExp(escapar(partes(direccion).calle), 'i'));
  1024 |     await capturarEvidencia(page, cp, 4, 'dirección activa del invitado');
  1025 | 
  1026 |     await modal.botonCerrar.click();
  1027 |     await loginConOtp(page, testData);
  1028 |     const homeLogueado = await new PaginaHabilitada(page).goto();
  1029 |     await homeLogueado.header.storeLocator.click();
  1030 |     modal = new MetodoEntregaModal(page);
  1031 |     await modal.esperarAbierto();
  1032 |     await expect(modal.tituloDireccionesGuardadas).toBeVisible({ timeout: 30000 });
  1033 |     await expect(modal.campoBusqueda).toBeVisible();
  1034 |     await expect(modal.botonUbicacionActual).toBeVisible();
  1035 |     expect(await modal.direccionesGuardadas()).not.toHaveLength(0);
  1036 |     await capturarEvidencia(page, cp, 8, 'dirección activa y métodos del usuario logueado');
  1037 |   });
  1038 | 
  1039 |   test('TC-B2C26-D-007 · Denegar ubicación vuelve al modal y concederla lleva a B2C-99 [Desktop] (Desktop)', async ({ page, testData }) => {
  1040 |     const cp = 'TC-B2C26-D-007';
  1041 |     const origen = token(testData, 'BASE_URL')!.replace(/\/+$/, '');
  1042 |     await page.context().grantPermissions([], { origin: origen });
  1043 |     const { modal } = await abrirModal(page);
  1044 |     await modal.capturarModal(cp, 4, 'modal de entrega antes del permiso');
  1045 |     await modal.tocarUbicacionActual();
  1046 |     await expect(modal.modalPermisos, 'aviso cuando se deniega el permiso').toBeVisible({ timeout: 20000 });
  1047 |     await capturarEvidencia(modal.modalPermisos, cp, 6, 'permiso de ubicación denegado');
  1048 |     await modal.cerrarModalPermisos();
  1049 |     await expect(modal.encabezado).toBeVisible();
  1050 |     await expect(modal.botonUbicacionActual).toBeVisible();
  1051 | 
  1052 |     const lat = Number(token(testData, 'LATITUD_DESPACHO'));
  1053 |     const lng = Number(token(testData, 'LONGITUD_DESPACHO'));
  1054 |     await page.context().clearPermissions();
  1055 |     await page.context().grantPermissions(['geolocation'], { origin: origen });
  1056 |     await page.context().setGeolocation({ latitude: lat, longitude: lng });
  1057 |     await page.reload({ waitUntil: 'domcontentloaded' });
  1058 |     const permitido = (await abrirModal(page)).modal;
  1059 |     await permitido.observarCarga();
  1060 |     await permitido.tocarUbicacionActual();
  1061 |     await expect(permitido.confirmacionPin, 'al conceder, se abre B2C-99').toBeVisible({ timeout: 30000 });
  1062 |     const centro = await permitido.centroDelMapa();
  1063 |     expect(Math.abs(centro.lat - lat)).toBeLessThan(0.002);
  1064 |     expect(Math.abs(centro.lng - lng)).toBeLessThan(0.002);
  1065 |     await capturarEvidencia(page, cp);
  1066 |   });
  1067 | 
  1068 |   test('TC-B2C26-D-011 · Seleccionar dirección guardada distinta deriva al flujo correspondiente [Desktop] (Desktop)', async ({ page, testData }) => {
  1069 |     const cp = 'TC-B2C26-D-011';
  1070 |     const { modal } = await abrirModalLogueado(page, testData);
  1071 |     const guardadas = await modal.direccionesGuardadas();
  1072 |     const activa = await etiquetaActiva(modal);
  1073 |     const otra = guardadas.find((g) => g.etiqueta !== activa);
  1074 |     await capturarEvidencia(page, cp, 4, 'direcciones guardadas disponibles');
  1075 |     if (!otra) throw new Error('PRECONDICION_NO_DISPONIBLE: la cuenta solo muestra la dirección activa; no hay una dirección guardada distinta para ejecutar las ramas de B2C-26 D-011.');
  1076 | 
  1077 |     const desde = marcaOtp();
  1078 |     await modal.elegirGuardada(otra.etiqueta);
  1079 |     await otpSiAparece(page, testData, desde, 45000);
  1080 |     const derivacion = page.getByText(/sin horarios disponibles|a[uú]n no llegamos|algunos productos podr[ií]an agotarse/i).locator('visible=true').first();
  1081 |     const cambio = new HeaderFull(page).storeLocator;
  1082 |     await expect.poll(async () => (await derivacion.isVisible().catch(() => false)) || /desde:|\d{1,2}:\d{2}/i.test(await cambio.innerText().catch(() => '')), { timeout: 45000 }).toBe(true);
  1083 |     await capturarEvidencia(page, cp, 6, 'resultado al elegir otra dirección guardada');
  1084 |   });
  1085 | 
  1086 |   test('TC-B2C26-D-013 · La dirección del header respeta historial y dirección seteada en sesión [Desktop] (Desktop)', async ({ page, browser, testData }) => {
  1087 |     const cp = 'TC-B2C26-D-013';
  1088 |     await page.context().clearCookies();
  1089 |     await new PaginaHabilitada(page).goto();
  1090 |     await page.evaluate(() => localStorage.clear());
  1091 |     await page.reload({ waitUntil: 'domcontentloaded' });
  1092 |     await loginConOtp(page, testData, 'COMPRADOR_USER');
  1093 |     const conHistorial = await new HeaderFull(page).esperarDireccionEnStoreLocator(45000);
  1094 |     await capturarEvidencia(page, cp, 4, `dirección tras iniciar sesión con historial: ${conHistorial}`);
  1095 |     expect(conHistorial, 'el header presenta una dirección válida').toMatch(/\S+/);
  1096 | 
  1097 |     const nueva = await ventanaNueva(browser, page, testData);
  1098 |     const direccion = token(testData, 'DIRECCION_DESPACHO')!;
  1099 |     const { home } = await fijarComoInvitado(nueva, direccion);
  1100 |     await loginConOtp(nueva, testData, 'COMPRADOR_MEMBRESIA_USER');
  1101 |     const sinHistorial = await home.header.esperarDireccionEnStoreLocator(45000);
  1102 |     await capturarEvidencia(nueva, cp, 8, `dirección seteada en sesión sin historial: ${sinHistorial}`);
  1103 |     expect(sinHistorial.toLowerCase()).toContain(partes(direccion).calle.toLowerCase());
  1104 |     await nueva.context().close();
  1105 |   });
  1106 | });
  1107 | 
  1108 | test.describe('B2C-26 pendientes · Mobile', () => {
  1109 |   test.use(MOBILE);
  1110 | 
  1111 |   test('TC-B2C26-M-006 · Resultado de Google sin calle usa el texto como Calle y continúa al PIN [Mobile] (Mobile)', async ({ page, testData }) => {
  1112 |     const cp = 'TC-B2C26-M-006';
  1113 |     const comuna = partes(token(testData, 'DIRECCION_DESPACHO')!).comuna;
  1114 |     const { modal } = await abrirModal(page);
  1115 |     const consultas = modal.observarConsultasAGoogle();
  1116 |     await modal.campoBusqueda.click();
  1117 |     await modal.campoBusqueda.pressSequentially(comuna, { delay: 70 });
  1118 |     await expect(modal.sugerencias.first(), 'resultado de Google para la búsqueda indicada').toBeVisible({ timeout: 30000 });
  1119 |     await capturarEvidencia(page, cp, 6, `resultados de Google para ${comuna}`);
  1120 |     const sugerenciaComuna = consultas.respuestas.some((x) => /"(locality|administrative_area_level_\d|sublocality)"/i.test(x));
> 1121 |     expect(sugerenciaComuna, 'Google debe ofrecer un resultado de comuna sin calle').toBe(true);
       |                                                                                      ^ Error: Google debe ofrecer un resultado de comuna sin calle
  1122 |     await modal.sugerencias.first().click();
  1123 |     await expect(modal.confirmacionPin).toBeVisible({ timeout: 30000 });
  1124 |     await modal.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
  1125 |     await expect(modal.confirmacionPin.getByRole('textbox').first()).toHaveValue(new RegExp(escapar(comuna), 'i'));
  1126 |     await capturarEvidencia(page, cp);
  1127 |   });
  1128 | 
  1129 |   test('TC-B2C26-M-014 · Denegar ubicación vuelve al modal de entrega sin cambios [Mobile] (Mobile)', async ({ page, testData }) => {
  1130 |     const cp = 'TC-B2C26-M-014';
  1131 |     const origen = token(testData, 'BASE_URL')!.replace(/\/+$/, '');
  1132 |     await page.context().grantPermissions([], { origin: origen });
  1133 |     const { modal } = await abrirModal(page);
  1134 |     const antes = await modal.direccionActiva.textContent().catch(() => '');
  1135 |     await modal.tocarUbicacionActual();
  1136 |     await expect(modal.modalPermisos, 'aviso al denegar ubicación').toBeVisible({ timeout: 20000 });
  1137 |     await capturarEvidencia(modal.modalPermisos, cp, 6, 'aviso de permisos de ubicación');
  1138 |     await modal.cerrarModalPermisos();
  1139 |     await expect(modal.encabezado).toBeVisible();
  1140 |     expect(await modal.direccionActiva.textContent().catch(() => '')).toBe(antes);
  1141 |     await modal.capturarModal(cp);
  1142 |   });
  1143 | 
  1144 |   test('TC-B2C26-M-024 · Elegir dirección guardada sin horarios con carro vacío [Mobile] (Mobile)', async ({ page, testData }) => {
  1145 |     const cp = 'TC-B2C26-M-024';
  1146 |     await iniciarSesion(page, testData);
  1147 |     const carro = await new CarroPage(page).goto();
  1148 |     await expect(carro.carroVacio.or(carro.totalUnidades)).toBeVisible({ timeout: 30000 });
  1149 |     if (!(await carro.carroVacio.isVisible())) await carro.vaciar();
  1150 |     await expect(carro.carroVacio).toBeVisible({ timeout: 30000 });
  1151 |     await setearDireccionLogueado(page, testData, token(testData, 'DIRECCION_SIN_SLA')!, cp);
  1152 |     await asegurarCasa(page, testData);
  1153 |     const { modal } = await abrirModalLogueado(page, testData);
  1154 |     const objetivo = token(testData, 'DIRECCION_SIN_SLA')!.split(',')[0].toLowerCase();
  1155 |     const guardada = (await modal.direccionesGuardadas()).find((g) => g.direccion.toLowerCase().includes(objetivo));
  1156 |     if (!guardada) throw new Error('PRECONDICION_NO_DISPONIBLE: la dirección de DIRECCION_SIN_SLA no aparece como dirección guardada de la cuenta.');
  1157 |     await modal.capturarModal(cp, 4, `dirección guardada ${guardada.etiqueta}`);
  1158 |     const desde = marcaOtp();
  1159 |     await modal.elegirGuardada(guardada.etiqueta);
  1160 |     await otpSiAparece(page, testData, desde, 45000);
  1161 |     await expect(page.getByText(/sin horarios disponibles/i).locator('visible=true').first(), 'flujo B2C-127').toBeVisible({ timeout: 45000 });
  1162 |     await capturarEvidencia(page, cp);
  1163 |   });
  1164 | 
  1165 |   test('TC-B2C26-M-025 · Elegir dirección guardada con productos en el carro inicia B2C-122 [Mobile] (Mobile)', async ({ page, testData }) => {
  1166 |     const cp = 'TC-B2C26-M-025';
  1167 |     await iniciarSesion(page, testData);
  1168 |     const { modal: inicial } = await abrirModalLogueado(page, testData);
  1169 |     const direccionesIniciales = await inicial.direccionesGuardadas();
  1170 |     if (direccionesIniciales.length < 2) throw new Error('PRECONDICION_NO_DISPONIBLE: la cuenta no tiene dos direcciones guardadas para cambiar el despacho con productos en el carro.');
  1171 |     await inicial.botonCerrar.click();
  1172 |     const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
  1173 |     const entregaReabierta = new MetodoEntregaModal(page);
  1174 |     if (await entregaReabierta.root.isVisible().catch(() => false)) await entregaReabierta.botonCerrar.click();
  1175 |     await expect(pdp.agregarVisible, 'botón Agregar del SKU de prueba').toBeVisible({ timeout: 20000 });
  1176 |     await pdp.agregarVisible.click();
  1177 |     await expect(pdp.cantidadEnCarro, 'SKU_VALID_001 agregado al carro').toBeVisible({ timeout: 20000 });
  1178 |     const carro = await new CarroPage(page).goto();
  1179 |     await expect(carro.totalUnidades, 'carro con productos').toBeVisible({ timeout: 30000 });
  1180 |     const home = await new PaginaHabilitada(page).goto();
  1181 |     await home.header.storeLocator.click();
  1182 |     const modal = await new MetodoEntregaModal(page).esperarAbierto();
  1183 |     const activa = await etiquetaActiva(modal);
  1184 |     const otra = (await modal.direccionesGuardadas()).find((g) => g.etiqueta !== activa);
  1185 |     if (!otra) throw new Error('PRECONDICION_NO_DISPONIBLE: no hay dirección guardada distinta de la activa.');
  1186 |     await modal.capturarModal(cp, 4, 'direcciones antes del cambio con productos en el carro');
  1187 |     const desde = marcaOtp();
  1188 |     await modal.elegirGuardada(otra.etiqueta);
  1189 |     await otpSiAparece(page, testData, desde, 45000);
  1190 |     const agotarse = new AgotarseModal(page);
  1191 |     await expect(agotarse.root, 'flujo de validación del carro B2C-122').toBeVisible({ timeout: 45000 });
  1192 |     await capturarEvidencia(agotarse.root, cp, 6, 'flujo con productos en el carro');
  1193 |   });
  1194 | 
  1195 |   test('TC-B2C26-M-031 · El header refleja una dirección de sesión sin historial [Mobile] (Mobile)', async ({ page, testData }) => {
  1196 |     const cp = 'TC-B2C26-M-031';
  1197 |     const { home, modal } = await abrirModalLogueado(page, testData, 'COMPRADOR_MEMBRESIA_USER');
  1198 |     const anteriores = await modal.direccionesGuardadas();
  1199 |     const direccion = token(testData, 'DIRECCION_DESPACHO')!;
  1200 |     await modal.campoBusqueda.click();
  1201 |     await modal.campoBusqueda.pressSequentially(direccion, { delay: 60 });
  1202 |     await modal.sugerencias.filter({ hasText: sugerenciaDe(direccion) }).first().click();
  1203 |     await expect(modal.confirmacionPin).toBeVisible({ timeout: 30000 });
  1204 |     const desde = marcaOtp();
  1205 |     await confirmarDetalles(modal);
  1206 |     await otpSiAparece(page, testData, desde, 45000);
  1207 |     const activa = await home.header.esperarDireccionEnStoreLocator(45000);
  1208 |     await expect.poll(async () => await textoHeader(page), { timeout: 45000 }).toContain(partes(direccion).calle);
  1209 |     await home.header.storeLocator.click();
  1210 |     const revisada = await new MetodoEntregaModal(page).esperarAbierto();
  1211 |     await expect(revisada.direccionActiva).toContainText(partes(direccion).calle);
  1212 |     await capturarEvidencia(page, cp, 6, `dirección activa de sesión ${activa}`);
  1213 |     // El usuario de prueba parte sin direcciones; si se guardó una nueva, se elimina al terminar.
  1214 |     const nuevas = (await revisada.direccionesGuardadas()).filter((g) => !anteriores.some((a) => a.etiqueta === g.etiqueta));
  1215 |     if (nuevas.length) {
  1216 |       await revisada.pedirEliminar(nuevas[0].etiqueta);
  1217 |       await revisada.botonAceptarEliminar.click();
  1218 |       await revisada.toastEliminada.waitFor({ state: 'visible', timeout: 20000 }).catch(() => {});
  1219 |     }
  1220 |   });
  1221 | 
```