import Folder from "./folder";
import Item from "./item";
import PROJECTS_DATA from "../../projectData.js";
import { init, track } from '@amplitude/analytics-node';
import Head from 'next/head'


function ProjectPage(props) {
    init('9245e556252008ae4890fecb25ad7e42');
    track('Project Page loaded', undefined, {
        event_type : "projects-page-opened",
        user_id: "sdsfdghgjreywrtqer",
    });

    let styleWheelCount=0;
    const bg_colors = [
        // "bg-yellow",
        // "bg-blue",
        // "bg-purple",
        // "bg-red",
        // "bg-green",
    ];

    const getColor = () => {
        const index = styleWheelCount % (bg_colors.length);
        styleWheelCount++;
        return bg_colors[index];
    }

    return <div>
        <Head>
            <title>Projects</title>
        </Head>
        <div className="project-page-conatiner">
            <div className="main-header p-4 mb-5">
                    <h1 className="pb-0 text-sm-center">ALL PROJECTS</h1>
                    <span className="px-md-5 text-sm-center">Some projects have private repositories, as requested by professors. Access can be provided to those on request.</span>
                </div>
            <div className="container-lg">
                <Folder>
                    {PROJECTS_DATA.map(item => {
                        return <Item 
                            name={item.name}
                            image={item.image}
                            bg={getColor()}
                            description={item.description}
                            tech_stack={item.tech_stack}
                            links={item.links}
                        />
                    })}
                </Folder>
            </div>
            <br />
        </div>
    </div>
}

export default ProjectPage;