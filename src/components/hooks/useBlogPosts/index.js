import { useState, useEffect } from 'react';
import {fetchBlogPosts} from "../../../util/axiosBlog";

export default function useBlogPosts() {
    const [posts, setPosts] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [prevPageTokens, setPrevPageTokens] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = async (pageToken = null, isNext = true) => {
        setLoading(true);
        try {
            const { items, nextPageToken } = await fetchBlogPosts(pageToken);
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

    return {
        posts,
        nextPageToken,
        prevPageTokens,
        loading,
        fetchPosts
    };
}
