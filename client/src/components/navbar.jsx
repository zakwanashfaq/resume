import "./css/out/navbar.css"

export const Navbar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg rounded navbar-custom" aria-label="Twelfth navbar example">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
                    <ul class="navbar-nav navbar-custom-link">
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/github">Github</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/linkedIn">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}