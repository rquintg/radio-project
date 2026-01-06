import axios from "axios";

const PAGE_ID = process.env.REACT_APP_FACEBOOK_PAGE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_FACEBOOK_ACCESS_TOKEN;

export const fetchFacebookPhotos = async () => {
    if (!PAGE_ID || !ACCESS_TOKEN) {
        throw new Error("Facebook configuration is missing (Page ID or Access Token).");
    }

    try {
        // Fetch posts and filter for those that have a full_picture
        const response = await axios.get(
            `https://graph.facebook.com/v18.0/${PAGE_ID}/posts`,
            {
                params: {
                    fields:
                        "id,full_picture,permalink_url,message,created_time,attachments{media_type,type,subattachments}",
                    access_token: ACCESS_TOKEN,
                    limit: 100, // Fetch more to ensure we get enough with photos
                },
            }
        );

        // Filter posts that actually have a picture and are NOT external links/videos
        return response.data.data.filter((post) => {
            if (!post.full_picture) return false;

            // Check attachments to ensure it's a photo or album
            if (
                post.attachments &&
                post.attachments.data &&
                post.attachments.data.length > 0
            ) {
                const attachment = post.attachments.data[0];
                // Allow 'photo', 'album' types.
                // 'share' or 'link' usually indicates external content like YouTube
                if (
                    attachment.media_type === "photo" ||
                    attachment.type === "photo" ||
                    attachment.type === "album"
                ) {
                    return true;
                }
                // If it has subattachments (like an album), it's usually good
                return !!attachment.subattachments;
            }

            return false; // Skip if no attachment info to be safe
        });
    } catch (error) {
        console.error("Error fetching Facebook posts:", error);
        throw error;
    }
};
