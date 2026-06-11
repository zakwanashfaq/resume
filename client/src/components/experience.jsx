import React from "react";
import { EXPERIENCE_DATA } from "../../projectData";
import { ID_ENUMS } from "../enums";

function ExperienceItem(props) {
    return (
        <div className="resume-card mb-4">
            <div className="d-flex flex-column flex-md-row flex-wrap">
                <div className="resume-card-heading">
                    <strong>{props?.companyName}</strong>
                    <span className="resume-card-divider mx-2">|</span>
                    <span className="resume-card-role">{props?.position}</span>
                </div>
                <div className="ms-md-auto d-flex flex-column resume-card-meta">
                    <span>{props?.timespan}</span>
                    <span className="ms-md-auto">{props?.duration}</span>
                </div>
            </div>
            <ul className="resume-card-list">
                {
                    props?.list?.map(item => {
                        return <li key={item} className="my-3">{item}</li>
                    })
                }
            </ul>
            <div className="resume-card-tech">
                {props.techStack}
            </div>
        </div>
    );
}



export function Experience(params) {
    return (
        <>
            <div id={ID_ENUMS.WORK_EXPERIENCE} className="px-2 pb-5 mt-4">
                <h3 className="mb-4 section-title">Experience</h3>
                {
                    EXPERIENCE_DATA.map(expItem => {
                        return <ExperienceItem
                            key={expItem.company}
                            companyName = {expItem.company}
                            position = {expItem.position}
                            duration = {expItem.duration}
                            timespan = {expItem.timespan}
                            list = {expItem.bulletPoints}
                            techStack= {expItem.techStack}
                        />
                    })
                }
            </div>
        </>
    );
}
