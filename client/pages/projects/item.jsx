function Item(props) {
    const default_image = "https://www.rightclickit.com.au/wp-content/uploads/2018/09/IMAGE-COMING-SOON-1000.jpg";

    //  col-sm-6 col-lg-6 col-xl-4
    return <div className="item-container p-1 col-12">
        <div className={"card p-0 " + ((props.bg) ? "bg-dark text-white" : "")}>
            <div className="row">
                <div className="col-md-4">
                    <img className="p-0 m-0 b-0" src={props.image ? props.image : default_image} alt="Unavailable" />
                </div>
                <div className="col-md-8">
                    <div className={"card-body " + ((props.bg) ? "bg-dark" : "")}>
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <p className="">Tech Stack: {props.tech_stack}</p>
                        {props.links?.map(item => {
                            return <a
                                key={item.link}
                                href={item.link}
                                target="_blank"
                                className={"btn m-1 " + ((props.bg) ? " btn-outline-light" : " btn-outline-dark")}
                            >
                                {item.name}
                            </a>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Item;