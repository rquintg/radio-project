import { useState, useEffect } from "react";

export default function useCurrentTrack() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [nextTrack, setNextTrack] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://a3.asurahosting.com/api/nowplaying/punk_medallo"
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        // Extraer canción actual
        if (data?.now_playing?.song) {
          const current = data.now_playing.song;
          setCurrentTrack({
            title: current.title || "Canción desconocida",
            artist: current.artist || "Artista desconocido",
          });
        }

        // Extraer próxima canción
        if (data?.playing_next?.song) {
          const next = data.playing_next.song;
          setNextTrack({
            title: next.title || "Canción desconocida",
            artist: next.artist || "Artista desconocido",
          });
        }

        setError(null);
      } catch (err) {
        console.error("Error fetching tracks:", err);
        setError(err.message);
        setCurrentTrack(null);
        setNextTrack(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTracks();
    const interval = setInterval(fetchTracks, 10000000);

    return () => clearInterval(interval);
  }, []);

  return { currentTrack, nextTrack, isLoading, error };
}


