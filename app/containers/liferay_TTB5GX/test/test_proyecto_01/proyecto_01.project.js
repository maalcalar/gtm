import Project from "../../../../common/project.class";
import trigger from "../../../Triggers/custom_event.trigger";
import tag from "../../../Tags/custom_html.tag";

const project = new Project([[trigger]], undefined, tag);

export default project;

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
