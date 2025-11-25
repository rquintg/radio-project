import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./facebookPhotos.module.css";

export default function FacebookPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const PAGE_ID = process.env.REACT_APP_FACEBOOK_PAGE_ID;
  const ACCESS_TOKEN = process.env.REACT_APP_FACEBOOK_ACCESS_TOKEN;

  useEffect(() => {
    const fetchPhotos = async () => {
      if (!PAGE_ID || !ACCESS_TOKEN) {
        setError(
          "Facebook configuration is missing (Page ID or Access Token)."
        );
        setLoading(false);
        return;
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
        const postsWithPhotos = response.data.data.filter((post) => {
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
            if (attachment.subattachments) return true;

            return false;
          }

          return false; // Skip if no attachment info to be safe
        });

        // Slice to get the desired number of items (e.g., 8)
        console.log(postsWithPhotos);

        setPhotos(postsWithPhotos.slice(0, 100));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching Facebook posts:", err);
        setError("Failed to load photos from Facebook.");
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [PAGE_ID, ACCESS_TOKEN]);

  if (loading) return <div className={styles.loading}>Cargando...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (photos.length === 0)
    return <div className={styles.loading}>No se encontraron fotos.</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Registro Fotográfico</h2>
      <div className={styles.grid}>
        {photos.map((photo) => (
          <div key={photo.id} className={styles.card}>
            <img
              src={photo.full_picture}
              alt={photo.message || "Facebook post"}
              className={styles.image}
              loading="lazy"
            />
            <a
              href={photo.permalink_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.overlay}
            >
              <span className={styles.viewButton}>Ver en Facebook</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
