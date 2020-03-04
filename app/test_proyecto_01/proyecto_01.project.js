import Project from "../../core/projects/project_classes";
import triggerstreamer from "../Triggers/streamer.trigger";
import triggerstreamer2 from "../Triggers/streamer.trigger";
import triggerpageview from "../Triggers/page_view.trigger";
import tag from "../Tags/custom_html.tag";

const project = new Project([[triggerstreamer, triggerstreamer2], [triggerpageview]], tag);

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