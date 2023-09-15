import React from "react";

export function Skills(params) {
    return (
        <>
            <div className="px-2 py-5">
                <h3 className="mb-4">
                    Skills
                </h3>
                <div className="d-flex mx-auto flex-column">
                    <div className="d-flex align-items-center mb-3">
                        <strong className="me-3">Languages</strong>
                        <button disabled className="btn btn-success">Java</button>
                        <button disabled className="btn btn-success ms-3">Javascript</button>
                        <button disabled className="btn btn-success ms-3">Typescript</button>
                        <button disabled className="btn btn-success ms-3">Python</button>
                        <button disabled className="btn btn-success ms-3">C++</button>
                        <button disabled className="btn btn-success ms-3">C#</button>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <strong className="me-3">Databases</strong>
                        <button disabled className="btn btn-warning">MongoDB</button>
                        <button disabled className="btn btn-warning ms-3">DynamoDB</button>
                        <button disabled className="btn btn-warning ms-3">IndexedDB</button>
                        <button disabled className="btn btn-warning ms-3">PostgreSQL</button>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <strong className="me-3">Frameworks</strong>
                        <button disabled className="btn btn-danger">ReactJS</button>
                        <button disabled className="btn btn-danger ms-3">Express</button>
                        <button disabled className="btn btn-danger ms-3">NodeJS</button>
                        <button disabled className="btn btn-danger ms-3">ThreeJS</button>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <strong className="me-3">Testing</strong>
                        <button disabled className="btn btn-success">Java</button>
                        <button disabled className="btn btn-success ms-3">Javascript</button>
                        <button disabled className="btn btn-success ms-3">Typescript</button>
                        <button disabled className="btn btn-success ms-3">Python</button>
                        <button disabled className="btn btn-success ms-3">C++</button>
                        <button disabled className="btn btn-success ms-3">C#</button>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <strong className="me-3">Cloud</strong>
                        <button disabled className="btn btn-warning">MongoDB</button>
                        <button disabled className="btn btn-warning ms-3">DynamoDB</button>
                        <button disabled className="btn btn-warning ms-3">IndexedDB</button>
                        <button disabled className="btn btn-warning ms-3">PostgreSQL</button>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <strong className="me-3">Others</strong>
                        <button disabled className="btn btn-danger">ReactJS</button>
                        <button disabled className="btn btn-danger ms-3">Express</button>
                        <button disabled className="btn btn-danger ms-3">NodeJS</button>
                        <button disabled className="btn btn-danger ms-3">ThreeJS</button>
                    </div>
                </div>
            </div>
        </>
    );
}