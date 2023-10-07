import React from "react";
import { ID_ENUMS } from "../enums";

function EducationItem(props) {
    return (
        <>
            <div className="d-flex flex-column flex-lg-row flex-wrap fs-5">
                <div>
                    <strong>{props?.institution}</strong>
                    <span className="mx-2">|</span>
                    <span>{props?.program}</span>
                </div>
                <div className="ms-lg-auto fs-6 d-flex flex-column">
                    <span >{props?.timespan}</span>
                </div>
            </div>
            <ul>
                {
                    props?.list?.map(item => {
                        return <li key={props?.institution} className="my-4">{item}</li>
                    })
                }
            </ul>
            <hr className="my-5"/>
        </>
    );
}



export function Education(params) {
    return (
        <>
            <div id={ID_ENUMS.ACADEMICS} className="px-2 pb-5">
                <h3 className="mb-4">Academics</h3>
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