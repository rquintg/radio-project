import SongRequest from "../../components/songRequest";
import {NavLink} from "react-router-dom";


export default function NavBar() {



    return (
        <>
            <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-black">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <i className="bi bi-broadcast" style={{fontSize: '1.875rem', color: 'red'}}></i>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Acerca de</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contacto</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/about">Acerca de</NavLink></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <div className="vr bg-light"></div>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/" aria-disabled="true">En Construcion</a>
                            </li>
                        </ul>
                        <button type="button"
                                className="btn btn-outline-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"

                        >Pide tu cancion
                        </button>
                    </div>
                </div>
            </nav>

            <SongRequest />
        </>
    );
}