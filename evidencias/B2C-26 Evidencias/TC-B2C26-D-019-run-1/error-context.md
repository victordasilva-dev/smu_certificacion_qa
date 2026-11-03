# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: B2C-26.spec.ts >> B2C-26 — Setear método de entrega con Despacho a domicilio >> Desktop 1440x900 >> TC-B2C26-D-019 · Plus Code de Google se agrega sin problemas [Guest] (Desktop)
- Location: tests/B2C-26.spec.ts:539:9

# Error details

```
TimeoutError: locator.waitFor: Timeout 45000ms exceeded.
Call log:
  - waiting for locator('header').getByRole('button').filter({ hasText: /desde:/i }).visible().first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - link [aria-hidden] [ref=e5] [cursor=pointer]:
      - /url: "#chakra-skip-nav"
      - text: Skip to Content
    - banner [ref=e8]:
      - generic [ref=e10]:
        - generic [ref=e11]:
          - button [ref=e12] [cursor=pointer]
          - button [ref=e23] [cursor=pointer]: Categorías
        - textbox [ref=e30]:
          - /placeholder: ¿Qué estás buscando?
        - generic [ref=e31]:
          - button [ref=e32] [cursor=pointer]:
            - generic [ref=e37]: Ingresa aquí
          - button [ref=e38] [cursor=pointer]:
            - generic [ref=e41]: "0"
      - generic [ref=e44]:
        - button [ref=e46] [cursor=pointer]:
          - paragraph [ref=e58]: Elige una forma de entrega
        - generic [ref=e62]:
          - list [ref=e65]:
            - listitem [ref=e66]:
              - link [ref=e67] [cursor=pointer]:
                - /url: /ofertas
                - text: Ofertas
            - listitem [ref=e68]:
              - link [ref=e69] [cursor=pointer]:
                - /url: /marketplace
                - text: Marketplace
            - listitem [ref=e70]:
              - link [ref=e71] [cursor=pointer]:
                - /url: /locales
                - text: Locales y horarios
          - button [ref=e72] [cursor=pointer]:
            - paragraph [ref=e74]: Suscríbete a
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
                        - generic [ref=e158]: Simunovic | Chuletas de cordero Simunovic 600 g
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
                        - generic [ref=e178]: Nacional | Abastero vacuno Nacional al vacío 1.8 Kg
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
                        - generic [ref=e198]: Super Pollo | Albondigas Super Pollo espaciales congeladas 3…
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
                        - generic [ref=e218]: Super Pollo | Alitas trutro de pollo Super Pollo congelado 8…
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
                        - generic [ref=e243]: Fundo Rio Alegre | Carne molida 4% grasa tártaro Fundo Río A…
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
                        - generic [ref=e268]: Fundo Rio Alegre | Carne molida 4% grasa vacuno Fundo Río Al…
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
                        - generic [ref=e297]: Fundo Rio Alegre | Carne molida fundo rio alegre tartaro 4% …
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
                        - generic [ref=e330]: Fundo Rio Alegre | Carne molida tartaro fundo río alegre 4% …
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
                        - generic [ref=e354]: Nacional | Choclillo vacuno Nacional al vacío 1.3 Kg
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
                        - generic [ref=e374]: Super Cerdo | Chuleta centro de cerdo Super Cerdo bandeja 55…
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
                        - generic [ref=e401]: Super Cerdo | Chuleta centro de cerdo Super Cerdo congelado …
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
                        - text: Chuleta parrillera de cordero congelado caja 1.5 Kg
                      - generic [ref=e420]: 1.5 kg
                  - button [ref=e423] [cursor=pointer]: Agregar
              - button [ref=e426] [cursor=pointer]
              - button [ref=e429] [cursor=pointer]
          - generic [ref=e436]:
            - generic [ref=e437]:
              - link [ref=e439] [cursor=pointer]:
                - /url: /category/frutas-y-verduras
              - generic [ref=e442]:
                - generic [ref=e443]:
                  - paragraph [ref=e445]: "45"
                  - paragraph [ref=e446]: días
                - paragraph [ref=e448]: ":"
                - generic [ref=e449]:
                  - paragraph [ref=e451]: "07"
                  - paragraph [ref=e452]: horas
                - paragraph [ref=e454]: ":"
                - generic [ref=e455]:
                  - paragraph [ref=e457]: "23"
                  - paragraph [ref=e458]: minutos
                - paragraph [ref=e460]: ":"
                - generic [ref=e461]:
                  - paragraph [ref=e463]: "28"
                  - paragraph [ref=e464]: segundos
            - generic [ref=e468]:
              - generic [ref=e470]:
                - generic [ref=e471]:
                  - link [ref=e472] [cursor=pointer]:
                    - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                  - button [ref=e474] [cursor=pointer]
                - generic [ref=e477]:
                  - paragraph [ref=e480]: $1.290
                  - generic [ref=e481]:
                    - link [ref=e482] [cursor=pointer]:
                      - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                      - text: Agua saborizada Más manzana 1.6 L
                    - generic [ref=e483]: 1.6 l
                - button [ref=e486] [cursor=pointer]: Agregar
              - generic [ref=e488]:
                - generic [ref=e489]:
                  - link [ref=e490] [cursor=pointer]:
                    - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                  - button [ref=e492] [cursor=pointer]
                - generic [ref=e495]:
                  - generic [ref=e497]:
                    - paragraph [ref=e498]: $2.550
                    - paragraph [ref=e499]: ($1.275 x unidad)
                  - generic [ref=e500]:
                    - link [ref=e501] [cursor=pointer]:
                      - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                      - generic [ref=e502]: Frutas y Verduras | Choclo bandeja 2 un
                    - generic [ref=e503]: 2 un
                - button [ref=e506] [cursor=pointer]: Agregar
              - generic [ref=e508]:
                - generic [ref=e509]:
                  - link [ref=e510] [cursor=pointer]:
                    - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                  - button [ref=e512] [cursor=pointer]
                - link [ref=e517] [cursor=pointer]:
                  - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                  - generic [ref=e518]: Proverde | Choclo cocida Proverde bolsa 500 gr
                - button [ref=e520] [cursor=pointer]: Agregar
              - generic [ref=e522]:
                - generic [ref=e523]:
                  - link [ref=e524] [cursor=pointer]:
                    - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                  - button [ref=e526] [cursor=pointer]
                - generic [ref=e529]:
                  - paragraph [ref=e532]: $2.490
                  - generic [ref=e533]:
                    - link [ref=e534] [cursor=pointer]:
                      - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                      - generic [ref=e535]: Frutas y Verduras | Clementina malla 1 Kg
                    - generic [ref=e536]: 1 kg
                - button [ref=e539] [cursor=pointer]: Agregar
              - generic [ref=e541]:
                - generic [ref=e542]:
                  - link [ref=e543] [cursor=pointer]:
                    - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                  - button [ref=e545] [cursor=pointer]
                - generic [ref=e548]:
                  - paragraph [ref=e551]: $1.999
                  - generic [ref=e552]:
                    - link [ref=e553] [cursor=pointer]:
                      - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                      - generic [ref=e554]: Frutas y Verduras | Clementina malla 1 Kg
                    - generic [ref=e555]: 1 kg
                - button [ref=e558] [cursor=pointer]: Agregar
              - generic [ref=e560]:
                - generic [ref=e561]:
                  - link [ref=e562] [cursor=pointer]:
                    - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                  - button [ref=e564] [cursor=pointer]
                - generic [ref=e567]:
                  - generic [ref=e569]:
                    - paragraph [ref=e570]: $1.375
                    - paragraph [ref=e571]: ($2.750 x kg)
                  - generic [ref=e572]:
                    - link [ref=e573] [cursor=pointer]:
                      - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                      - generic [ref=e574]: Frutas y Verduras | Clementinas granel 500 g
                    - generic [ref=e575]: 500 g
                - button [ref=e578] [cursor=pointer]: Agregar
              - generic [ref=e580]:
                - generic [ref=e581]:
                  - link [ref=e582] [cursor=pointer]:
                    - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                  - button [ref=e584] [cursor=pointer]
                - generic [ref=e587]:
                  - generic [ref=e589]:
                    - paragraph [ref=e590]: $1.999
                    - paragraph [ref=e591]: ($3.998 x kg)
                  - generic [ref=e592]:
                    - link [ref=e593] [cursor=pointer]:
                      - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                      - generic [ref=e594]: Frutas y Verduras | Clementinas granel 500 g
                    - generic [ref=e595]: 500 g
                - button [ref=e598] [cursor=pointer]: Agregar
              - generic [ref=e600]:
                - generic [ref=e601]:
                  - link [ref=e602] [cursor=pointer]:
                    - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                  - generic [ref=e604]: Promoción % Unipay
                  - button [ref=e605] [cursor=pointer]
                - generic [ref=e608]:
                  - generic [ref=e609]:
                    - generic [ref=e611]:
                      - generic [aria-hidden] [ref=e612]: 💎
                      - paragraph [ref=e613]: $2.601
                    - generic [ref=e614]:
                      - generic [ref=e615]: 10%
                      - paragraph [ref=e616]: $2.601
                    - paragraph [ref=e617]: "Antes: $2.890"
                  - generic [ref=e618]:
                    - link [ref=e619] [cursor=pointer]:
                      - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                      - generic [ref=e620]: Frutas y Verduras | Kiwi bolsa 1 Kg
                    - generic [ref=e621]: 1 kg
                - button [ref=e624] [cursor=pointer]: Agregar
              - generic [ref=e626]:
                - generic [ref=e627]:
                  - link [ref=e628] [cursor=pointer]:
                    - /url: /kiwi-bolsa-1-kg/000000000010062644-UN.html
                  - button [ref=e630] [cursor=pointer]
                - generic [ref=e633]:
                  - paragraph [ref=e636]: $1.999
                  - generic [ref=e637]:
                    - link [ref=e638] [cursor=pointer]:
                      - /url: /kiwi-bolsa-1-kg/000000000010062644-UN.html
                      - generic [ref=e639]: Frutas y Verduras | Kiwi bolsa 1 Kg
                    - generic [ref=e640]: 1 kg
                - button [ref=e643] [cursor=pointer]: Agregar
              - generic [ref=e645]:
                - generic [ref=e646]:
                  - link [ref=e647] [cursor=pointer]:
                    - /url: /limon-granel-500-g/000000000000553212-KG.html
                  - button [ref=e649] [cursor=pointer]
                - generic [ref=e652]:
                  - generic [ref=e654]:
                    - paragraph [ref=e655]: $995
                    - paragraph [ref=e656]: ($1.990 x l)
                  - generic [ref=e657]:
                    - link [ref=e658] [cursor=pointer]:
                      - /url: /limon-granel-500-g/000000000000553212-KG.html
                      - generic [ref=e659]: Frutas y Verduras | Limón granel 500 g
                    - generic [ref=e660]: 500 g
                - button [ref=e663] [cursor=pointer]: Agregar
              - generic [ref=e665]:
                - generic [ref=e666]:
                  - link [ref=e667] [cursor=pointer]:
                    - /url: /limon-granel-500-g/000000000010553212-KG.html
                  - button [ref=e669] [cursor=pointer]
                - generic [ref=e672]:
                  - generic [ref=e674]:
                    - paragraph [ref=e675]: $1.999
                    - paragraph [ref=e676]: ($3.998 x l)
                  - generic [ref=e677]:
                    - link [ref=e678] [cursor=pointer]:
                      - /url: /limon-granel-500-g/000000000010553212-KG.html
                      - generic [ref=e679]: Frutas y Verduras | Limón granel 500 g
                    - generic [ref=e680]: 500 g
                - button [ref=e683] [cursor=pointer]: Agregar
              - generic [ref=e685]:
                - generic [ref=e686]:
                  - link [ref=e687] [cursor=pointer]:
                    - /url: /mangos-granel-500-g/000000000000037972-KG.html
                  - button [ref=e689] [cursor=pointer]
                - generic [ref=e692]:
                  - generic [ref=e694]:
                    - paragraph [ref=e695]: $2.790
                    - paragraph [ref=e696]: ($5.580 x kg)
                  - generic [ref=e697]:
                    - link [ref=e698] [cursor=pointer]:
                      - /url: /mangos-granel-500-g/000000000000037972-KG.html
                      - generic [ref=e699]: Frutas Y Verduras | Mangos granel 500 g
                    - generic [ref=e700]: 500 g
                - button [ref=e703] [cursor=pointer]: Agregar
          - generic [ref=e708]:
            - heading [level=2] [ref=e709]: Categorías destacadas
            - generic [ref=e711]:
              - link [ref=e715] [cursor=pointer]:
                - /url: /category/frutas-y-verduras
                - paragraph [ref=e719]: Orgánico
              - link [ref=e723] [cursor=pointer]:
                - /url: /category/congelados
                - paragraph [ref=e727]: Comida en casa
              - link [ref=e731] [cursor=pointer]:
                - /url: /category/panaderia-y-pasteleria
                - paragraph [ref=e735]: Panadería
              - link [ref=e739] [cursor=pointer]:
                - /url: /category/panaderia-y-pasteleria
                - paragraph [ref=e743]: Pastelería
              - link [ref=e747] [cursor=pointer]:
                - /url: /category/bebidas-y-licores
                - paragraph [ref=e751]: Celebraciones
              - link [ref=e755] [cursor=pointer]:
                - /url: /category/limpieza
                - paragraph [ref=e759]: Higiene personal
              - link [ref=e763] [cursor=pointer]:
                - /url: /category/limpieza
                - paragraph [ref=e767]: Limpieza
          - generic [ref=e770]:
            - generic [ref=e771]:
              - generic [ref=e772]:
                - heading [level=3] [ref=e773]: Cada día, una ocasión
                - link [ref=e774] [cursor=pointer]:
                  - /url: /search?q=ofertas
                  - text: Mostrar todo
              - paragraph [ref=e775]: Encuentra aquí todo lo que necesitas y más
            - generic [ref=e776]:
              - generic [ref=e778]:
                - link [ref=e782] [cursor=pointer]:
                  - /url: /category/carnes
                  - paragraph [ref=e788]: Asaíto
                - link [ref=e792] [cursor=pointer]:
                  - /url: /category/despensa
                  - paragraph [ref=e798]: Picoteo
                - link [ref=e802] [cursor=pointer]:
                  - /url: /category/frutas-y-verduras
                  - paragraph [ref=e808]: Orgánico
                - link [ref=e812] [cursor=pointer]:
                  - /url: /category/desayuno-y-dulces
                  - paragraph [ref=e818]: Colaciones
              - button [disabled] [ref=e821] [cursor=pointer]
              - button [ref=e824] [cursor=pointer]
          - generic [ref=e832]:
            - link [ref=e833] [cursor=pointer]:
              - /url: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/frutas-y-verduras_frutas
              - paragraph [ref=e837]: OFERTA
              - generic:
                - generic:
                  - paragraph: Mecadito Unimarc
                  - generic:
                    - paragraph: "40"
                    - generic:
                      - paragraph: "%"
                      - paragraph: dcto
            - generic [ref=e838]:
              - generic [ref=e840]:
                - generic [ref=e841]:
                  - heading [level=3] [ref=e842]: Frescura y calidad
                  - link [ref=e843] [cursor=pointer]:
                    - /url: /category/frutas-y-verduras
                    - text: Mostrar todo
                - paragraph [ref=e844]: Frutas y verduras
              - generic [ref=e845]:
                - generic [ref=e847]:
                  - generic [ref=e849]:
                    - generic [ref=e850]:
                      - link [ref=e851] [cursor=pointer]:
                        - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                      - button [ref=e853] [cursor=pointer]
                    - generic [ref=e856]:
                      - paragraph [ref=e859]: $1.290
                      - generic [ref=e860]:
                        - link [ref=e861] [cursor=pointer]:
                          - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                          - text: Agua saborizada Más manzana 1.6 L
                        - generic [ref=e862]: 1.6 l
                    - button [ref=e865] [cursor=pointer]: Agregar
                  - generic [ref=e867]:
                    - generic [ref=e868]:
                      - link [ref=e869] [cursor=pointer]:
                        - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                      - button [ref=e871] [cursor=pointer]
                    - generic [ref=e874]:
                      - generic [ref=e876]:
                        - paragraph [ref=e877]: $2.550
                        - paragraph [ref=e878]: ($1.275 x unidad)
                      - generic [ref=e879]:
                        - link [ref=e880] [cursor=pointer]:
                          - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                          - generic [ref=e881]: Frutas y Verduras | Choclo bandeja 2 un
                        - generic [ref=e882]: 2 un
                    - button [ref=e885] [cursor=pointer]: Agregar
                  - generic [ref=e887]:
                    - generic [ref=e888]:
                      - link [ref=e889] [cursor=pointer]:
                        - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                      - button [ref=e891] [cursor=pointer]
                    - link [ref=e896] [cursor=pointer]:
                      - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                      - generic [ref=e897]: Proverde | Choclo cocida Proverde bolsa 500 gr
                    - button [ref=e899] [cursor=pointer]: Agregar
                  - generic [ref=e901]:
                    - generic [ref=e902]:
                      - link [ref=e903] [cursor=pointer]:
                        - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                      - button [ref=e905] [cursor=pointer]
                    - generic [ref=e908]:
                      - paragraph [ref=e911]: $2.490
                      - generic [ref=e912]:
                        - link [ref=e913] [cursor=pointer]:
                          - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                          - generic [ref=e914]: Frutas y Verduras | Clementina malla 1 Kg
                        - generic [ref=e915]: 1 kg
                    - button [ref=e918] [cursor=pointer]: Agregar
                  - generic [ref=e920]:
                    - generic [ref=e921]:
                      - link [ref=e922] [cursor=pointer]:
                        - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                      - button [ref=e924] [cursor=pointer]
                    - generic [ref=e927]:
                      - paragraph [ref=e930]: $1.999
                      - generic [ref=e931]:
                        - link [ref=e932] [cursor=pointer]:
                          - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                          - generic [ref=e933]: Frutas y Verduras | Clementina malla 1 Kg
                        - generic [ref=e934]: 1 kg
                    - button [ref=e937] [cursor=pointer]: Agregar
                  - generic [ref=e939]:
                    - generic [ref=e940]:
                      - link [ref=e941] [cursor=pointer]:
                        - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                      - button [ref=e943] [cursor=pointer]
                    - generic [ref=e946]:
                      - generic [ref=e948]:
                        - paragraph [ref=e949]: $1.375
                        - paragraph [ref=e950]: ($2.750 x kg)
                      - generic [ref=e951]:
                        - link [ref=e952] [cursor=pointer]:
                          - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                          - generic [ref=e953]: Frutas y Verduras | Clementinas granel 500 g
                        - generic [ref=e954]: 500 g
                    - button [ref=e957] [cursor=pointer]: Agregar
                  - generic [ref=e959]:
                    - generic [ref=e960]:
                      - link [ref=e961] [cursor=pointer]:
                        - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                      - button [ref=e963] [cursor=pointer]
                    - generic [ref=e966]:
                      - generic [ref=e968]:
                        - paragraph [ref=e969]: $1.999
                        - paragraph [ref=e970]: ($3.998 x kg)
                      - generic [ref=e971]:
                        - link [ref=e972] [cursor=pointer]:
                          - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                          - generic [ref=e973]: Frutas y Verduras | Clementinas granel 500 g
                        - generic [ref=e974]: 500 g
                    - button [ref=e977] [cursor=pointer]: Agregar
                  - generic [ref=e979]:
                    - generic [ref=e980]:
                      - link [ref=e981] [cursor=pointer]:
                        - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                      - generic [ref=e983]: Promoción % Unipay
                      - button [ref=e984] [cursor=pointer]
                    - generic [ref=e987]:
                      - generic [ref=e988]:
                        - generic [ref=e990]:
                          - generic [aria-hidden] [ref=e991]: 💎
                          - paragraph [ref=e992]: $2.601
                        - generic [ref=e993]:
                          - generic [ref=e994]: 10%
                          - paragraph [ref=e995]: $2.601
                        - paragraph [ref=e996]: "Antes: $2.890"
                      - generic [ref=e997]:
                        - link [ref=e998] [cursor=pointer]:
                          - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                          - generic [ref=e999]: Frutas y Verduras | Kiwi bolsa 1 Kg
                        - generic [ref=e1000]: 1 kg
                    - button [ref=e1003] [cursor=pointer]: Agregar
                - button [ref=e1006] [cursor=pointer]
                - button [ref=e1009] [cursor=pointer]
          - generic [ref=e1015]:
            - generic [ref=e1016]:
              - generic [ref=e1017]:
                - heading [level=3] [ref=e1018]: Prende la parrilla
                - link [ref=e1019] [cursor=pointer]:
                  - /url: /search?q=parrilla
                  - text: Mostrar todo
              - paragraph [ref=e1020]: Disfruta de un rico Asaito
            - generic [ref=e1022]:
              - link [ref=e1027] [cursor=pointer]:
                - /url: /search?q=parrilla
              - link [ref=e1034] [cursor=pointer]:
                - /url: /category/carnes
              - link [ref=e1041] [cursor=pointer]:
                - /url: /search?q=guarniciones
              - link [ref=e1048] [cursor=pointer]:
                - /url: /category/carnes
              - link [ref=e1055] [cursor=pointer]:
                - /url: /search?q=picoteo
          - generic [ref=e1063]:
            - link [ref=e1064] [cursor=pointer]:
              - /url: /category/panaderia-y-pasteleria
              - paragraph [ref=e1067]: 40% dcto
              - generic:
                - generic:
                  - paragraph: Chocolates Milka Variedades
                  - generic:
                    - paragraph: "40"
                    - generic:
                      - paragraph: "%"
                      - paragraph: dcto
            - generic [ref=e1068]:
              - generic [ref=e1070]:
                - generic [ref=e1071]:
                  - heading [level=3] [ref=e1072]: Chocolates Milka
                  - link [ref=e1073] [cursor=pointer]:
                    - /url: /category/panaderia-y-pasteleria
                    - text: Mostrar todo
                - paragraph [ref=e1074]: Endulza tu día
              - generic [ref=e1075]:
                - generic [ref=e1077]:
                  - generic [ref=e1079]:
                    - generic [ref=e1080]:
                      - link [ref=e1081] [cursor=pointer]:
                        - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                      - button [ref=e1083] [cursor=pointer]
                    - generic [ref=e1086]:
                      - paragraph [ref=e1089]: $1.180
                      - generic [ref=e1090]:
                        - link [ref=e1091] [cursor=pointer]:
                          - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                          - text: Galleta Alteza bocado 140 g
                        - generic [ref=e1092]: 140 g
                    - button [ref=e1095] [cursor=pointer]: Agregar
                  - generic [ref=e1097]:
                    - generic [ref=e1098]:
                      - link [ref=e1099] [cursor=pointer]:
                        - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                      - button [ref=e1101] [cursor=pointer]
                    - generic [ref=e1104]:
                      - paragraph [ref=e1107]: $280
                      - generic [ref=e1108]:
                        - link [ref=e1109] [cursor=pointer]:
                          - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                          - text: Galleta mini Dos en Uno chocolate 35 g
                        - generic [ref=e1110]: 35 g
                    - button [ref=e1113] [cursor=pointer]: Agregar
                  - generic [ref=e1115]:
                    - generic [ref=e1116]:
                      - link [ref=e1117] [cursor=pointer]:
                        - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                      - button [ref=e1119] [cursor=pointer]
                    - generic [ref=e1122]:
                      - generic [ref=e1123]:
                        - generic [ref=e1124]:
                          - generic [ref=e1125]: Unipay $757
                          - paragraph [ref=e1126]: ($6.882 x kg)
                        - generic [ref=e1127]:
                          - paragraph [ref=e1128]: $890
                          - paragraph [ref=e1129]: ($8.091 x kg)
                      - generic [ref=e1130]:
                        - link [ref=e1131] [cursor=pointer]:
                          - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                          - generic [ref=e1132]: Oreo | Galleta Oreo clásica vainilla 108 g
                        - generic [ref=e1133]: 108 g
                    - button [ref=e1136] [cursor=pointer]: Agregar
                  - generic [ref=e1138]:
                    - generic [ref=e1139]:
                      - link [ref=e1140] [cursor=pointer]:
                        - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                      - button [ref=e1142] [cursor=pointer]
                    - generic [ref=e1145]:
                      - paragraph [ref=e1148]: $4.990
                      - generic [ref=e1149]:
                        - link [ref=e1150] [cursor=pointer]:
                          - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                          - text: Galletas con mermelada La Galleteria 300 g
                        - generic [ref=e1151]: 300 g
                    - button [ref=e1154] [cursor=pointer]: Agregar
                  - generic [ref=e1156]:
                    - generic [ref=e1157]:
                      - link [ref=e1158] [cursor=pointer]:
                        - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                      - button [ref=e1160] [cursor=pointer]
                    - generic [ref=e1163]:
                      - generic [ref=e1165]:
                        - paragraph [ref=e1166]: $1.290
                        - paragraph [ref=e1167]: ($4.607 x kg)
                      - generic [ref=e1168]:
                        - link [ref=e1169] [cursor=pointer]:
                          - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                          - generic [ref=e1170]: Europastry | Pan baguette plus Crandon 1 un
                        - generic [ref=e1171]: 1 un
                    - button [ref=e1174] [cursor=pointer]: Agregar
                  - generic [ref=e1176]:
                    - generic [ref=e1177]:
                      - link [ref=e1178] [cursor=pointer]:
                        - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                      - button [ref=e1180] [cursor=pointer]
                    - generic [ref=e1183]:
                      - generic [ref=e1185]:
                        - paragraph [ref=e1186]: $1.495
                        - paragraph [ref=e1187]: ($2.990 x kg)
                      - generic [ref=e1188]:
                        - link [ref=e1189] [cursor=pointer]:
                          - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                          - generic [ref=e1190]: Amada Masa | Pan ciabatta granel Amada Masa 500 g
                        - generic [ref=e1191]: 500 g
                    - button [ref=e1194] [cursor=pointer]: Agregar
                  - generic [ref=e1196]:
                    - generic [ref=e1197]:
                      - link [ref=e1198] [cursor=pointer]:
                        - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                      - button [ref=e1200] [cursor=pointer]
                    - generic [ref=e1203]:
                      - generic [ref=e1205]:
                        - paragraph [ref=e1206]: $2.990
                        - paragraph [ref=e1207]: ($5.980 x kg)
                      - generic [ref=e1208]:
                        - link [ref=e1209] [cursor=pointer]:
                          - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                          - generic [ref=e1210]: Amada Masa | Pan hot dog granel Amada Masa 500 g
                        - generic [ref=e1211]: 500 g
                    - button [ref=e1214] [cursor=pointer]: Agregar
                  - generic [ref=e1216]:
                    - generic [ref=e1217]:
                      - link [ref=e1218] [cursor=pointer]:
                        - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                      - button [ref=e1220] [cursor=pointer]
                    - generic [ref=e1223]:
                      - paragraph [ref=e1226]: $1.095
                      - generic [ref=e1227]:
                        - link [ref=e1228] [cursor=pointer]:
                          - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                          - text: Pan marraqueta granel Amada Masa 500 g
                        - generic [ref=e1229]: 500 g
                    - button [ref=e1232] [cursor=pointer]: Agregar
                - button [ref=e1235] [cursor=pointer]
                - button [ref=e1238] [cursor=pointer]
        - link [ref=e1248] [cursor=pointer]:
          - /url: /search?q=despensa
        - generic [ref=e1254]:
          - generic [ref=e1255]:
            - heading [level=2] [ref=e1256]: Nuestras marcas
            - link [ref=e1257] [cursor=pointer]:
              - /url: /category/panaderia-y-pasteleria
              - text: Mostrar todo
          - generic [ref=e1258]:
            - tab [selected] [ref=e1259] [cursor=pointer]: Amada masa
            - tab [ref=e1260] [cursor=pointer]: Azul
            - tab [ref=e1261] [cursor=pointer]: Como en casa
            - tab [ref=e1262] [cursor=pointer]: D-kora
            - tab [ref=e1263] [cursor=pointer]: Fundo Río al
            - tab [ref=e1264] [cursor=pointer]: Nubelín
            - tab [ref=e1265] [cursor=pointer]: Nuestra coci
            - tab [ref=e1266] [cursor=pointer]: Smart Clean
            - tab [ref=e1267] [cursor=pointer]: Tento
          - generic [ref=e1270]:
            - generic [ref=e1272]:
              - generic [ref=e1274]:
                - generic [ref=e1275]:
                  - link [ref=e1276] [cursor=pointer]:
                    - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                  - button [ref=e1278] [cursor=pointer]
                - generic [ref=e1281]:
                  - paragraph [ref=e1284]: $1.180
                  - generic [ref=e1285]:
                    - link [ref=e1286] [cursor=pointer]:
                      - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                      - text: Galleta Alteza bocado 140 g
                    - generic [ref=e1287]: 140 g
                - button [ref=e1290] [cursor=pointer]: Agregar
              - generic [ref=e1292]:
                - generic [ref=e1293]:
                  - link [ref=e1294] [cursor=pointer]:
                    - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                  - button [ref=e1296] [cursor=pointer]
                - generic [ref=e1299]:
                  - paragraph [ref=e1302]: $280
                  - generic [ref=e1303]:
                    - link [ref=e1304] [cursor=pointer]:
                      - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                      - text: Galleta mini Dos en Uno chocolate 35 g
                    - generic [ref=e1305]: 35 g
                - button [ref=e1308] [cursor=pointer]: Agregar
              - generic [ref=e1310]:
                - generic [ref=e1311]:
                  - link [ref=e1312] [cursor=pointer]:
                    - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                  - button [ref=e1314] [cursor=pointer]
                - generic [ref=e1317]:
                  - generic [ref=e1318]:
                    - generic [ref=e1319]:
                      - generic [ref=e1320]: Unipay $757
                      - paragraph [ref=e1321]: ($6.882 x kg)
                    - generic [ref=e1322]:
                      - paragraph [ref=e1323]: $890
                      - paragraph [ref=e1324]: ($8.091 x kg)
                  - generic [ref=e1325]:
                    - link [ref=e1326] [cursor=pointer]:
                      - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                      - generic [ref=e1327]: Oreo | Galleta Oreo clásica vainilla 108 g
                    - generic [ref=e1328]: 108 g
                - button [ref=e1331] [cursor=pointer]: Agregar
              - generic [ref=e1333]:
                - generic [ref=e1334]:
                  - link [ref=e1335] [cursor=pointer]:
                    - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                  - button [ref=e1337] [cursor=pointer]
                - generic [ref=e1340]:
                  - paragraph [ref=e1343]: $4.990
                  - generic [ref=e1344]:
                    - link [ref=e1345] [cursor=pointer]:
                      - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                      - text: Galletas con mermelada La Galleteria 300 g
                    - generic [ref=e1346]: 300 g
                - button [ref=e1349] [cursor=pointer]: Agregar
              - generic [ref=e1351]:
                - generic [ref=e1352]:
                  - link [ref=e1353] [cursor=pointer]:
                    - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                  - button [ref=e1355] [cursor=pointer]
                - generic [ref=e1358]:
                  - generic [ref=e1360]:
                    - paragraph [ref=e1361]: $1.290
                    - paragraph [ref=e1362]: ($4.607 x kg)
                  - generic [ref=e1363]:
                    - link [ref=e1364] [cursor=pointer]:
                      - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                      - generic [ref=e1365]: Europastry | Pan baguette plus Crandon 1 un
                    - generic [ref=e1366]: 1 un
                - button [ref=e1369] [cursor=pointer]: Agregar
              - generic [ref=e1371]:
                - generic [ref=e1372]:
                  - link [ref=e1373] [cursor=pointer]:
                    - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                  - button [ref=e1375] [cursor=pointer]
                - generic [ref=e1378]:
                  - generic [ref=e1380]:
                    - paragraph [ref=e1381]: $1.495
                    - paragraph [ref=e1382]: ($2.990 x kg)
                  - generic [ref=e1383]:
                    - link [ref=e1384] [cursor=pointer]:
                      - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                      - generic [ref=e1385]: Amada Masa | Pan ciabatta granel Amada Masa 500 g
                    - generic [ref=e1386]: 500 g
                - button [ref=e1389] [cursor=pointer]: Agregar
              - generic [ref=e1391]:
                - generic [ref=e1392]:
                  - link [ref=e1393] [cursor=pointer]:
                    - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                  - button [ref=e1395] [cursor=pointer]
                - generic [ref=e1398]:
                  - generic [ref=e1400]:
                    - paragraph [ref=e1401]: $2.990
                    - paragraph [ref=e1402]: ($5.980 x kg)
                  - generic [ref=e1403]:
                    - link [ref=e1404] [cursor=pointer]:
                      - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                      - generic [ref=e1405]: Amada Masa | Pan hot dog granel Amada Masa 500 g
                    - generic [ref=e1406]: 500 g
                - button [ref=e1409] [cursor=pointer]: Agregar
              - generic [ref=e1411]:
                - generic [ref=e1412]:
                  - link [ref=e1413] [cursor=pointer]:
                    - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                  - button [ref=e1415] [cursor=pointer]
                - generic [ref=e1418]:
                  - paragraph [ref=e1421]: $1.095
                  - generic [ref=e1422]:
                    - link [ref=e1423] [cursor=pointer]:
                      - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                      - text: Pan marraqueta granel Amada Masa 500 g
                    - generic [ref=e1424]: 500 g
                - button [ref=e1427] [cursor=pointer]: Agregar
              - generic [ref=e1429]:
                - generic [ref=e1430]:
                  - link [ref=e1431] [cursor=pointer]:
                    - /url: /pan-marraqueta-prosepan-500-g/000000000000030202-KG.html
                  - button [ref=e1433] [cursor=pointer]
                - generic [ref=e1436]:
                  - generic [ref=e1438]:
                    - paragraph [ref=e1439]: $1.095
                    - paragraph [ref=e1440]: ($2.190 x kg)
                  - generic [ref=e1441]:
                    - link [ref=e1442] [cursor=pointer]:
                      - /url: /pan-marraqueta-prosepan-500-g/000000000000030202-KG.html
                      - text: Pan marraqueta Prosepan 500 g
                    - generic [ref=e1443]: 500 g
                - button [ref=e1446] [cursor=pointer]: Agregar
              - generic [ref=e1448]:
                - generic [ref=e1449]:
                  - link [ref=e1450] [cursor=pointer]:
                    - /url: /pan-pita-integral-granel-amada-masa-500-g/000000000000614468-KG.html
                  - button [ref=e1452] [cursor=pointer]
                - generic [ref=e1455]:
                  - paragraph [ref=e1458]: $2.890
                  - generic [ref=e1459]:
                    - link [ref=e1460] [cursor=pointer]:
                      - /url: /pan-pita-integral-granel-amada-masa-500-g/000000000000614468-KG.html
                      - text: Pan pita integral granel Amada Masa 500 g
                    - generic [ref=e1461]: 500 g
                - button [ref=e1464] [cursor=pointer]: Agregar
            - button [ref=e1467] [cursor=pointer]
            - button [ref=e1470] [cursor=pointer]
        - generic [ref=e1481]:
          - link [ref=e1482] [cursor=pointer]:
            - /url: /category/bebidas-y-licores
            - generic:
              - generic:
                - paragraph: Productos Not Variedades
                - generic:
                  - paragraph: "30"
                  - generic:
                    - paragraph: "%"
                    - paragraph: dcto
          - generic [ref=e1485]:
            - generic [ref=e1487]:
              - generic [ref=e1488]:
                - heading [level=3] [ref=e1489]: Especial Bebidas
                - link [ref=e1490] [cursor=pointer]:
                  - /url: /category/bebidas-y-licores
                  - text: Mostrar todo
              - paragraph [ref=e1491]: Bebidas vegetales y más
            - generic [ref=e1492]:
              - generic [ref=e1494]:
                - generic [ref=e1496]:
                  - generic [ref=e1497]:
                    - link [ref=e1498] [cursor=pointer]:
                      - /url: /cerveza-austral-lager-lata-470-cc/000000000000694333-UN.html
                    - button [ref=e1500] [cursor=pointer]
                  - generic [ref=e1503]:
                    - generic [ref=e1505]:
                      - paragraph [ref=e1506]: $2.090
                      - paragraph [ref=e1507]: ($4.447 x L)
                    - generic [ref=e1508]:
                      - link [ref=e1509] [cursor=pointer]:
                        - /url: /cerveza-austral-lager-lata-470-cc/000000000000694333-UN.html
                        - generic [ref=e1510]: Austral | Cerveza Austral lager lata 470 cc
                      - generic [ref=e1511]: 470 cc
                  - button [ref=e1514] [cursor=pointer]: Agregar
                - generic [ref=e1516]:
                  - generic [ref=e1517]:
                    - link [ref=e1518] [cursor=pointer]:
                      - /url: /cerveza-budweiser-zero-botella-6-un-de-330-cc/000000000000663675-UN.html
                    - button [ref=e1520] [cursor=pointer]
                  - generic [ref=e1523]:
                    - generic [ref=e1525]:
                      - paragraph [ref=e1526]: $7.790
                      - paragraph [ref=e1527]: ($23.606 x L)
                    - generic [ref=e1528]:
                      - link [ref=e1529] [cursor=pointer]:
                        - /url: /cerveza-budweiser-zero-botella-6-un-de-330-cc/000000000000663675-UN.html
                        - generic [ref=e1530]: Budweiser | Cerveza Budweiser zero botella 6 un de 330 cc
                      - generic [ref=e1531]: 6 un
                  - button [ref=e1534] [cursor=pointer]: Agregar
                - generic [ref=e1536]:
                  - generic [ref=e1537]:
                    - link [ref=e1538] [cursor=pointer]:
                      - /url: /cerveza-corona-extra-lata-6-un-de-473-cc/000000000000686446-UN.html
                    - button [ref=e1540] [cursor=pointer]
                  - generic [ref=e1543]:
                    - generic [ref=e1545]:
                      - paragraph [ref=e1546]: $6.890
                      - paragraph [ref=e1547]: ($14.567 x L)
                    - generic [ref=e1548]:
                      - link [ref=e1549] [cursor=pointer]:
                        - /url: /cerveza-corona-extra-lata-6-un-de-473-cc/000000000000686446-UN.html
                        - generic [ref=e1550]: Corona | Cerveza Corona extra lata 6 un de 473 cc
                      - generic [ref=e1551]: 6 un
                  - button [ref=e1554] [cursor=pointer]: Agregar
                - generic [ref=e1556]:
                  - generic [ref=e1557]:
                    - link [ref=e1558] [cursor=pointer]:
                      - /url: /cerveza-cristal-lager-botella-650-cc/000000000000686452-UN.html
                    - button [ref=e1560] [cursor=pointer]
                  - generic [ref=e1563]:
                    - generic [ref=e1565]:
                      - paragraph [ref=e1566]: $1.350
                      - paragraph [ref=e1567]: ($2.077 x L)
                    - generic [ref=e1568]:
                      - link [ref=e1569] [cursor=pointer]:
                        - /url: /cerveza-cristal-lager-botella-650-cc/000000000000686452-UN.html
                        - generic [ref=e1570]: Cristal Cerveza | Cerveza Cristal lager botella 650 cc
                      - generic [ref=e1571]: 650 cc
                  - button [ref=e1574] [cursor=pointer]: Agregar
                - generic [ref=e1576]:
                  - generic [ref=e1577]:
                    - link [ref=e1578] [cursor=pointer]:
                      - /url: /cerveza-duvel-moorgat-botella-330-cc/000000000000536215-UN.html
                    - button [ref=e1580] [cursor=pointer]
                  - generic [ref=e1583]:
                    - paragraph [ref=e1586]: $3.550
                    - generic [ref=e1587]:
                      - link [ref=e1588] [cursor=pointer]:
                        - /url: /cerveza-duvel-moorgat-botella-330-cc/000000000000536215-UN.html
                        - text: Cerveza Duvel moorgat botella 330 cc
                      - generic [ref=e1589]: 330 cc
                  - button [ref=e1592] [cursor=pointer]: Agregar
                - generic [ref=e1594]:
                  - generic [ref=e1595]:
                    - link [ref=e1596] [cursor=pointer]:
                      - /url: /cerveza-royal-golden-lager-lata-6-un-de-470-cc/000000000000674841-DIS.html
                    - button [ref=e1598] [cursor=pointer]
                  - generic [ref=e1601]:
                    - generic [ref=e1603]:
                      - paragraph [ref=e1604]: $7.290
                      - paragraph [ref=e1605]: ($15.511 x L)
                    - generic [ref=e1606]:
                      - link [ref=e1607] [cursor=pointer]:
                        - /url: /cerveza-royal-golden-lager-lata-6-un-de-470-cc/000000000000674841-DIS.html
                        - generic [ref=e1608]: Royal Guard | Cerveza Royal golden lager lata 6 un de 470 cc
                      - generic [ref=e1609]: 6 un
                  - button [ref=e1612] [cursor=pointer]: Agregar
                - generic [ref=e1614]:
                  - generic [ref=e1615]:
                    - link [ref=e1616] [cursor=pointer]:
                      - /url: /cerveza-sabor-sandia-stones-350ml/000000000000689879-UN.html
                    - button [ref=e1618] [cursor=pointer]
                  - generic [ref=e1621]:
                    - generic [ref=e1623]:
                      - paragraph [ref=e1624]: $6.590
                      - paragraph [ref=e1625]: ($18.829 x L)
                    - generic [ref=e1626]:
                      - link [ref=e1627] [cursor=pointer]:
                        - /url: /cerveza-sabor-sandia-stones-350ml/000000000000689879-UN.html
                        - generic [ref=e1628]: Stones | Cerveza sabor sandía Stones 350ml
                      - generic [ref=e1629]: 350 ml
                  - button [ref=e1632] [cursor=pointer]: Agregar
                - generic [ref=e1634]:
                  - generic [ref=e1635]:
                    - link [ref=e1636] [cursor=pointer]:
                      - /url: /cerveza-stones-berries-lata-6-un-de-350-ml/000000000000671971-UN.html
                    - button [ref=e1638] [cursor=pointer]
                  - generic [ref=e1641]:
                    - generic [ref=e1643]:
                      - paragraph [ref=e1644]: $6.590
                      - paragraph [ref=e1645]: ($18.829 x L)
                    - generic [ref=e1646]:
                      - link [ref=e1647] [cursor=pointer]:
                        - /url: /cerveza-stones-berries-lata-6-un-de-350-ml/000000000000671971-UN.html
                        - generic [ref=e1648]: Stones | Cerveza Stones berries lata 6 un de 350 ml
                      - generic [ref=e1649]: 6 un
                  - button [ref=e1652] [cursor=pointer]: Agregar
              - button [ref=e1655] [cursor=pointer]
              - button [ref=e1658] [cursor=pointer]
        - generic [ref=e1665]:
          - generic [ref=e1666]:
            - paragraph [ref=e1667]: Contrata la membresía
            - paragraph [ref=e1668]: Obtén despachos gratis y ilimitados por compras sobre $20.000 y descuentos exclusivos
            - link [ref=e1669] [cursor=pointer]:
              - /url: /membresia
              - text: Comienza tus 15 días gratis
          - button [ref=e1672] [cursor=pointer]
        - generic [ref=e1679]:
          - generic [ref=e1680]:
            - heading [level=2] [ref=e1681]: TÉRMINOS Y CONDICIONES UNIMARC
            - paragraph [ref=e1682]: El acceso y uso del sitio web www.unimarc.cl y de la aplicación móvil Unimarc (ambos indistintamente “Unimarc.cl”) por u
          - generic [ref=e1683]:
            - generic [ref=e1684]:
              - button [expanded] [ref=e1685] [cursor=pointer]:
                - generic [ref=e1688]: 1. Registro del Cliente
              - region [ref=e1689]:
                - paragraph [ref=e1691]: Será requisito para la adquisición de productos y servicios ofrecidos en Unimarc.cl, estar registrado en éste, ser mayor de 18 años, y al momento de la compra aceptar estos T&C y su Política de Privacidad. El acceso y registro será gratuito.
            - button [ref=e1693] [cursor=pointer]:
              - generic [ref=e1697]: 2. Clave de acceso secreta
            - button [ref=e1699] [cursor=pointer]:
              - generic [ref=e1703]: 3. Derechos del Cliente
            - button [ref=e1705] [cursor=pointer]:
              - generic [ref=e1709]: 4. Procedimiento para hacer uso de Unima
    - contentinfo [aria-hidden] [ref=e1710]:
      - generic [ref=e1711]:
        - generic [ref=e1712]:
          - generic [ref=e1713]:
            - link [ref=e1714] [cursor=pointer]:
              - /url: /centro-de-ayuda
              - generic [ref=e1721]:
                - paragraph [ref=e1722]: Centro de ayuda
                - paragraph [ref=e1723]: Aquí encontrarás preguntas frecuentes y mucho más
            - link [ref=e1724] [cursor=pointer]:
              - /url: /seguimiento-de-compra
              - generic [ref=e1730]:
                - paragraph [ref=e1731]: Seguimiento de compra
                - paragraph [ref=e1732]: Revisa el estado y detalle de tu compra
            - link [ref=e1733] [cursor=pointer]:
              - /url: https://wa.me/56958701477
              - generic [ref=e1739]:
                - paragraph [ref=e1740]: Whatsapp clientes
                - paragraph [ref=e1741]: Escríbenos de 9:00 a 20:00 horas
          - generic [ref=e1742]:
            - generic [ref=e1743]:
              - button [ref=e1744] [cursor=pointer]:
                - paragraph [ref=e1747]: Contáctanos
              - generic [ref=e1749]:
                - generic [ref=e1750]:
                  - paragraph [ref=e1751]: Unimarc - Servicio al cliente
                  - link [ref=e1756] [cursor=pointer]:
                    - /url: tel:6006000025
                    - text: 600 600 0025
                  - paragraph [ref=e1757]: Llámanos de 9:00 a 20:00 horas
                - generic [ref=e1758]:
                  - paragraph [ref=e1759]: Compras online
                  - link [ref=e1767] [cursor=pointer]:
                    - /url: /contacto/compras-online
                    - text: Crea una solicitud
                  - link [ref=e1773] [cursor=pointer]:
                    - /url: mailto:despachosunimarc@unimarc.cl
                    - text: despachosunimarc@unimarc.cl
                - generic [ref=e1774]:
                  - paragraph [ref=e1775]: Tarjeta Unipay - Servicio al cliente
                  - link [ref=e1780] [cursor=pointer]:
                    - /url: tel:6003909000
                    - text: 600 390 9000
                  - paragraph [ref=e1781]: Llámanos de 9:00 a 20:00 horas
                - generic [ref=e1782]:
                  - paragraph [ref=e1783]: Compras en tienda
                  - link [ref=e1791] [cursor=pointer]:
                    - /url: /contacto/compras-tienda
                    - text: Crea una solicitud
                  - link [ref=e1797] [cursor=pointer]:
                    - /url: mailto:contacto.unimarc@unimarc.cl
                    - text: contacto.unimarc@unimarc.cl
            - button [ref=e1799] [cursor=pointer]:
              - paragraph [ref=e1803]: Servicio al cliente
            - button [ref=e1805] [cursor=pointer]:
              - paragraph [ref=e1809]: Nuestros programas
            - button [ref=e1811] [cursor=pointer]:
              - paragraph [ref=e1815]: Nuestra empresa
        - separator [ref=e1816]
        - generic [ref=e1817]:
          - list [ref=e1819]:
            - listitem [ref=e1820]:
              - link [ref=e1821] [cursor=pointer]:
                - /url: /legales/cookies
                - text: Políticas de Cookies
          - generic [ref=e1822]:
            - paragraph [ref=e1823]: Síguenos
            - generic [ref=e1824]:
              - link [ref=e1825] [cursor=pointer]:
                - /url: https://www.facebook.com/unimarc
              - link [ref=e1828] [cursor=pointer]:
                - /url: https://www.instagram.com/unimarc
              - link [ref=e1833] [cursor=pointer]:
                - /url: https://x.com/unimarc
              - link [ref=e1836] [cursor=pointer]:
                - /url: https://www.youtube.com/unimarc
  - generic:
    - region
    - region
    - region
    - region
    - region
    - region
  - dialog [ref=e1841]:
    - button [ref=e1842] [cursor=pointer]
    - banner [ref=e1845]: Elige tu método de entrega
    - generic [ref=e1846]:
      - generic [ref=e1847]:
        - button [pressed] [ref=e1848] [cursor=pointer]:
          - generic [ref=e1849]: Despacho a domicilio
        - button [ref=e1855] [cursor=pointer]:
          - generic [ref=e1856]: Retiro en tienda
      - paragraph [ref=e1862]: Calle, dirección o lugar
      - generic [ref=e1863]:
        - textbox [ref=e1865]:
          - /placeholder: "Ej: Av. Manquehue norte 457, Las condes"
        - button [ref=e1866] [cursor=pointer]:
          - generic [ref=e1867]: Activar mi ubicación actual
      - button [ref=e1872] [cursor=pointer]: Confirmar
      - generic [ref=e1874]:
        - paragraph [ref=e1875]: Aún no tienes direcciones guardadas
        - paragraph [ref=e1876]: Para armar tu carro, ingresa una dirección y te mostraremos los productos disponibles para esa ubicación.
    - contentinfo [ref=e1877]:
      - generic [ref=e1878]:
        - paragraph [ref=e1883]: ¿No aparece tu dirección?
        - button [ref=e1884] [cursor=pointer]: Agregar
  - dialog [ref=e1887]:
    - button "Cerrar" [active] [ref=e1889] [cursor=pointer]
    - generic [ref=e1892]:
      - generic [ref=e1893]:
        - paragraph [ref=e1894]: Aún no llegamos a esta dirección
        - paragraph [ref=e1895]: Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc
      - generic [ref=e1896]:
        - button "Continuar con esta dirección" [ref=e1897] [cursor=pointer]
        - button "Cambiar método de entrega" [ref=e1898] [cursor=pointer]
```

# Test source

```ts
  209 |   async x(locator: Locator): Promise<number> {
  210 |     return (await this.caja(locator)).x;
  211 |   }
  212 | 
  213 |   /** Índice (base 0) de la fila visible que contiene a `locator`, según su centro vertical. */
  214 |   async filaDe(locator: Locator): Promise<number> {
  215 |     const objetivo = await this.caja(locator);
  216 |     const centro = objetivo.y + objetivo.alto / 2;
  217 |     const total = await this.filasVisibles.count();
  218 |     for (let i = 0; i < total; i++) {
  219 |       const fila = await this.caja(this.filasVisibles.nth(i));
  220 |       if (centro >= fila.y && centro <= fila.y + fila.alto) return i;
  221 |     }
  222 |     return -1;
  223 |   }
  224 | 
  225 |   /** `true` si el elemento entra completo en el viewport horizontal. */
  226 |   async entraEnPantalla(locator: Locator): Promise<boolean> {
  227 |     const c = await this.caja(locator);
  228 |     const ancho = this.page.viewportSize()?.width ?? 0;
  229 |     return c.x >= 0 && c.x + c.ancho <= ancho;
  230 |   }
  231 | 
  232 |   /** Métricas de scroll del carrusel de accesos. */
  233 |   async scrollAccesos(): Promise<{ scrollWidth: number; clientWidth: number; desbordado: boolean }> {
  234 |     return this.carruselAccesos.evaluate((el) => ({
  235 |       scrollWidth: el.scrollWidth,
  236 |       clientWidth: el.clientWidth,
  237 |       desbordado: el.scrollWidth > el.clientWidth,
  238 |     }));
  239 |   }
  240 | 
  241 |   // ------------------------------------------------------- modo sticky (B2C-24)
  242 | 
  243 |   /**
  244 |    * El botón del Store Locator, sea cual sea su estado.
  245 |    *
  246 |    * Su texto cambia con lo que el usuario haya elegido: "Elige una forma de entrega" mientras no
  247 |    * hay nada, y la dirección con su plazo y su costo una vez seleccionada — que es justamente lo
  248 |    * que el TC-B2C24-D-003 compara antes y después del ciclo de scroll. Por eso el locator acepta
  249 |    * los dos textos en vez de fijar uno: escrito contra el estado inicial, dejaría de encontrar el
  250 |    * botón en cuanto el caso hace lo que vino a hacer.
  251 |    *
  252 |    * No hay `data-testid` ni `aria-label` donde agarrarse, y las clases de Emotion (`css-mmd41v`)
  253 |    * cambian con cada build, así que el texto es el asidero menos frágil disponible hoy. Un
  254 |    * `data-testid` en este botón lo volvería trivial.
  255 |    *
  256 |    * Con una dirección aplicada el botón no dice "despacho": muestra la calle, "Desde: <día y
  257 |    * hora>" y el costo ("Calle Uno 23, La Florida · Desde: Lun 28/09, 15:00 hrs. · $2.990"). Por
  258 |    * eso el filtro acepta también "Desde:" (B2C-26).
  259 |    */
  260 |   get storeLocator(): Locator {
  261 |     return this.root
  262 |       .getByRole('button')
  263 |       .filter({ hasText: /elige una forma de entrega|despacho|retiro en tienda|desde:/i })
  264 |       .locator('visible=true')
  265 |       .first();
  266 |   }
  267 | 
  268 |   /**
  269 |    * El saludo de la sesión iniciada. En Desktop se ve el texto "Hola, <nombre>"; en Mobile solo el
  270 |    * avatar con las iniciales, y el saludo queda como nombre accesible del botón (B2C-148).
  271 |    */
  272 |   get saludo(): Locator {
  273 |     return this.page
  274 |       .getByText(/^hola,/i)
  275 |       .or(this.page.getByRole('button', { name: /^hola,/i }))
  276 |       .locator('visible=true')
  277 |       .first();
  278 |   }
  279 | 
  280 |   /**
  281 |    * El header del sitio y nada más. `root` (`header`) también encuentra la cabecera de cualquier
  282 |    * modal de Chakra abierto —el drawer del Store Locator tiene la suya—, y con el drawer abierto
  283 |    * una aserción sobre `root` choca con dos elementos. Este es el único con `role="banner"`
  284 |    * explícito (B2C-26).
  285 |    */
  286 |   get barraDelSitio(): Locator {
  287 |     return this.page.locator('header[role="banner"]');
  288 |   }
  289 | 
  290 |   /**
  291 |    * La dirección que muestra el Store Locator: la primera línea del botón, sin el plazo ni el
  292 |    * costo. Con nada aplicado devuelve "Elige una forma de entrega".
  293 |    */
  294 |   async direccionDelStoreLocator(): Promise<string> {
  295 |     return ((await this.storeLocator.locator('p').first().textContent()) ?? '').trim();
  296 |   }
  297 | 
  298 |   /**
  299 |    * Espera a que el Store Locator muestre una dirección. Tras el login el header se pinta primero
  300 |    * con "Elige una forma de entrega" y recién después con la dirección activa de la cuenta: leerlo
  301 |    * de inmediato da el estado intermedio, no el de la sesión (B2C-26).
  302 |    */
  303 |   async esperarDireccionEnStoreLocator(timeout = 30000): Promise<string> {
  304 |     await this.root
  305 |       .getByRole('button')
  306 |       .filter({ hasText: /desde:/i })
  307 |       .locator('visible=true')
  308 |       .first()
> 309 |       .waitFor({ state: 'visible', timeout });
      |        ^ TimeoutError: locator.waitFor: Timeout 45000ms exceeded.
  310 |     return this.direccionDelStoreLocator();
  311 |   }
  312 | 
  313 |   /** Abre el drawer del Store Locator y espera a que su contenido esté a la vista. */
  314 |   async abrirStoreLocator(): Promise<StoreLocator> {
  315 |     const drawer = new StoreLocator(this.page);
  316 |     await this.storeLocator.click();
  317 |     await drawer.root.waitFor({ state: 'visible', timeout: 30000 });
  318 |     await drawer.campoDireccion.waitFor({ state: 'visible', timeout: 30000 });
  319 |     return drawer;
  320 |   }
  321 | 
  322 |   /**
  323 |    * Qué hay dentro del botón del Store Locator, medido sobre el render real (B2C-70).
  324 |    *
  325 |    * El TC pide comprobar tres piezas —el icono del método, el texto y el "icono V"— y ninguna
  326 |    * tiene `data-testid`: lo único que las distingue es dónde caen respecto del texto. De ahí que
  327 |    * la lectura devuelva la posición de cada icono relativa al botón, y no una lista de locators.
  328 |    *
  329 |    * De cada icono se devuelven además los **puntos de su trazo** cuando el path es una polilínea
  330 |    * corta. Es lo que permite afirmar que el chevron es una "V" —el punto del medio más abajo que
  331 |    * los extremos— en vez de comparar el atributo `d` contra un literal, que cambiaría en cuanto
  332 |    * alguien rediseñe el icono sin cambiar su forma.
  333 |    *
  334 |    * Ojo con el icono de la izquierda: **son dos svg que se turnan deslizándose** por un slot de
  335 |    * 36 px, así que su `dx` cambia entre dos lecturas del mismo estado. Lo estable es que siempre
  336 |    * hay alguno que empieza antes que el texto; una aserción sobre su posición exacta no lo es.
  337 |    */
  338 |   async composicionDelStoreLocator(): Promise<{
  339 |     texto: string;
  340 |     textoDx: number;
  341 |     iconos: { dx: number; ancho: number; alto: number; puntos: { x: number; y: number }[] }[];
  342 |   }> {
  343 |     return this.storeLocator.evaluate((boton) => {
  344 |       const caja = boton.getBoundingClientRect();
  345 | 
  346 |       const hoja = [...boton.querySelectorAll('p,span,div')].find(
  347 |         (e) => e.children.length === 0 && (e.textContent ?? '').trim(),
  348 |       );
  349 |       const rt = hoja?.getBoundingClientRect();
  350 | 
  351 |       const iconos = [...boton.querySelectorAll('svg')].map((svg) => {
  352 |         const r = svg.getBoundingClientRect();
  353 |         const d = svg.querySelector('path')?.getAttribute('d') ?? '';
  354 |         // Un path de polilínea ("M5 7.5L10 12.5L15 7.5") se deja leer como puntos; uno de
  355 |         // contorno, con curvas, no — y ahí `puntos` queda vacío, que es la respuesta correcta.
  356 |         const puntos = /^[ML][\d.\s,L]+$/.test(d.trim())
  357 |           ? d
  358 |               .trim()
  359 |               .split(/[ML]/)
  360 |               .filter(Boolean)
  361 |               .map((par) => {
  362 |                 const [x, y] = par.trim().split(/[\s,]+/).map(Number);
  363 |                 return { x, y };
  364 |               })
  365 |               .filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y))
  366 |           : [];
  367 |         return {
  368 |           dx: Math.round(r.left - caja.left),
  369 |           ancho: Math.round(r.width),
  370 |           alto: Math.round(r.height),
  371 |           puntos,
  372 |         };
  373 |       });
  374 | 
  375 |       return {
  376 |         texto: (hoja?.textContent ?? '').trim(),
  377 |         textoDx: rt ? Math.round(rt.left - caja.left) : -1,
  378 |         iconos,
  379 |       };
  380 |     });
  381 |   }
  382 | 
  383 |   /** Alto renderizado del header. Es lo que distingue el modo full del sticky. */
  384 |   async alto(): Promise<number> {
  385 |     return this.root.evaluate((el) => Math.round(el.getBoundingClientRect().height));
  386 |   }
  387 | 
  388 |   /** `position` calculada del header. Es `fixed` siempre, incluso en el tope de la página. */
  389 |   async position(): Promise<string> {
  390 |     return this.root.evaluate((el) => getComputedStyle(el).position);
  391 |   }
  392 | 
  393 |   /** Cuántas filas del header conservan altura. En sticky queda una sola. */
  394 |   async filasConAlto(): Promise<number> {
  395 |     return this.root.evaluate(
  396 |       (el) =>
  397 |         Array.from(el.children).filter((c) => c.getBoundingClientRect().height > 0).length,
  398 |     );
  399 |   }
  400 | 
  401 |   /**
  402 |    * Desplaza la página y espera a que la contracción del header termine.
  403 |    *
  404 |    * La espera no es un margen de cortesía: el colapso es animado, y mientras dura, las filas que
  405 |    * se están ocultando siguen devolviendo una caja con ancho y alto. Medir en ese instante cuenta
  406 |    * como visible lo que el usuario ya no ve.
  407 |    */
  408 |   async scrollA(y: number): Promise<void> {
  409 |     await this.page.evaluate((destino) => window.scrollTo(0, destino), y);
```