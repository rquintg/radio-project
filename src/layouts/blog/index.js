import useBlogPosts from "../../components/hooks/useBlogPosts";
import ButtonsPaginationBlog from "../../components/util/buttonsPaginationBlog";
import SpinnerLoader from "../../components/util/spinnerLoader";
import GoogleAdsense from "../../components/googleAdsense";
import PageSEO from "../../components/SEO/PageSEO";

import styles from './blog.module.css';


export default function Blog() {
    const breadcrumbItems = [
        { name: "Inicio", url: "/" },
        { name: "Descargas", url: "/descargas" }
    ];

    const {
        posts,
        nextPageToken,
        prevPageTokens,
        loading,
        fetchPosts
    } = useBlogPosts();

    return (
        <>
            <PageSEO
                title="Descargar Música - Punk Medallo"
                description="Descarga y disfruta de la mejor música punk de Medellín. Accede a nuestro catálogo completo de artistas locales y bandas underground."
                canonicalPath="/descargas"
                breadcrumbItems={breadcrumbItems}
            />
            <div className={styles['blog-container']}>
            <h2 className={styles['blog-title']}>Descargar Musica</h2>

            {/* Anuncio 1 - Bajo el título */}
            <GoogleAdsense
                adSlot="2345678901"
                adFormat="auto"
            />

            {loading && <div style={{textAlign: 'center', margin: '20px'}}>
                <SpinnerLoader/>
            </div>}
            <div className={styles['blog-grid']}>
                {posts.map((post) => (
                    <div key={post.id} className={styles['blog-post']}>
                        <h3 className={styles['blog-post-title']}>{post.title}</h3>
                        <div className={styles['blog-post-content']} dangerouslySetInnerHTML={{__html: post.content}}/>
                    </div>
                ))}
            </div>

            {/* Anuncio 2 - Antes de paginación */}
            <GoogleAdsense
                adSlot="3456789012"
                adFormat="auto"
            />

            <ButtonsPaginationBlog
                nextPageToken={nextPageToken}
                prevPageTokens={prevPageTokens}
                fetchPosts={fetchPosts}
                loading={loading}
            />
        </div>
        </>
    );
};


