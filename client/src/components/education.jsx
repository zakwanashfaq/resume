import React from "react";

function EducationItem(props) {
    return (
        <>
            <div className="d-flex flex-row fs-5">
                <strong>{props.institution}</strong>
                <span className="mx-2">|</span>
                <span>{props.program}</span>
                <span className="ms-auto">{props.timespan}</span>
            </div>
            <ul>
                {
                    props.list?.map(item => {
                        return <li className="my-4">{item}</li>
                    })
                }
            </ul>
        </>
    );
}



export function Education(params) {
    return (
        <>
            <div className="px-2 pb-5">
                <h3 className="mb-4">Academics</h3>
                <EducationItem
                    institution = "Memorial University of Newfoundland"
                    program = "Honours in Computer Science"
                    timespan = "September 2019–August 2023"
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