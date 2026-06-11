function Item(props) {
    const techChips = (props.tech_stack || "")
        .split(/[,&]/)
        .map(tech => tech.trim())
        .filter(Boolean);

    return <div className="item-container p-2 col-12 col-md-6 col-lg-4">
        <div className={"project-card" + (props.bg ? " project-card-dark" : "")}>
            <div className="project-card-body">
                <h5 className="project-card-title">{props.name}</h5>
                <p className="project-card-desc">{props.description}</p>
            </div>
            <div className="project-card-tech">
                {techChips.map(tech => {
                    return <span key={tech} className="tech-chip">{tech}</span>
                })}
            </div>
            <div className="project-card-links">
                {props.links?.map(item => {
                    return <a
                        key={item.link}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card-link"
                    >
                        {item.name}<i className="bi bi-arrow-up-right"></i>
                    </a>
                })}
            </div>
        </div>
    </div>
}

export default Item;
