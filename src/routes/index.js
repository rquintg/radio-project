import { Routes, Route} from "react-router-dom";

import NavBar from "../layouts/navBar";
import Home from "../layouts/home";
import About from "../layouts/about";
import Contact from "../layouts/contact";
import Blog from "../layouts/blog";

export default function MainRouter() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/about" element={<About/>} />
            </Routes>

        </>

    );
}

