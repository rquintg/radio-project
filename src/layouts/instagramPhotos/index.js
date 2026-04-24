import useInstagramPosts from "../../components/hooks/useInstagramPosts";
import SpinnerLoading from "../../components/util/spinnerLoader";
import styles from "./instagramPhotos.module.css";

export default function InstagramPhotos() {

    const {
        photos,
        loading,
        error,
        currentPage,
        currentPhotos,
        totalPages,
        handleNextPage,
        handlePrevPage
    } = useInstagramPosts();

    if(loading)
    return (
      <div className={styles.loading}>
        <SpinnerLoading />
      </div>
    );
  if (error) return <div className={styles.error}>{error}</div>;
  if (photos.length === 0)
    return <div className={styles.loading}>No se encontraron eventos.</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Proximos Eventos</h2>
      <div className={styles.grid}>
        {currentPhotos.map((photo) => (
          <div key={photo.id} className={styles.card}>
            <img
              src={photo.full_picture}
              alt={photo.message || "Instagram post"}
              className={styles.image}
              loading="lazy"
            />
            <a
              href={photo.permalink_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.overlay}
            >
              <span className={styles.viewButton}>Ver en Instagram</span>
            </a>
            {photo.message && (
              <div className={styles.message}>{photo.message}</div>
            )}
          </div>
        ))}
      </div>

      {/* Controles de Paginación */}
      <div className={styles.paginationContainer}>
        <button
          className={styles.paginationBtn}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          ← Anterior
        </button>

        <span className={styles.pageInfo}>
          Página {currentPage} de {totalPages}
        </span>

        <button
          className={styles.paginationBtn}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
}