import "./css/jumbotron.css";


export const Jumbotron = (props) => {
    return (
        <div className="p-0 customJumbotron">
            <div className="jumbotron mb-0 customJumbotron-container">
                <div className="container">
                    <h1 className="display-4">Hi, I am Zakwan</h1>
                    <p className="lead"> Zakwan Ashfaq Zian</p>
                    <div className="row pl-3">Memorial University of Newfoundland</div>
                    <div className="row pl-3">Bacherlor in Computer Science</div>
                    <div className="row pl-3">Software Engineer</div>
                </div>
            </div>
        </div>
    );
}