import { Routes, Route } from "react-router-dom";

import NavBar from "../layouts/navBar";
import Home from "../layouts/home";
import About from "../layouts/about";
import Contact from "../layouts/contact";
import Descargas from "../layouts/blog";
import WebPlayer from "../components/webPlayer";
import FacebookPhotos from "../components/facebookPhotos";

export default function MainRouter() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/descargas" element={<Descargas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/fotos" element={<FacebookPhotos />} />
        </Routes>
      {/* Reproductor persistente (no se desmonta al cambiar de ruta) */}
      <WebPlayer />
    </>
  );
}
