import React from "react";
import { EXPERIENCE_DATA } from "../../projectData";

function ExperienceItem(props) {
    return (
        <>
            <div className="d-flex flex-column flex-md-row flex-wrap fs-5">
                <div>
                    <strong>{props?.companyName}</strong>
                    <span className="mx-2">|</span>
                    <span>{props?.position}</span>
                </div>
                <div className="ms-md-auto fs-6 d-flex flex-column">
                    <span >{props?.timespan}</span>
                    <span className="ms-md-auto">{props?.duration}</span>
                </div>
            </div>
            <ul>
                {
                    props?.list?.map(item => {
                        return <li key={props?.companyName} className="my-4">{item}</li>
                    })
                }
            </ul>
            <hr className="my-5"/>
        </>
    );
}



export function Experience(params) {
    return (
        <>
            <div className="px-2 pb-5 mt-4">
                <h3 className="mb-4">Experience</h3>
                {
                    EXPERIENCE_DATA.map(expItem => {
                        return <ExperienceItem 
                            companyName = {expItem.company}
                            position = {expItem.position}
                            duration = {expItem.duration}
                            timespan = {expItem.timespan}
                            list = {expItem.bulletPoints}
                        />
                    })
                }
            </div>
        </>
    );
}