import Project from "../../core/projects/project_classes";
import trigger from "../Triggers/streamer.trigger";
import tag from "../Tags/custom_html.tag";

const project = new Project(trigger, tag);

const generador = project.run();

(async function() {
    for await (let value of generador) {
        console.log(value);
    }
})();

// PRUEBA 1 FUNCIONA BIEN
// console.log(generador.next());
// console.log(generador.next());
// console.log(generador.next());
// console.log(generador.next());