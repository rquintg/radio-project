import { useState, useEffect } from "react";

export default function useCurrentTrack() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isLoadingTrack, setIsLoadingTrack] = useState(true);
  const [trackError, setTrackError] = useState(null);

  useEffect(() => {
    const fetchCurrentTrack = async () => {
      try {
        setIsLoadingTrack(true);
        // Asura Hosting proporciona un endpoint JSON con la información actual
        const response = await fetch(
          "https://a3.asurahosting.com/api/nowplaying/punk_medallo"
        );

        if (!response.ok) {
          console.error(`HTTP error! status: ${response.status}`);
          setTrackError(`Error HTTP: ${response.status}`);
          setCurrentTrack(null);
          setIsLoadingTrack(false);
          return;
        }

        const data = await response.json();

        if (data && data.now_playing) {
          const track = data.now_playing.song;
          setCurrentTrack({
            title: track.title || "Canción desconocida",
            artist: track.artist || "Artista desconocido",
          });
        }
        setTrackError(null);
      } catch (error) {
        console.error("Error fetching current track:", error);
        setTrackError(error.message);
        setCurrentTrack(null);
      } finally {
        setIsLoadingTrack(false);
      }
    };

    // Obtener la canción al montar
    fetchCurrentTrack();

    // Actualizar cada 5 segundos
    const interval = setInterval(fetchCurrentTrack, 10000);

    return () => clearInterval(interval);
  }, []);

  return { currentTrack, isLoadingTrack, trackError };
}


