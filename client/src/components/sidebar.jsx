import React, {useEffect, useState} from "react";

export function Sidebar(props) {
     // Default state based on window width, with a check for window's existence
     const [isButtonsVisible, setIsButtonsVisible] = useState(
        typeof window !== "undefined" ? window.innerWidth >= 1200 : true
    );

    useEffect(() => {
        // Update the state based on window width
        const handleResize = () => {
            if (window.innerWidth < 1200) {
                setIsButtonsVisible(false);
            } else {
                setIsButtonsVisible(true);
            }
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Call the function once to set the initial state
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 
    return (
        <>
            <div className="d-flex flex-column p-4 m-0 vh-lg-100 sidebar-container">
                <h1 className="display-1">Hi!</h1>
                <h3 className="ps-1">I am <strong>Zakwan</strong> Ashfaq</h3>
                <hr />
                <div className="ps-1 fs-5">Full Stack Software Developer</div>
                <div className="ps-1">Honours in Computer Science</div>
                <div className="ps-1">Memorial University of Newfoundland</div>
                <hr />
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
                                Education
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
                                Testimonials & References
                            </button>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 p-1">
                            <button className="btn btn-secondary w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                                <i class="bi bi-envelope-fill d-block mb-1"></i>
                                Contact Me
                            </button>
                        </div>
                    </div>
                    </div>
                }
                <div className="d-none d-xl-block" style={{ flex: 1 }}>
                    {/* This will push the rest of the content down */}
                </div>
                <div className="row px-2 pb-0">
                    <div class="col-6 p-1">
                        <button className="btn btn-secondary w-100 h-100 d-flex flex-row align-items-center justify-content-center">
                            <i class="bi bi-envelope-fill d-block pe-2"></i>
                            <span>
                                Github
                            </span>
                        </button>
                    </div>
                    <div class="col-6 p-1">
                        <button className="btn btn-secondary w-100 h-100 d-flex flex-row align-items-center justify-content-center">
                            <i class="bi bi-envelope-fill d-block pe-2"></i>
                            <span>
                                LinkedIn
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;