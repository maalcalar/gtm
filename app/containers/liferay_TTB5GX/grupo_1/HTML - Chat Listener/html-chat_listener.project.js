import Project from "../../../../common/project.class";
import trigger from "../../../Triggers/Redirect Movistar Prix.trigger";
import tag from "../../../Tags/HTML - Chat Listener.tag";

const project = new Project([[trigger]], tag);

project.run();