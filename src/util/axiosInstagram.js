import axios from "axios";

const INSTAGRAM_BUSINESS_ACCOUNT_ID = process.env.REACT_APP_INSTAGRAM_BUSINESS_ACCOUNT_ID;
const ACCESS_TOKEN = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN;

export const fetchInstagramPhotos = async () => {
    if (!INSTAGRAM_BUSINESS_ACCOUNT_ID || !ACCESS_TOKEN) {
        throw new Error("Instagram configuration is missing (Business Account ID or Access Token).");
    }

    try {
        // Fetch media from Instagram Business Account
        const response = await axios.get(
            `https://graph.instagram.com/v24.0/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media`,
            {
                params: {
                    fields: "id,caption,media_type,media_url,permalink,timestamp",
                    access_token: ACCESS_TOKEN,
                    limit: 100, // Fetch more to ensure we get enough with photos
                },
            }
        );

        // Filter media that are images (not videos or carousels for simplicity)
        return response.data.data
            .filter((media) => {
                // Only include images and carousel posts
                return media.media_type === "IMAGE" || media.media_type === "CAROUSEL_ALBUM";
            })
            .map((media) => ({
                id: media.id,
                caption: media.caption || "",
                media_type: media.media_type,
                image_url: media.media_url,
                permalink: media.permalink,
                timestamp: media.timestamp,
                full_picture: media.media_url, // Normalizing field name to match Facebook structure
                permalink_url: media.permalink, // Normalizing field name
                message: media.caption, // Normalizing field name
            }));
    } catch (error) {
        console.error("Error fetching Instagram photos:", error);
        throw error;
    }
};

