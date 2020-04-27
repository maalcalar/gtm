import Project from "../../../../common/project.class";
import trigger from "../../../Triggers/Page_view_all_pages.trigger";
import tag from "../../../Tags/HTML - Chat Listener.tag";

const project = new Project([[trigger]], undefined, tag);

project.run();