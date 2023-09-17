import React from "react";

function ExperienceItem(props) {
    return (
        <>
            <div className="d-flex flex-row fs-5">
                <strong>{props.companyName}</strong>
                <span className="mx-2">|</span>
                <span>{props.position}</span>
                <span className="mx-2">|</span>
                <span>{props.duration}</span>
                <span className="ms-auto">{props.timespan}</span>
            </div>
            <ul>
                {
                    props.list?.map(item => {
                        return <li key={props.companyName} className="my-4">{item}</li>
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
                <ExperienceItem
                    companyName = "Rutter Inc."
                    position = "Development Project Lead"
                    duration = "4 months"
                    timespan = "May 2023–August 2023"
                    list = {[
                        "Lead the development of a multi-threaded, stress testing application to evaluate and benchmark Rutter systems, networks and other infrastructure components.",
                        "Architected a cutting edge reporting system that analyzes the data from simulations and extracts meaningful results and insights from each run. The generated report is stored as a pdf for record.",
                        "Identified system limitations through scientific and repeatable tests, ensuring reliability of collected results.",
                        "Collaborated closely with Rutter Inc. developers and university peers to solve daily challenges."
                    ]}
                />
                <ExperienceItem
                    companyName = "Celtx"
                    position = "Development Project Lead"
                    duration = "4 months"
                    timespan = "May 2023–August 2023"
                    list = {[
                        "Lead the development of a multi-threaded, stress testing application to evaluate and benchmark Rutter systems, networks and other infrastructure components.",
                        "Architected a cutting edge reporting system that analyzes the data from simulations and extracts meaningful results and insights from each run. The generated report is stored as a pdf for record.",
                        "Identified system limitations through scientific and repeatable tests, ensuring reliability of collected results.",
                        "Collaborated closely with Rutter Inc. developers and university peers to solve daily challenges."
                    ]}
                />
                <ExperienceItem
                    companyName = "Memorial University"
                    position = "Development Project Lead"
                    duration = "4 months"
                    timespan = "May 2023–August 2023"
                    list = {[
                        "Lead the development of a multi-threaded, stress testing application to evaluate and benchmark Rutter systems, networks and other infrastructure components.",
                        "Architected a cutting edge reporting system that analyzes the data from simulations and extracts meaningful results and insights from each run. The generated report is stored as a pdf for record.",
                        "Identified system limitations through scientific and repeatable tests, ensuring reliability of collected results.",
                        "Collaborated closely with Rutter Inc. developers and university peers to solve daily challenges."
                    ]}
                />
            </div>
        </>
    );
}