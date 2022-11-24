import "./css/jumbotron.css";


export const Jumbotron = (props) => {
    return (
        <div className="p-0 customJumbotron">
            <div className="jumbotron mb-0 customJumbotron-jumbotron">
                <div className="container customJumbotron-container">
                    <h1 className="display-4">Hi!</h1>
                    <p className="lead">I am <a className="customJumbotron-name-highlight">Zakwan</a> Ashfaq Zian</p>
                    <div className="row pl-3">Memorial University of Newfoundland</div>
                    <div className="row pl-3">Honours in Computer Science</div>
                    <div className="row pl-3">Web and Game Developer</div>
                </div>
            </div>
        </div>
    );
}