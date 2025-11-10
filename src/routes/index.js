import { Routes, Route} from "react-router-dom";

import NavBar from "../layouts/navBar";
import Home from "../layouts/home";
import About from "../layouts/about";
import Contact from "../layouts/contact";
import Blog from "../layouts/blog";
import WebPlayer from "../components/webPlayer";

export default function MainRouter() {
    return (
        <>
            <NavBar />
            <div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/blog" element={<Blog/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/about" element={<About/>} />
                </Routes>
            </div>
            {/* Reproductor persistente (no se desmonta al cambiar de ruta) */}
            <WebPlayer />
        </>

    );
}
