import React from "react";
import { BUTTON_ENUMS, ID_ENUMS } from "../enums";

function FeaturedItem(props) {
    return (
        <>
            <div className="col-4 mb-3">
                <div className="card bg-body-secondary bg-gradient">
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export function FeaturedProjects(props) {
    return (
        <>
            <div id={ID_ENUMS.FEATURED} className="px-2 py-5">
                <div className="d-flex justify-content-center">
                    <a className={"p-3 btn btn-lg " + (props.darkMode ? "btn-light" : "btn-dark")} href="/projects">View all projects</a>
                </div>
            </div>
        </>
    );
}

export function FeaturedProjects2(props) {
    return (
        <>
            <div id={ID_ENUMS.FEATURED} className="px-2 py-5">
                <div className="mb-4 d-flex">
                    <h3 >Featured Project</h3>
                    <div className="ms-auto d-flex justify-content-center">
                        <button className="btn btn-secondary btn-sm">
                            View all projects
                        </button>
                    </div>
                </div>
                <div className="row">
                    <FeaturedItem />
                    <FeaturedItem />
                    <FeaturedItem />
                </div>
            </div>
        </>
    );
}