import React from "react";
import { ID_ENUMS } from "../enums";

export function Skills(params) {
    return (
        <>
            <div id={ID_ENUMS.SKILLS} className="px-2 py-5 skill-container">
                <h3 className="mb-4">
                    Skills
                </h3>
                <div className="row">
                    <div className="col-12 col-md-6 d-flex flex-column align-items-star  pb-3">
                        <div className="mb-2 fs-5">Languages</div>
                        <div className="flex-wrap d-flex btn-cat-1">
                            <button disabled className="btn btn-success m-1">Java</button>
                            <button disabled className="btn btn-success m-1">Javascript</button>
                            <button disabled className="btn btn-success m-1">Typescript</button>
                            <button disabled className="btn btn-success m-1">Python</button>
                            <button disabled className="btn btn-success m-1">C++</button>
                            <button disabled className="btn btn-success m-1">C#</button>
                            <button disabled className="btn btn-success m-1">XML</button>
                            <button disabled className="btn btn-success m-1">HTML</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column align-items-star pb-3">
                        <div className="mb-2 fs-5">Databases</div>
                        <div className="flex-wrap d-flex btn-cat-2">
                            <button disabled className="btn btn-warning m-1">MongoDB</button>
                            <button disabled className="btn btn-warning m-1">DynamoDB</button>
                            <button disabled className="btn btn-warning m-1">IndexedDB</button>
                            <button disabled className="btn btn-warning m-1">PostgreSQL</button>
                            <button disabled className="btn btn-warning m-1">SQL</button>
                        </div>

                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column align-items-start pb-3">
                        <div className="mb-2 fs-5">Frameworks</div>
                        <div className="flex-wrap d-flex btn-cat-3">
                            <button disabled className="btn btn-danger m-1">Spring</button>
                            <button disabled className="btn btn-danger m-1">.Net</button>
                            <button disabled className="btn btn-danger m-1">ReactJS</button>
                            <button disabled className="btn btn-danger m-1">react-redux</button>
                            <button disabled className="btn btn-danger m-1">ExpressJS</button>
                            <button disabled className="btn btn-danger m-1">NodeJS</button>
                            <button disabled className="btn btn-danger m-1">NextJS</button>
                            <button disabled className="btn btn-danger m-1">ThreeJS</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column align-items-start pb-3">
                        <div className="mb-2 fs-5">Testing</div>
                        <div className="flex-wrap d-flex btn-cat-4">      
                            <button disabled className="btn btn-success m-1">Selenium</button>
                            <button disabled className="btn btn-success m-1">Jest</button>
                            <button disabled className="btn btn-success m-1">react-test-utils</button>
                            <button disabled className="btn btn-success m-1">Unit Testing</button>
                            <button disabled className="btn btn-success m-1">Integration Testing</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column align-items-start pb-3">
                        <div className="mb-2 fs-5">Cloud</div>
                        <div className="flex-wrap d-flex btn-cat-5">
                            <button disabled className="btn btn-warning m-1">AWS</button>
                            <button disabled className="btn btn-warning m-1">{"Firebase (GCP)"}</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column align-items-start pb-3">
                        <div className="mb-2 fs-5">Others</div>
                        <div className="flex-wrap d-flex btn-cat-6">    
                            <button disabled className="btn btn-danger m-1">Git</button>
                            <button disabled className="btn btn-danger m-1">Bash</button>
                            <button disabled className="btn btn-danger m-1">Pandas</button>
                            <button disabled className="btn btn-danger m-1">CSS</button>
                            <button disabled className="btn btn-danger m-1">LESS</button>
                            <button disabled className="btn btn-danger m-1">Postman</button>
                            <button disabled className="btn btn-danger m-1">OpenAPI</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}