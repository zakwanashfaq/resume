import Folder from "./folder";
import Item from "./item";
import { PROJECTS_DATA } from "./projectData";


function ProjectPage(props) {
    return <div className="project-page-conatiner">
        <div className="container-lg">
            <div className="main-header">
                <h1>ALL PROJECTS</h1>
                <span>Some projects have private github repo due to request from professors. Access can be provided to those on request.</span>
            </div>
            <div className="row">
                <Folder>
                    {PROJECTS_DATA.map(item => {
                        return <Item 
                            name={item.name}
                            image={item.image}
                            description={item.description}
                            tech_stack={item.tech_stack}
                            links={item.links}
                        />
                    })}
                </Folder>
            </div>
        </div>
        <br />
    </div>
}

export default ProjectPage;