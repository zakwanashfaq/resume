

export function ResumeTopNavbar(props) {
    let bgStyle = {};
    if (props.isDark) {
        bgStyle = {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(/headerImg.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        };
    } else {
        bgStyle = {
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1)), url(/headerImg.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        };
    }



    return (
        <>
            <div className="text-white p-xl-3" style={bgStyle}>
                <div className="container-lg pt-5 pb-4">
                    {/* <div className="d-flex flex-column flex-md-row justify-content-center">
                        <div className="text-center">
                            <h2 className="fw-bold">Detailed Resume</h2>
                        </div>
                        <div className="ms-md-auto me-md-5 text-center text-md-end text-md-left">
                            <h3><strong>Zakwan</strong> Ashfaq Zian</h3>
                            <h5>Full Stack Developer</h5>
                        </div>
                        <hr className="d-md-none" />
                    </div> */}
                </div>
            </div>
            <div className="">
                <div className="container-lg">
                    <div className={"d-flex justify-content-center my-auto text-white d-flex flex-wrap pt-3" + props.isDark? "bg-dark" : ""}>
                        {/* <a className="mx-2 mb-3 btn btn-dark">Skills</a>
                        <a className="mx-2 mb-3 btn btn-dark">Experience</a>
                        <a className="mx-2 mb-3 btn btn-dark">Academics</a>
                        <a className="mx-2 mb-3 btn btn-dark">Featured Project</a>
                        <a className="mx-2 mb-3 btn btn-dark">All Project</a>
                        <a className="mx-2 mb-3 btn btn-dark">Testimonials</a>
                        <a className="mx-2 mb-3 btn btn-dark">Contacts</a>
                        <a className="mx-2 mb-3 btn btn-dark">Github</a>
                        <a className="mx-2 mb-3 btn btn-dark">LinkedIn</a> */}
                    </div>
                </div>
            </div>
        </>
    );
}
