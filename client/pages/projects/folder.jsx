function Folder(props) {
    const BLOCK_FILTER = true;
    // data-masonry='{"percentPosition": true}'
    return <div className="folder-container row" >
        <div className="col-md-3">
            <div className="row">
                <div>
                    <div className="project-page-nav-header py-3 px-2 text-center fw-bold rounded-top">
                        <span className="fs-4">
                            Categories
                        </span>
                    </div>
                    <div id="list-example" class="list-group rounded-0">
                        
                        <a class="project-page-list-group-item list-group-item list-group-item-action" href="#list-item-1">
                        {BLOCK_FILTER && <div className="blocking-overlay text-center">
                                Filter under development
                        </div>}
                            All
                        </a>
                        <a class="project-page-list-group-item list-group-item list-group-item-action" href="#list-item-2">Web Developemnt</a>
                        <a class="project-page-list-group-item list-group-item list-group-item-action" href="#list-item-3">Game Developemnt</a>
                        <a class="project-page-list-group-item list-group-item list-group-item-action" href="#list-item-4">A.I. Projects</a>
                        <a class="project-page-list-group-item list-group-item list-group-item-action" href="#list-item-4">Others</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-9">
            <div className="row">
                {props.children}
            </div>
        </div>
    </div>
}

export default Folder;