import Project from "../../../common/project.class";
import trigger from "../../Triggers/Page_view_all_pages.trigger";
import tag from "../../Tags/HTML - Redirect Movistar Prix.tag";

const project = new Project([[trigger]], tag);

project.run();