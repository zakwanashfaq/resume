import React from "react";
import { ID_ENUMS } from "../enums";

const SKILL_GROUPS = [
    {
        title: "Languages",
        skills: ["Java", "Javascript", "Typescript", "Python", "C++", "C#", "XML", "HTML"],
    },
    {
        title: "Databases",
        skills: ["MongoDB", "DynamoDB", "IndexedDB", "PostgreSQL", "SQL"],
    },
    {
        title: "Frameworks",
        skills: ["Spring", ".Net", "ReactJS", "react-redux", "ExpressJS", "NodeJS", "NextJS", "ThreeJS"],
    },
    {
        title: "Testing",
        skills: ["Selenium", "Jest", "react-test-utils", "Unit Testing", "Integration Testing"],
    },
    {
        title: "Cloud",
        skills: ["AWS", "Firebase (GCP)"],
    },
    {
        title: "Others",
        skills: ["Git", "Bash", "Pandas", "CSS", "LESS", "Postman", "OpenAPI"],
    },
];

export function Skills(params) {
    return (
        <>
            <div id={ID_ENUMS.SKILLS} className="px-2 py-5 skill-container">
                <h3 className="mb-4 section-title">
                    Skills
                </h3>
                <div className="row">
                    {SKILL_GROUPS.map(group => {
                        return <div key={group.title} className="col-12 col-md-6 d-flex flex-column align-items-start pb-4">
                            <div className="mb-2 skill-group-title">{group.title}</div>
                            <div className="flex-wrap d-flex skill-chip-row">
                                {group.skills.map(skill => {
                                    return <span key={skill} className="skill-chip">{skill}</span>
                                })}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    );
}
