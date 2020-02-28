import Project from "../../core/projects/project_classes";
import trigger from "../Triggers/streamer.trigger"
import tag from "../Tags/custom_html.tag"

const project = new Project(trigger, tag);

project.run();