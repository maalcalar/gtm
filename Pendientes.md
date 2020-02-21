## Estructura
---
- Carpetas en las que sólo habrán Triggers, Tags y Variables. Esto permitiría evitar redundancia de código para su reutilización. 👍
- Las demás carpetas de proyectos recolectan/importan Triggers, Tags y/o Variables. 👍
- Los Proyectos deben permitir iteraciones infinitas de parte de los Triggers.

## Documentación
---
- Establecer un documento para que los desarrolladores puedan ingresar/documentar sus tareas y/o aportes 😪

## Bundler - Webpack
---
- Automatizar la entrada de scripts 👍

### Proyectos
---
- Nueva clase 👍
- Incluir Triggers, Tags 😪
- Los proyectos pueden establecer múltiples Triggers con condicionales
- Incluir Excepciones en Triggers
- Orden de Triggers
- Orden de Tags

## Trigger
---
- Agregar "Try catch" para evitar caída 😪
- Tipo "Custom Event" 😪

## Tag
---
- Custom HTML 👍
- Deben tener nativamente una función para agregar objetos a dataLayer, de esta manera el dataLayer se podrá consultar como se hace actualmente y también se podrá escuchar los cambios en el dataLayer.
- Regular Expression para detectar mala escritura en tipo Custom HTML. (Ejemplo: /(<script>)\w+\W+\d+\D+(<\\script>)/gm)
- Posibilidad para importar archivos HTML

## Variables
---
- Nueva clase