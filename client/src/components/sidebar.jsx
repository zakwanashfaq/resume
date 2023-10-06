import React, {useEffect, useState} from "react";
import { BUTTON_ENUMS } from "../enums";

export function Sidebar(props) {
    
     // Default state based on window width, with a check for window's existence
    const isButtonsVisible= true;
    return (
        <>
            <div className="d-flex flex-column p-4 m-0 vh-lg-100 sidebar-container bg-dark text-light bg-gradient">
                <h1 className="display-1">Hi!</h1>
                <h3 className="ps-1">I am <strong>Zakwan</strong> Ashfaq</h3>
                <div id="profilePicture">
                    <hr />
                    <img src="https://media.licdn.com/dms/image/C4D03AQHruOIcH9IFlQ/profile-displayphoto-shrink_800_800/0/1647905183875?e=2147483647&v=beta&t=dbcPKZKhAL3HPfs4NVX1K-JDjVDEdAQsH_ezLzUOius"/>
                </div>
                <hr />
                <div className="ps-1 fs-5">Full Stack Software Developer</div>
                <div className="ps-1">Honours in Computer Science</div>
                <div className="ps-1">Memorial University of Newfoundland</div>
                <hr className="d-none d-xl-block" />
                <div className="d-none d-xl-block"> 
                    {
                        isButtonsVisible &&
                        <div id="buttons" class="container-fluid">
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-4 p-1">
                                <button className="btn btn-dark active w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                                    <i class="bi bi-code-slash d-block mb-1"></i>
                                    Technical Skills
                                </button>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 p-1">
                                <button className="btn btn-secondary w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                                    <i class="bi bi-briefcase d-block mb-1"></i>
                                    Work Experience
                                </button>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 p-1">
                                <button className="btn btn-secondary w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                                    <i class="bi bi-book-half d-block mb-1"></i>
                                    Academics
                                </button>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 p-1">
                                <button className="btn btn-secondary w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                                    <i class="bi bi-star-fill d-block mb-1"></i>
                                    Featured Projects
                                </button>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 p-1">
                                <button className="btn btn-secondary w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                                    <i class="bi bi-chat-quote-fill d-block mb-1"></i>
                                    Github
                                </button>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 p-1">
                                <button className="btn btn-secondary w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                                    <i class="bi bi-envelope-fill d-block mb-1"></i>
                                    LinkedIn
                                </button>
                            </div>
                        </div>
                        </div>
                    }
                </div>
                <div className="d-none d-xl-block" style={{ flex: 1 }}>
                    {/* This will push the rest of the content down */}
                </div>
                <div className="row px-2 pb-0 d-none d-xl-block">
                    <p>Last updated September 2023</p>
                </div>
            </div>
        </>
    );
}

export default Sidebar;