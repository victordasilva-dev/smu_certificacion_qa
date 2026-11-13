# B2C-77 - Evidencias QA (casos que estaban Pendiente / Bloqueado Data - corrida del 2026-10-30)

| Campo | Valor |
|---|---|
| Suite | B2C-77 |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Ejecutados/SP1/B2C-77 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 8 |
| Aprobado | 5 |
| Rechazado | 2 |
| **Total** | **15** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 1 | TC-B2C77-M-015 |
| 2026-10-30 | 14 | TC-B2C77-D-005, TC-B2C77-D-006, TC-B2C77-D-007, TC-B2C77-D-008, TC-B2C77-D-011, TC-B2C77-D-012, TC-B2C77-D-014, TC-B2C77-M-008, TC-B2C77-M-009, TC-B2C77-M-010, TC-B2C77-M-011, TC-B2C77-M-012, TC-B2C77-M-014, TC-B2C77-M-016 |

## Detalle por caso de prueba

### TC-B2C77-D-005 - Tab individual sin productos disponibles se oculta automaticamente

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Required data state: una tab configurada con categoria sin productos disponibles; el resto de las tabs con productos

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {CATEGORY_N1_WO_PRODS} = Categoría sin productos

**Pasos ejecutados**

1. Configurar una tab con una categoria sin productos disponibles.
2. Navegar a la pagina con el componente visible.
3. Verificar la fila de tabs.

**Resultado esperado**

La tab cuya categoria no tiene productos no se muestra en la fila de tabs; el resto de las tabs se muestran con normalidad.

**Resultado obtenido**

Falta el dato: una tab configurada con la categoria {CATEGORY_N1_WO_PRODS} («Bebés y Niños», bebes-y-ninos): ninguna tab publicada la usa y no hay ninguna tab sin productos (la que menos trae, Congelados, tiene 1). Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.

**Observación**

Falta el dato: una tab configurada con la categoria {CATEGORY_N1_WO_PRODS} («Bebés y Niños», bebes-y-ninos): ninguna tab publicada la usa y no hay ninguna tab sin productos (la que menos trae, Congelados, tiene 1). Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.

---

### TC-B2C77-D-006 - Componente no se renderiza si todas las tabs quedan sin productos disponibles

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Required data state: todas las tabs configuradas con categorias sin productos disponibles

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {CATEGORY_N1_WO_PRODS} = Categoría sin productos

**Pasos ejecutados**

1. Configurar todas las tabs con categorias sin productos disponibles.
2. Navegar a la pagina que contiene el componente.
3. Verificar si el componente se renderiza.

**Resultado esperado**

El componente completo no se renderiza en la pagina.

**Resultado obtenido**

Falta el dato: todas las tabs con categorias sin productos: las tabs publicadas traen entre 1 y 12 productos. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.

**Observación**

Falta el dato: todas las tabs con categorias sin productos: las tabs publicadas traen entre 1 y 12 productos. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.

---

### TC-B2C77-D-007 - Componente no se renderiza si se configuran menos de 2 o mas de 10 tabs

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: BM Admin (config) / Guest (verificacion)
- Viewport: Desktop 1440x900
- Required data state: componente configurado con 1 tab o con mas de 10 tabs

**Data utilizada**

- {LP_COLECCION_URL} = URL base del storefront (placeholder, pendiente de environment)

**Pasos ejecutados**

1. Configurar el componente con 1 tab (o con mas de 10 tabs).
2. Publicar el cambio.
3. Navegar a la pagina que contiene el componente.

**Resultado esperado**

El componente no se renderiza en la pagina, al estar fuera del rango permitido de 2 a 10 tabs.

**Resultado obtenido**

Falta el dato: el componente con 1 tab o con mas de 10 tabs: el Home tiene 9 y la pagina de prueba 2. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.

**Observación**

Falta el dato: el componente con 1 tab o con mas de 10 tabs: el Home tiene 9 y la pagina de prueba 2. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.

---

### TC-B2C77-D-008 - Tab sin label configurado se oculta automaticamente

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-77.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Required data state: una tab configurada sin Label; el resto de las tabs con Label definido

**Data utilizada**

- {LP_COLECCION_URL} = URL base del storefront (placeholder, pendiente de environment)

**Pasos ejecutados**

1. Configurar una tab sin Label.
2. Navegar a la pagina con el componente visible.
3. Verificar la fila de tabs.

**Resultado esperado**

La tab sin Label no se muestra en la fila de tabs; el resto de las tabs se muestran con normalidad.

**Resultado obtenido**

Esperado: la tab sin Label no se muestra en la fila de tabs. Obtenido: en {LP_COLECCION_URL} las 2 tabs configuradas sin Label (categorias carnes y frutas-y-verduras) se muestran, con el nombre de la categoria como etiqueta («carnes» y «frutas-y-ver…»). Verificado 2026-10-30 en DEV, Desktop 1440x900. B2C-77.spec.ts:588. Bug: B2C-1408.

**Observación**

Esperado: la tab sin Label no se muestra en la fila de tabs. Obtenido: en {LP_COLECCION_URL} las 2 tabs configuradas sin Label (categorias carnes y frutas-y-verduras) se muestran, con el nombre de la categoria como etiqueta («carnes» y «frutas-y-ver…»). Verificado 2026-10-30 en DEV, Desktop 1440x900. B2C-77.spec.ts:588. Bug: B2C-1408.

**Evidencia**

![Paso 3 — fila de tabs de la pagina de prueba](<B2C-77 Evidencias/TC-B2C77-D-008-p03-fila-de-tabs-de-la-pagina-de-prueba.png>)

---

### TC-B2C77-D-011 - Tab se oculta cuando su categoria no existe o esta offline (distinto de sin productos disponibles)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Required data state: una tab configurada con el link a una categoria inexistente o marcada offline en SFCC; el resto de las tabs con categorias validas y con productos

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {CATEGORY_OFF} = Accesorios aseo

**Pasos ejecutados**

1. Configurar una tab con el link apuntando a una categoria inexistente o offline en SFCC.
2. Navegar a la pagina con el componente visible.
3. Verificar la fila de tabs.

**Resultado esperado**

La tab cuya categoria no existe o esta offline no se muestra en la fila de tabs; el resto de las tabs se muestran con normalidad.

**Resultado obtenido**

Falta el dato: una tab configurada con la categoria {CATEGORY_OFF} («Accesorios aseo»): ninguna tab publicada la usa. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.

**Observación**

Falta el dato: una tab configurada con la categoria {CATEGORY_OFF} («Accesorios aseo»): ninguna tab publicada la usa. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.

---

### TC-B2C77-D-012 - Tab inicial configurada explicitamente se muestra activa al cargar la pagina

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-77.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Required data state: componente con 'Tab inicial por defecto' configurada explicitamente en una tab que NO es la primera de la lista

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {TABS_COLECCIONES} = TBD

**Pasos ejecutados**

1. En Page Designer, configurar el componente con 'Tab inicial por defecto' apuntando a una tab que no es la primera.
2. Navegar a la pagina con el componente visible en Desktop.
3. Verificar cual tab aparece activa y que productos muestra el carrusel.

**Resultado esperado**

La tab configurada como inicial aparece activa al cargar la pagina (no la primera de la lista), y el carrusel muestra los productos de la coleccion asociada a esa tab.

**Resultado obtenido**

Verificado el 2026-10-30 con {TABS_COLECCIONES} = 'Nuestras marcas' (Home, Desktop): la tab activa al cargar es 'Azul' (2a de 9, no la primera) y los productos de su carrusel estan todos en la coleccion de su 'Mostrar todo'.

**Observación**

Verificado el 2026-10-30 con {TABS_COLECCIONES} = 'Nuestras marcas' (Home, Desktop): la tab activa al cargar es 'Azul' (2a de 9, no la primera) y los productos de su carrusel estan todos en la coleccion de su 'Mostrar todo'.

**Evidencia**

![Paso 2 — componente recien cargado](<B2C-77 Evidencias/TC-B2C77-D-012-p02-componente-recien-cargado.png>)

---

### TC-B2C77-M-008 - Verificar que una tab cuya categoría no tiene productos se oculta [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Una tab del T4 apunta a una categoría sin productos disponibles

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CATEGORY_N1_WO_PRODS} = Categoría sin productos

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el componente Tabs + Carrusel (T4).

**Resultado esperado**

La tab sin productos no aparece y el resto de las tabs funciona con normalidad.

**Resultado obtenido**

Falta el dato: una tab configurada con la categoria {CATEGORY_N1_WO_PRODS} («Bebés y Niños», bebes-y-ninos): ninguna tab publicada la usa y no hay ninguna tab sin productos (la que menos trae, Congelados, tiene 1). Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.

**Observación**

Falta el dato: una tab configurada con la categoria {CATEGORY_N1_WO_PRODS} («Bebés y Niños», bebes-y-ninos): ninguna tab publicada la usa y no hay ninguna tab sin productos (la que menos trae, Congelados, tiene 1). Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.

---

### TC-B2C77-M-009 - Verificar que si todas las tabs quedan sin productos el componente no se muestra [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Todas las tabs del T4 apuntan a categorías sin productos

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CATEGORY_N1_WO_PRODS} = Categoría sin productos

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el componente Tabs + Carrusel (T4).

**Resultado esperado**

El componente T4 no se muestra y no deja espacio vacío.

**Resultado obtenido**

Falta el dato: todas las tabs con categorias sin productos: las tabs publicadas traen entre 1 y 12 productos. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.

**Observación**

Falta el dato: todas las tabs con categorias sin productos: las tabs publicadas traen entre 1 y 12 productos. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.

---

### TC-B2C77-M-010 - Verificar que con menos de 2 o más de 10 tabs el componente no se muestra [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El T4 está configurado con 1 tab o con más de 10

**Data utilizada**

- {LP_COLECCION_URL} = URL base del storefront (placeholder, pendiente de environment)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el componente Tabs + Carrusel (T4).

**Resultado esperado**

El componente T4 no se muestra y no deja espacio vacío.

**Resultado obtenido**

Falta el dato: el componente con 1 tab o con mas de 10 tabs: el Home tiene 9 y la pagina de prueba 2. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.

**Observación**

Falta el dato: el componente con 1 tab o con mas de 10 tabs: el Home tiene 9 y la pagina de prueba 2. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.

---

### TC-B2C77-M-011 - Verificar que una tab con categoría inexistente u offline se oculta [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Una tab del T4 apunta a una categoría offline o inexistente

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {CATEGORY_OFF} = Accesorios aseo

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el componente Tabs + Carrusel (T4).

**Resultado esperado**

La tab con categoría inexistente u offline no aparece y el resto de las tabs funciona.

**Resultado obtenido**

Falta el dato: una tab configurada con la categoria {CATEGORY_OFF} («Accesorios aseo»): ninguna tab publicada la usa. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.

**Observación**

Falta el dato: una tab configurada con la categoria {CATEGORY_OFF} («Accesorios aseo»): ninguna tab publicada la usa. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.

---

### TC-B2C77-M-012 - Verificar que una tab sin label se oculta [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-77.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Una tab del T4 no tiene Label configurado

**Data utilizada**

- {LP_COLECCION_URL} = URL base del storefront (placeholder, pendiente de environment)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el componente Tabs + Carrusel (T4).

**Resultado esperado**

La tab sin label no aparece y el resto de las tabs funciona.

**Resultado obtenido**

Esperado: la tab sin Label no se muestra en la fila de tabs. Obtenido: en {LP_COLECCION_URL} las 2 tabs configuradas sin Label (categorias carnes y frutas-y-verduras) se muestran, con el nombre de la categoria como etiqueta («carnes» y «frutas-y-ver…»). Verificado 2026-10-30 en DEV, Mobile 390x844. B2C-77.spec.ts:1014. Bug: B2C-1409.

**Observación**

Esperado: la tab sin Label no se muestra en la fila de tabs. Obtenido: en {LP_COLECCION_URL} las 2 tabs configuradas sin Label (categorias carnes y frutas-y-verduras) se muestran, con el nombre de la categoria como etiqueta («carnes» y «frutas-y-ver…»). Verificado 2026-10-30 en DEV, Mobile 390x844. B2C-77.spec.ts:1014. Bug: B2C-1409.

**Evidencia**

![Paso 3 — fila de tabs de la pagina de prueba](<B2C-77 Evidencias/TC-B2C77-M-012-p03-fila-de-tabs-de-la-pagina-de-prueba.png>)

---

### TC-B2C77-M-014 - Verificar que la tab inicial configurada aparece activa al cargar [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-77.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El T4 tiene configurada como tab inicial una distinta a la primera

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {TABS_COLECCIONES} =  TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el componente Tabs + Carrusel (T4).

**Resultado esperado**

La tab configurada como inicial aparece activa y el carrusel muestra sus productos.

**Resultado obtenido**

Verificado el 2026-10-30 con {TABS_COLECCIONES} = 'Nuestras marcas' (Home, Mobile): la tab activa al cargar es 'Azul' (2a de 9, no la primera) y los productos de su carrusel estan todos en la coleccion de su 'Mostrar todo'.

**Observación**

Verificado el 2026-10-30 con {TABS_COLECCIONES} = 'Nuestras marcas' (Home, Mobile): la tab activa al cargar es 'Azul' (2a de 9, no la primera) y los productos de su carrusel estan todos en la coleccion de su 'Mostrar todo'.

**Evidencia**

![Paso 2 — componente recien cargado](<B2C-77 Evidencias/TC-B2C77-M-014-p02-componente-recien-cargado.png>)

---

### TC-B2C77-D-014 - Cada tab muestra en el carrusel los productos de su colección configurada

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-77.spec.ts |

**Precondiciones**

"- User type: Guest

- Viewport: Desktop 1440x900
- Ubicacion: Home o Landing con el componente configurado
- Required data state: relación tab → colección registrada en TC-B2C77-BM-006 ({TABS_COLECCIONES}); cada colección con productos disponibles"

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {TABS_COLECCIONES} = TBD

**Pasos ejecutados**

1. Navegar a la pagina con el componente en Desktop.
2. Hacer clic en la primera tab y registrar los productos del carrusel, recorriéndolo hasta el final con los controles de navegación.
3. Abrir en otra pestaña la PLP de la colección configurada para esa tab según {TABS_COLECCIONES}.
4. Verificar que cada producto registrado aparece en la PLP de la colección.
5. Repetir los pasos 2 a 4 para cada tab configurada.

**Resultado esperado**

Para cada tab, todos los productos que muestra el carrusel pertenecen a la colección configurada para esa tab. Ninguna tab con productos disponibles muestra el carrusel vacío.

**Resultado obtenido**

Verificado el 2026-10-30 con {TABS_COLECCIONES} = 'Nuestras marcas' (Home, Desktop): la coleccion de cada tab es la categoria que trae configurada en Page Designer, y los productos del carrusel de las 9 tabs estan todos en el resultado de la busqueda de esa categoria (maximo 12). Nota: en la PLP de varias tabs el contador de productos cuenta mas de los que la pagina lista (ej. panaderia-y-pasteleria: contador 10, listados 6).

**Observación**

Verificado el 2026-10-30 con {TABS_COLECCIONES} = 'Nuestras marcas' (Home, Desktop): la coleccion de cada tab es la categoria que trae configurada en Page Designer, y los productos del carrusel de las 9 tabs estan todos en el resultado de la busqueda de esa categoria (maximo 12). Nota: en la PLP de varias tabs el contador de productos cuenta mas de los que la pagina lista (ej. panaderia-y-pasteleria: contador 10, listados 6).

**Evidencia**

![Paso 2 — componente con sus tabs](<B2C-77 Evidencias/TC-B2C77-D-014-p02-componente-con-sus-tabs.png>)

![Paso 3 — tab amada masa y su carrusel](<B2C-77 Evidencias/TC-B2C77-D-014-p03-tab-amada-masa-y-su-carrusel.png>)

---

### TC-B2C77-M-016 - Verificar que cada tab muestra en el carrusel los productos de su colección configurada [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-77.spec.ts |

**Precondiciones**

"- User type: Guest

- Viewport: Mobile 390x844
- Ubicacion: Home
- El componente T4 está publicado en el Home
- Relación tab → colección registrada en TC-B2C77-BM-006 ({TABS_COLECCIONES})"

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {TABS_COLECCIONES} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el componente Tabs + Carrusel (T4).
3. El usuario toca la primera tab.
4. El sistema muestra en el carrusel los productos de esa tab.
5. El usuario desliza el carrusel hasta el final y registra los productos.
6. El usuario abre la PLP de la colección configurada para esa tab según {TABS_COLECCIONES} y verifica que cada producto registrado aparece en ella.
7. El usuario repite los pasos 3 a 6 para cada tab, deslizando la fila de tabs para llegar a las que están fuera de pantalla.

**Resultado esperado**

Para cada tab, todos los productos que muestra el carrusel pertenecen a la colección configurada para esa tab. Ninguna tab con productos disponibles muestra el carrusel vacío.

**Resultado obtenido**

Verificado el 2026-10-30 con {TABS_COLECCIONES} = 'Nuestras marcas' (Home, Mobile): la coleccion de cada tab es la categoria que trae configurada en Page Designer, y los productos del carrusel de las 9 tabs estan todos en el resultado de la busqueda de esa categoria (maximo 12). Nota: en la PLP de varias tabs el contador de productos cuenta mas de los que la pagina lista (ej. panaderia-y-pasteleria: contador 10, listados 6).

**Observación**

Verificado el 2026-10-30 con {TABS_COLECCIONES} = 'Nuestras marcas' (Home, Mobile): la coleccion de cada tab es la categoria que trae configurada en Page Designer, y los productos del carrusel de las 9 tabs estan todos en el resultado de la busqueda de esa categoria (maximo 12). Nota: en la PLP de varias tabs el contador de productos cuenta mas de los que la pagina lista (ej. panaderia-y-pasteleria: contador 10, listados 6).

**Evidencia**

![Paso 2 — componente con sus tabs](<B2C-77 Evidencias/TC-B2C77-M-016-p02-componente-con-sus-tabs.png>)

![Paso 3 — tab amada masa y su carrusel](<B2C-77 Evidencias/TC-B2C77-M-016-p03-tab-amada-masa-y-su-carrusel.png>)

---

### TC-B2C77-M-015 - Verificar que el carrusel de la tab activa no supera el máximo de productos [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-77.spec.ts:886 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El componente T4 está publicado en el Home

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el componente Tabs + Carrusel (T4).
3. El usuario desliza el carrusel hasta el final y cuenta los productos.

**Resultado esperado**

El carrusel muestra como máximo 12 productos (valor por defecto) aunque la colección tenga más.

**Resultado obtenido**

El carrusel de la tab activa no supera el máximo de productos configurado.

**Evidencia**

![Paso 2 — tab amada masa activa](<B2C-77 Evidencias/TC-B2C77-M-015-p02-tab-amada-masa-activa.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "webkit"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-77",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-77 Test Cases.xlsx",
  "title": "B2C-77 - Evidencias QA (casos que estaban Pendiente / Bloqueado Data - corrida del 2026-10-30)",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-10-30": [
   "TC-B2C77-D-005",
   "TC-B2C77-D-006",
   "TC-B2C77-D-007",
   "TC-B2C77-D-008",
   "TC-B2C77-D-011",
   "TC-B2C77-D-012",
   "TC-B2C77-D-014",
   "TC-B2C77-M-008",
   "TC-B2C77-M-009",
   "TC-B2C77-M-010",
   "TC-B2C77-M-011",
   "TC-B2C77-M-012",
   "TC-B2C77-M-014",
   "TC-B2C77-M-016"
  ],
  "2026-11-13": [
   "TC-B2C77-M-015"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "La tab cuya categoria no tiene productos no se muestra en la fila de tabs; el resto de las tabs se muestran con normalidad.",
   "form_factor": "desktop",
   "id": "TC-B2C77-D-005",
   "name": "Tab individual sin productos disponibles se oculta automaticamente",
   "observation": "Falta el dato: una tab configurada con la categoria {CATEGORY_N1_WO_PRODS} («Bebés y Niños», bebes-y-ninos): ninguna tab publicada la usa y no hay ninguna tab sin productos (la que menos trae, Congelados, tiene 1). Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.",
   "observed": "Falta el dato: una tab configurada con la categoria {CATEGORY_N1_WO_PRODS} («Bebés y Niños», bebes-y-ninos): ninguna tab publicada la usa y no hay ninguna tab sin productos (la que menos trae, Congelados, tiene 1). Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Required data state: una tab configurada con categoria sin productos disponibles; el resto de las tabs con productos",
   "status": "Bloqueado Data",
   "steps": "1. Configurar una tab con una categoria sin productos disponibles.\n2. Navegar a la pagina con el componente visible.\n3. Verificar la fila de tabs.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {CATEGORY_N1_WO_PRODS} = Categoría sin productos",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "El componente completo no se renderiza en la pagina.",
   "form_factor": "desktop",
   "id": "TC-B2C77-D-006",
   "name": "Componente no se renderiza si todas las tabs quedan sin productos disponibles",
   "observation": "Falta el dato: todas las tabs con categorias sin productos: las tabs publicadas traen entre 1 y 12 productos. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.",
   "observed": "Falta el dato: todas las tabs con categorias sin productos: las tabs publicadas traen entre 1 y 12 productos. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Required data state: todas las tabs configuradas con categorias sin productos disponibles",
   "status": "Bloqueado Data",
   "steps": "1. Configurar todas las tabs con categorias sin productos disponibles.\n2. Navegar a la pagina que contiene el componente.\n3. Verificar si el componente se renderiza.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {CATEGORY_N1_WO_PRODS} = Categoría sin productos",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "El componente no se renderiza en la pagina, al estar fuera del rango permitido de 2 a 10 tabs.",
   "form_factor": "desktop",
   "id": "TC-B2C77-D-007",
   "name": "Componente no se renderiza si se configuran menos de 2 o mas de 10 tabs",
   "observation": "Falta el dato: el componente con 1 tab o con mas de 10 tabs: el Home tiene 9 y la pagina de prueba 2. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.",
   "observed": "Falta el dato: el componente con 1 tab o con mas de 10 tabs: el Home tiene 9 y la pagina de prueba 2. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.",
   "preconditions": "- User type: BM Admin (config) / Guest (verificacion)\n- Viewport: Desktop 1440x900\n- Required data state: componente configurado con 1 tab o con mas de 10 tabs",
   "status": "Bloqueado Data",
   "steps": "1. Configurar el componente con 1 tab (o con mas de 10 tabs).\n2. Publicar el cambio.\n3. Navegar a la pagina que contiene el componente.",
   "test_data": "- {LP_COLECCION_URL} = URL base del storefront (placeholder, pendiente de environment)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "La tab sin Label no se muestra en la fila de tabs; el resto de las tabs se muestran con normalidad.",
   "form_factor": "desktop",
   "id": "TC-B2C77-D-008",
   "name": "Tab sin label configurado se oculta automaticamente",
   "observation": "Esperado: la tab sin Label no se muestra en la fila de tabs. Obtenido: en {LP_COLECCION_URL} las 2 tabs configuradas sin Label (categorias carnes y frutas-y-verduras) se muestran, con el nombre de la categoria como etiqueta («carnes» y «frutas-y-ver…»). Verificado 2026-10-30 en DEV, Desktop 1440x900. B2C-77.spec.ts:588. Bug: B2C-1408.",
   "observed": "Esperado: la tab sin Label no se muestra en la fila de tabs. Obtenido: en {LP_COLECCION_URL} las 2 tabs configuradas sin Label (categorias carnes y frutas-y-verduras) se muestran, con el nombre de la categoria como etiqueta («carnes» y «frutas-y-ver…»). Verificado 2026-10-30 en DEV, Desktop 1440x900. B2C-77.spec.ts:588. Bug: B2C-1408.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Required data state: una tab configurada sin Label; el resto de las tabs con Label definido",
   "screenshots": [
    {
     "caption": "Paso 3 — fila de tabs de la pagina de prueba",
     "file": "TC-B2C77-D-008-p03-fila-de-tabs-de-la-pagina-de-prueba.png"
    }
   ],
   "spec": "tests/B2C-77.spec.ts",
   "status": "Rechazado",
   "steps": "1. Configurar una tab sin Label.\n2. Navegar a la pagina con el componente visible.\n3. Verificar la fila de tabs.",
   "test_data": "- {LP_COLECCION_URL} = URL base del storefront (placeholder, pendiente de environment)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "La tab cuya categoria no existe o esta offline no se muestra en la fila de tabs; el resto de las tabs se muestran con normalidad.",
   "form_factor": "desktop",
   "id": "TC-B2C77-D-011",
   "name": "Tab se oculta cuando su categoria no existe o esta offline (distinto de sin productos disponibles)",
   "observation": "Falta el dato: una tab configurada con la categoria {CATEGORY_OFF} («Accesorios aseo»): ninguna tab publicada la usa. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.",
   "observed": "Falta el dato: una tab configurada con la categoria {CATEGORY_OFF} («Accesorios aseo»): ninguna tab publicada la usa. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Required data state: una tab configurada con el link a una categoria inexistente o marcada offline en SFCC; el resto de las tabs con categorias validas y con productos",
   "status": "Bloqueado Data",
   "steps": "1. Configurar una tab con el link apuntando a una categoria inexistente o offline en SFCC.\n2. Navegar a la pagina con el componente visible.\n3. Verificar la fila de tabs.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {CATEGORY_OFF} = Accesorios aseo",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "La tab configurada como inicial aparece activa al cargar la pagina (no la primera de la lista), y el carrusel muestra los productos de la coleccion asociada a esa tab.",
   "form_factor": "desktop",
   "id": "TC-B2C77-D-012",
   "name": "Tab inicial configurada explicitamente se muestra activa al cargar la pagina",
   "observation": "Verificado el 2026-10-30 con {TABS_COLECCIONES} = 'Nuestras marcas' (Home, Desktop): la tab activa al cargar es 'Azul' (2a de 9, no la primera) y los productos de su carrusel estan todos en la coleccion de su 'Mostrar todo'.",
   "observed": "Verificado el 2026-10-30 con {TABS_COLECCIONES} = 'Nuestras marcas' (Home, Desktop): la tab activa al cargar es 'Azul' (2a de 9, no la primera) y los productos de su carrusel estan todos en la coleccion de su 'Mostrar todo'.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Required data state: componente con 'Tab inicial por defecto' configurada explicitamente en una tab que NO es la primera de la lista",
   "screenshots": [
    {
     "caption": "Paso 2 — componente recien cargado",
     "file": "TC-B2C77-D-012-p02-componente-recien-cargado.png"
    }
   ],
   "spec": "tests/B2C-77.spec.ts",
   "status": "Aprobado",
   "steps": "1. En Page Designer, configurar el componente con 'Tab inicial por defecto' apuntando a una tab que no es la primera.\n2. Navegar a la pagina con el componente visible en Desktop.\n3. Verificar cual tab aparece activa y que productos muestra el carrusel.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {TABS_COLECCIONES} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "La tab sin productos no aparece y el resto de las tabs funciona con normalidad.",
   "form_factor": "mobile",
   "id": "TC-B2C77-M-008",
   "name": "Verificar que una tab cuya categoría no tiene productos se oculta [Mobile] [Guest]",
   "observation": "Falta el dato: una tab configurada con la categoria {CATEGORY_N1_WO_PRODS} («Bebés y Niños», bebes-y-ninos): ninguna tab publicada la usa y no hay ninguna tab sin productos (la que menos trae, Congelados, tiene 1). Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.",
   "observed": "Falta el dato: una tab configurada con la categoria {CATEGORY_N1_WO_PRODS} («Bebés y Niños», bebes-y-ninos): ninguna tab publicada la usa y no hay ninguna tab sin productos (la que menos trae, Congelados, tiene 1). Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Una tab del T4 apunta a una categoría sin productos disponibles",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el componente Tabs + Carrusel (T4).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CATEGORY_N1_WO_PRODS} = Categoría sin productos",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "El componente T4 no se muestra y no deja espacio vacío.",
   "form_factor": "mobile",
   "id": "TC-B2C77-M-009",
   "name": "Verificar que si todas las tabs quedan sin productos el componente no se muestra [Mobile] [Guest]",
   "observation": "Falta el dato: todas las tabs con categorias sin productos: las tabs publicadas traen entre 1 y 12 productos. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.",
   "observed": "Falta el dato: todas las tabs con categorias sin productos: las tabs publicadas traen entre 1 y 12 productos. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Todas las tabs del T4 apuntan a categorías sin productos",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el componente Tabs + Carrusel (T4).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CATEGORY_N1_WO_PRODS} = Categoría sin productos",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "El componente T4 no se muestra y no deja espacio vacío.",
   "form_factor": "mobile",
   "id": "TC-B2C77-M-010",
   "name": "Verificar que con menos de 2 o más de 10 tabs el componente no se muestra [Mobile] [Guest]",
   "observation": "Falta el dato: el componente con 1 tab o con mas de 10 tabs: el Home tiene 9 y la pagina de prueba 2. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.",
   "observed": "Falta el dato: el componente con 1 tab o con mas de 10 tabs: el Home tiene 9 y la pagina de prueba 2. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El T4 está configurado con 1 tab o con más de 10",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el componente Tabs + Carrusel (T4).",
   "test_data": "- {LP_COLECCION_URL} = URL base del storefront (placeholder, pendiente de environment)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "La tab con categoría inexistente u offline no aparece y el resto de las tabs funciona.",
   "form_factor": "mobile",
   "id": "TC-B2C77-M-011",
   "name": "Verificar que una tab con categoría inexistente u offline se oculta [Mobile] [Guest]",
   "observation": "Falta el dato: una tab configurada con la categoria {CATEGORY_OFF} («Accesorios aseo»): ninguna tab publicada la usa. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.",
   "observed": "Falta el dato: una tab configurada con la categoria {CATEGORY_OFF} («Accesorios aseo»): ninguna tab publicada la usa. Configuracion publicada en Page Designer (verificada el 2026-10-30): Home «Nuestras marcas» con 9 tabs (categorias panaderia-y-pasteleria, congelados, carnes, limpieza, frutas-y-verduras, bebidas-y-licores, panaderia-y-pasteleria, limpieza, congelados) y pagina de prueba {LP_COLECCION_URL} con 2 tabs (carnes y frutas-y-verduras, sin Label). Quien lo carga: equipo de Page Designer; al cargarlo, re-ejecutar este CP.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Una tab del T4 apunta a una categoría offline o inexistente",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el componente Tabs + Carrusel (T4).",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {CATEGORY_OFF} = Accesorios aseo",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "La tab sin label no aparece y el resto de las tabs funciona.",
   "form_factor": "mobile",
   "id": "TC-B2C77-M-012",
   "name": "Verificar que una tab sin label se oculta [Mobile] [Guest]",
   "observation": "Esperado: la tab sin Label no se muestra en la fila de tabs. Obtenido: en {LP_COLECCION_URL} las 2 tabs configuradas sin Label (categorias carnes y frutas-y-verduras) se muestran, con el nombre de la categoria como etiqueta («carnes» y «frutas-y-ver…»). Verificado 2026-10-30 en DEV, Mobile 390x844. B2C-77.spec.ts:1014. Bug: B2C-1409.",
   "observed": "Esperado: la tab sin Label no se muestra en la fila de tabs. Obtenido: en {LP_COLECCION_URL} las 2 tabs configuradas sin Label (categorias carnes y frutas-y-verduras) se muestran, con el nombre de la categoria como etiqueta («carnes» y «frutas-y-ver…»). Verificado 2026-10-30 en DEV, Mobile 390x844. B2C-77.spec.ts:1014. Bug: B2C-1409.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Una tab del T4 no tiene Label configurado",
   "screenshots": [
    {
     "caption": "Paso 3 — fila de tabs de la pagina de prueba",
     "file": "TC-B2C77-M-012-p03-fila-de-tabs-de-la-pagina-de-prueba.png"
    }
   ],
   "spec": "tests/B2C-77.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el componente Tabs + Carrusel (T4).",
   "test_data": "- {LP_COLECCION_URL} = URL base del storefront (placeholder, pendiente de environment)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "La tab configurada como inicial aparece activa y el carrusel muestra sus productos.",
   "form_factor": "mobile",
   "id": "TC-B2C77-M-014",
   "name": "Verificar que la tab inicial configurada aparece activa al cargar [Mobile] [Guest]",
   "observation": "Verificado el 2026-10-30 con {TABS_COLECCIONES} = 'Nuestras marcas' (Home, Mobile): la tab activa al cargar es 'Azul' (2a de 9, no la primera) y los productos de su carrusel estan todos en la coleccion de su 'Mostrar todo'.",
   "observed": "Verificado el 2026-10-30 con {TABS_COLECCIONES} = 'Nuestras marcas' (Home, Mobile): la tab activa al cargar es 'Azul' (2a de 9, no la primera) y los productos de su carrusel estan todos en la coleccion de su 'Mostrar todo'.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El T4 tiene configurada como tab inicial una distinta a la primera",
   "screenshots": [
    {
     "caption": "Paso 2 — componente recien cargado",
     "file": "TC-B2C77-M-014-p02-componente-recien-cargado.png"
    }
   ],
   "spec": "tests/B2C-77.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el componente Tabs + Carrusel (T4).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {TABS_COLECCIONES} =  TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Para cada tab, todos los productos que muestra el carrusel pertenecen a la colección configurada para esa tab. Ninguna tab con productos disponibles muestra el carrusel vacío.",
   "form_factor": "desktop",
   "id": "TC-B2C77-D-014",
   "name": "Cada tab muestra en el carrusel los productos de su colección configurada",
   "observation": "Verificado el 2026-10-30 con {TABS_COLECCIONES} = 'Nuestras marcas' (Home, Desktop): la coleccion de cada tab es la categoria que trae configurada en Page Designer, y los productos del carrusel de las 9 tabs estan todos en el resultado de la busqueda de esa categoria (maximo 12). Nota: en la PLP de varias tabs el contador de productos cuenta mas de los que la pagina lista (ej. panaderia-y-pasteleria: contador 10, listados 6).",
   "observed": "Verificado el 2026-10-30 con {TABS_COLECCIONES} = 'Nuestras marcas' (Home, Desktop): la coleccion de cada tab es la categoria que trae configurada en Page Designer, y los productos del carrusel de las 9 tabs estan todos en el resultado de la busqueda de esa categoria (maximo 12). Nota: en la PLP de varias tabs el contador de productos cuenta mas de los que la pagina lista (ej. panaderia-y-pasteleria: contador 10, listados 6).",
   "preconditions": "\"- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home o Landing con el componente configurado\n- Required data state: relación tab → colección registrada en TC-B2C77-BM-006 ({TABS_COLECCIONES}); cada colección con productos disponibles\"",
   "screenshots": [
    {
     "caption": "Paso 2 — componente con sus tabs",
     "file": "TC-B2C77-D-014-p02-componente-con-sus-tabs.png"
    },
    {
     "caption": "Paso 3 — tab amada masa y su carrusel",
     "file": "TC-B2C77-D-014-p03-tab-amada-masa-y-su-carrusel.png"
    }
   ],
   "spec": "tests/B2C-77.spec.ts",
   "status": "Aprobado",
   "steps": "1. Navegar a la pagina con el componente en Desktop.\n2. Hacer clic en la primera tab y registrar los productos del carrusel, recorriéndolo hasta el final con los controles de navegación.\n3. Abrir en otra pestaña la PLP de la colección configurada para esa tab según {TABS_COLECCIONES}.\n4. Verificar que cada producto registrado aparece en la PLP de la colección.\n5. Repetir los pasos 2 a 4 para cada tab configurada.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {TABS_COLECCIONES} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Para cada tab, todos los productos que muestra el carrusel pertenecen a la colección configurada para esa tab. Ninguna tab con productos disponibles muestra el carrusel vacío.",
   "form_factor": "mobile",
   "id": "TC-B2C77-M-016",
   "name": "Verificar que cada tab muestra en el carrusel los productos de su colección configurada [Mobile] [Guest]",
   "observation": "Verificado el 2026-10-30 con {TABS_COLECCIONES} = 'Nuestras marcas' (Home, Mobile): la coleccion de cada tab es la categoria que trae configurada en Page Designer, y los productos del carrusel de las 9 tabs estan todos en el resultado de la busqueda de esa categoria (maximo 12). Nota: en la PLP de varias tabs el contador de productos cuenta mas de los que la pagina lista (ej. panaderia-y-pasteleria: contador 10, listados 6).",
   "observed": "Verificado el 2026-10-30 con {TABS_COLECCIONES} = 'Nuestras marcas' (Home, Mobile): la coleccion de cada tab es la categoria que trae configurada en Page Designer, y los productos del carrusel de las 9 tabs estan todos en el resultado de la busqueda de esa categoria (maximo 12). Nota: en la PLP de varias tabs el contador de productos cuenta mas de los que la pagina lista (ej. panaderia-y-pasteleria: contador 10, listados 6).",
   "preconditions": "\"- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El componente T4 está publicado en el Home\n- Relación tab → colección registrada en TC-B2C77-BM-006 ({TABS_COLECCIONES})\"",
   "screenshots": [
    {
     "caption": "Paso 2 — componente con sus tabs",
     "file": "TC-B2C77-M-016-p02-componente-con-sus-tabs.png"
    },
    {
     "caption": "Paso 3 — tab amada masa y su carrusel",
     "file": "TC-B2C77-M-016-p03-tab-amada-masa-y-su-carrusel.png"
    }
   ],
   "spec": "tests/B2C-77.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el componente Tabs + Carrusel (T4).\n3. El usuario toca la primera tab.\n4. El sistema muestra en el carrusel los productos de esa tab.\n5. El usuario desliza el carrusel hasta el final y registra los productos.\n6. El usuario abre la PLP de la colección configurada para esa tab según {TABS_COLECCIONES} y verifica que cada producto registrado aparece en ella.\n7. El usuario repite los pasos 3 a 6 para cada tab, deslizando la fila de tabs para llegar a las que están fuera de pantalla.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {TABS_COLECCIONES} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "El carrusel muestra como máximo 12 productos (valor por defecto) aunque la colección tenga más.",
   "form_factor": "mobile",
   "id": "TC-B2C77-M-015",
   "name": "Verificar que el carrusel de la tab activa no supera el máximo de productos [Mobile] [Guest]",
   "observed": "El carrusel de la tab activa no supera el máximo de productos configurado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El componente T4 está publicado en el Home",
   "screenshots": [
    {
     "caption": "Paso 2 — tab amada masa activa",
     "file": "TC-B2C77-M-015-p02-tab-amada-masa-activa.png"
    }
   ],
   "spec": "tests/B2C-77.spec.ts:886",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el componente Tabs + Carrusel (T4).\n3. El usuario desliza el carrusel hasta el final y cuenta los productos.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "390x844"
  }
 ]
}
-->
