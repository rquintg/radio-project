import { useState, useEffect } from "react";

export default function useCurrentTrack() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [nextTrack, setNextTrack] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        // Solo mostrar loading en la primera carga
        if (!hasInitialized) {
          setIsLoading(true);
        }

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

        // Marcar que se inicializó y desactivar loading
        if (!hasInitialized) {
          setHasInitialized(true);
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Error fetching tracks:", err);
        setError(err.message);

        // Solo limpiar si es la primera carga
        if (!hasInitialized) {
          setCurrentTrack(null);
          setNextTrack(null);
          setIsLoading(false);
          setHasInitialized(true);
        }
      }
    };

    fetchTracks();
    const interval = setInterval(fetchTracks, 10000);

    return () => clearInterval(interval);
  }, [hasInitialized]);

  return { currentTrack, nextTrack, isLoading, error };
}


