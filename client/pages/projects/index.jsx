import Folder from "./folder";
import Item from "./item";
import PROJECTS_DATA from "../../projectData.js";
import * as Amplitude from '@amplitude/node';



function ProjectPage(props) {
    const client = Amplitude.init('9245e556252008ae4890fecb25ad7e42');
    client.logEvent({
        event_type: 'Node.js Event',
        user_id: 'datamonster@gmail.com',
        location_lat: 37.77,
        location_lng: -122.39,
        ip: '127.0.0.1',
        event_properties: {
        keyString: 'valueString',
        keyInt: 11,
        keyBool: true
        }
    });

    let styleWheelCount=0;
    const bg_colors = [
        "bg-yellow",
        "bg-blue",
        "bg-purple",
        "bg-red",
        "bg-green",
    ];
    const getColor = () => {
        const index = styleWheelCount % (bg_colors.length);
        styleWheelCount++;
        return bg_colors[index];
    }

    return <div className="project-page-conatiner">
        <div className="container-lg">
            <div className="main-header">
                <h1>ALL PROJECTS</h1>
                <span>Some projects have private github repo due to request from professors. Access can be provided to those on request.</span>
            </div>
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
}

export default ProjectPage;