import useInstagramPosts from "../../hooks/useInstagramPosts";
import SpinnerLoading from "../../components/util/spinnerLoader";
import GoogleAdsense from "../../components/googleAdsense";
import PageSEO from "../../components/SEO/PageSEO";
import styles from "./instagramPhotos.module.css";

export default function InstagramPhotos() {
    const breadcrumbItems = [
        { name: "Inicio", url: "/" },
        { name: "Toques", url: "/eventos" }
    ];

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
    <>
      <PageSEO
        title="Próximos Toques - Punk Medallo"
        description="Mantente actualizado con los próximos eventos y toques punk en Medellín. Síguenos en Punk Medallo"
        canonicalPath="/eventos"
        breadcrumbItems={breadcrumbItems}
      />
      <div className={styles.container}>
      <h2 className={styles.title}>Proximos Eventos</h2>

      {/* Anuncio 1 */}
      <GoogleAdsense
        adSlot="8901234567"
        adFormat="auto"
      />

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

      {/* Anuncio 2 */}
      <GoogleAdsense
        adSlot="9012345678"
        adFormat="auto"
      />

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
    </>
  );
}

