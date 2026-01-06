import { useEffect, useState } from "react";
import { fetchFacebookPhotos } from "../../../util/axiosFacebook";

export default function useFacebookPost() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const photosPerPage = 6;

    useEffect(() => {
        const loadPhotos = async () => {
            try {
                setLoading(true);
                const fetchedPhotos = await fetchFacebookPhotos();
                setPhotos(fetchedPhotos);
            } catch (err) {
                setError(err.message || "Error fetching Facebook photos.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadPhotos();
    }, []);

    // Calcular índices para paginación
    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);
    const totalPages = Math.ceil(photos.length / photosPerPage);

    // Funciones de navegación
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return {
        photos,
        loading,
        error,
        currentPage,
        currentPhotos,
        totalPages,
        handleNextPage,
        handlePrevPage
    }
}