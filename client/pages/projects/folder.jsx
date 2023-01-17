function Folder(props) {
    // data-masonry='{"percentPosition": true}'
    return <div className="folder-container row" >
        {props.children}
    </div>
}

export default Folder;