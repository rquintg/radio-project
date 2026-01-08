import SongRequest from "../songRequest";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./navBar.module.css";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.navContainer} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={`navbar ${styles.navBar} navbar-expand-md navbar-dark`}>
          <div className="container">
            <NavLink className={`navbar-brand ${styles.navBrand}`} to="/">
              <i className={`bi bi-broadcast ${styles.brandIcon}`}></i>
            </NavLink>
            <button
              className={`navbar-toggler ${styles.navToggler}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className={`navbar-toggler-icon ${styles.togglerIcon}`}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${styles.navLink} ${isActive ? styles.active : ""}`
                    }
                    aria-current="page"
                    to="/"
                  >
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${styles.navLink} ${isActive ? styles.active : ""}`
                    }
                    to="/about"
                  >
                    Acerca de
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${styles.navLink} ${isActive ? styles.active : ""}`
                    }
                    to="/descargas"
                  >
                    Descargas
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${styles.navLink} ${isActive ? styles.active : ""}`
                    }
                    to="/fotos"
                  >
                    Registro Fotográfico
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${styles.navLink} ${isActive ? styles.active : ""}`
                    }
                    to="/contact"
                  >
                    Contacto
                  </NavLink>
                </li>
              </ul>
              <div className={`vr ${styles.divider}`}></div>
              <li className="nav-item" style={{ listStyle: "none" }}>
                <span className={`${styles.construccion}`}>
                  .
                </span>
              </li>
              {/* <button
                type="button"
                className={`btn ${styles.btnRequestSong}`}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Pide tu canción
              </button> */}
            </div>
          </div>
        </div>
      </nav>

      <SongRequest />
    </>
  );
}
