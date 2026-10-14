# Suite QA — Playwright + mobilewright

Proyecto de automatización generado por el plugin **qa-executor**. La web corre con Playwright (`tests/`); los TC de app nativa (`-APP-`), con mobilewright (`tests-app/`): iOS en Mobile Next Cloud, Android en local o en la nube. Los Test Cases y la data de prueba **no viven aquí**: viven en Excel, en el workspace QA que apunta `QA_WORKSPACE_DIR` del `.env`. Este repositorio guarda el código que ejecuta esos casos.

El flujo completo —leer la planilla, explorar, generar los specs, correr, escribir el veredicto de vuelta, armar el Word de evidencia y abrir los bugs en Jira— lo conduce la skill. Aquí solo está lo que la skill produce y lo que hace falta para correrlo a mano.

## Puesta en marcha

Si estás leyendo esto en un clon nuevo:

```bash
npm install                       # Playwright + mobilewright + los tres motores (via postinstall)
pip install openpyxl python-docx  # los scripts de la skill
cp .env.example .env              # y completar QA_WORKSPACE_DIR (y MOBILENEXT_API_KEY si hay TC de iOS)
```

`tests/data.json` no se commitea (lleva credenciales). Lo regenera la skill desde el Excel de data en cada corrida; `tests/data_ejemplo.json` es la plantilla versionada con las mismas claves.

## Configuración (`.env`)

| Variable | Qué hace |
|---|---|
| `QA_WORKSPACE_DIR` | Carpeta con los Excel de Test Cases y de data, y donde se deja el Word de evidencia |
| `HEADED` | `true` (por defecto) corre con el navegador visible; `false` para CI |
| `DESKTOP_BROWSER` / `MOBILE_BROWSER` | Motor por form-factor: `chromium`, `firefox`, `webkit`. `MOBILE_BROWSER` no admite firefox |
| `MOBILENEXT_API_KEY` | Clave de Mobile Next Cloud. Obligatoria para TC de app en iOS (y Android en la nube). Nunca en el Excel |
| `ANDROID_EN_CLOUD` | `true` manda Android a Mobile Next Cloud; por defecto corre en el emulador/equipo local |
| `IOS_DEVICE_NAME` / `IOS_OS_VERSION` / `ANDROID_DEVICE_NAME` / `ANDROID_OS_VERSION` | Filtro opcional de dispositivo (regex de modelo; `17`, `26.0` o `>=17 <19`) |
| `MOBILENEXT_SUBIR_REPORTE` | `on` (por defecto), `on-failure` u `off`: subir el reporte al dashboard de Mobile Next |
| `APP_ALLOCATION_TIMEOUT` | Espera máxima por un dispositivo de la nube, en ms (15 min por defecto) |
| `APP_ANIMACIONES` | `off` apaga las animaciones del sistema en el dispositivo (vacío = no se tocan) |

El **ambiente no está aquí**: `BASE_URL` es data de la suite y sale del Excel vía `tests/data.json`. Definirlo en dos sitios los desincroniza en silencio y la suite termina certificando el ambiente equivocado.

## Estructura

```
tests/
├── pages/          Page Objects — la única capa que conoce selectores
│   └── BasePage.ts     (del molde del plugin)
├── support/        (del molde del plugin) fixtures, carga de data, viewports, capturas de evidencia
├── data.json       data resuelta — generada, NO se commitea
├── data_ejemplo.json  plantilla versionada con las mismas claves
└── <SUITE>.spec.ts un archivo por suite: un describe, un test() por CP-ID
tests-app/          TC de app nativa (mobilewright)
├── pages/          Screen Objects — la única capa que conoce locators de la app
│   └── BaseScreen.ts   (del molde del plugin)
├── support/        (del molde del plugin) config por plataforma, fixtures, evidencia, explorar.ts
└── <SUITE>.spec.ts un test() por CP-ID y plataforma, con sufijo (iOS) / (Android)
mobilewright.config.ts      Android (local, o nube con ANDROID_EN_CLOUD=true)
mobilewright.ios.config.ts  iOS (siempre Mobile Next Cloud)
.qa/
├── knowledge/      lo aprendido de cada flujo, para no re-explorar cada corrida
└── scaffold-version.json   qué versión del molde del plugin se depositó aquí
```

Los archivos marcados *(del molde del plugin)* los deposita el bootstrap. Se pueden adaptar —el `check` del plugin detecta que los editaste y los respeta—, pero si el plugin publica una versión nueva del mismo archivo tendrás que fusionar a mano.

## Ejecución manual

```bash
npx playwright test                                    # todo
npx playwright test tests/<SUITE>.spec.ts              # una suite
npx playwright test tests/<SUITE>.spec.ts -g TC-XXX-D-001  # un TC, por CP-ID
npx playwright test --project=mobile                   # un form-factor
npx playwright test --workers=1                        # secuencial, para mirar
HEADED=false npx playwright test                       # headless puntual
npx playwright test --ui                               # modo UI interactivo
```

App nativa, una plataforma por comando (nunca encadenadas con `&&`: un TC rechazado en una dejaría a la otra sin correr):

```bash
npx mobilewright test                                         # Android
npx mobilewright test -c mobilewright.ios.config.ts           # iOS en Mobile Next Cloud
npx mobilewright test --grep TC-XXX-APP-001                   # un TC (no hay -g)
npx mobilecli dump ui --device <id>                           # explorar: árbol con refs @eN
npx mobilecli io tap --device <id> @e12                       #   tocar por ref (solo para explorar)
npm run app:explorar -- ios login <guion.ts>                  # recorrer un flujo largo en la nube
npm run app:doctor                                            # diagnóstico del SDK / emulador
```

Ver resultados:

```bash
npx playwright show-report
npx playwright show-trace test-results/<carpeta>/trace.zip
```

Apuntar a otro ambiente en una corrida puntual, sin tocar el Excel:

```bash
BASE_URL=https://otro-ambiente.example.com npx playwright test
```

La variable de entorno gana sobre `tests/data.json`. Es un escape deliberado; la verdad del workspace sigue siendo la planilla.

## Problemas frecuentes

**`No hay ambiente: falta tests/data.json`**
No se ha generado el archivo de data y tampoco pasaste `BASE_URL` inline. Que la corrida se detenga es intencional: un ambiente ausente mandaría la suite entera a otro sitio, con los TC fallando por un motivo inventado.

**`La suite <SUITE> no tiene {BASE_URL}`**
El archivo se generó, pero el Excel de data no trae ese token (o está en TBD). Cárgalo en la planilla y vuelve a correr el `read`.

**Un TC falla y la captura muestra una pantalla que no es tu aplicación**
Casi siempre `BASE_URL` apunta a otro ambiente. `test-results/<carpeta>/error-context.md` trae la URL real a la que llegó el navegador, más fiable que deducirla de la captura.

**`No pude leer: ...xlsx (abierto en Excel o bloqueado por otro proceso)`**
Ciérralo. No es un TC bloqueado, y no se trabaja sobre una copia para esquivarlo: esperas *tu* archivo actualizado.

**El dashboard de `RESULTADOS` no cuenta lo que se escribió**
El literal del estado no coincide con el de la fórmula, casi siempre por una tilde. No arregles la fórmula: escribe el estado con el literal que `allowed_states` devuelve.

**`Chromium distribution 'chrome' is not found`**
En `playwright-cli`, `--browser=chrome` significa el Chrome de Google instalado, no el motor Chromium. Pasa el mismo nombre que usa `.env` (`chromium`) sin traducirlo.

**`Browser "chrome-for-testing" is not installed`**
`playwright-cli` usa binarios propios: `npx playwright-cli install-browser chrome-for-testing`.

**`iOS corre en Mobile Next Cloud y falta MOBILENEXT_API_KEY`**
El config de iOS no cae a local a propósito. Pon la clave en `.env`.

**`device allocation timed out after …ms (use.allocationTimeout)`**
La nube no asignó un dispositivo a tiempo (cola, o un filtro `*_DEVICE_NAME`/`*_OS_VERSION` que nada cumple). Es un impedimento de ambiente, no un defecto de la app.

**`failed to dump UI … no XML content found in uiautomator dump`**
Android no pudo leer el árbol de la pantalla porque algo animaba (un splash, un carrusel). Es de ambiente y suele resolverlo el reintento; si se repite, `APP_ANIMACIONES=off` en `.env`.

**El caso de Android pasa pero no hay video**
Con `DEBUG=mw:*` se ve `adb: error: cannot create …mp4: Not a directory`: la ruta supera los 260 caracteres que admite `adb` en Windows. Mueve el proyecto a una ruta más corta (≤ 110 caracteres).

**`mobilecli`: `device not found: <id>` justo después de `remote allocate`**
El daemon de `mobilecli` arrancó antes sin `MOBILECLI_TOKEN` y no ve los dispositivos de la nube. `npx mobilecli daemon stop` y repetir con el token exportado. Y al terminar, `npx mobilecli remote release --device <id>`.

**`Playwright Test did not expect test.describe() to be called here` después de subir mobilewright**
Quedaron dos versiones de Playwright: alinea `@playwright/test` con la que fija `@mobilewright/test` (`npm ls playwright-core` debe mostrar una sola).

**Un TC no corre y no aparece en ningún project**
Perdió el sufijo `(Desktop)` / `(Mobile)` —o `(iOS)` / `(Android)` en la app— del título. Sin él no matchea el `grep` de ningún project. El enrutado es por `test()`, no por archivo: en el archivo de una suite conviven casos de los dos projects.

**Tras el primer TC rojo, los demás quedan en `did not run`**
El describe tiene `mode: 'serial'`. En serial el primer fallo salta a los siguientes, y un TC que no corrió no tiene veredicto que escribir en la planilla. Quítalo: por defecto cada `test()` corre con su propio contexto y un fallo no arrastra a los demás.

**Un locator no encuentra un elemento que se ve en pantalla**
Dos causas habituales:
- **Tildes.** La planilla escribe `"Ingresa aqui"` y la UI real es `"Ingresa aquí"`. Usa regex tolerante (`/ingresa aqu[ií]/i`), no el literal del Excel.
- **`aria-hidden`.** Los iconos suelen ser `<svg aria-hidden="true">`: no están en el árbol de accesibilidad y ningún `getByRole` los alcanza. Para verificarlos hace falta un locator de DOM (`boton.locator('svg')`).

**Un TC pasa pero validó el componente equivocado**
Si dos componentes comparten `role` —dos modales son ambos `dialog`—, un `getByRole('dialog')` pelado da por bueno cualquiera. Filtra por contenido propio: `.filter({ hasText: /…/ })`.
