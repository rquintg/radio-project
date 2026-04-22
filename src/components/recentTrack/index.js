import styles from "./recentTrack.module.css";
import SpinnerLoader from "../util/spinnerLoader";
import {useState } from "react";

export default function RecentTrack() {

    const [isLoading, setIsLoading]= useState(true);

    const handleLoad = () => {
        setIsLoading(false);
    };

  return (
    <div className={styles.container}>
      <h6 className={styles.title}>Historial de Canciones</h6>
      {isLoading && <SpinnerLoader />}
      <div className={styles.iframeWrapper}>
        <iframe
          src="https://a3.asurahosting.com/public/punk_medallo/history?theme=dark"
          frameBorder="0"
          allowtransparency="true"
          title="Historial de canciones"
          className={styles.historyFrame}
          onLoad={handleLoad}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer"
          sandbox="allow-same-origin allow-scripts"
        />
      </div>
    </div>
  );
}
