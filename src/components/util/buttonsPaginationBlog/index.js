import styles from "./buttonsPaginationBlog.module.css";

export default function ButtonsPaginationBlog({nextPageToken, prevPageTokens, fetchPosts, loading}) {

    const handleNext = () => {
        if (nextPageToken) fetchPosts(nextPageToken, true);
    };
    const handlePrev = () => {
        if (prevPageTokens.length > 1) {
            // El penúltimo token es la página anterior
            fetchPosts(prevPageTokens[prevPageTokens.length - 2], false);
        } else if (prevPageTokens.length === 1) {
            // Volver a la primera página
            fetchPosts(null, false);
        }
    };


    return (
        <>
            <div className={styles.buttonContainer}>
                <button onClick={handlePrev} disabled={prevPageTokens.length === 0 || loading}
                        className={styles.buttonBlog} style={{
                    cursor: prevPageTokens.length === 0 || loading ? 'not-allowed' : 'pointer',
                    opacity: prevPageTokens.length === 0 || loading ? 0.5 : 1
                }}>Anterior
                </button>
                <button onClick={handleNext} disabled={!nextPageToken || loading} className={styles.buttonBlog} style={{
                    cursor: !nextPageToken || loading ? 'not-allowed' : 'pointer',
                    opacity: !nextPageToken || loading ? 0.5 : 1
                }}>Siguiente
                </button>
            </div>
        </>
    )
}