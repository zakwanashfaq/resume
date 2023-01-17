function Item(props) {
    const default_image = "https://www.rightclickit.com.au/wp-content/uploads/2018/09/IMAGE-COMING-SOON-1000.jpg";
    return <div className="item-container p-1 col-12 col-sm-6 col-lg-4 col-xl-3">
        <div class={"card p-0 " + props.bg}>
            <img className="p-0 m-0 b-0" src={props.image? props.image : default_image} alt="Unavailable" />
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.description}</p>
                <p class="">Tech Stack: {props.tech_stack}</p>
                {props.links?.map(item => {
                    return <a href={item.link} target="_blank" class="btn btn-outline-light m-1">{item.name}</a>
                })}
            </div>
        </div>
    </div>
}

export default Item;