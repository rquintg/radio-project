import styles from "./recentTrack.module.css";
import SpinnerLoader from "../util/spinnerLoader";

export default function RecentTrack() {
  return (
    <div className={styles.container}>
      <h6 className={styles.title}>Historial de Canciones</h6>
      <div className={styles.iframeWrapper}>
        <iframe
          src="https://lsdradiohostserver.com/public/punk_hc/history?theme=dark"
          frameBorder="0"
          allowtransparency="true"
          title="Historial de canciones"
          className={styles.historyFrame}
        />
      </div>
    </div>
  );
}
