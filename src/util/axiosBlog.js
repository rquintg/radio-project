import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_BLOG;
const BLOG_ID = process.env.REACT_APP_ID_BLOG;
const MAX_RESULTS = 4;

export const fetchBlogPosts = async (pageToken = null) => {
    let url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=${MAX_RESULTS}`;
    if (pageToken) url += `&pageToken=${pageToken}`;
    const res = await axios.get(url);

    // Ordenar por fecha de publicación descendente
    const items = (res.data.items || []).sort((a, b) => new Date(b.published) - new Date(a.published));
    return {
        items,
        nextPageToken: res.data.nextPageToken || null
    };
}


export const searchBlogPosts = async (query) => {
    let url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/search?key=${API_KEY}&q=${encodeURIComponent(query)}&maxResults=${MAX_RESULTS}`;
    const res = await axios.get(url);

    // Ordenar por fecha de publicación descendente
    const items = (res.data.items || []).sort((a, b) => new Date(b.published) - new Date(a.published));
    return {
        items,
        nextPageToken: res.data.nextPageToken || null
    };

}