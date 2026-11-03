# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: B2C-26.spec.ts >> B2C-26 pendientes · Mobile >> TC-B2C26-M-024 · Elegir dirección guardada sin horarios con carro vacío [Mobile] (Mobile)
- Location: tests/B2C-26.spec.ts:1142:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('[role="dialog"]').filter({ hasText: /elige tu m[ée]todo de entrega|direcci[óo]n manual/i }).visible().first().getByRole('listbox').getByRole('option').filter({ hasText: /Av Libertador Gral Bernardo O'Higgins\s+1072/i }).first() to be visible

```

# Page snapshot

```yaml
- generic [ref=f3e1]:
  - generic [ref=f3e4]:
    - link [aria-hidden] [ref=f3e5] [cursor=pointer]:
      - /url: "#chakra-skip-nav"
      - text: Skip to Content
    - banner [ref=f3e8]:
      - button [ref=f3e12] [cursor=pointer]:
        - generic [ref=f3e23]:
          - paragraph [ref=f3e24]: Camino La Fuente 15…
          - generic [ref=f3e25]:
            - paragraph [ref=f3e26]: "Desde: Jue 29/10, 09:00 hrs."
            - paragraph [ref=f3e28]: $2.990
      - generic [ref=f3e33]:
        - generic [ref=f3e34]:
          - button [ref=f3e35] [cursor=pointer]
          - button [ref=f3e38] [cursor=pointer]
        - textbox [ref=f3e46]:
          - /placeholder: ¿Qué estás buscando?
        - generic [ref=f3e47]:
          - button [ref=f3e48] [cursor=pointer]:
            - generic [aria-hidden] [ref=f3e49]: KP
          - button [ref=f3e50] [cursor=pointer]:
            - generic [ref=f3e53]: "0"
      - generic [ref=f3e58]:
        - button [ref=f3e60] [cursor=pointer]:
          - paragraph [ref=f3e67]: Suscríbete a
        - list [ref=f3e77]:
          - listitem [ref=f3e78]:
            - link [ref=f3e79] [cursor=pointer]:
              - /url: /ofertas
              - text: Ofertas
          - listitem [ref=f3e80]:
            - link [ref=f3e81] [cursor=pointer]:
              - /url: /marketplace
              - text: Marketplace
          - listitem [ref=f3e82]:
            - link [ref=f3e83] [cursor=pointer]:
              - /url: /locales
              - text: Locales y horarios
    - main [ref=f3e85]:
      - generic [ref=f3e91]:
        - generic [ref=f3e95]:
          - generic [ref=f3e97]:
            - link [ref=f3e102] [cursor=pointer]:
              - /url: /category/bebidas-y-licores
            - link [ref=f3e109] [cursor=pointer]:
              - /url: /category/carnes
            - link [ref=f3e116] [cursor=pointer]:
              - /url: /category/lacteos-huevos-y-refrigerados
          - button [ref=f3e121] [cursor=pointer]
          - button [ref=f3e124] [cursor=pointer]
        - generic [ref=f3e129]:
          - generic [ref=f3e134]:
            - generic [ref=f3e136]:
              - heading [level=3] [ref=f3e138]: Los más vendidos
              - link [ref=f3e140] [cursor=pointer]:
                - /url: /category/carnes
                - text: Mostrar todo
            - generic [ref=f3e141]:
              - generic [ref=f3e143]:
                - generic [ref=f3e145]:
                  - generic [ref=f3e146]:
                    - link [ref=f3e147] [cursor=pointer]:
                      - /url: /chuletas-de-cordero-simunovic-600-g/000000000000653082-UN.html
                    - button [ref=f3e149] [cursor=pointer]
                  - generic [ref=f3e152]:
                    - generic [ref=f3e154]:
                      - paragraph [ref=f3e155]: $18.990
                      - paragraph [ref=f3e156]: ($31.650 x kg)
                    - generic [ref=f3e157]:
                      - link [ref=f3e158] [cursor=pointer]:
                        - /url: /chuletas-de-cordero-simunovic-600-g/000000000000653082-UN.html
                        - generic [ref=f3e159]: Simunovic | Chuletas de cordero Simunovi…
                      - generic [ref=f3e160]: 600 g
                  - button [ref=f3e163] [cursor=pointer]: Agregar
                - generic [ref=f3e165]:
                  - generic [ref=f3e166]:
                    - link [ref=f3e167] [cursor=pointer]:
                      - /url: /abastero-vacuno-nacional-al-vacio-1.8-kg/000000000000028594-KGV.html
                    - button [ref=f3e169] [cursor=pointer]
                  - generic [ref=f3e172]:
                    - generic [ref=f3e174]:
                      - paragraph [ref=f3e175]: $11.190
                      - paragraph [ref=f3e176]: ($6.217 x kg)
                    - generic [ref=f3e177]:
                      - link [ref=f3e178] [cursor=pointer]:
                        - /url: /abastero-vacuno-nacional-al-vacio-1.8-kg/000000000000028594-KGV.html
                        - generic [ref=f3e179]: Nacional | Abastero vacuno Nacional al v…
                      - generic [ref=f3e180]: 1.8 kg
                  - button [ref=f3e183] [cursor=pointer]: Agregar
                - generic [ref=f3e185]:
                  - generic [ref=f3e186]:
                    - link [ref=f3e187] [cursor=pointer]:
                      - /url: /albondigas-super-pollo-espaciales-congeladas-300-g/000000000000675191-UN.html
                    - button [ref=f3e189] [cursor=pointer]
                  - generic [ref=f3e192]:
                    - generic [ref=f3e194]:
                      - paragraph [ref=f3e195]: $2.490
                      - paragraph [ref=f3e196]: ($8.300 x kg)
                    - generic [ref=f3e197]: Pronto disponible
                    - generic [ref=f3e199]:
                      - link [ref=f3e200] [cursor=pointer]:
                        - /url: /albondigas-super-pollo-espaciales-congeladas-300-g/000000000000675191-UN.html
                        - generic [ref=f3e201]: Super Pollo | Albondigas Super Pollo esp…
                      - generic [ref=f3e202]: 300 g
                  - button [ref=f3e205] [cursor=pointer]: Ver similares
                - generic [ref=f3e207]:
                  - generic [ref=f3e208]:
                    - link [ref=f3e209] [cursor=pointer]:
                      - /url: /alitas-trutro-de-pollo-super-pollo-congelado-800-g/000000000000748600-UN.html
                    - button [ref=f3e211] [cursor=pointer]
                  - generic [ref=f3e214]:
                    - generic [ref=f3e216]:
                      - paragraph [ref=f3e217]: $4.390
                      - paragraph [ref=f3e218]: ($5.488 x kg)
                    - generic [ref=f3e219]:
                      - link [ref=f3e220] [cursor=pointer]:
                        - /url: /alitas-trutro-de-pollo-super-pollo-congelado-800-g/000000000000748600-UN.html
                        - generic [ref=f3e221]: Super Pollo | Alitas trutro de pollo Sup…
                      - generic [ref=f3e222]: 800 g
                  - button [ref=f3e225] [cursor=pointer]: Agregar
                - generic [ref=f3e227]:
                  - generic [ref=f3e228]:
                    - link [ref=f3e229] [cursor=pointer]:
                      - /url: /carne-molida-4-grasa-tartaro-fundo-rio-alegre-250-g/000000000000662457-UN.html
                    - button [pressed] [ref=f3e231] [cursor=pointer]
                  - generic [ref=f3e234]:
                    - generic [ref=f3e235]:
                      - generic [ref=f3e236]:
                        - generic [ref=f3e237]:
                          - generic [aria-hidden] [ref=f3e238]: 💎
                          - paragraph [ref=f3e239]: $2.897
                        - paragraph [ref=f3e240]: ($11.588 x kg)
                      - generic [ref=f3e241]:
                        - paragraph [ref=f3e242]: $3.890
                        - paragraph [ref=f3e243]: ($15.560 x kg)
                    - generic [ref=f3e244]:
                      - link [ref=f3e245] [cursor=pointer]:
                        - /url: /carne-molida-4-grasa-tartaro-fundo-rio-alegre-250-g/000000000000662457-UN.html
                        - generic [ref=f3e246]: Fundo Rio Alegre | Carne molida 4% grasa…
                      - generic [ref=f3e247]: 250 g
                  - button [ref=f3e250] [cursor=pointer]: Agregar
                - generic [ref=f3e252]:
                  - generic [ref=f3e253]:
                    - link [ref=f3e254] [cursor=pointer]:
                      - /url: /carne-molida-4-grasa-vacuno-fundo-rio-alegre-tartaro-250-g/000000000000652051-UN.html
                    - button [ref=f3e256] [cursor=pointer]
                  - generic [ref=f3e259]:
                    - generic [ref=f3e260]:
                      - generic [ref=f3e261]:
                        - generic [ref=f3e262]:
                          - generic [aria-hidden] [ref=f3e263]: 💎
                          - paragraph [ref=f3e264]: $2.897
                        - paragraph [ref=f3e265]: ($11.588 x kg)
                      - generic [ref=f3e266]:
                        - paragraph [ref=f3e267]: $3.890
                        - paragraph [ref=f3e268]: ($15.560 x kg)
                    - generic [ref=f3e269]:
                      - link [ref=f3e270] [cursor=pointer]:
                        - /url: /carne-molida-4-grasa-vacuno-fundo-rio-alegre-tartaro-250-g/000000000000652051-UN.html
                        - generic [ref=f3e271]: Fundo Rio Alegre | Carne molida 4% grasa…
                      - generic [ref=f3e272]: 250 g
                  - button [ref=f3e275] [cursor=pointer]: Agregar
                - generic [ref=f3e277]:
                  - generic [ref=f3e278]:
                    - link [ref=f3e279] [cursor=pointer]:
                      - /url: /carne-molida-fundo-rio-alegre-tartaro-4-grasa-500g/000000000000666200-UN.html
                    - generic [ref=f3e281]: Promoción Lleva 2 unidades por Monto
                    - button [pressed] [ref=f3e282] [cursor=pointer]
                  - generic [ref=f3e285]:
                    - generic [ref=f3e286]:
                      - generic [ref=f3e287]:
                        - generic [ref=f3e288]:
                          - generic [aria-hidden] [ref=f3e289]: 💎
                          - paragraph [ref=f3e290]: Lleva 2 por $10.866
                        - paragraph [ref=f3e291]: ($10.866 x kg)
                      - generic [ref=f3e292]:
                        - generic [ref=f3e293]: Lleva 2 por $12.490
                        - paragraph [ref=f3e294]: ($12.490 x kg)
                      - generic [ref=f3e295]:
                        - paragraph [ref=f3e296]: $7.690 c/u
                        - paragraph [ref=f3e297]: ($15.380 x kg)
                    - generic [ref=f3e298]:
                      - link [ref=f3e299] [cursor=pointer]:
                        - /url: /carne-molida-fundo-rio-alegre-tartaro-4-grasa-500g/000000000000666200-UN.html
                        - generic [ref=f3e300]: Fundo Rio Alegre | Carne molida fundo ri…
                      - generic [ref=f3e301]: 500 g
                  - generic [ref=f3e303]:
                    - button [ref=f3e304] [cursor=pointer]:
                      - generic [aria-hidden] [ref=f3e305]: 😎
                      - paragraph [ref=f3e306]: Combina la promo
                    - button [ref=f3e308] [cursor=pointer]: Agregar
                - generic [ref=f3e310]:
                  - generic [ref=f3e311]:
                    - link [ref=f3e312] [cursor=pointer]:
                      - /url: /carne-molida-tartaro-fundo-rio-alegre-4-grasa-500g/000000000000666285-UN.html
                    - generic [ref=f3e314]: Promoción Lleva 2 unidades por Monto
                    - button [pressed] [ref=f3e315] [cursor=pointer]
                  - generic [ref=f3e318]:
                    - generic [ref=f3e319]:
                      - generic [ref=f3e320]:
                        - generic [ref=f3e321]:
                          - generic [aria-hidden] [ref=f3e322]: 💎
                          - paragraph [ref=f3e323]: Lleva 2 por $10.866
                        - paragraph [ref=f3e324]: ($10.866 x kg)
                      - generic [ref=f3e325]:
                        - generic [ref=f3e326]: Lleva 2 por $12.490
                        - paragraph [ref=f3e327]: ($12.490 x kg)
                      - generic [ref=f3e328]:
                        - paragraph [ref=f3e329]: $7.690 c/u
                        - paragraph [ref=f3e330]: ($15.380 x kg)
                    - generic [ref=f3e331]:
                      - link [ref=f3e332] [cursor=pointer]:
                        - /url: /carne-molida-tartaro-fundo-rio-alegre-4-grasa-500g/000000000000666285-UN.html
                        - generic [ref=f3e333]: Fundo Rio Alegre | Carne molida tartaro …
                      - generic [ref=f3e334]: 500 g
                  - generic [ref=f3e336]:
                    - button [ref=f3e337] [cursor=pointer]:
                      - generic [aria-hidden] [ref=f3e338]: 😎
                      - paragraph [ref=f3e339]: Combina la promo
                    - button [ref=f3e341] [cursor=pointer]: Agregar
                - generic [ref=f3e343]:
                  - generic [ref=f3e344]:
                    - link [ref=f3e345] [cursor=pointer]:
                      - /url: /choclillo-vacuno-nacional-al-vacio-1.3-kg/000000000000028597-KGV.html
                    - button [ref=f3e347] [cursor=pointer]
                  - generic [ref=f3e350]:
                    - generic [ref=f3e352]:
                      - paragraph [ref=f3e353]: $11.990
                      - paragraph [ref=f3e354]: ($9.223 x kg)
                    - generic [ref=f3e355]:
                      - link [ref=f3e356] [cursor=pointer]:
                        - /url: /choclillo-vacuno-nacional-al-vacio-1.3-kg/000000000000028597-KGV.html
                        - generic [ref=f3e357]: Nacional | Choclillo vacuno Nacional al …
                      - generic [ref=f3e358]: 1.3 kg
                  - button [ref=f3e361] [cursor=pointer]: Agregar
                - generic [ref=f3e363]:
                  - generic [ref=f3e364]:
                    - link [ref=f3e365] [cursor=pointer]:
                      - /url: /chuleta-centro-de-cerdo-super-cerdo-bandeja-550-g/000000000000626717-UN.html
                    - button [ref=f3e367] [cursor=pointer]
                  - generic [ref=f3e370]:
                    - generic [ref=f3e372]:
                      - paragraph [ref=f3e373]: $4.890
                      - paragraph [ref=f3e374]: ($8.891 x kg)
                    - generic [ref=f3e375]:
                      - link [ref=f3e376] [cursor=pointer]:
                        - /url: /chuleta-centro-de-cerdo-super-cerdo-bandeja-550-g/000000000000626717-UN.html
                        - generic [ref=f3e377]: Super Cerdo | Chuleta centro de cerdo Su…
                      - generic [ref=f3e378]: 550 g
                  - button [ref=f3e381] [cursor=pointer]: Agregar
                - generic [ref=f3e383]:
                  - generic [ref=f3e384]:
                    - link [ref=f3e385] [cursor=pointer]:
                      - /url: /chuleta-centro-de-cerdo-super-cerdo-congelado-750-g/000000000000627635-UN.html
                    - button [ref=f3e387] [cursor=pointer]
                  - generic [ref=f3e390]:
                    - generic [ref=f3e391]:
                      - generic [ref=f3e392]:
                        - generic [ref=f3e393]:
                          - generic [aria-hidden] [ref=f3e394]: 💎
                          - paragraph [ref=f3e395]: $6.291
                        - paragraph [ref=f3e396]: ($8.388 x kg)
                      - generic [ref=f3e397]:
                        - generic [ref=f3e398]: 10%
                        - paragraph [ref=f3e399]: $6.291
                        - paragraph [ref=f3e400]: ($8.388 x kg)
                      - paragraph [ref=f3e401]: "Antes: $6.990"
                    - generic [ref=f3e402]:
                      - link [ref=f3e403] [cursor=pointer]:
                        - /url: /chuleta-centro-de-cerdo-super-cerdo-congelado-750-g/000000000000627635-UN.html
                        - generic [ref=f3e404]: Super Cerdo | Chuleta centro de cerdo Su…
                      - generic [ref=f3e405]: 750 g
                  - button [ref=f3e408] [cursor=pointer]: Agregar
                - generic [ref=f3e410]:
                  - generic [ref=f3e411]:
                    - link [ref=f3e412] [cursor=pointer]:
                      - /url: /chuleta-parrillera-de-cordero-congelado-caja-1.5-kg/000000000000219902-UN.html
                    - button [ref=f3e414] [cursor=pointer]
                  - generic [ref=f3e417]:
                    - paragraph [ref=f3e420]: $43.990
                    - generic [ref=f3e421]:
                      - link [ref=f3e422] [cursor=pointer]:
                        - /url: /chuleta-parrillera-de-cordero-congelado-caja-1.5-kg/000000000000219902-UN.html
                        - generic [ref=f3e423]: Chuleta parrillera de cordero congelado …
                      - generic [ref=f3e424]: 1.5 kg
                  - button [ref=f3e427] [cursor=pointer]: Agregar
              - button [ref=f3e430] [cursor=pointer]
              - button [ref=f3e433] [cursor=pointer]
          - generic [ref=f3e440]:
            - generic [ref=f3e441]:
              - link [ref=f3e443] [cursor=pointer]:
                - /url: /category/frutas-y-verduras
              - generic [ref=f3e446]:
                - generic [ref=f3e447]:
                  - paragraph [ref=f3e449]: "45"
                  - paragraph [ref=f3e450]: días
                - paragraph [ref=f3e452]: ":"
                - generic [ref=f3e453]:
                  - paragraph [ref=f3e455]: "06"
                  - paragraph [ref=f3e456]: horas
                - paragraph [ref=f3e458]: ":"
                - generic [ref=f3e459]:
                  - paragraph [ref=f3e461]: "54"
                  - paragraph [ref=f3e462]: minutos
                - paragraph [ref=f3e464]: ":"
                - generic [ref=f3e465]:
                  - paragraph [ref=f3e467]: "19"
                  - paragraph [ref=f3e468]: segundos
            - generic [ref=f3e472]:
              - generic [ref=f3e474]:
                - generic [ref=f3e475]:
                  - link [ref=f3e476] [cursor=pointer]:
                    - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                  - button [ref=f3e478] [cursor=pointer]
                - generic [ref=f3e481]:
                  - paragraph [ref=f3e484]: $1.290
                  - generic [ref=f3e485]:
                    - link [ref=f3e486] [cursor=pointer]:
                      - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                      - text: Agua saborizada Más manzana 1.6 L
                    - generic [ref=f3e487]: 1.6 l
                - button [ref=f3e490] [cursor=pointer]: Agregar
              - generic [ref=f3e492]:
                - generic [ref=f3e493]:
                  - link [ref=f3e494] [cursor=pointer]:
                    - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                  - button [ref=f3e496] [cursor=pointer]
                - generic [ref=f3e499]:
                  - generic [ref=f3e501]:
                    - paragraph [ref=f3e502]: $2.550
                    - paragraph [ref=f3e503]: ($1.275 x unidad)
                  - generic [ref=f3e504]: Pronto disponible
                  - generic [ref=f3e506]:
                    - link [ref=f3e507] [cursor=pointer]:
                      - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                      - generic [ref=f3e508]: Frutas y Verduras | Choclo bandeja 2 un
                    - generic [ref=f3e509]: 2 un
                - button [ref=f3e512] [cursor=pointer]: Ver similares
              - generic [ref=f3e514]:
                - generic [ref=f3e515]:
                  - link [ref=f3e516] [cursor=pointer]:
                    - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                  - button [ref=f3e518] [cursor=pointer]
                - generic [ref=f3e521]:
                  - generic [ref=f3e522]: Pronto disponible
                  - link [ref=f3e525] [cursor=pointer]:
                    - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                    - generic [ref=f3e526]: Proverde | Choclo cocida Proverde bolsa …
                - button [ref=f3e528] [cursor=pointer]: Ver similares
              - generic [ref=f3e530]:
                - generic [ref=f3e531]:
                  - link [ref=f3e532] [cursor=pointer]:
                    - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                  - button [ref=f3e534] [cursor=pointer]
                - generic [ref=f3e537]:
                  - paragraph [ref=f3e540]: $2.490
                  - generic [ref=f3e541]:
                    - link [ref=f3e542] [cursor=pointer]:
                      - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                      - generic [ref=f3e543]: Frutas y Verduras | Clementina malla 1 K…
                    - generic [ref=f3e544]: 1 kg
                - button [ref=f3e547] [cursor=pointer]: Agregar
              - generic [ref=f3e549]:
                - generic [ref=f3e550]:
                  - link [ref=f3e551] [cursor=pointer]:
                    - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                  - button [ref=f3e553] [cursor=pointer]
                - generic [ref=f3e556]:
                  - paragraph [ref=f3e559]: $1.999
                  - generic [ref=f3e560]:
                    - link [ref=f3e561] [cursor=pointer]:
                      - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                      - generic [ref=f3e562]: Frutas y Verduras | Clementina malla 1 K…
                    - generic [ref=f3e563]: 1 kg
                - button [ref=f3e566] [cursor=pointer]: Agregar
              - generic [ref=f3e568]:
                - generic [ref=f3e569]:
                  - link [ref=f3e570] [cursor=pointer]:
                    - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                  - button [ref=f3e572] [cursor=pointer]
                - generic [ref=f3e575]:
                  - generic [ref=f3e577]:
                    - paragraph [ref=f3e578]: $1.375
                    - paragraph [ref=f3e579]: ($2.750 x kg)
                  - generic [ref=f3e580]:
                    - link [ref=f3e581] [cursor=pointer]:
                      - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                      - generic [ref=f3e582]: Frutas y Verduras | Clementinas granel 5…
                    - generic [ref=f3e583]: 500 g
                - button [ref=f3e586] [cursor=pointer]: Agregar
              - generic [ref=f3e588]:
                - generic [ref=f3e589]:
                  - link [ref=f3e590] [cursor=pointer]:
                    - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                  - button [ref=f3e592] [cursor=pointer]
                - generic [ref=f3e595]:
                  - generic [ref=f3e597]:
                    - paragraph [ref=f3e598]: $1.999
                    - paragraph [ref=f3e599]: ($3.998 x kg)
                  - generic [ref=f3e600]:
                    - link [ref=f3e601] [cursor=pointer]:
                      - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                      - generic [ref=f3e602]: Frutas y Verduras | Clementinas granel 5…
                    - generic [ref=f3e603]: 500 g
                - button [ref=f3e606] [cursor=pointer]: Agregar
              - generic [ref=f3e608]:
                - generic [ref=f3e609]:
                  - link [ref=f3e610] [cursor=pointer]:
                    - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                  - generic [ref=f3e612]: Promoción % Unipay
                  - button [ref=f3e613] [cursor=pointer]
                - generic [ref=f3e616]:
                  - generic [ref=f3e617]:
                    - generic [ref=f3e619]:
                      - generic [aria-hidden] [ref=f3e620]: 💎
                      - paragraph [ref=f3e621]: $2.601
                    - generic [ref=f3e622]:
                      - generic [ref=f3e623]: 10%
                      - paragraph [ref=f3e624]: $2.601
                    - paragraph [ref=f3e625]: "Antes: $2.890"
                  - generic [ref=f3e626]:
                    - link [ref=f3e627] [cursor=pointer]:
                      - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                      - generic [ref=f3e628]: Frutas y Verduras | Kiwi bolsa 1 Kg
                    - generic [ref=f3e629]: 1 kg
                - button [ref=f3e632] [cursor=pointer]: Agregar
              - generic [ref=f3e634]:
                - generic [ref=f3e635]:
                  - link [ref=f3e636] [cursor=pointer]:
                    - /url: /kiwi-bolsa-1-kg/000000000010062644-UN.html
                  - button [ref=f3e638] [cursor=pointer]
                - generic [ref=f3e641]:
                  - paragraph [ref=f3e644]: $1.999
                  - generic [ref=f3e645]:
                    - link [ref=f3e646] [cursor=pointer]:
                      - /url: /kiwi-bolsa-1-kg/000000000010062644-UN.html
                      - generic [ref=f3e647]: Frutas y Verduras | Kiwi bolsa 1 Kg
                    - generic [ref=f3e648]: 1 kg
                - button [ref=f3e651] [cursor=pointer]: Agregar
              - generic [ref=f3e653]:
                - generic [ref=f3e654]:
                  - link [ref=f3e655] [cursor=pointer]:
                    - /url: /limon-granel-500-g/000000000000553212-KG.html
                  - button [ref=f3e657] [cursor=pointer]
                - generic [ref=f3e660]:
                  - generic [ref=f3e662]:
                    - paragraph [ref=f3e663]: $995
                    - paragraph [ref=f3e664]: ($1.990 x l)
                  - generic [ref=f3e665]:
                    - link [ref=f3e666] [cursor=pointer]:
                      - /url: /limon-granel-500-g/000000000000553212-KG.html
                      - generic [ref=f3e667]: Frutas y Verduras | Limón granel 500 g
                    - generic [ref=f3e668]: 500 g
                - button [ref=f3e671] [cursor=pointer]: Agregar
              - generic [ref=f3e673]:
                - generic [ref=f3e674]:
                  - link [ref=f3e675] [cursor=pointer]:
                    - /url: /limon-granel-500-g/000000000010553212-KG.html
                  - button [ref=f3e677] [cursor=pointer]
                - generic [ref=f3e680]:
                  - generic [ref=f3e682]:
                    - paragraph [ref=f3e683]: $1.999
                    - paragraph [ref=f3e684]: ($3.998 x l)
                  - generic [ref=f3e685]:
                    - link [ref=f3e686] [cursor=pointer]:
                      - /url: /limon-granel-500-g/000000000010553212-KG.html
                      - generic [ref=f3e687]: Frutas y Verduras | Limón granel 500 g
                    - generic [ref=f3e688]: 500 g
                - button [ref=f3e691] [cursor=pointer]: Agregar
              - generic [ref=f3e693]:
                - generic [ref=f3e694]:
                  - link [ref=f3e695] [cursor=pointer]:
                    - /url: /mangos-granel-500-g/000000000000037972-KG.html
                  - button [ref=f3e697] [cursor=pointer]
                - generic [ref=f3e700]:
                  - generic [ref=f3e702]:
                    - paragraph [ref=f3e703]: $2.790
                    - paragraph [ref=f3e704]: ($5.580 x kg)
                  - generic [ref=f3e705]:
                    - link [ref=f3e706] [cursor=pointer]:
                      - /url: /mangos-granel-500-g/000000000000037972-KG.html
                      - generic [ref=f3e707]: Frutas Y Verduras | Mangos granel 500 g
                    - generic [ref=f3e708]: 500 g
                - button [ref=f3e711] [cursor=pointer]: Agregar
          - generic [ref=f3e716]:
            - heading [level=2] [ref=f3e717]: Categorías destacadas
            - generic [ref=f3e719]:
              - link [ref=f3e723] [cursor=pointer]:
                - /url: /category/frutas-y-verduras
                - paragraph [ref=f3e727]: Orgánico
              - link [ref=f3e731] [cursor=pointer]:
                - /url: /category/congelados
                - paragraph [ref=f3e735]: Comida en casa
              - link [ref=f3e739] [cursor=pointer]:
                - /url: /category/panaderia-y-pasteleria
                - paragraph [ref=f3e743]: Panadería
              - link [ref=f3e747] [cursor=pointer]:
                - /url: /category/panaderia-y-pasteleria
                - paragraph [ref=f3e751]: Pastelería
              - link [ref=f3e755] [cursor=pointer]:
                - /url: /category/bebidas-y-licores
                - paragraph [ref=f3e759]: Celebraciones
              - link [ref=f3e763] [cursor=pointer]:
                - /url: /category/limpieza
                - paragraph [ref=f3e767]: Higiene personal
              - link [ref=f3e771] [cursor=pointer]:
                - /url: /category/limpieza
                - paragraph [ref=f3e775]: Limpieza
          - generic [ref=f3e778]:
            - generic [ref=f3e779]:
              - generic [ref=f3e780]:
                - heading [level=3] [ref=f3e781]: Cada día, una ocasión
                - link [ref=f3e782] [cursor=pointer]:
                  - /url: /search?q=ofertas
                  - text: Mostrar todo
              - paragraph [ref=f3e783]: Encuentra aquí todo lo que necesitas y más
            - generic [ref=f3e784]:
              - generic [ref=f3e786]:
                - link [ref=f3e790] [cursor=pointer]:
                  - /url: /category/carnes
                  - paragraph [ref=f3e796]: Asaíto
                - link [ref=f3e800] [cursor=pointer]:
                  - /url: /category/despensa
                  - paragraph [ref=f3e806]: Picoteo
                - link [ref=f3e810] [cursor=pointer]:
                  - /url: /category/frutas-y-verduras
                  - paragraph [ref=f3e816]: Orgánico
                - link [ref=f3e820] [cursor=pointer]:
                  - /url: /category/desayuno-y-dulces
                  - paragraph [ref=f3e826]: Colaciones
              - button [disabled] [ref=f3e829] [cursor=pointer]
              - button [ref=f3e832] [cursor=pointer]
          - generic [ref=f3e839]:
            - generic [ref=f3e841]:
              - generic [ref=f3e842]:
                - heading [level=3] [ref=f3e843]: Frescura y calidad
                - link [ref=f3e844] [cursor=pointer]:
                  - /url: /category/frutas-y-verduras
                  - text: Mostrar todo
              - paragraph [ref=f3e845]: Frutas y verduras
            - generic [ref=f3e846]:
              - link [ref=f3e847] [cursor=pointer]:
                - /url: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/frutas-y-verduras_frutas
                - paragraph [ref=f3e851]: OFERTA
                - generic:
                  - generic:
                    - paragraph: Mecadito Unimarc
                    - generic:
                      - paragraph: "40"
                      - generic:
                        - paragraph: "%"
                        - paragraph: dcto
              - generic [ref=f3e853]:
                - generic [ref=f3e855]:
                  - generic [ref=f3e857]:
                    - generic [ref=f3e858]:
                      - link [ref=f3e859] [cursor=pointer]:
                        - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                      - button [ref=f3e861] [cursor=pointer]
                    - generic [ref=f3e864]:
                      - paragraph [ref=f3e867]: $1.290
                      - generic [ref=f3e868]:
                        - link [ref=f3e869] [cursor=pointer]:
                          - /url: /agua-saborizada-mas-manzana-1.6-l/000000000000615251-UN.html
                          - text: Agua saborizada Más manzana 1.6 L
                        - generic [ref=f3e870]: 1.6 l
                    - button [ref=f3e873] [cursor=pointer]: Agregar
                  - generic [ref=f3e875]:
                    - generic [ref=f3e876]:
                      - link [ref=f3e877] [cursor=pointer]:
                        - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                      - button [ref=f3e879] [cursor=pointer]
                    - generic [ref=f3e882]:
                      - generic [ref=f3e884]:
                        - paragraph [ref=f3e885]: $2.550
                        - paragraph [ref=f3e886]: ($1.275 x unidad)
                      - generic [ref=f3e887]: Pronto disponible
                      - generic [ref=f3e889]:
                        - link [ref=f3e890] [cursor=pointer]:
                          - /url: /choclo-bandeja-2-un/000000000000028462-UN.html
                          - generic [ref=f3e891]: Frutas y Verduras | Choclo bandeja 2 un
                        - generic [ref=f3e892]: 2 un
                    - button [ref=f3e895] [cursor=pointer]: Ver similares
                  - generic [ref=f3e897]:
                    - generic [ref=f3e898]:
                      - link [ref=f3e899] [cursor=pointer]:
                        - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                      - button [ref=f3e901] [cursor=pointer]
                    - generic [ref=f3e904]:
                      - generic [ref=f3e905]: Pronto disponible
                      - link [ref=f3e908] [cursor=pointer]:
                        - /url: /choclo-cocida-proverde-bolsa-500-gr/000000000000712102-UN.html
                        - generic [ref=f3e909]: Proverde | Choclo cocida Proverde bolsa …
                    - button [ref=f3e911] [cursor=pointer]: Ver similares
                  - generic [ref=f3e913]:
                    - generic [ref=f3e914]:
                      - link [ref=f3e915] [cursor=pointer]:
                        - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                      - button [ref=f3e917] [cursor=pointer]
                    - generic [ref=f3e920]:
                      - paragraph [ref=f3e923]: $2.490
                      - generic [ref=f3e924]:
                        - link [ref=f3e925] [cursor=pointer]:
                          - /url: /clementina-malla-1-kg/000000000000037966-UN.html
                          - generic [ref=f3e926]: Frutas y Verduras | Clementina malla 1 K…
                        - generic [ref=f3e927]: 1 kg
                    - button [ref=f3e930] [cursor=pointer]: Agregar
                  - generic [ref=f3e932]:
                    - generic [ref=f3e933]:
                      - link [ref=f3e934] [cursor=pointer]:
                        - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                      - button [ref=f3e936] [cursor=pointer]
                    - generic [ref=f3e939]:
                      - paragraph [ref=f3e942]: $1.999
                      - generic [ref=f3e943]:
                        - link [ref=f3e944] [cursor=pointer]:
                          - /url: /clementina-malla-1-kg/000000000010037966-UN.html
                          - generic [ref=f3e945]: Frutas y Verduras | Clementina malla 1 K…
                        - generic [ref=f3e946]: 1 kg
                    - button [ref=f3e949] [cursor=pointer]: Agregar
                  - generic [ref=f3e951]:
                    - generic [ref=f3e952]:
                      - link [ref=f3e953] [cursor=pointer]:
                        - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                      - button [ref=f3e955] [cursor=pointer]
                    - generic [ref=f3e958]:
                      - generic [ref=f3e960]:
                        - paragraph [ref=f3e961]: $1.375
                        - paragraph [ref=f3e962]: ($2.750 x kg)
                      - generic [ref=f3e963]:
                        - link [ref=f3e964] [cursor=pointer]:
                          - /url: /clementinas-granel-500-g/000000000000037969-KG.html
                          - generic [ref=f3e965]: Frutas y Verduras | Clementinas granel 5…
                        - generic [ref=f3e966]: 500 g
                    - button [ref=f3e969] [cursor=pointer]: Agregar
                  - generic [ref=f3e971]:
                    - generic [ref=f3e972]:
                      - link [ref=f3e973] [cursor=pointer]:
                        - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                      - button [ref=f3e975] [cursor=pointer]
                    - generic [ref=f3e978]:
                      - generic [ref=f3e980]:
                        - paragraph [ref=f3e981]: $1.999
                        - paragraph [ref=f3e982]: ($3.998 x kg)
                      - generic [ref=f3e983]:
                        - link [ref=f3e984] [cursor=pointer]:
                          - /url: /clementinas-granel-500-g/000000000010037969-KG.html
                          - generic [ref=f3e985]: Frutas y Verduras | Clementinas granel 5…
                        - generic [ref=f3e986]: 500 g
                    - button [ref=f3e989] [cursor=pointer]: Agregar
                  - generic [ref=f3e991]:
                    - generic [ref=f3e992]:
                      - link [ref=f3e993] [cursor=pointer]:
                        - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                      - generic [ref=f3e995]: Promoción % Unipay
                      - button [ref=f3e996] [cursor=pointer]
                    - generic [ref=f3e999]:
                      - generic [ref=f3e1000]:
                        - generic [ref=f3e1002]:
                          - generic [aria-hidden] [ref=f3e1003]: 💎
                          - paragraph [ref=f3e1004]: $2.601
                        - generic [ref=f3e1005]:
                          - generic [ref=f3e1006]: 10%
                          - paragraph [ref=f3e1007]: $2.601
                        - paragraph [ref=f3e1008]: "Antes: $2.890"
                      - generic [ref=f3e1009]:
                        - link [ref=f3e1010] [cursor=pointer]:
                          - /url: /kiwi-bolsa-1-kg/000000000000062644-UN.html
                          - generic [ref=f3e1011]: Frutas y Verduras | Kiwi bolsa 1 Kg
                        - generic [ref=f3e1012]: 1 kg
                    - button [ref=f3e1015] [cursor=pointer]: Agregar
                - button [ref=f3e1018] [cursor=pointer]
                - button [ref=f3e1021] [cursor=pointer]
          - generic [ref=f3e1027]:
            - generic [ref=f3e1028]:
              - generic [ref=f3e1029]:
                - heading [level=3] [ref=f3e1030]: Prende la parrilla
                - link [ref=f3e1031] [cursor=pointer]:
                  - /url: /search?q=parrilla
                  - text: Mostrar todo
              - paragraph [ref=f3e1032]: Disfruta de un rico Asaito
            - generic [ref=f3e1034]:
              - link [ref=f3e1039] [cursor=pointer]:
                - /url: /search?q=parrilla
              - link [ref=f3e1046] [cursor=pointer]:
                - /url: /category/carnes
              - link [ref=f3e1053] [cursor=pointer]:
                - /url: /search?q=guarniciones
              - link [ref=f3e1060] [cursor=pointer]:
                - /url: /category/carnes
              - link [ref=f3e1067] [cursor=pointer]:
                - /url: /search?q=picoteo
          - generic [ref=f3e1074]:
            - generic [ref=f3e1076]:
              - generic [ref=f3e1077]:
                - heading [level=3] [ref=f3e1078]: Chocolates Milka
                - link [ref=f3e1079] [cursor=pointer]:
                  - /url: /category/panaderia-y-pasteleria
                  - text: Mostrar todo
              - paragraph [ref=f3e1080]: Endulza tu día
            - generic [ref=f3e1081]:
              - link [ref=f3e1082] [cursor=pointer]:
                - /url: /category/panaderia-y-pasteleria
                - paragraph [ref=f3e1085]: 40% dcto
                - generic:
                  - generic:
                    - paragraph: Chocolates Milka Variedades
                    - generic:
                      - paragraph: "40"
                      - generic:
                        - paragraph: "%"
                        - paragraph: dcto
              - generic [ref=f3e1087]:
                - generic [ref=f3e1089]:
                  - generic [ref=f3e1091]:
                    - generic [ref=f3e1092]:
                      - link [ref=f3e1093] [cursor=pointer]:
                        - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                      - button [ref=f3e1095] [cursor=pointer]
                    - generic [ref=f3e1098]:
                      - paragraph [ref=f3e1101]: $1.180
                      - generic [ref=f3e1102]:
                        - link [ref=f3e1103] [cursor=pointer]:
                          - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                          - text: Galleta Alteza bocado 140 g
                        - generic [ref=f3e1104]: 140 g
                    - button [ref=f3e1107] [cursor=pointer]: Agregar
                  - generic [ref=f3e1109]:
                    - generic [ref=f3e1110]:
                      - link [ref=f3e1111] [cursor=pointer]:
                        - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                      - button [ref=f3e1113] [cursor=pointer]
                    - generic [ref=f3e1116]:
                      - paragraph [ref=f3e1119]: $280
                      - generic [ref=f3e1120]:
                        - link [ref=f3e1121] [cursor=pointer]:
                          - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                          - text: Galleta mini Dos en Uno chocolate 35 g
                        - generic [ref=f3e1122]: 35 g
                    - button [ref=f3e1125] [cursor=pointer]: Agregar
                  - generic [ref=f3e1127]:
                    - generic [ref=f3e1128]:
                      - link [ref=f3e1129] [cursor=pointer]:
                        - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                      - button [ref=f3e1131] [cursor=pointer]
                    - generic [ref=f3e1134]:
                      - generic [ref=f3e1135]:
                        - generic [ref=f3e1136]:
                          - generic [ref=f3e1137]: Unipay $757
                          - paragraph [ref=f3e1138]: ($6.882 x kg)
                        - generic [ref=f3e1139]:
                          - paragraph [ref=f3e1140]: $890
                          - paragraph [ref=f3e1141]: ($8.091 x kg)
                      - generic [ref=f3e1142]:
                        - link [ref=f3e1143] [cursor=pointer]:
                          - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                          - generic [ref=f3e1144]: Oreo | Galleta Oreo clásica vainilla 108…
                        - generic [ref=f3e1145]: 108 g
                    - button [ref=f3e1148] [cursor=pointer]: Agregar
                  - generic [ref=f3e1150]:
                    - generic [ref=f3e1151]:
                      - link [ref=f3e1152] [cursor=pointer]:
                        - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                      - button [pressed] [ref=f3e1154] [cursor=pointer]
                    - generic [ref=f3e1157]:
                      - paragraph [ref=f3e1160]: $4.990
                      - generic [ref=f3e1161]:
                        - link [ref=f3e1162] [cursor=pointer]:
                          - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                          - generic [ref=f3e1163]: Galletas con mermelada La Galleteria 300…
                        - generic [ref=f3e1164]: 300 g
                    - button [ref=f3e1167] [cursor=pointer]: Agregar
                  - generic [ref=f3e1169]:
                    - generic [ref=f3e1170]:
                      - link [ref=f3e1171] [cursor=pointer]:
                        - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                      - button [ref=f3e1173] [cursor=pointer]
                    - generic [ref=f3e1176]:
                      - generic [ref=f3e1178]:
                        - paragraph [ref=f3e1179]: $1.290
                        - paragraph [ref=f3e1180]: ($4.607 x kg)
                      - generic [ref=f3e1181]:
                        - link [ref=f3e1182] [cursor=pointer]:
                          - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                          - generic [ref=f3e1183]: Europastry | Pan baguette plus Crandon 1…
                        - generic [ref=f3e1184]: 1 un
                    - button [ref=f3e1187] [cursor=pointer]: Agregar
                  - generic [ref=f3e1189]:
                    - generic [ref=f3e1190]:
                      - link [ref=f3e1191] [cursor=pointer]:
                        - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                      - button [ref=f3e1193] [cursor=pointer]
                    - generic [ref=f3e1196]:
                      - generic [ref=f3e1198]:
                        - paragraph [ref=f3e1199]: $1.495
                        - paragraph [ref=f3e1200]: ($2.990 x kg)
                      - generic [ref=f3e1201]:
                        - link [ref=f3e1202] [cursor=pointer]:
                          - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                          - generic [ref=f3e1203]: Amada Masa | Pan ciabatta granel Amada M…
                        - generic [ref=f3e1204]: 500 g
                    - button [ref=f3e1207] [cursor=pointer]: Agregar
                  - generic [ref=f3e1209]:
                    - generic [ref=f3e1210]:
                      - link [ref=f3e1211] [cursor=pointer]:
                        - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                      - button [ref=f3e1213] [cursor=pointer]
                    - generic [ref=f3e1216]:
                      - generic [ref=f3e1218]:
                        - paragraph [ref=f3e1219]: $2.990
                        - paragraph [ref=f3e1220]: ($5.980 x kg)
                      - generic [ref=f3e1221]:
                        - link [ref=f3e1222] [cursor=pointer]:
                          - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                          - generic [ref=f3e1223]: Amada Masa | Pan hot dog granel Amada Ma…
                        - generic [ref=f3e1224]: 500 g
                    - button [ref=f3e1227] [cursor=pointer]: Agregar
                  - generic [ref=f3e1229]:
                    - generic [ref=f3e1230]:
                      - link [ref=f3e1231] [cursor=pointer]:
                        - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                      - button [ref=f3e1233] [cursor=pointer]
                    - generic [ref=f3e1236]:
                      - paragraph [ref=f3e1239]: $1.095
                      - generic [ref=f3e1240]:
                        - link [ref=f3e1241] [cursor=pointer]:
                          - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                          - text: Pan marraqueta granel Amada Masa 500 g
                        - generic [ref=f3e1242]: 500 g
                    - button [ref=f3e1245] [cursor=pointer]: Agregar
                - button [ref=f3e1248] [cursor=pointer]
                - button [ref=f3e1251] [cursor=pointer]
        - link [ref=f3e1261] [cursor=pointer]:
          - /url: /search?q=despensa
        - generic [ref=f3e1267]:
          - generic [ref=f3e1268]:
            - heading [level=2] [ref=f3e1269]: Nuestras marcas
            - link [ref=f3e1270] [cursor=pointer]:
              - /url: /category/panaderia-y-pasteleria
              - text: Mostrar todo
          - generic [ref=f3e1271]:
            - tab [selected] [ref=f3e1272] [cursor=pointer]: Amada masa
            - tab [ref=f3e1273] [cursor=pointer]: Azul
            - tab [ref=f3e1274] [cursor=pointer]: Como en casa
            - tab [ref=f3e1275] [cursor=pointer]: D-kora
            - tab [ref=f3e1276] [cursor=pointer]: Fundo Río al
            - tab [ref=f3e1277] [cursor=pointer]: Nubelín
            - tab [ref=f3e1278] [cursor=pointer]: Nuestra coci
            - tab [ref=f3e1279] [cursor=pointer]: Smart Clean
            - tab [ref=f3e1280] [cursor=pointer]: Tento
          - generic [ref=f3e1283]:
            - generic [ref=f3e1285]:
              - generic [ref=f3e1287]:
                - generic [ref=f3e1288]:
                  - link [ref=f3e1289] [cursor=pointer]:
                    - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                  - button [ref=f3e1291] [cursor=pointer]
                - generic [ref=f3e1294]:
                  - paragraph [ref=f3e1297]: $1.180
                  - generic [ref=f3e1298]:
                    - link [ref=f3e1299] [cursor=pointer]:
                      - /url: /galleta-alteza-bocado-140-g/000000000400218001-UN.html
                      - text: Galleta Alteza bocado 140 g
                    - generic [ref=f3e1300]: 140 g
                - button [ref=f3e1303] [cursor=pointer]: Agregar
              - generic [ref=f3e1305]:
                - generic [ref=f3e1306]:
                  - link [ref=f3e1307] [cursor=pointer]:
                    - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                  - button [ref=f3e1309] [cursor=pointer]
                - generic [ref=f3e1312]:
                  - paragraph [ref=f3e1315]: $280
                  - generic [ref=f3e1316]:
                    - link [ref=f3e1317] [cursor=pointer]:
                      - /url: /galleta-mini-dos-en-uno-chocolate-35-g/000000000000780174-UN.html
                      - text: Galleta mini Dos en Uno chocolate 35 g
                    - generic [ref=f3e1318]: 35 g
                - button [ref=f3e1321] [cursor=pointer]: Agregar
              - generic [ref=f3e1323]:
                - generic [ref=f3e1324]:
                  - link [ref=f3e1325] [cursor=pointer]:
                    - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                  - button [ref=f3e1327] [cursor=pointer]
                - generic [ref=f3e1330]:
                  - generic [ref=f3e1331]:
                    - generic [ref=f3e1332]:
                      - generic [ref=f3e1333]: Unipay $757
                      - paragraph [ref=f3e1334]: ($6.882 x kg)
                    - generic [ref=f3e1335]:
                      - paragraph [ref=f3e1336]: $890
                      - paragraph [ref=f3e1337]: ($8.091 x kg)
                  - generic [ref=f3e1338]:
                    - link [ref=f3e1339] [cursor=pointer]:
                      - /url: /galleta-oreo-clasica-vainilla-108-g/000000000000642688-UN.html
                      - generic [ref=f3e1340]: Oreo | Galleta Oreo clásica vainilla 108…
                    - generic [ref=f3e1341]: 108 g
                - button [ref=f3e1344] [cursor=pointer]: Agregar
              - generic [ref=f3e1346]:
                - generic [ref=f3e1347]:
                  - link [ref=f3e1348] [cursor=pointer]:
                    - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                  - button [pressed] [ref=f3e1350] [cursor=pointer]
                - generic [ref=f3e1353]:
                  - paragraph [ref=f3e1356]: $4.990
                  - generic [ref=f3e1357]:
                    - link [ref=f3e1358] [cursor=pointer]:
                      - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                      - generic [ref=f3e1359]: Galletas con mermelada La Galleteria 300…
                    - generic [ref=f3e1360]: 300 g
                - button [ref=f3e1363] [cursor=pointer]: Agregar
              - generic [ref=f3e1365]:
                - generic [ref=f3e1366]:
                  - link [ref=f3e1367] [cursor=pointer]:
                    - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                  - button [ref=f3e1369] [cursor=pointer]
                - generic [ref=f3e1372]:
                  - generic [ref=f3e1374]:
                    - paragraph [ref=f3e1375]: $1.290
                    - paragraph [ref=f3e1376]: ($4.607 x kg)
                  - generic [ref=f3e1377]:
                    - link [ref=f3e1378] [cursor=pointer]:
                      - /url: /pan-baguette-plus-crandon-1-un/000000000000627587-UN.html
                      - generic [ref=f3e1379]: Europastry | Pan baguette plus Crandon 1…
                    - generic [ref=f3e1380]: 1 un
                - button [ref=f3e1383] [cursor=pointer]: Agregar
              - generic [ref=f3e1385]:
                - generic [ref=f3e1386]:
                  - link [ref=f3e1387] [cursor=pointer]:
                    - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                  - button [ref=f3e1389] [cursor=pointer]
                - generic [ref=f3e1392]:
                  - generic [ref=f3e1394]:
                    - paragraph [ref=f3e1395]: $1.495
                    - paragraph [ref=f3e1396]: ($2.990 x kg)
                  - generic [ref=f3e1397]:
                    - link [ref=f3e1398] [cursor=pointer]:
                      - /url: /pan-ciabatta-granel-amada-masa-500-g/000000000000638771-KG.html
                      - generic [ref=f3e1399]: Amada Masa | Pan ciabatta granel Amada M…
                    - generic [ref=f3e1400]: 500 g
                - button [ref=f3e1403] [cursor=pointer]: Agregar
              - generic [ref=f3e1405]:
                - generic [ref=f3e1406]:
                  - link [ref=f3e1407] [cursor=pointer]:
                    - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                  - button [ref=f3e1409] [cursor=pointer]
                - generic [ref=f3e1412]:
                  - generic [ref=f3e1414]:
                    - paragraph [ref=f3e1415]: $2.990
                    - paragraph [ref=f3e1416]: ($5.980 x kg)
                  - generic [ref=f3e1417]:
                    - link [ref=f3e1418] [cursor=pointer]:
                      - /url: /pan-hot-dog-granel-amada-masa-500-g/000000000000966671-KG.html
                      - generic [ref=f3e1419]: Amada Masa | Pan hot dog granel Amada Ma…
                    - generic [ref=f3e1420]: 500 g
                - button [ref=f3e1423] [cursor=pointer]: Agregar
              - generic [ref=f3e1425]:
                - generic [ref=f3e1426]:
                  - link [ref=f3e1427] [cursor=pointer]:
                    - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                  - button [ref=f3e1429] [cursor=pointer]
                - generic [ref=f3e1432]:
                  - paragraph [ref=f3e1435]: $1.095
                  - generic [ref=f3e1436]:
                    - link [ref=f3e1437] [cursor=pointer]:
                      - /url: /pan-marraqueta-granel-amada-masa-500-g/000000000000966669-KG.html
                      - text: Pan marraqueta granel Amada Masa 500 g
                    - generic [ref=f3e1438]: 500 g
                - button [ref=f3e1441] [cursor=pointer]: Agregar
              - generic [ref=f3e1443]:
                - generic [ref=f3e1444]:
                  - link [ref=f3e1445] [cursor=pointer]:
                    - /url: /pan-marraqueta-prosepan-500-g/000000000000030202-KG.html
                  - button [ref=f3e1447] [cursor=pointer]
                - generic [ref=f3e1450]:
                  - generic [ref=f3e1452]:
                    - paragraph [ref=f3e1453]: $1.095
                    - paragraph [ref=f3e1454]: ($2.190 x kg)
                  - generic [ref=f3e1455]:
                    - link [ref=f3e1456] [cursor=pointer]:
                      - /url: /pan-marraqueta-prosepan-500-g/000000000000030202-KG.html
                      - text: Pan marraqueta Prosepan 500 g
                    - generic [ref=f3e1457]: 500 g
                - button [ref=f3e1460] [cursor=pointer]: Agregar
              - generic [ref=f3e1462]:
                - generic [ref=f3e1463]:
                  - link [ref=f3e1464] [cursor=pointer]:
                    - /url: /pan-pita-integral-granel-amada-masa-500-g/000000000000614468-KG.html
                  - button [ref=f3e1466] [cursor=pointer]
                - generic [ref=f3e1469]:
                  - paragraph [ref=f3e1472]: $2.890
                  - generic [ref=f3e1473]:
                    - link [ref=f3e1474] [cursor=pointer]:
                      - /url: /pan-pita-integral-granel-amada-masa-500-g/000000000000614468-KG.html
                      - generic [ref=f3e1475]: Pan pita integral granel Amada Masa 500 …
                    - generic [ref=f3e1476]: 500 g
                - button [ref=f3e1479] [cursor=pointer]: Agregar
            - button [ref=f3e1482] [cursor=pointer]
            - button [ref=f3e1485] [cursor=pointer]
        - generic [ref=f3e1490]:
          - generic [ref=f3e1495]:
            - generic [ref=f3e1497]:
              - generic [ref=f3e1498]:
                - heading [level=3] [ref=f3e1499]: Especial Bebidas
                - link [ref=f3e1500] [cursor=pointer]:
                  - /url: /category/bebidas-y-licores
                  - text: Mostrar todo
              - paragraph [ref=f3e1501]: Bebidas vegetales y más
            - generic [ref=f3e1502]:
              - link [ref=f3e1503] [cursor=pointer]:
                - /url: /category/bebidas-y-licores
                - generic:
                  - generic:
                    - paragraph: Productos Not Variedades
                    - generic:
                      - paragraph: "30"
                      - generic:
                        - paragraph: "%"
                        - paragraph: dcto
              - generic [ref=f3e1507]:
                - generic [ref=f3e1509]:
                  - generic [ref=f3e1511]:
                    - generic [ref=f3e1512]:
                      - link [ref=f3e1513] [cursor=pointer]:
                        - /url: /cerveza-austral-lager-lata-470-cc/000000000000694333-UN.html
                      - button [ref=f3e1515] [cursor=pointer]
                    - generic [ref=f3e1518]:
                      - generic [ref=f3e1520]:
                        - paragraph [ref=f3e1521]: $2.090
                        - paragraph [ref=f3e1522]: ($4.447 x L)
                      - generic [ref=f3e1523]:
                        - link [ref=f3e1524] [cursor=pointer]:
                          - /url: /cerveza-austral-lager-lata-470-cc/000000000000694333-UN.html
                          - generic [ref=f3e1525]: Austral | Cerveza Austral lager lata 470…
                        - generic [ref=f3e1526]: 470 cc
                    - button [ref=f3e1529] [cursor=pointer]: Agregar
                  - generic [ref=f3e1531]:
                    - generic [ref=f3e1532]:
                      - link [ref=f3e1533] [cursor=pointer]:
                        - /url: /cerveza-budweiser-zero-botella-6-un-de-330-cc/000000000000663675-UN.html
                      - button [ref=f3e1535] [cursor=pointer]
                    - generic [ref=f3e1538]:
                      - generic [ref=f3e1540]:
                        - paragraph [ref=f3e1541]: $7.790
                        - paragraph [ref=f3e1542]: ($23.606 x L)
                      - generic [ref=f3e1543]:
                        - link [ref=f3e1544] [cursor=pointer]:
                          - /url: /cerveza-budweiser-zero-botella-6-un-de-330-cc/000000000000663675-UN.html
                          - generic [ref=f3e1545]: Budweiser | Cerveza Budweiser zero botel…
                        - generic [ref=f3e1546]: 6 un
                    - button [ref=f3e1549] [cursor=pointer]: Agregar
                  - generic [ref=f3e1551]:
                    - generic [ref=f3e1552]:
                      - link [ref=f3e1553] [cursor=pointer]:
                        - /url: /cerveza-corona-extra-lata-6-un-de-473-cc/000000000000686446-UN.html
                      - button [ref=f3e1555] [cursor=pointer]
                    - generic [ref=f3e1558]:
                      - generic [ref=f3e1560]:
                        - paragraph [ref=f3e1561]: $6.890
                        - paragraph [ref=f3e1562]: ($14.567 x L)
                      - generic [ref=f3e1563]:
                        - link [ref=f3e1564] [cursor=pointer]:
                          - /url: /cerveza-corona-extra-lata-6-un-de-473-cc/000000000000686446-UN.html
                          - generic [ref=f3e1565]: Corona | Cerveza Corona extra lata 6 un …
                        - generic [ref=f3e1566]: 6 un
                    - button [ref=f3e1569] [cursor=pointer]: Agregar
                  - generic [ref=f3e1571]:
                    - generic [ref=f3e1572]:
                      - link [ref=f3e1573] [cursor=pointer]:
                        - /url: /cerveza-cristal-lager-botella-650-cc/000000000000686452-UN.html
                      - button [ref=f3e1575] [cursor=pointer]
                    - generic [ref=f3e1578]:
                      - generic [ref=f3e1580]:
                        - paragraph [ref=f3e1581]: $1.350
                        - paragraph [ref=f3e1582]: ($2.077 x L)
                      - generic [ref=f3e1583]:
                        - link [ref=f3e1584] [cursor=pointer]:
                          - /url: /cerveza-cristal-lager-botella-650-cc/000000000000686452-UN.html
                          - generic [ref=f3e1585]: Cristal Cerveza | Cerveza Cristal lager …
                        - generic [ref=f3e1586]: 650 cc
                    - button [ref=f3e1589] [cursor=pointer]: Agregar
                  - generic [ref=f3e1591]:
                    - generic [ref=f3e1592]:
                      - link [ref=f3e1593] [cursor=pointer]:
                        - /url: /cerveza-duvel-moorgat-botella-330-cc/000000000000536215-UN.html
                      - button [ref=f3e1595] [cursor=pointer]
                    - generic [ref=f3e1598]:
                      - paragraph [ref=f3e1601]: $3.550
                      - generic [ref=f3e1602]:
                        - link [ref=f3e1603] [cursor=pointer]:
                          - /url: /cerveza-duvel-moorgat-botella-330-cc/000000000000536215-UN.html
                          - text: Cerveza Duvel moorgat botella 330 cc
                        - generic [ref=f3e1604]: 330 cc
                    - button [ref=f3e1607] [cursor=pointer]: Agregar
                  - generic [ref=f3e1609]:
                    - generic [ref=f3e1610]:
                      - link [ref=f3e1611] [cursor=pointer]:
                        - /url: /cerveza-royal-golden-lager-lata-6-un-de-470-cc/000000000000674841-DIS.html
                      - button [ref=f3e1613] [cursor=pointer]
                    - generic [ref=f3e1616]:
                      - generic [ref=f3e1618]:
                        - paragraph [ref=f3e1619]: $7.290
                        - paragraph [ref=f3e1620]: ($15.511 x L)
                      - generic [ref=f3e1621]:
                        - link [ref=f3e1622] [cursor=pointer]:
                          - /url: /cerveza-royal-golden-lager-lata-6-un-de-470-cc/000000000000674841-DIS.html
                          - generic [ref=f3e1623]: Royal Guard | Cerveza Royal golden lager…
                        - generic [ref=f3e1624]: 6 un
                    - button [ref=f3e1627] [cursor=pointer]: Agregar
                  - generic [ref=f3e1629]:
                    - generic [ref=f3e1630]:
                      - link [ref=f3e1631] [cursor=pointer]:
                        - /url: /cerveza-sabor-sandia-stones-350ml/000000000000689879-UN.html
                      - button [ref=f3e1633] [cursor=pointer]
                    - generic [ref=f3e1636]:
                      - generic [ref=f3e1638]:
                        - paragraph [ref=f3e1639]: $6.590
                        - paragraph [ref=f3e1640]: ($18.829 x L)
                      - generic [ref=f3e1641]:
                        - link [ref=f3e1642] [cursor=pointer]:
                          - /url: /cerveza-sabor-sandia-stones-350ml/000000000000689879-UN.html
                          - generic [ref=f3e1643]: Stones | Cerveza sabor sandía Stones 350…
                        - generic [ref=f3e1644]: 350 ml
                    - button [ref=f3e1647] [cursor=pointer]: Agregar
                  - generic [ref=f3e1649]:
                    - generic [ref=f3e1650]:
                      - link [ref=f3e1651] [cursor=pointer]:
                        - /url: /cerveza-stones-berries-lata-6-un-de-350-ml/000000000000671971-UN.html
                      - button [ref=f3e1653] [cursor=pointer]
                    - generic [ref=f3e1656]:
                      - generic [ref=f3e1658]:
                        - paragraph [ref=f3e1659]: $6.590
                        - paragraph [ref=f3e1660]: ($18.829 x L)
                      - generic [ref=f3e1661]:
                        - link [ref=f3e1662] [cursor=pointer]:
                          - /url: /cerveza-stones-berries-lata-6-un-de-350-ml/000000000000671971-UN.html
                          - generic [ref=f3e1663]: Stones | Cerveza Stones berries lata 6 u…
                        - generic [ref=f3e1664]: 6 un
                    - button [ref=f3e1667] [cursor=pointer]: Agregar
                - button [ref=f3e1670] [cursor=pointer]
                - button [ref=f3e1673] [cursor=pointer]
          - generic [ref=f3e1679]:
            - heading [level=2] [ref=f3e1680]: Tus productos mas comprados
            - link [ref=f3e1682] [cursor=pointer]:
              - /url: /account/my-usuals
              - text: Ver todos
            - generic [ref=f3e1684]:
              - generic [ref=f3e1686]:
                - generic [ref=f3e1687]:
                  - link [ref=f3e1688] [cursor=pointer]:
                    - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                  - button [pressed] [ref=f3e1690] [cursor=pointer]
                - generic [ref=f3e1693]:
                  - paragraph [ref=f3e1696]: $4.990
                  - generic [ref=f3e1697]:
                    - link [ref=f3e1698] [cursor=pointer]:
                      - /url: /galletas-con-mermelada-la-galleteria-300-g/000000000000027332-UN.html
                      - generic [ref=f3e1699]: Galletas con mermelada La Galleteria 300…
                    - generic [ref=f3e1700]: 300 g
                - button [ref=f3e1703] [cursor=pointer]: Agregar
              - generic [ref=f3e1705]:
                - generic [ref=f3e1706]:
                  - link [ref=f3e1707] [cursor=pointer]:
                    - /url: /carne-molida-4-grasa-tartaro-fundo-rio-alegre-250-g/000000000000662457-UN.html
                  - button [pressed] [ref=f3e1709] [cursor=pointer]
                - generic [ref=f3e1712]:
                  - generic [ref=f3e1713]:
                    - generic [ref=f3e1714]:
                      - generic [ref=f3e1715]:
                        - generic [aria-hidden] [ref=f3e1716]: 💎
                        - paragraph [ref=f3e1717]: $2.897
                      - paragraph [ref=f3e1718]: ($11.588 x kg)
                    - generic [ref=f3e1719]:
                      - paragraph [ref=f3e1720]: $3.890
                      - paragraph [ref=f3e1721]: ($15.560 x kg)
                  - generic [ref=f3e1722]:
                    - link [ref=f3e1723] [cursor=pointer]:
                      - /url: /carne-molida-4-grasa-tartaro-fundo-rio-alegre-250-g/000000000000662457-UN.html
                      - generic [ref=f3e1724]: Fundo Rio Alegre | Carne molida 4% grasa…
                    - generic [ref=f3e1725]: 250 g
                - button [ref=f3e1728] [cursor=pointer]: Agregar
              - generic [ref=f3e1730]:
                - generic [ref=f3e1731]:
                  - link [ref=f3e1732] [cursor=pointer]:
                    - /url: /tapapecho-vacuno-al-vacio-2.2-kg/000000000000029403-KG.html
                  - generic [ref=f3e1734]: Promoción en Carnes
                  - button [pressed] [ref=f3e1735] [cursor=pointer]
                - generic [ref=f3e1738]:
                  - generic [ref=f3e1739]:
                    - generic [ref=f3e1740]:
                      - generic [ref=f3e1741]:
                        - generic [aria-hidden] [ref=f3e1742]: 💎
                        - paragraph [ref=f3e1743]: $9.490
                      - paragraph [ref=f3e1744]: ($4.314 x kg)
                    - generic [ref=f3e1745]:
                      - generic [ref=f3e1746]: 5%
                      - paragraph [ref=f3e1747]: $9.490
                      - paragraph [ref=f3e1748]: ($4.314 x kg)
                    - paragraph [ref=f3e1749]: "Antes: $9.990"
                  - generic [ref=f3e1750]: Pronto disponible
                  - generic [ref=f3e1752]:
                    - link [ref=f3e1753] [cursor=pointer]:
                      - /url: /tapapecho-vacuno-al-vacio-2.2-kg/000000000000029403-KG.html
                      - generic [ref=f3e1754]: Brasil Paraguay | Tapapecho vacuno al va…
                    - generic [ref=f3e1755]: 2.2 kg
                - button [ref=f3e1758] [cursor=pointer]: Ver similares
              - generic [ref=f3e1760]:
                - generic [ref=f3e1761]:
                  - link [ref=f3e1762] [cursor=pointer]:
                    - /url: /carne-molida-fundo-rio-alegre-tartaro-4-grasa-500g/000000000000666200-UN.html
                  - generic [ref=f3e1764]: Promoción Lleva 2 unidades por Monto
                  - button [pressed] [ref=f3e1765] [cursor=pointer]
                - generic [ref=f3e1768]:
                  - generic [ref=f3e1769]:
                    - generic [ref=f3e1770]:
                      - generic [ref=f3e1771]:
                        - generic [aria-hidden] [ref=f3e1772]: 💎
                        - paragraph [ref=f3e1773]: Lleva 2 por $10.866
                      - paragraph [ref=f3e1774]: ($10.866 x kg)
                    - generic [ref=f3e1775]:
                      - generic [ref=f3e1776]: Lleva 2 por $12.490
                      - paragraph [ref=f3e1777]: ($12.490 x kg)
                    - generic [ref=f3e1778]:
                      - paragraph [ref=f3e1779]: $7.690 c/u
                      - paragraph [ref=f3e1780]: ($15.380 x kg)
                  - generic [ref=f3e1781]:
                    - link [ref=f3e1782] [cursor=pointer]:
                      - /url: /carne-molida-fundo-rio-alegre-tartaro-4-grasa-500g/000000000000666200-UN.html
                      - generic [ref=f3e1783]: Fundo Rio Alegre | Carne molida fundo ri…
                    - generic [ref=f3e1784]: 500 g
                - generic [ref=f3e1786]:
                  - button [ref=f3e1787] [cursor=pointer]:
                    - generic [aria-hidden] [ref=f3e1788]: 😎
                    - paragraph [ref=f3e1789]: Combina la promo
                  - button [ref=f3e1791] [cursor=pointer]: Agregar
              - generic [ref=f3e1793]:
                - generic [ref=f3e1794]:
                  - link [ref=f3e1795] [cursor=pointer]:
                    - /url: /trapero-humedo-nova-desinfectante-10-un/000000000000666306-UN.html
                  - button [ref=f3e1797] [cursor=pointer]
                - generic [ref=f3e1800]:
                  - generic [ref=f3e1802]:
                    - paragraph [ref=f3e1803]: $3.890
                    - paragraph [ref=f3e1804]: ($389 x unidad)
                  - generic [ref=f3e1805]:
                    - link [ref=f3e1806] [cursor=pointer]:
                      - /url: /trapero-humedo-nova-desinfectante-10-un/000000000000666306-UN.html
                      - generic [ref=f3e1807]: Nova | Trapero húmedo Nova desinfectante…
                    - generic [ref=f3e1808]: 10 un
                - button [ref=f3e1811] [cursor=pointer]: Agregar
        - generic [ref=f3e1816]:
          - generic [ref=f3e1817]:
            - paragraph [ref=f3e1818]: Contrata la membresía
            - paragraph [ref=f3e1819]: Obtén despachos gratis y ilimitados por compras sobre $20.000 y descuentos exclusivos
            - link [ref=f3e1820] [cursor=pointer]:
              - /url: /membresia
              - text: Comienza tus 15 días gratis
          - button [ref=f3e1823] [cursor=pointer]
        - generic [ref=f3e1830]:
          - generic [ref=f3e1831]:
            - heading [level=2] [ref=f3e1832]: TÉRMINOS Y CONDICIONES UNIMARC
            - paragraph [ref=f3e1833]: El acceso y uso del sitio web www.unimarc.cl y de la aplicación móvil Unimarc (ambos indistintamente “Unimarc.cl”) por u
          - generic [ref=f3e1834]:
            - generic [ref=f3e1835]:
              - button [expanded] [ref=f3e1836] [cursor=pointer]:
                - generic [ref=f3e1839]: 1. Registro del Cliente
              - region [ref=f3e1840]:
                - paragraph [ref=f3e1842]: Será requisito para la adquisición de productos y servicios ofrecidos en Unimarc.cl, estar registrado en éste, ser mayor de 18 años, y al momento de la compra aceptar estos T&C y su Política de Privacidad. El acceso y registro será gratuito.
            - button [ref=f3e1844] [cursor=pointer]:
              - generic [ref=f3e1848]: 2. Clave de acceso secreta
            - button [ref=f3e1850] [cursor=pointer]:
              - generic [ref=f3e1854]: 3. Derechos del Cliente
            - button [ref=f3e1856] [cursor=pointer]:
              - generic [ref=f3e1860]: 4. Procedimiento para hacer uso de Unima
    - contentinfo [aria-hidden] [ref=f3e1861]:
      - generic [ref=f3e1862]:
        - generic [ref=f3e1863]:
          - generic [ref=f3e1864]:
            - link [ref=f3e1865] [cursor=pointer]:
              - /url: /centro-de-ayuda
              - generic [ref=f3e1872]:
                - paragraph [ref=f3e1873]: Centro de ayuda
                - paragraph [ref=f3e1874]: Aquí encontrarás preguntas frecuentes y mucho más
            - link [ref=f3e1875] [cursor=pointer]:
              - /url: /seguimiento-de-compra
              - generic [ref=f3e1881]:
                - paragraph [ref=f3e1882]: Seguimiento de compra
                - paragraph [ref=f3e1883]: Revisa el estado y detalle de tu compra
            - link [ref=f3e1884] [cursor=pointer]:
              - /url: https://wa.me/56958701477
              - generic [ref=f3e1890]:
                - paragraph [ref=f3e1891]: Whatsapp clientes
                - paragraph [ref=f3e1892]: Escríbenos de 9:00 a 20:00 horas
          - generic [ref=f3e1893]:
            - generic [ref=f3e1894]:
              - button [ref=f3e1895] [cursor=pointer]:
                - paragraph [ref=f3e1898]: Contáctanos
              - generic [ref=f3e1900]:
                - generic [ref=f3e1901]:
                  - paragraph [ref=f3e1902]: Unimarc - Servicio al cliente
                  - link [ref=f3e1907] [cursor=pointer]:
                    - /url: tel:6006000025
                    - text: 600 600 0025
                  - paragraph [ref=f3e1908]: Llámanos de 9:00 a 20:00 horas
                - generic [ref=f3e1909]:
                  - paragraph [ref=f3e1910]: Compras online
                  - link [ref=f3e1918] [cursor=pointer]:
                    - /url: /contacto/compras-online
                    - text: Crea una solicitud
                  - link [ref=f3e1924] [cursor=pointer]:
                    - /url: mailto:despachosunimarc@unimarc.cl
                    - text: despachosunimarc@unimarc.cl
                - generic [ref=f3e1925]:
                  - paragraph [ref=f3e1926]: Tarjeta Unipay - Servicio al cliente
                  - link [ref=f3e1931] [cursor=pointer]:
                    - /url: tel:6003909000
                    - text: 600 390 9000
                  - paragraph [ref=f3e1932]: Llámanos de 9:00 a 20:00 horas
                - generic [ref=f3e1933]:
                  - paragraph [ref=f3e1934]: Compras en tienda
                  - link [ref=f3e1942] [cursor=pointer]:
                    - /url: /contacto/compras-tienda
                    - text: Crea una solicitud
                  - link [ref=f3e1948] [cursor=pointer]:
                    - /url: mailto:contacto.unimarc@unimarc.cl
                    - text: contacto.unimarc@unimarc.cl
            - button [ref=f3e1950] [cursor=pointer]:
              - paragraph [ref=f3e1954]: Servicio al cliente
            - button [ref=f3e1956] [cursor=pointer]:
              - paragraph [ref=f3e1960]: Nuestros programas
            - button [ref=f3e1962] [cursor=pointer]:
              - paragraph [ref=f3e1966]: Nuestra empresa
        - separator [ref=f3e1967]
        - generic [ref=f3e1968]:
          - list [ref=f3e1970]:
            - listitem [ref=f3e1971]:
              - link [ref=f3e1972] [cursor=pointer]:
                - /url: /legales/cookies
                - text: Políticas de Cookies
          - generic [ref=f3e1973]:
            - paragraph [ref=f3e1974]: Síguenos
            - generic [ref=f3e1975]:
              - link [ref=f3e1976] [cursor=pointer]:
                - /url: https://www.facebook.com/unimarc
              - link [ref=f3e1979] [cursor=pointer]:
                - /url: https://www.instagram.com/unimarc
              - link [ref=f3e1984] [cursor=pointer]:
                - /url: https://x.com/unimarc
              - link [ref=f3e1987] [cursor=pointer]:
                - /url: https://www.youtube.com/unimarc
  - generic:
    - region
    - region
    - region
    - region
    - region
    - region
  - dialog [ref=f3e1992]:
    - button "Cerrar" [ref=f3e1993] [cursor=pointer]
    - banner [ref=f3e1996]: Elige tu método de entrega
    - generic [ref=f3e1997]:
      - generic [ref=f3e1998]:
        - button "Despacho a domicilio" [pressed] [ref=f3e1999] [cursor=pointer]
        - button "Retiro en tienda" [ref=f3e2006] [cursor=pointer]
      - paragraph [ref=f3e2013]: Calle, dirección o lugar
      - generic [ref=f3e2014]:
        - 'textbox "Ej: Av. Manquehue norte 457, Las condes" [active] [ref=f3e2016]': Av Libertador Gral Bernardo O'Higgins 1072, Maipú
        - button "Activar mi ubicación actual" [ref=f3e2017] [cursor=pointer]
        - listbox [ref=f3e2023]:
          - option [ref=f3e2024] [cursor=pointer]:
            - generic [ref=f3e2030]:
              - paragraph [ref=f3e2031]: Av. Libertador Gral. Bernardo O'Higgins 1072
              - paragraph [ref=f3e2032]: Maipú
      - generic [ref=f3e2033]:
        - paragraph [ref=f3e2034]: Dirección de despacho
        - generic [ref=f3e2040]:
          - paragraph [ref=f3e2041]: Camino La Fuente 15…
          - paragraph
        - paragraph [ref=f3e2042]: Direcciones guardadas
        - generic [ref=f3e2043]:
          - button [ref=f3e2044] [cursor=pointer]:
            - generic [ref=f3e2048]:
              - paragraph [ref=f3e2049]: Casa
              - paragraph [ref=f3e2050]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2051] [cursor=pointer]
        - generic [ref=f3e2054]:
          - button [ref=f3e2055] [cursor=pointer]:
            - generic [ref=f3e2059]:
              - paragraph [ref=f3e2060]: Avenida Las Condes …
              - paragraph [ref=f3e2061]: Avenida Las Condes 14791, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2062] [cursor=pointer]
        - generic [ref=f3e2065]:
          - button [ref=f3e2066] [cursor=pointer]:
            - generic [ref=f3e2070]:
              - paragraph [ref=f3e2071]: Avenida Las Condes … (2)
              - paragraph [ref=f3e2072]: Avenida Las Condes 14791, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2073] [cursor=pointer]
        - generic [ref=f3e2076]:
          - button [ref=f3e2077] [cursor=pointer]:
            - generic [ref=f3e2081]:
              - paragraph [ref=f3e2082]: Avenida Las Condes … (3)
              - paragraph [ref=f3e2083]: Avenida Las Condes 14791, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2084] [cursor=pointer]
        - generic [ref=f3e2087]:
          - button [ref=f3e2088] [cursor=pointer]:
            - generic [ref=f3e2092]:
              - paragraph [ref=f3e2093]: Avenida Las Condes … (4)
              - paragraph [ref=f3e2094]: Avenida Las Condes 14791, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2095] [cursor=pointer]
        - generic [ref=f3e2098]:
          - button [ref=f3e2099] [cursor=pointer]:
            - generic [ref=f3e2103]:
              - paragraph [ref=f3e2104]: Avenida Las Condes … (5)
              - paragraph [ref=f3e2105]: Avenida Las Condes 14791, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2106] [cursor=pointer]
        - generic [ref=f3e2109]:
          - button [ref=f3e2110] [cursor=pointer]:
            - generic [ref=f3e2114]:
              - paragraph [ref=f3e2115]: Calle Uno 23
              - paragraph [ref=f3e2116]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2117] [cursor=pointer]
        - generic [ref=f3e2120]:
          - button [ref=f3e2121] [cursor=pointer]:
            - generic [ref=f3e2125]:
              - paragraph [ref=f3e2126]: Calle Uno 23 (2)
              - paragraph [ref=f3e2127]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2128] [cursor=pointer]
        - generic [ref=f3e2131]:
          - button [ref=f3e2132] [cursor=pointer]:
            - generic [ref=f3e2136]:
              - paragraph [ref=f3e2137]: Calle Uno 23 (3)
              - paragraph [ref=f3e2138]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2139] [cursor=pointer]
        - generic [ref=f3e2142]:
          - button [ref=f3e2143] [cursor=pointer]:
            - generic [ref=f3e2147]:
              - paragraph [ref=f3e2148]: Calle Uno 23 (4)
              - paragraph [ref=f3e2149]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2150] [cursor=pointer]
        - generic [ref=f3e2153]:
          - button [ref=f3e2154] [cursor=pointer]:
            - generic [ref=f3e2158]:
              - paragraph [ref=f3e2159]: Calle Uno 23 (5)
              - paragraph [ref=f3e2160]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2161] [cursor=pointer]
        - generic [ref=f3e2164]:
          - button [ref=f3e2165] [cursor=pointer]:
            - generic [ref=f3e2169]:
              - paragraph [ref=f3e2170]: Calle Uno 23 (6)
              - paragraph [ref=f3e2171]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2172] [cursor=pointer]
        - generic [ref=f3e2175]:
          - button [ref=f3e2176] [cursor=pointer]:
            - generic [ref=f3e2180]:
              - paragraph [ref=f3e2181]: Calle Uno 23 (7)
              - paragraph [ref=f3e2182]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2183] [cursor=pointer]
        - generic [ref=f3e2186]:
          - button [ref=f3e2187] [cursor=pointer]:
            - generic [ref=f3e2191]:
              - paragraph [ref=f3e2192]: Calle Uno 23 (8)
              - paragraph [ref=f3e2193]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2194] [cursor=pointer]
        - generic [ref=f3e2197]:
          - button [ref=f3e2198] [cursor=pointer]:
            - generic [ref=f3e2202]:
              - paragraph [ref=f3e2203]: Calle Uno 23 (9)
              - paragraph [ref=f3e2204]: Calle Uno 23, La Florida, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2205] [cursor=pointer]
        - generic [ref=f3e2208]:
          - button [ref=f3e2209] [cursor=pointer]:
            - generic [ref=f3e2213]:
              - paragraph [ref=f3e2214]: Camino La Fuente 15…
              - paragraph [ref=f3e2215]: Camino La Fuente 1589, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2216] [cursor=pointer]
        - generic [ref=f3e2219]:
          - button [ref=f3e2220] [cursor=pointer]:
            - generic [ref=f3e2224]:
              - paragraph [ref=f3e2225]: Camino La Fuente 15… (2)
              - paragraph [ref=f3e2226]: Camino La Fuente 1589, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2227] [cursor=pointer]
        - generic [ref=f3e2230]:
          - button [ref=f3e2231] [cursor=pointer]:
            - generic [ref=f3e2235]:
              - paragraph [ref=f3e2236]: Camino La Fuente 15… (3)
              - paragraph [ref=f3e2237]: Camino La Fuente 1589, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2238] [cursor=pointer]
        - generic [ref=f3e2241]:
          - button [ref=f3e2242] [cursor=pointer]:
            - generic [ref=f3e2246]:
              - paragraph [ref=f3e2247]: Camino La Fuente 15… (4)
              - paragraph [ref=f3e2248]: Camino La Fuente 1589, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2249] [cursor=pointer]
        - generic [ref=f3e2252]:
          - button [ref=f3e2253] [cursor=pointer]:
            - generic [ref=f3e2257]:
              - paragraph [ref=f3e2258]: General José Artiga…
              - paragraph [ref=f3e2259]: General José Artigas 3250, Santiago, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2260] [cursor=pointer]
        - generic [ref=f3e2263]:
          - button [ref=f3e2264] [cursor=pointer]:
            - generic [ref=f3e2268]:
              - paragraph [ref=f3e2269]: Las Condes
              - paragraph [ref=f3e2270]: Las Condes, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2271] [cursor=pointer]
        - generic [ref=f3e2274]:
          - button [ref=f3e2275] [cursor=pointer]:
            - generic [ref=f3e2279]:
              - paragraph [ref=f3e2280]: Libertador General …
              - paragraph [ref=f3e2281]: Libertador General Bernardo O'Higgins 1072, Maipú, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2282] [cursor=pointer]
        - generic [ref=f3e2285]:
          - button [ref=f3e2286] [cursor=pointer]:
            - generic [ref=f3e2290]:
              - paragraph [ref=f3e2291]: Libertador General … (2)
              - paragraph [ref=f3e2292]: Libertador General Bernardo O'Higgins 1072, Maipú, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2293] [cursor=pointer]
        - generic [ref=f3e2296]:
          - button [ref=f3e2297] [cursor=pointer]:
            - generic [ref=f3e2301]:
              - paragraph [ref=f3e2302]: Libertador General … (3)
              - paragraph [ref=f3e2303]: Libertador General Bernardo O'Higgins 1072, Maipú, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2304] [cursor=pointer]
        - generic [ref=f3e2307]:
          - button [ref=f3e2308] [cursor=pointer]:
            - generic [ref=f3e2312]:
              - paragraph [ref=f3e2313]: Libertador General … (4)
              - paragraph [ref=f3e2314]: Libertador General Bernardo O'Higgins 1072, Maipú, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2315] [cursor=pointer]
        - generic [ref=f3e2318]:
          - button [ref=f3e2319] [cursor=pointer]:
            - generic [ref=f3e2323]:
              - paragraph [ref=f3e2324]: Libertador General … (5)
              - paragraph [ref=f3e2325]: Libertador General Bernardo O'Higgins 1072, Maipú, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2326] [cursor=pointer]
        - generic [ref=f3e2329]:
          - button [ref=f3e2330] [cursor=pointer]:
            - generic [ref=f3e2334]:
              - paragraph [ref=f3e2335]: Otra Casa
              - paragraph [ref=f3e2336]: Camino La Fuente, Las Condes, Metropolitana
          - button "Opciones de la dirección" [ref=f3e2337] [cursor=pointer]
        - generic [ref=f3e2340]:
          - button [ref=f3e2341] [cursor=pointer]:
            - generic [ref=f3e2345]:
              - paragraph [ref=f3e2346]: Sin cobertura
              - paragraph [ref=f3e2347]: Mechique, Los Lagos
          - button "Opciones de la dirección" [ref=f3e2348] [cursor=pointer]
        - generic [ref=f3e2351]:
          - button [ref=f3e2352] [cursor=pointer]:
            - generic [ref=f3e2356]:
              - paragraph [ref=f3e2357]: T-551
              - paragraph [ref=f3e2358]: T-551, Futrono
          - button "Opciones de la dirección" [ref=f3e2359] [cursor=pointer]
    - contentinfo [ref=f3e2362]:
      - generic [ref=f3e2363]:
        - paragraph [ref=f3e2368]: ¿No aparece tu dirección?
        - button "Agregar" [ref=f3e2369] [cursor=pointer]
```

# Test source

```ts
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
  172 |   const activa = await etiquetaActiva(modal);
  173 |   const lineaActiva = guardadas.find((g) => g.etiqueta === activa)?.direccion;
  174 |   const dup = [...guardadas].reverse().find((g) => /\(\d+\)$/.test(g.etiqueta) && g.direccion !== lineaActiva);
  175 |   if (!dup) throw new Error('No hay una dirección guardada duplicada para eliminar');
  176 |   return dup.etiqueta;
  177 | }
  178 | 
  179 | /** Contexto nuevo del navegador (cerrar y volver a abrir la ventana de incógnito). */
  180 | async function ventanaNueva(browser: Browser, page: Page, testData: LoadedTestData): Promise<Page> {
  181 |   const ctx = await browser.newContext({ viewport: page.viewportSize()!, baseURL: token(testData, 'BASE_URL')! });
  182 |   return ctx.newPage();
  183 | }
  184 | 
  185 | /** Lo que muestra el Store Locator del header, en una línea. */
  186 | async function textoHeader(page: Page): Promise<string> {
  187 |   return ((await new HeaderFull(page).storeLocator.innerText().catch(() => '')) ?? '').replace(/\s+/g, ' ').trim();
  188 | }
  189 | 
  190 | /** Escribe la dirección letra a letra y verifica que lleguen sugerencias de Google sin Enter. */
  191 | async function sugerenciasEnVivo(modal: MetodoEntregaModal, direccion: string, cp: string, paso: number): Promise<void> {
  192 |   const consultas = modal.observarConsultasAGoogle();
  193 |   await modal.campoBusqueda.click();
  194 |   await modal.campoBusqueda.pressSequentially(direccion, { delay: 60 });
  195 |   await expect(modal.sugerencias.first(), 'sugerencias de Google en tiempo real').toBeVisible({ timeout: 30000 });
  196 |   expect(consultas.pedidas.length, 'consultas de autocompletado a Google').toBeGreaterThan(0);
  197 |   await modal.capturarModal(cp, paso, 'sugerencias de Google');
  198 | }
  199 | 
  200 | async function irAlPin(modal: MetodoEntregaModal, direccion: string, cp: string, paso: number): Promise<void> {
  201 |   await modal.sugerencias.filter({ hasText: sugerenciaDe(direccion) }).first().click();
  202 |   await expect(modal.confirmacionPin, 'confirmación con PIN (B2C-99)').toBeVisible({ timeout: 30000 });
  203 |   await expect(modal.confirmacionPin).toContainText(/agregar nueva direcci[óo]n|detalles de la direcci[óo]n/i);
  204 |   await capturarEvidencia(modal.confirmacionPin, cp, paso, 'confirmación con PIN (B2C-99)');
  205 | }
  206 | 
  207 | /** Formulario manual: escribe 2 caracteres, toca "Agregar" y espera el formulario. */
  208 | async function abrirFormularioManual(modal: MetodoEntregaModal, dosLetras: string): Promise<void> {
  209 |   await modal.campoBusqueda.click();
  210 |   await modal.campoBusqueda.pressSequentially(dosLetras.slice(0, 2), { delay: 80 });
  211 |   await modal.tocarAgregar();
  212 | }
  213 | 
  214 | async function formularioVacio(modal: MetodoEntregaModal): Promise<void> {
  215 |   await expect(modal.encabezadoManual).toBeVisible();
  216 |   expect(await modal.seleccionada(modal.selectRegion), 'Región: "Elegir región"').toMatch(/^elegir regi[óo]n$/i);
  217 |   expect(await modal.seleccionada(modal.selectComuna), 'Comuna: "Elegir comuna"').toMatch(/^elegir comuna$/i);
  218 |   await expect(modal.campoCalle, 'Dirección: placeholder "Calle"').toHaveAttribute('placeholder', /^calle$/i);
  219 |   await expect(modal.campoNumeracion, 'Numeración: placeholder "Ej. 2160"').toHaveAttribute('placeholder', /^ej\. 2160$/i);
  220 |   await expect(modal.campoCalle).toHaveValue('');
  221 |   await expect(modal.campoNumeracion).toHaveValue('');
  222 | }
  223 | 
  224 | /** Fija una dirección como invitado y devuelve lo que quedó en el header. */
  225 | async function fijarComoInvitado(page: Page, direccion: string): Promise<{ home: PaginaHabilitada; enHeader: string }> {
  226 |   const { home, modal } = await abrirModal(page);
  227 |   await modal.campoBusqueda.click();
  228 |   await modal.campoBusqueda.pressSequentially(direccion, { delay: 50 });
  229 |   await modal.sugerencias.filter({ hasText: sugerenciaDe(direccion) }).first().waitFor({ state: 'visible', timeout: 30000 });
  230 |   await modal.sugerencias.filter({ hasText: sugerenciaDe(direccion) }).first().click();
  231 |   await modal.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
  232 |   await modal.confirmacionPin.getByRole('button', { name: /^agregar direcci[óo]n$/i }).click();
  233 |   const enHeader = await home.header.esperarDireccionEnStoreLocator(45000);
  234 |   return { home, enHeader };
  235 | }
  236 | 
  237 | /** Guarda una dirección de la maestra para preparar los casos que parten de una dirección guardada. */
  238 | async function setearDireccionLogueado(page: Page, testData: LoadedTestData, direccion: string, cp: string, usuario = 'COMPRADOR_USER'): Promise<void> {
  239 |   const { home, modal } = await abrirModalLogueado(page, testData, usuario);
  240 |   const yaExiste = (await modal.direccionesGuardadas()).some((g) =>
  241 |     g.direccion.toLowerCase().includes(direccion.split(',')[0].toLowerCase()),
  242 |   );
  243 |   if (yaExiste) {
  244 |     await modal.botonCerrar.click();
  245 |     return;
  246 |   }
  247 |   await modal.campoBusqueda.click();
  248 |   await modal.campoBusqueda.pressSequentially(direccion, { delay: 60 });
  249 |   const sugerencia = modal.sugerencias.filter({ hasText: sugerenciaDe(direccion) }).first();
> 250 |   await sugerencia.waitFor({ state: 'visible', timeout: 30000 });
      |                    ^ TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
  251 |   await sugerencia.click();
  252 |   await expect(modal.confirmacionPin, 'confirmación de la dirección de prueba').toBeVisible({ timeout: 30000 });
  253 |   await capturarEvidencia(page, cp, 6, 'dirección seleccionada en Google');
  254 |   const desde = marcaOtp();
  255 |   await confirmarDetalles(modal);
  256 |   await otpSiAparece(page, testData, desde, 45000);
  257 |   await home.header.esperarDireccionEnStoreLocator(45000);
  258 | }
  259 | 
  260 | /** Recorre Home → PLP → PDP → SRP → Carro anotando lo que muestra el Store Locator en cada una. */
  261 | async function recorrerSitio(page: Page, testData: LoadedTestData, cp: string, home: PaginaHabilitada): Promise<Record<string, string>> {
  262 |   const vistos: Record<string, string> = {};
  263 |   const header = new HeaderFull(page);
  264 |   const leer = async (nombre: string, paso: number) => {
  265 |     await header.storeLocator.waitFor({ state: 'visible', timeout: 20000 }).catch(() => {});
  266 |     vistos[nombre] = (await header.storeLocator.isVisible().catch(() => false)) ? await header.esperarDireccionEnStoreLocator(20000).catch(() => '') : '(sin Store Locator)';
  267 |     await capturarEvidencia(page, cp, paso, `Store Locator en ${nombre}`);
  268 |   };
  269 |   await leer('Home', 2);
  270 |   const plp = await home.irAUnaCategoria();
  271 |   await leer('PLP', 3);
  272 |   await plp.abrirPrimerProducto();
  273 |   await leer('PDP', 4);
  274 |   await new SRPPage(page, token(testData, 'SEARCH_TERM_001')!).goto();
  275 |   await leer('SRP', 5);
  276 |   await new CarroPage(page).goto();
  277 |   await page.waitForTimeout(2000);
  278 |   await leer('Carro', 6);
  279 |   return vistos;
  280 | }
  281 | 
  282 | const ROJO = 'rgb(218, 41, 28)';
  283 | 
  284 | test.describe('B2C-26 — Setear método de entrega con Despacho a domicilio', () => {
  285 |   // ================================================================== DESKTOP
  286 |   test.describe('Desktop 1440x900', () => {
  287 |     test.use(DESKTOP);
  288 | 
  289 |     test('TC-B2C26-D-001 · Sugerencias de Google con 3+ caracteres y redirección a B2C-99 [Guest] (Desktop)', async ({ page, testData }) => {
  290 |       const cp = 'TC-B2C26-D-001';
  291 |       const dir = token(testData, 'DIRECCION_DESPACHO')!;
  292 |       const { modal } = await abrirModal(page);
  293 |       await modal.capturarModal(cp, 0, 'modal «Elige tu método de entrega»');
  294 |       await sugerenciasEnVivo(modal, dir, cp, 2);
  295 |       await irAlPin(modal, dir, cp, 3);
  296 |       await capturarEvidencia(page, cp);
  297 |     });
  298 | 
  299 |     test('TC-B2C26-D-002 · Menos de 3 caracteres, sin resultados y Google caído ofrecen agregar manualmente [Guest] (Desktop)', async ({ page, testData }) => {
  300 |       const cp = 'TC-B2C26-D-002';
  301 |       const dir = token(testData, 'DIRECCION_DESPACHO')!;
  302 |       let { modal } = await abrirModal(page);
  303 | 
  304 |       // 1. Dos caracteres: ni sugerencias ni consulta a Google.
  305 |       const consultas = modal.observarConsultasAGoogle();
  306 |       await modal.campoBusqueda.click();
  307 |       await modal.campoBusqueda.pressSequentially(dir.slice(0, 2), { delay: 80 });
  308 |       await page.waitForTimeout(3000);
  309 |       await expect(modal.sugerencias).toHaveCount(0);
  310 |       expect(consultas.pedidas, 'sin consultas a Google con 2 caracteres').toHaveLength(0);
  311 |       await expect(modal.textoNoApareceDireccion).toBeVisible();
  312 |       await expect(modal.botonAgregar).toBeVisible();
  313 |       await modal.capturarModal(cp, 1, '2 caracteres: sin sugerencias, «Agregar» disponible');
  314 | 
  315 |       // 2. Término sin resultados.
  316 |       await modal.campoBusqueda.fill('');
  317 |       await modal.campoBusqueda.pressSequentially('zzqxw 99999', { delay: 60 });
  318 |       await page.waitForTimeout(4000);
  319 |       await expect(modal.sugerencias).toHaveCount(0);
  320 |       await expect(modal.botonAgregar, '«Agregar» al final de la lista').toBeVisible();
  321 |       await modal.capturarModal(cp, 2, 'sin resultados: «¿No aparece tu dirección? Agregar»');
  322 | 
  323 |       // 3. API de Google caída.
  324 |       await modal.simularFallaGoogle();
  325 |       await page.reload({ waitUntil: 'domcontentloaded' });
  326 |       ({ modal } = await abrirModal(page));
  327 |       await modal.campoBusqueda.click();
  328 |       await modal.campoBusqueda.pressSequentially(dir, { delay: 50 });
  329 |       await page.waitForTimeout(4000);
  330 |       await expect(modal.sugerencias).toHaveCount(0);
  331 |       await expect(modal.botonAgregar, 'fallback: agregar manualmente').toBeVisible();
  332 |       await modal.capturarModal(cp, 3, 'Google caído: sin sugerencias, «Agregar» disponible');
  333 |       await modal.tocarAgregar();
  334 |       await expect(modal.encabezadoManual).toBeVisible();
  335 |       await modal.capturarModal(cp);
  336 |     });
  337 | 
  338 |     test('TC-B2C26-D-003 · Resultado de Google sin calle (comuna/región) usa el texto como Calle y prellena Región/Comuna [Guest] (Desktop)', async ({ page, testData }) => {
  339 |       const cp = 'TC-B2C26-D-003';
  340 |       const comuna = partes(token(testData, 'DIRECCION_DESPACHO')!).comuna;
  341 |       const { modal } = await abrirModal(page);
  342 |       const consultas = modal.observarConsultasAGoogle();
  343 |       await modal.campoBusqueda.click();
  344 |       await modal.campoBusqueda.pressSequentially(comuna, { delay: 60 });
  345 |       await expect(modal.sugerencias.first()).toBeVisible({ timeout: 30000 });
  346 |       await page.waitForTimeout(1500);
  347 |       await modal.capturarModal(cp, 1, `sugerencias para «${comuna}»`);
  348 |       const opciones = await modal.sugerencias.allInnerTexts();
  349 |       const deComuna = consultas.respuestas.some((r) => /"(locality|administrative_area_level_\d|sublocality)"/.test(r));
  350 |       const filtroAddress = consultas.pedidas.some((u) => /address/i.test(decodeURIComponent(u)));
```