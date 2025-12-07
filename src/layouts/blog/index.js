import useBlogPosts from "../../components/hooks/useBlogPosts";
import ButtonsPaginationBlog from "../../components/util/buttonsPaginationBlog";
import SpinnerLoader from "../../components/util/spinnerLoader";

import styles from './blog.module.css';


export default function Blog() {

    const {
        posts,
        nextPageToken,
        prevPageTokens,
        loading,
        fetchPosts
    } = useBlogPosts();

    return (
        <div className={styles['blog-container']}>
            <h2 className={styles['blog-title']}>Descargar Musica</h2>
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

            <ButtonsPaginationBlog
                nextPageToken={nextPageToken}
                prevPageTokens={prevPageTokens}
                fetchPosts={fetchPosts}
                loading={loading}
            />
        </div>
    );
};
