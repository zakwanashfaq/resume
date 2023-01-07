// import "./css/out/jumbotron.css";

const onClickOpenGithub = (e) => {
    window.open(
        'https://github.com/zakwanashfaq',
        '_blank'
    );
}

const onClickOpenLinkedIn = (e) => {
    window.open(
        'https://www.linkedin.com/in/zakwanashfaq/',
        '_blank'
    );
}

const onClickOpenContactsPage = (e) => {
    window.open('/contact');
}

const onClickOpenProjectsPage = (e) => {
    window.open('/projects', "_self");
}

export const Jumbotron = (props) => {
    return (
        <div className="p-0 customJumbotron">
            <div className="jumbotron mb-0 customJumbotron-jumbotron">
                <div className="container customJumbotron-container">
                    <h1 className="display-4">Hello!</h1>
                    <p className="lead">I am <span className="customJumbotron-name-highlight">Zakwan</span> Ashfaq Zian</p>
                    <div className="row">Memorial University of Newfoundland</div>
                    <div className="row">Honours in Computer Science</div>
                    <div className="row">Web and Game Developer</div>
                    <br />
                    <div className="row ">
                        <button type="button" class="btn btn-dark" onClick={onClickOpenProjectsPage}>Portfolio / Projects</button>
                    </div>
                    <div className="row p-2">
                        <button type="button" class="btn btn-outline-dark m-1" onClick={onClickOpenContactsPage}>Contact Me</button>
                        <button type="button" class="btn btn-outline-dark m-1" onClick={onClickOpenGithub}>Github</button>
                        <button type="button" class="btn btn-outline-dark m-1" onClick={onClickOpenLinkedIn}>LinkedIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
}