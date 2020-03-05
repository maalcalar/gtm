import Project from "../../core/projects/project_classes";
import trigger from "../Triggers/custom_event.trigger";
import tag from "../Tags/custom_html_2.tag";

const project = new Project([[trigger]], tag);

project.run();

// PRUEBA 2 FUNCIONA BIEN
// const generador = project.run();

// (async function() {
//     for await (let value of generador) {
//         console.log('Iterator value: ', value);
//     }
// })();

// PRUEBA 1 FUNCIONA BIEN
// console.log(generador.next());
// console.log(generador.next());
// console.log(generador.next());
// console.log(generador.next());