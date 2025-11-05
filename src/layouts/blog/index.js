import React, {useEffect, useState} from 'react';
import {fetchBlogPosts} from "../../util/css/axiosBlog";

import styles from './blog.module.css';


export default function Blog() {

    const [posts, setPosts] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [prevPageTokens, setPrevPageTokens] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = async (pageToken = null, isNext = true) => {
        setLoading(true);
        try {
            const {items, nextPageToken} = await fetchBlogPosts(pageToken);
            setPosts(items);
            setNextPageToken(nextPageToken);
            if (isNext && pageToken) {
                setPrevPageTokens((prev) => [...prev, pageToken]);
            } else if (!isNext) {
                setPrevPageTokens((prev) => prev.slice(0, -1));
            }
        } catch (err) {
            console.error('Error al obtener entradas:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
        // eslint-disable-next-line
    }, []);

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
        <div className={styles['blog-container']}>
            <h2 className={styles['blog-title']}>Entradas del blog</h2>
            {loading && <div style={{textAlign: 'center', margin: '20px'}}>
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>}
            <div className={styles['blog-grid']}>
                {posts.map((post) => (
                    <div key={post.id} className={styles['blog-post']}>
                        <h3 className={styles['blog-post-title']}>{post.title}</h3>
                        <div className={styles['blog-post-content']} dangerouslySetInnerHTML={{__html: post.content}}/>
                    </div>
                ))}
            </div>
            <div style={{display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px'}}>
                <button onClick={handlePrev} disabled={prevPageTokens.length === 0 || loading} style={{
                    padding: '8px 18px',
                    borderRadius: '6px',
                    border: 'none',
                    background: '#232323',
                    color: '#ff0055',
                    fontWeight: 'bold',
                    cursor: prevPageTokens.length === 0 || loading ? 'not-allowed' : 'pointer',
                    opacity: prevPageTokens.length === 0 || loading ? 0.5 : 1
                }}>Anterior
                </button>
                <button onClick={handleNext} disabled={!nextPageToken || loading} style={{
                    padding: '8px 18px',
                    borderRadius: '6px',
                    border: 'none',
                    background: '#232323',
                    color: '#ff0055',
                    fontWeight: 'bold',
                    cursor: !nextPageToken || loading ? 'not-allowed' : 'pointer',
                    opacity: !nextPageToken || loading ? 0.5 : 1
                }}>Siguiente
                </button>
            </div>
        </div>
    );
};
