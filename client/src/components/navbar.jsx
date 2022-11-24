import "./css/navbar.css"

export const Navbar = (props) => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-2 sticky-top p-0 navbar-container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav container">
                        <li class="nav-item active">
                            <a class="nav-link" href="#highlights">Highlights <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#education">Education</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#work">Work Experience</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#projects">Projects</a>
                        </li>
                        <li class="nav-item active">
                            <a href="#volunteer" class="nav-link">Volunteer Work</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#skills">Skills and Credentials</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#achievements">Achievements</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/zakwanashfaq/">LinkedIn</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" target="_blank" href="https://github.com/zakwanashfaq">Github</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="belowNavbarStyleLine">
                <br />
            </div>
        </>
    );
}