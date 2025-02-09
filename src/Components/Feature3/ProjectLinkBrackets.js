import AppProjects from "./AppProjects";
import { Par1 } from "./Par1";
import { Par2 } from "./Par2";
import { Curly1 } from "./Curly1";
import { Curly2 } from "./Curly2";
const ProjectLinkBrackets = () => {
     
    return (
       <div className="project-container"> 
        <Par1 />
        <Curly1 />
        <AppProjects /> 
        <Curly2 />
        <Par2 />
        </div>
    );
}

export default ProjectLinkBrackets;