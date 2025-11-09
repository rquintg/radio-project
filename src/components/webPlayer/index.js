import { useEffect, useRef, useState } from "react";
import styles from "./webPlayer.module.css";

export default function WebPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isOnline, setIsOnline] = useState(true);

  const STREAM_URL = "https://lsdradiohostserver.com/listen/punk_hc/radio.mp3";

  // Vincular eventos del elemento <audio> para inferir estado del stream
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlaying = () => setIsOnline(true);
    const onCanPlay = () => setIsOnline(true);
    const onError = () => setIsOnline(false);

    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("canplay", onCanPlay);
    audio.addEventListener("error", onError);

    // Aplicar volumen inicial
    audio.volume = volume;

    return () => {
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("canplay", onCanPlay);
      audio.removeEventListener("error", onError);
    };
  }, [volume]);

  // Eventos de conectividad de la ventana (red del dispositivo)
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        // Garantizar que la fuente esté definida
        if (audio.src !== STREAM_URL) audio.src = STREAM_URL;
        await audio.play();
        setIsPlaying(true);
        setIsOnline(true);
      }
    } catch (e) {
      // No se pudo reproducir (posible bloqueo de autoplay o stream caído)
      setIsPlaying(false);
      setIsOnline(false);
    }
  };

  const handleVolume = (e) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  return (
    <div className={styles.playerContainer} role="region" aria-label="Reproductor de radio">
      <div className={styles.cont}>
        {/* Indicador de estado */}
        <div className={styles.status} aria-live="polite">
          <span className={isOnline ? styles.dotLive : styles.dotOffline} />
          <span className={isOnline ? styles.textLive : styles.textOffline}>
            {isOnline ? "EN VIVO" : "FUERA DE LÍNEA"}
          </span>
        </div>

        {/* Botón Play/Pausa */}
        <button
          type="button"
          className={styles.btn}
          onClick={togglePlay}
          aria-label={isPlaying ? "Pausar" : "Reproducir"}
          title={isPlaying ? "Pausar" : "Reproducir"}
        >
          {isPlaying ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
        </button>

          {/* Volumen (oculto en móvil muy pequeño vía CSS) */}
        <div className={styles.volume} aria-label="Control de volumen">
          <span className={styles.volIcon} aria-hidden>
              <i className="bi bi-volume-up-fill"></i>
          </span>
            <input
                className={styles.slider}
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolume}
            aria-valuemin={0}
            aria-valuemax={1}
            aria-valuenow={volume}
          />
        </div>

        {/* Elemento de audio oculto */}
        <audio ref={audioRef} preload="none" src={STREAM_URL} />
      </div>
    </div>
  );
}