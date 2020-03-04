## Estructura
---
- Carpetas en las que sólo habrán Triggers, Tags y Variables. Esto permitiría evitar redundancia de código para su reutilización. 👍
- Las demás carpetas de proyectos recolectan/importan Triggers, Tags y/o Variables. 👍
- Los Proyectos deben permitir iteraciones infinitas de parte de los Triggers. 👍

## Documentación
---
- Establecer un documento para que los desarrolladores puedan ingresar/documentar sus tareas y/o aportes. 😪

## Bundler - Webpack ❌
---
- Automatizar la entrada de scripts. 👍

## Bundler - Gulp
--
- Desinstalar webpack. 👍
- Automatizar la entrada de scripts.
- Automatizar la salida de scripts.

### Proyectos
---
- Nueva clase. 👍
- Incluir Triggers, Tags. Refactorizar. 😪
- Los proyectos pueden establecer múltiples Triggers con condicionales. 😪
- Incluir Excepciones en Triggers.
- Orden de Tags.
- Agregar "Try catch" para evitar caída. 😪
- Agregar excepción para Triggers de tipo 'Page view'.

## Trigger
---
- Agregar "Try catch" para evitar caída. 👍
- Tipo "Custom Event". Encontrar solución para yield. 😪
- Transformar propiedad Run en Iterador asíncrono. 😪
- Quitar los Tags de la declaración. 😪
- Crear un Proxy para la observación de dataLayer. 😪

## Tag
---
- Custom HTML. 👍
- Deben tener nativamente una función para agregar objetos a dataLayer, de esta manera el dataLayer se podrá consultar como se hace actualmente y también se podrá escuchar los cambios en el dataLayer.
- Regular Expression para detectar mala escritura en tipo Custom HTML. (Ejemplo: /(<script>)\w+\W+\d+\D+(<\\script>)/gm)
- Posibilidad para importar archivos HTML.

## Variables
---
- Nueva clase.

---
## Fuentes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
https://developer.mozilla.org/en-US/docs/Web/API/Streams_API
https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams
https://github.com/mdn/dom-examples/blob/master/streams/simple-random-stream/index.html
https://javascript.info/async-iterators-generators