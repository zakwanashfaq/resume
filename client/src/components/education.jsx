import React from "react";
import { ID_ENUMS } from "../enums";

function EducationItem(props) {
    return (
        <div className="resume-card mb-4">
            <div className="d-flex flex-column flex-lg-row flex-wrap">
                <div className="resume-card-heading">
                    <strong>{props?.institution}</strong>
                    <span className="resume-card-divider mx-2">|</span>
                    <span className="resume-card-role">{props?.program}</span>
                </div>
                <div className="ms-lg-auto d-flex flex-column resume-card-meta">
                    <span>{props?.timespan}</span>
                </div>
            </div>
            <ul className="resume-card-list mb-0">
                {
                    props?.list?.map(item => {
                        return <li key={item} className="my-3">{item}</li>
                    })
                }
            </ul>
        </div>
    );
}



export function Education(params) {
    return (
        <>
            <div id={ID_ENUMS.ACADEMICS} className="px-2 pb-4">
                <h3 className="mb-4 section-title">Academics</h3>
                <EducationItem
                    institution = "Memorial University of Newfoundland"
                    program = "Honours in Computer Science"
                    timespan = "Sept 2019 to Aug 2023"
                    list = {[
                        "Dean’s List 2021 award winner for excellent academic achievement.",
                        "All A’s in Computer Science courses with a CGPA of 3.75 and an average of 85.4%.",
                        "Thesis in Performance of A.I. Algorithms in game(A* and Iterative Deepening A* in Rush Hour Puzzle).",
                    ]}
                />
            </div>
        </>
    );
}
